import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Documentation';
import Markdown from '../../../components/Markdown';
import Video from '../../../components/Video';
import Code from '../../../components/Code';
import image from '../../../assets/images/quickstart/setup/final.png';

export default (props) => {
  return (
    <Template
      title="Setup"
      subtitle="Install and configure @lore/reducers."
    >
      <h2>
        1. Install @lore/reducers via npm
      </h2>
      <p>
        Add @lore/reducers to your package.json.
      </p>
      <Code text={`
      npm install --save @lore/reducers
      `}/>

      <h2>
        2. Create reducers.js config
      </h2>
      <p>
        Create another file inside <code>/config</code> called <code>reducers.js</code>. Paste
        in the following code:
      </p>

      <h3>
        config/reducers.js
      </h3>
      <Code text={`
      /**
       * Configuration file for reducers
       *
       * This file is where you define overrides for the default reducer behaviors.
       */
      
      import { getConfig } from '@lore/reducers';
      
      export default getConfig({
      
        /**
         * Blueprints are used to provide models with a default set of reducers for
         * storing data. If you want to modify the behavior of those reducers you
         * can provide your own implementation here.
         */
      
        // blueprints: {
        //   byCid: function() {...},
        //   byId: function() {...},
        //   find: function() {...}
        // },
      
        /**
         * Specify dependencies between child reducers, which will determine the
         * order they are called in, as well as what data is passed in through the
         * third 'options' argument:
         *
         * function someReducer(state, action, options) {
         *   // your reducer code...
         * }
         *
         * The \`options.nextState\` property will contain the results of the child
         * reducers you have declared a dependency on.
         *
         * The default dependency structure (based on the built-in blueprints) looks
         * like this:
         */
      
        // dependencies: {
        //   modelName: {
        //     byId: [],
        //     byCid: [],
        //     find: ['byId', 'byCid']
        //   }
        // }
      
        /**
         * Change what gets returned from the Redux store.
         *
         * This method is intended ONLY as a way to explore different solutions for addressing
         * immutability concerns that arise when components have a direct reference to
         * the data kept in the reducers.
         *
         * The default behavior in Redux is to provide components with a reference to the
         * store state returned from the reducers. This poses a problem when a component
         * tries to change that data, because it will modify the state of the store through
         * that reference.
         *
         * To address this issue, the top-level reducer will invoke this method right before
         * returning the next state, which gives you the ability to experiment with different
         * solutions for this problem.
         *
         * The default behavior is to return a copy of the store state, which will prevent any
         * component from being able to modify the "truth" kept in the reducers.
         *
         * Others solutions could be invoking \`Object.freeze(nextState)\` (which will throw an
         * error if a component tries to modify the store state) or converting the store state
         * to an Immutable object using \`Immutable.map(nextState)\` from Immutable.js.
         */
      
        // nextState: function(nextState) {
        //   return _.cloneDeep(nextState);
        // }
      
      })
      `}/>

      <p>
        This config file will allow you to modify the behavior of the default blueprints provided
        by <code>@lore/reducers</code>.
      </p>

      <h2>
        3. Create getReducers() function
      </h2>
      <p>
        Find the folder called <code>.lore</code> at the root of your project and create
        a file inside called <code>reducers.js</code>. Paste in the following code:
      </p>

      <h3>
        .lore/reducers.js
      </h3>
      <Code text={`
      import _ from 'lodash';
      import { compositeReducer } from '@lore/reducers';
      
      function isValidIndexReducer(folderName, reducer) {
        if (_.isFunction(reducer)) {
          return true;
        }
      
        throw new Error([
          \`Looks like you are trying to create a reducer called 'index' in a folder \`,
          \`called \${folderName} but the reducer is not a function. Reducers must be \`,
          \`functions with the signature 'function(state, action)'.\`
        ].join(''));
      }
      
      export function getReducers(config={}, modules={}) {
        const {
          reducers: {
            // blueprints: {
            //   find,
            //   byId,
            //   byCid
            // },
            blueprints: _blueprints,
            dependencies: _dependencies,
            nextState: _nextState
          }
        } = config;
      
        /*
         * Get the names of all models and user-defined reducers
         */
      
        const modelNames = _.keys(modules.models);
        const userReducers = modules.reducers;
      
      
        /*
         * Get reducer set for each model based on blueprints
         */
      
        const reducers = _.reduce(modelNames, function(result, modelName) {
          result[modelName] = {
            find: _blueprints.find(modelName),
            byId: _blueprints.byId(modelName),
            byCid: _blueprints.byCid(modelName)
          };
          return result;
        }, {});
      
      
        /*
         * If there are any reducers in src/reducers that match the name of one of
         * the models, use them to overwrite the default blueprints
         */
      
        _.intersection(_.keys(userReducers), modelNames).forEach(function(modelName) {
      
          /*
           * If reducer is a function, toss out the blueprints as this
           * function will be managing the reducer flow itself
           *
           * Example:
           *
           * /reducers
           *    |- foo.js => where foo exports a function with signature [function(state, action)]
           */
      
          if (_.isFunction(userReducers[modelName])) {
            reducers[modelName] = userReducers[modelName];
          }
      
          /*
           * If reducer is an object, use it to overwrite the blueprint
           * reducers like byId, byCid, and find
           *
           * Example:
           * /reducers
           *  |- foo.js     => where foo exports an object
           *  |- /foo       => where foo is a folder, with files inside matching the name
           *     |- byId.js    of one of the blueprint reducers (byId, byCid, find)
           */
      
          if (_.isPlainObject(userReducers[modelName])) {
            reducers[modelName] = _.assign(reducers[modelName], userReducers[modelName]);
          }
      
          /*
           * If reducer is a folder with an 'index' file, and that file exports
           * a function, use that function as the reducer
           *
           * Example:
           * /foo
           *   |- index.js => where index exports a function with signature [function(state, action)]
           */
      
          if (
            reducers[modelName].index &&
            isValidIndexReducer(modelName, reducers[modelName].index)
          ) {
            reducers[modelName] = reducers[modelName].index;
          }
      
        });
      
      
        /*
         * Iterate through the reducers, locate any that are still objects (which is most
         * likely a result of being created from blueprints) and convert them into a real
         * reducer, which is to say a function with the signature [function(state, action)]
         */
      
        _.mapValues(reducers, function(reducer, reducerName) {
          if (_.isFunction(reducer)) {
            return;
          }
      
          /*
           * Generate a set of reducer dependencies so we can figure out which order they should be
           * run in and whether the result from one reducer (like byCid) should be passed to another
           * reducer (like find).
           *
           * The dependencies are generated from defaults (matching blueprint expectations) and
           * overwritten by anything set in config/reducers under 'dependencies'
           */
      
          const dependencies = _.assign({
              byId: [],
              byCid: [],
              find: ['byId', 'byCid']
            },
            _dependencies[reducerName]
          );
      
          // Iterate through the child reducers and make sure there's an entry created for each of
          // them, and default to [] if none exists. This can happen in the scenario where an custom
          // child reducer was created that doesn't match one of the blueprints (byId, byCid, find)
      
          _.keys(reducer).forEach(function(childReducerName) {
            dependencies[childReducerName] = dependencies[childReducerName] || [];
          });
      
          /*
           * Create a single reducer function from the combination of the child reducers, their
           * interdependencies (the order they should run in), the model name (used to generate
           * the action names to listen for), and the nextState() function, which is optional, but
           * can be used to copy or transform the state before providing it to the application, as
           * a way to avoid giving the application a direct reference to the reducer's state
           */
      
          reducers[reducerName] = compositeReducer({
            reducers: reducer,
            dependencies: dependencies,
            modelName: reducerName,
            nextState: _nextState,
          });
        });
      
      
        /*
         * Finally, see if there are any user-defined reducers that don't match the name of
         * one of the models (which means no blueprints have been created) and add them to the
         * reducers object
         */
      
        _.difference(_.keys(userReducers), modelNames).forEach(function(reducerName) {
          const reducer = userReducers[reducerName];
      
          if (_.isFunction(reducer)) {
            reducers[reducerName] = reducer;
            return;
          }
      
          if (
            reducer.index &&
            isValidIndexReducer(reducerName, reducer.index)
          ) {
            reducers[reducerName] = reducer.index;
            return;
          }
      
          throw new Error([
            \`Looks like you are trying to create a composite reducer called \${reducerName} but did \`,
            \`not provide a reducer for the base of the Redux store. If you want to have your root reducer \`,
            \`inside a folder, please name it 'index', such as '/reducers/\${reducerName}/index.js'. If you \`,
            \`want to have it located under '/reducers', please take it out of the folder and call \`,
            \`it '/reducers/\${reducerName}.js'.\`
          ].join(''));
        });
      
      
        /*
         * Return the final set of reducers
         */
      
        return reducers;
      }
      `}/>

      <p>
        This code gives us a function called <code>getReducers</code>. We'll be providing this function
        with the config objects we created above, along with a list of all models in our
        project, where each model is named after one of the resources in the REST API.
      </p>
      <p>
        The function will then create and return an object containing 3 reducers for each model
        provided.
      </p>

    </Template>
  )
};
