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
      subtitle="Install and configure @lore/models."
    >
      <h2>
        1. Install @lore/models and related packages via npm
      </h2>
      <p>
        Add @lore/models, @lore/connections, @lore/connections-map, and @lore/backbone to your
        package.json. The main package is @lore/backbone. The others provide some helper functions
        that will simplify our code.
      </p>
      <Code text={`
      npm install --save @lore/models @lore/connections @lore/connections-map @lore/backbone
      `}/>

      <h2>
        2. Create connections.js config
      </h2>
      <p>
        Create a folder called <code>config</code> at the root of your project and create
        a file inside called <code>connections.js</code>. Paste in the following code:
      </p>

      <h3>
        config/connections.js
      </h3>
      <Code text={`
      /**
       * Configuration file for connections
       *
       * This file is where you define overrides for the default connection behaviors.
       */
      
      import { getConfig } from '@lore/connections';
      
      export default getConfig({
      
        /**
         * The set of connections, each representing a different API
         */
      
        default: {
      
          /**
           * The URL of the API server.
           *
           * If your API is behind server route like '/api', then make sure to include
           * that in url in the apiRoot (e.g. 'https://www.example.com/api')
           */
      
          apiRoot: 'http://localhost:1337',
      
          /**
           * Pluralization setting used by the framework when composing API endpoints.
           *
           * Model names in Lore are singular, but many APIs used a plural convention
           * when making requests. Use this setting to tell the framework whether it
           * should convert your model names to a plural form when making API calls.
           *
           * Here is an example of how this setting would affect the endpoints for
           * a model named 'book':
           *
           * pluralize | endpoint
           * ---------------------------
           *   true    |  /books
           *   false   |  /book
           */
      
          // pluralize: true,
      
          /**
           * Casing style used by the framework when composing API endpoints.
           *
           * Since models are camelCased in Lore, the framework assumed the server uses
           * camelCasing as well. For example, if you have a model called \`bookAuthor\`,
           * and pluralization is turned off, \`the framework will assume the endpoint is
           * located at '/bookAuthor'. If the endpoint is something else, like '/book_author'
           * you will need to tell the framework to modify its convention.
           *
           * casingStyle |  endpoint
           * ---------------------------
           *   snake     |  /book_author
           *   kebab     |  /book-author
           *   camel     |  /bookAuthor
           *   pascal    |  /BookAuthor
           */
      
          // casingStyle: 'camel',
      
          /**
           * Headers that should be applied to all network requests.
           *
           * This function will be called before every network request, and any
           * keys you provide will be added as a header in the network request.
           *
           * A common use would be sending an authorization token with each request:
           *
           * headers: function() {
           *   return {
           *     Authorization: 'JWT <token>'
           *   };
           * }
           */
      
          // headers: function() {
          //   return {};
          // }
      
        },
      
        /**
         * You can configure additional APIs by providing a unique key and defining
         * the relevant properties. The 'connectionMap' config will allow you to
         * specify which models belong to which API.
         */
      
        // v2: {
        //   apiRoot: 'https://api.example.com',
        //
        //   headers: function() {
        //     return {};
        //   }
        // }
      
      });
      `}/>

      <p>
        This file contains a set of connections, which each representing a different API server
        the application will be communicating with. You can specify the URL for each server
        as well as naming conventions and any headers that should be sent. The naming conventions,
        such as casing style and pluralization, will be used to guess what each endpoint should be
        called based on the name of the resource.
      </p>

      <h2>
        3. Create connectionsMap.js config
      </h2>
      <p>
        Create another file inside <code>/config</code> called <code>connectionsMap.js</code>. Paste
        in the following code:
      </p>

      <h3>
        config/connectionsMap.js
      </h3>
      <Code text={`
      /**
       * Configuration file for connectionMaps
       *
       * This file is where you define overrides for the default connectionMap behaviors.
       */
      
      import { getConfig } from '@lore/connection-map';
      
      export default getConfig({
      
        /**
         * The default API connection that models should use if they have no explicit mapping.
         */
      
        // defaultConnection: 'default'
      
        /**
         * If your application interacts with multiple APIs, create a connection for each
         * API and then define which models are associated with each connection here.
         *
         * Here is an example for an application with a versioned API (v1 and v2):
         *
         * {
         *   v1: [
         *     'currentUser',
         *     'author'
         *   ],
         *   v2: [
         *     'book',
         *     'publisher'
         *   ]
         * }
         */
      
        // connectionMap: {
        //   default: []
        // }
      
      });
      `}/>

      <p>
        This file help determines which connection should be used for each model. We'll do this
        by checking if the model name is listed in connectionsMap. If it is, we'll use that
        connection information. If it isn't, we'll use whichever connection is set as the default.
      </p>

      <h2>
        4. Create models.js config
      </h2>
      <p>
        Create another file inside <code>/config</code> called <code>models.js</code>. Paste
        in the following code:
      </p>

      <h3>
        config/models.js
      </h3>
      <Code text={`
      /**
       * Configuration file for models
       *
       * This file is where you define overrides for the default model behaviors.
       * Settings here apply to all models, and some are inherited by collections.
       */
      
      import { getConfig } from '@lore/models';
      
      export default getConfig({
      
        /**
         * Define properties that should apply to all models here.
         * You can override all of these methods on a per-model basis.
         */
      
        default: {
      
          properties: {
      
            /**
             * Use this function to control how the client id (cid) of each model
             * is generated.
             *
             * By default all models have a cid that looks like 'c1', 'c2', etc.
             * This cid is required to support optimistic updates against a REST API,
             * and the format is intentionally concise in order to make it easy for
             * developers to read and remember (mostly for debugging purposes).
             *
             * When your application integrates support for WebSockets though, this
             * cid format is no longer sufficient, as supporting optimistic updates
             * requires sending the cid to the API server, which requires it to be
             * globally unique.
             *
             * This function exists so that you can modify the unique id and convert
             * it to a UUID when required. A good library to do that can be found here:
             * https://github.com/kelektiv/node-uuid
             */
      
            // generateCid: function() {
            //   return _.uniqueId('c');
            // },
      
            /**
             * Use this function to transform the server response before using it
             * in the application (such as adding, removing or modifying properties)
             */
      
            // parse: function(response) {
            //   return response;
            // }
      
          }
      
        },
      
        /**
         * You can configure additional APIs by providing a unique key and defining
         * the relevant properties. The 'connectionMap' config will allow you to
         * specify which models belong to which API.
         */
      
        // v2: {
        //   properties: {
        //     generateCid: function() {
        //       return _.uniqueId('c');
        //     },
        //     parse: function(response) {
        //       return response;
        //     }
        //   }
        // }
      
      })
      `}/>

      <p>
        It's unlikely you'll end up using this file, but it exists in the event you need to modify
        the behavior of all Models that use a specific connection. It's more likely you'll need
        to modify the behavior of specific Models, and you can do that by modifying the properties
        for that Model directly.
      </p>

      <h2>
        5. Create getModels() function
      </h2>
      <p>
        Create a folder called <code>.lore</code> at the root of your project and create
        a file inside called <code>models.js</code>. Paste in the following code:
      </p>

      <h3>
        .lore/models.js
      </h3>
      <Code text={`
      import _ from 'lodash';
      import { Model } from '@lore/backbone';
      import { getConnectionName } from '@lore/connection-map';
      import { getUrlRoot } from '@lore/models';
      
      /*
       * Generate a Model for each module definition
       */
      
      export function getModels(config={}, modules={}) {
        const {
          connections: connections,
          connectionMap: {
            connectionMap,
            defaultConnection
          },
          models: models
        }  = config;
      
        return _.mapValues(modules.models, function(module, moduleName) {
      
          /**
           * Set the model name to the module (file) name by default
           */
      
          const modelName = moduleName;
      
          /**
           * Get the name of the connection this model should use
           */
      
          const connectionName = getConnectionName(modelName, {
            connectionMap,
            defaultConnection
          });
      
          /**
           * Get the connection settings this model should use
           */
      
          const connection = connections[connectionName];
      
          /**
           * Get the models config for the given connection
           */
      
          const modelsConfig = models[connectionName] || {};
      
          /**
           * Combine configs for the connection, models, and module definition to
           * get final settings apiRoot, pluralization, casing style, and endpoint
           */
      
          const combinedConfig = _.merge({}, connection, modelsConfig, module);
      
          /**
           * Generate urlRoot from conventions and default headers to value in connection
           */
      
          const conventions = {
            properties: {
              urlRoot: getUrlRoot(modelName, _.pick(combinedConfig, [
                'apiRoot',
                'pluralize',
                'casingStyle',
                'endpoint'
              ])),
              headers: connection.headers
            }
          };
      
          /*
           * Build the final set of properties for the model. Properties in src/models
           * take priority, following by config/models, and then properties generated
           * from conventions
           */
      
          const properties = _.defaultsDeep({},
            module.properties,
            modelsConfig.properties,
            conventions.properties
          );
      
          return Model.extend(properties);
        });
      }
      `}/>

      <p>
        This code gives us a function called <code>getModels</code>. We'll be providing this function
        with a the config objects we created above, along with a list of all models in our project, where
        each model is named after one of the resources in the REST API.
      </p>
      <p>
        The function will them create and return a series of Models, each configured for a different
        endpoint using the rules below:
      </p>

      <ul className="list-decimal pl-8">
        <li className="mb-2">
          We'll use the connectionsMap to figure out what connection to use based on the name of
          the model.
        </li>
        <li className="mb-2">
          Using the properties for that connection, we'll take a guess at name and location of
          the URL for that model.
        </li>
        <li className="mb-2">
          We'll then generate the properties for the final Model by combining the properties
          created by conventions (like the URL of the endpoint), then overriding those with any properties
          provided inside the model.js config file, and then overriding those with any properties
          specified inside that specific model, such as <code>src/models/user.js</code>.
        </li>
      </ul>

    </Template>
  )
};
