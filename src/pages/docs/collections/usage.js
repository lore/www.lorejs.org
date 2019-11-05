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
      subtitle="Generate a set of Collections."
    >
      <h2>
        1. Follow usage process for Models
      </h2>
      <p>
        Navigate to the Models section and follow the following steps in Usage:
      </p>
      <ul className="list-decimal pl-8">
        <li className="mb-2">
          Generate a set of models in /models.
        </li>
        <li className="mb-2">
          Adding config scripts for connections.js, connectionsMap.js, and models.js.
        </li>
        <li className="mb-2">
          Create the function <code>getModels()</code> in <code>.lore/models.js</code>.
        </li>
      </ul>

      <h2>
        2. Generate a set of collections
      </h2>
      <p>
        Create a folder in your project called <code>src/collections</code>. This folder will contain a
        set of files referred to as "collections", where the name of each file corresponds to the name
        of a resource you want to consume from a REST API and use in your application.
      </p>
      <p>
        As example, if you were a consuming a "post" resource from an API located
        at <code>https://api.example.com/posts</code>, you would create a file called <code>post.js</code>.
      </p>
      <p>
        For each collection you create, paste in the following code, which exposes the common default Collection
        properties that you may want to override. If you'd prefer, you can export an empty object, but
        listing the common properties provides a better developer experience.
      </p>
      <p>
        It's important to restate that these files are OPTIONAL. Unless you're changing the behavior of a
        specific collection, you don't need to include them at all, as long as there's a model in /models
        with the name of the resource you need to fetch.
      </p>

      <h3>src/collections/template.js</h3>
      <Code text={`
      export default {
      
        properties: {
      
          /**
           * Override the initialize method if you need to save data for use
           * in other functions. This is especially useful if you have a nested
           * URL for an API endpoint, like /authors/:userId/books. In that case,
           * you can save the author here and refer to it when creating the URL
           * in the url() method.
           */
      
          // initialize: function(models, options) {
          //   return;
          // },
      
          /**
           * Override the url if your API endpoint does not match the default
           * conventions. For example, given a model named 'bookAuthor', and assuming
           * an apiRoot of 'http://localhost:1337' with pluralize set to true, the
           * endpoint for fetching the models is assumed to be 'http://localhost:1337/bookAuthors'
           * If this endpoint is on a different server (such as http://localhost:3001) or the
           * endpoint is named something different (such as book_authors or books/:id/authors)
           * you will need to set that here; the url can be either a string or a function
           */
      
          // url: function() {
          //   return 'https://api.example.com/endpoint'
          // },
      
          /**
           * Override the parse method if you need to save metadata for the collection
           * or extract the data for the resources from a nested property (a common
           * occurrence when interacting with APIs that support pagination).
           */
      
          // parse: function(response) {
          //   this.meta = response.meta;
          //   return response.data;
          // },
      
          /**
           * Override the sync method if you need to control the AJAX communication. If you
           * override this method the library will make no AJAX requests for this collection.
           * Use of 'sync' refers to sync method provided by the 'lore-models' package,
           * i.e. import { sync } from 'lore-models'
           */
      
          // sync: function() {
          //   return sync.apply(this, arguments);
          // }
      
        }
      
      }
      `}/>

      <h2>
        3. Invoke getCollections()
      </h2>
      <p>
        Locate the entry point of your project and import the <code>getCollections</code> function
        you created in <code>.lore/collections</code>. Then invoke using the example code below.
      </p>

      <h3>index.js</h3>
      <Code text={`
      /*
       * Modules
       *
       * Import the config files we created during setup.
       */
      
      const config = {
        collections: require('./config/collections.js').default,
        connections: require('./config/connections.js').default,
        connectionsMap: require('./config/connectionsMap.js').default,
        models: require('./config/models.js').default,    
      };
      
      /*
       * Modules
       *
       * Import any models or collections you created. For this example we have two models; tweet and user.
       */
       
      const modules = {
        collections: {
          // no custom collections
        },
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
      
      /*
       * Collections
       *
       * An AJAX abstraction that reduces the boilerplate associated with searching,
       * filtering, and paginating resources in a REST API.
       *
       * These are instances of Collection from @lore/backbone.
       */
      
      import { getCollections } from '../../.lore/collections';
      
      const collections = getCollections(config, { models }, {
        models: modules.models,
        collections: modules.collections
      });
      `}/>

      <p>
        With this code we can now access Collections from the collections object like this:
      </p>

      <Code text={`
      const Tweets = collections.tweet;
      
      const tweets = new Tweets();
      
      tweets.fetch({
        data: {
          userId: 1
        }
      })
      `}/>

    </Template>
  )
};
