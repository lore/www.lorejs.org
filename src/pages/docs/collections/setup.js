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
      subtitle="Install and configure @lore/collections."
    >
      <h2>
        1. Follow setup process for Models
      </h2>
      <p>
        Navigate to the Models section and follow all the steps in Setup. This includes:
      </p>
      <ul className="list-decimal pl-8">
        <li className="mb-2">
          Installing @lore/models, @lore/connections, @lore/connections-map, and @lore/backbone.
        </li>
        <li className="mb-2">
          Adding config scripts for connections.js, connectionsMap.js, and models.js.
        </li>
        <li className="mb-2">
          Create the function <code>getModels()</code> in <code>.lore/models.js</code>.
        </li>
      </ul>

      <h2>
        2. Create collections.js config
      </h2>
      <p>
        Create another file inside <code>/config</code> called <code>collections.js</code>. Paste
        in the following code:
      </p>

      <h3>
        config/collections.js
      </h3>
      <Code text={`
      /**
       * Configuration file for collections
       *
       * This file is where you define overrides for the default collection behaviors.
       */
      
      import { getConfig } from '@lore/collections';
      
      export default getConfig({
      
        /**
         * Define properties that should apply to all collections here.
         * You can override all of these methods on a per-collection basis.
         */
      
        default: {
      
          properties: {
      
            /**
             * Use this function to transform the server response before using it
             * in the application (such as adding, removing or modifying properties)
             *
             * This method only gets called when making a request to a collection endpoint
             * like '/books'. Once it completes, each resource in the response will
             * automatically be processed by the parse method of the corresponding model.
             */
      
            // parse: function(response) {
            //   return response;
            // }
      
          }
      
        },
      
        /**
         * You can configure additional APIs by providing a unique key and defining
         * the relevant properties. The 'connectionMap' config will allow you to
         * specify which collections belong to which API.
         */
      
        // v2: {
        //   properties: {
        //     parse: function(response) {
        //       return response;
        //     }
        //   }
        // }
      
      })
      `}/>

      <p>
        While some REST APIs will return an array of resources, it's more common for them to wrap the
        array in a metadata object that includes pagination information, and embed the array inside
        a field in that object.
      </p>
      <p>
        This file will allow you to modify the behavior of all Collections for a given connection,
        including telling them how to parse the server response to extract the array of resources.
      </p>

      <h2>
        3. Create getCollections() function
      </h2>
      <p>
        Find the folder called <code>.lore</code> at the root of your project and create
        a file inside called <code>collections.js</code>. Paste in the following code:
      </p>

      <h3>
        .lore/collections.js
      </h3>
      <Code text={`
      import _ from 'lodash';
      import { Collection } from '@lore/backbone';
      import { getUrlRoot } from '@lore/models';
      import { getConnectionName } from '@lore/connection-map';
      
      /*
       * Generate a Collection for each module definition
       */
      
      export function getCollections(config={}, resources={}, modules={}) {
        const {
          connections: connections,
          connectionMap: {
            connectionMap,
            defaultConnection
          },
          collections: collections,
          models: models
        }  = config;
      
        const { models: Models } = resources;
      
        /*
         * Combine src/models and src/collections to obtain the full set of collections,
         * which derive their name and default behavior from the list of models.
         *
         */
      
        const _modules = _.assign({},
          _.reduce(modules.models, function(result, value, key) {
            result[key] = _.omit(value, ['properties']);
            return result;
          }, {}),
          modules.collections
        );
      
        return _.mapValues(_modules, function(module, moduleName) {
      
          /**
           * Set the collection name to the module (file) name by default
           */
      
          const collectionName = moduleName;
      
          /**
           * Get the name of the connection this model should use
           */
      
          const connectionName = getConnectionName(collectionName, {
            connectionMap,
            defaultConnection
          });
      
          /**
           * Get the connection settings this model should use
           */
      
          const connection = connections[connectionName];
      
          /**
           * Combine config/collections and config/models for the given
           * connection (excluding properties in config/models) to get
           * the final configuration
           */
      
          const collectionsConfig = collections[connectionName] || {};
          const modelsConfig = models[connectionName] || {};
      
          const config = _.defaultsDeep({},
            collectionsConfig,
            _.omit(modelsConfig, 'properties')
          );
      
          /**
           * Combine configs for the connection, models, and module definition to
           * get final settings apiRoot, pluralization, casing style, and endpoint
           */
      
          const combinedConfig = _.merge({}, connection, config, module);
      
          /**
           * Generate urlRoot from conventions and default headers to value in
           * connection (or model definition if provided)
           */
      
          const conventions = {
            properties: {
              url: getUrlRoot(collectionName, _.pick(combinedConfig, [
                'apiRoot',
                'pluralize',
                'casingStyle',
                'endpoint'
              ])),
              headers: _.get(modules.models[collectionName], 'properties.headers') || connection.headers
            }
          };
      
          /*
           * Build the final set of properties for the model. Properties in src/collections
           * take priority, following by config/collections, and then properties generated
           * from conventions
           */
      
          const properties = _.defaultsDeep({},
            module.properties,
            collectionsConfig.properties,
            conventions.properties
          );
      
          /*
           * If a model hasn't already been provided for the collection, and one with that
           * name currently exists, set the collection's model to that one
           */
      
          const model = Models[collectionName];
          if (!properties.model && model) {
            properties.model = model;
          }
      
          return Collection.extend(properties);
        });
      }
      `}/>

      <p>
        This code gives us a function called <code>getCollections</code>. We'll be providing this function
        with the config objects we created above, along with a list of all models in our project, where
        each model is named after one of the resources in the REST API. We'll also be providing it
        with a list of a collections in our project, though most of the time you shouldn't need to
        create any. This function will automatically create a collection for each model, so the only
        reason to create collections in /collections is if one of the collections has unique behavior
        and you need to override it's configuration. In that scenario, you could create a collection
        in /collections named after that resource, and use it to configure that unique behavior.
      </p>
      <p>
        The function will them create and return a series of Collections, each configured for a different
        endpoint using the rules below (very similar to Models):
      </p>

      <ul className="list-decimal pl-8">
        <li className="mb-2">
          We'll use the connectionsMap to figure out what connection to use based on the name of
          the model.
        </li>
        <li className="mb-2">
          Using the properties for that connection, we'll take a guess at name and location of
          the URL for that collection.
        </li>
        <li className="mb-2">
          We'll then generate the properties for the final Collection by combining the properties
          created by conventions (like the URL of the endpoint), then overriding those with any properties
          provided inside the collection.js config file, and then overriding those with any properties
          specified inside that specific collection, such as <code>src/collections/user.js</code>.
        </li>
        <li className="mb-2">
          Finally we'll tell the Collection which Model it should be using to parse each resource in
          the list.
        </li>
      </ul>

    </Template>
  )
};
