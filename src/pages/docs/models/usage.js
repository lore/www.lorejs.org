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
      title="Usage"
      subtitle="Generate a set of Models."
    >
      <h2>
        1. Generate a set of models
      </h2>
      <p>
        Create a folder in your project called <code>src/models</code>. This folder will contain a
        set of files referred to as "models", where the name of each file corresponds to the name
        of a resource you want to consume from a REST API and use in your application.
      </p>
      <p>
        As example, if you were a consuming a "post" resource from an API located
        at <code>https://api.example.com/posts</code>, you would create a file called <code>post.js</code>.
      </p>
      <p>
        For each model you create, paste in the following code, which exposes the common default Model
        properties that you may want to override. If you'd prefer, you can export an empty object, but
        listing the common properties provides a better developer experience.
      </p>

      <h3>src/models/template.js</h3>
      <Code text={`
      export default {
      
        properties: {
      
          /**
           * Override the idAttribute if the primary key in the resource is named
           * anything other than 'id'. Doing so will allow the other methods to
           * behave as expected, such as composing the expected url for CRUD
           * operations and being able to retrieve the primary key by 'model.id'
           */
      
          // idAttribute: 'id'
      
          /**
           * Override the initialize method if you need to save data for use
           * in other functions. This is especially useful if you have a nested
           * URL for an API endpoint, like /authors/:userId/books. In that case,
           * you can save the author here and refer to it when creating the URL
           * in the url() or urlRoot() method.
           */
      
          // initialize: function(attributes, options) {
          //   return;
          // },
      
          /**
           * Override the urlRoot if your API endpoint does not match the default
           * conventions. For example, given a model named 'bookAuthor', and assuming
           * an apiRoot of 'http://localhost:1337' with pluralize set to true, the
           * endpoint for creating a model is assumed to be 'http://localhost:1337/bookAuthors'
           * If this model is on a different server (such as http://localhost:3001) or the
           * endpoint is named something different (such as book_authors or books/:id/authors)
           * you will need to set that here; urlRoot can be either a string or a function
           */
      
          // urlRoot: function() {
          //   return 'https://api.example.com/endpoint'
          // },
      
          /**
           * Override the url method if you need complete control over the final URL
           * endpoint. This is especially useful when you have an endpoint like /user
           * or /profile that returns a single resource with information about the current
           * user and an id is not required. You'll also need to override this method if
           * the route doesn't use the primary key of the resource.
           */
      
          // url: function() {
          //   return 'https://api.example.com/unconventional/endpoint/123'
          // },
      
          /**
           * Override the parse method if you need to modify data before using
           * it in the application, such as converting timestamps or adding
           * properties to absorb breaking API changes.
           */
      
          // parse: function(response, options) {
          //   return response;
          // },
      
          /**
           * Override the sync method if you need to modify data before sending
           * it to the server.
           *
           * If you override this method the library will make no AJAX requests
           * for this model, so you'll need to make sure you implement the AJAX
           * call yourself or make a call to sync.apply(this, arguments).
           *
           * Use of 'sync' refers to sync method provided by the '@lore/backbone'
           * package, i.e. import { sync } from '@lore/backbone'
           */
      
          // sync: function() {
          //   return sync.apply(this, arguments);
          // }
      
        }
      
      }
      `}/>

      <h2>
        2. Invoke getModels()
      </h2>
      <p>
        Locate the entry point of your project and import the <code>getModels</code> function
        you created in <code>.lore/models</code>. Then invoke using the example code below.
      </p>

      <h3>index.js</h3>
      <Code text={`
      /*
       * Config
       *
       * Import the config files we created during setup.
       */
      
      const config = {
        connections: require('./config/connections.js').default,
        connectionsMap: require('./config/connectionsMap.js').default,
        models: require('./config/models.js').default,    
      };
      
      /*
       * Modules
       *
       * Import any models you created. For this example we have two models; tweet and user.
       */
       
      const modules = {
        models: {
          tweet: require('./src/models/tweet.js').default,
          user: require('./src/models/tweet.js').default
        }
      };
      
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
      const Tweet = models.tweet;
      
      const tweet = new Tweet({
        text: 'My first tweet'
      });
      
      tweet.save()
      `}/>

    </Template>
  )
};
