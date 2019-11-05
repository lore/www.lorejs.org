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
      subtitle="Install and configure @lore/actions."
    >
      <h2>
        1. Follow setup processes for Collections and Models
      </h2>
      <p>
        Navigate to the Models section and follow all the steps in Setup. Then navigate to the
        Collections section and follow all the steps in that Setup as well. This includes:
      </p>
      <ul className="list-decimal pl-8">
        <li className="mb-2">
          Installing @lore/collections, @lore/models, @lore/connections, @lore/connections-map, and @lore/backbone.
        </li>
        <li className="mb-2">
          Adding config scripts for collections.js, connections.js, connectionsMap.js, and models.js.
        </li>
        <li className="mb-2">
          Creating the function <code>getModels()</code> in <code>.lore/models.js</code>,
          and <code>getCollections()</code> in <code>.lore/collections.js</code>.
        </li>
      </ul>

      <h2>
        2. Create actions.js config
      </h2>
      <p>
        Create another file inside <code>/config</code> called <code>actions.js</code>. Paste
        in the following code:
      </p>

      <h3>
        config/actions.js
      </h3>
      <Code text={`
      /**
       * Configuration file for actions
       *
       * This file is where you define overrides for the default action behaviors.
       */
      
      import { getConfig } from '@lore/actions';
      
      export default getConfig({
      
        /**
         * Specify whether models should be normalized.
         */
      
        // normalize: true,
      
        /**
         * Blueprints are used to provide models with a default set of actions for
         * interacting with a REST API. If you want to modify the behavior of those
         * actions you can provide your own implementation here.
         */
      
        // blueprints: {
        //   create: function() {...},
        //   destroy: function() {...},
        //   find: function() {...},
        //   get: function() {...},
        //   update: function() {...},
        // },
      
        /**
         * Determines whether the client-side id (the cid attribute in a model)
         * is sent to the server when creating data. This is not necessary when
         * interacting with REST APIs as the actions can associate the associate
         * the request and response, but when performing optimistic updates using
         * WebSockets it is necessary to send a client-generated ID to the server
         * in order to associate the data created on the client side with the data
         * broadcasted by the server.
         */
      
        // addCidToBody: false,
      
        /**
         * This field let's you change the name of the cid field sent to the server
         * when performing optimistic updates through WebSockets. By default the
         * property send to the server is called \`cid\`, matching the name of the attribute
         * on the client-side, but you can change it if you need it to match the API.
         */
      
        // cidBodyAttributeName: 'cid'
      
      })
      `}/>

      <p>
        This config file will allow you to modify the behavior of the default blueprints provided
        by <code>@lore/actions</code>.
      </p>

      <h2>
        3. Create getActions() function
      </h2>
      <p>
        Find the folder called <code>.lore</code> at the root of your project and create
        a file inside called <code>actions.js</code>. Paste in the following code:
      </p>

      <h3>
        .lore/actions.js
      </h3>
      <Code text={`
      import _ from 'lodash';
      import { getNormalizer } from '@lore/normalize';
      
      export function getActions(config={}, resources={}, modules={}) {
        const {
          actions: {
            blueprints: _blueprints,
            normalize: _normalize,
            addCidToBody: _addCidToBody,
            cidBodyAttributeName: _cidBodyAttributeName
          }
        } = config;
      
        const { models, collections } = resources;
      
        /*
         * Generate default set of actions for all models using blueprints
         *
         * Note that this only creates actions for files in /collections
         * that have a corresponding model in /models
         */
      
        const actions = _.mapValues(models, function(Model, modelName) {
          const Collection = collections[modelName];
      
          const normalizer = getNormalizer(modelName, {
            models: models,
            collections: collections,
            normalize: _normalize,
            attributes: modules.models[modelName].attributes
          });
      
          return {
            create: _blueprints.create(modelName, Model, {
              addCidToBody: _addCidToBody,
              cidBodyAttributeName: _cidBodyAttributeName,
              normalizer
            }),
            destroy: _blueprints.destroy(modelName, Model, {
              normalizer
            }),
            get: _blueprints.get(modelName, Model, {
              normalizer
            }),
            find: _blueprints.find(modelName, Collection, {
              normalizer
            }),
            refetch: _blueprints.refetch(modelName, Collection, {
              normalizer
            }),
            update: _blueprints.update(modelName, Model, {
              normalizer
            })
          };
        });
      
        /*
         * Include any custom actions defined in src/actions and, when
         * the name matches one of the blueprints, use the custom
         * implementation instead
         */
      
        return _.defaultsDeep({}, modules.actions, actions);
      }
      `}/>

      <p>
        This code gives us a function called <code>getActions</code>. We'll be providing this function
        with the config objects we created above, along with a list of all models and collections in our
        project, where each model is named after one of the resources in the REST API.
      </p>
      <p>
        The function will then create and return an object contained 5 action creators for each model
        provided. The action creators are all configured to use the appropriate Model or Collection
        based on their function.
      </p>

    </Template>
  )
};
