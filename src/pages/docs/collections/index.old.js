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
      title="Collections"
      subtitle="Simplify REST API communication for retrieving lists of resources."
    >
      <h2>
        Purpose
      </h2>
      <p>
        Used for retrieving a list of resources from a REST API.
      </p>
      <p>
        Lore is primarily constructed around the idea of communicating with a REST API server. To support
        this, we're going to use the <code>Collection</code> concept from the <code>@lore/backbone</code> library,
        which was heavily based on the implementation from <code>Backbone</code> itself (and why the name has not
        been changed). This will provide us with a simple way of retrieving collections of resources from an API
        endpoint (such as when filtering or querying for data).
      </p>

      <h2>
        Concept
      </h2>
      <p>
        Pretend you have a REST API that allows you to find posts. This API has the following endpoint:
      </p>

      <Code text={`
      GET    /posts
      `}/>

      <p>
        We can use a Collection to interact with this API like thus:
      </p>

      <Code text={`
      import { Model } from '@lore/backbone';
      
      const Post = Model.extend({
        urlRoot: 'https://api.example.com/posts'
      });
      
      const post = new Post({
        title: 'My First Post'
      });
      
      post.save();
      `}/>

      <p>
        Because the post we created doesn't have an ID, the Model assumes we want to create it, and
        converts the save() call into a POST request to the urlRoot. If we wanted to delete a specific
        post, we could do it like this:
      </p>

      <Code text={`
      const post = new Post({
        id: 1
      });
      
      post.destroy();
      `}/>

      <p>
        This time we provided an ID and called destroy(), which will be converted into a DELETE request
        to <code>/posts/1</code>.
      </p>

      <h2>
        Justification
      </h2>
      <p>
        It isn't very difficult to write the code above, so what we're about to discuss may seem like a bit
        excessive and confusing. So let's chat a bit about why we're doing it.
      </p>
      <p>
        We want to create a consistent interface for our application, without having to worry about which
        API we're communicating with, or what the conventions of that API are, such as snake_case vs camelCase,
        _id vs id vs username, pagination data, etc. A lot of the properties are going to be consistent across
        all API endpoints, so we don't want to duplicate that code across dozens of files.
      </p>
      <p>
        So instead we're going to create some configuration files that extract the common properties, and also
        account for communicating with multiple APIs servers.
      </p>

      <h3>
        Justification: Connections
      </h3>
      <p>
        The first thing we'll set up is a config around something called "connections". We're going to use
        this to represent a connection to a specific API server, and it will store information such as
        the URL of the server, pluralization strategy, casing style, and any headers we need to send. These
        are properties that will typically apply to EVERY endpoint attached to that API.
      </p>

      <Code text={`
      /**
       * Configuration file for collections
       *
       * This file is where you define overrides for the default collection behaviors.
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

      <h3>
        Justification: Connection Map
      </h3>
      <p>
        With our connections created, we want a way to easily associate which models will be associated
        with each API. While some applications may only have a single API they interact with, it's not
        uncommon for applications to interact with multiple APIs, especially when once the API starts
        undergoing versioning, as you may need to interact with both the v1 and v2 APIs.
      </p>
      <p>
        This next config file will allow us to specify a default API, the one ALL models should be
        associated with unless otherwise stated. And for the models that are NOT part of that API,
        we can provide their names in an array next to the API they should be associated with.
      </p>

      <Code text={`
      /**
       * Configuration file for collections
       *
       * This file is where you define overrides for the default collection behaviors.
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

      <h2>
        Setup
      </h2>
      <p>
        With those config files in place, create a <code>./lore/models.js</code> file and add this code.
      </p>

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
        This will provide us with a <code>getModels()</code> function that will return a set of
        Models associated with each endpoint.
      </p>

      <h2>
        Usage
      </h2>
      <p>
        Assuming a set of models...
      </p>

      <Code type="sh" text={`
      /src
       |-- /models
            |-- post.js
            |-- user.js
      `} />

      <p>
        Convert them to Models like this...
      </p>

      <Code text={`
      import { getModuleFromContext, buildObjectFromContext } from '@lore/utils';
      
      const modules = {
        // Import all the *.js files in the root of  /models
        models: buildObjectFromContext(require.context('./src/models', false, /\\.js$/)),
      };
      
      
      /*
       * Config
       *
       * Construct the final project config by combining the default/base config,
       * the environment specific overrides, and any local overrides defined in
       * config/local.js.
       */
      
      import { getConfig } from './.lore/config';
      
      const config = getConfig(modules.config);
      
      
      /*
       * Models
       *
       * An AJAX abstraction that reduces the boilerplate associated with creating,
       * retrieving, updating, and deleting a single resource in a REST API.
       *
       * These are instances of Model from @lore/backbone.
       */
      
      import { getModels } from './.lore/models';
      
      const models = getModels(config, {
        models: modules.models
      });
      `}/>

      <p>
        With this code we can now access Models from the models object like this:
      </p>

      <Code text={`
      const Post = models.post;
      
      const post = new Post({
        title: 'My First Post'
      });
      
      post.save()
      `}/>

      <p>
        While the code looks similar to what we started with, this Post is now configured to communicate
        with the desired API, send the proper headers, parse the response, and adapt to any casing
        conventions the server has (such as /userPosts vs /user_posts vs /user-posts).
      </p>

    </Template>
  )
};
