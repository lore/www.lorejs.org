import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Anatomy';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        config/reducers.js
      </h1>
      <p>
        This file is connected to the <code>lore-hook-reducers</code> hook and overrides the default reducer behaviors.
      </p>
      <p>
        You can learn more about the configuration options <Link to="/hooks/lore-hook-reducers/">here</Link>.
      </p>

      <h2>
        Default Config
      </h2>
      <p>
        The default config is shown below.
      </p>
      <Markdown text={`
      /**
       * Configuration file for reducers
       *
       * This file is where you define overrides for the default reducer behaviors.
       */

      export default {

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

      }
      `}/>
    </Template>
  )
};
