import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Collections';
import Markdown from '../../components/Markdown';
import CodeTabs from '../../components/CodeTabs';
import CodeTab from '../../components/CodeTab';
import QuickstartBranch from '../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        Concept
      </h1>
      <p>
        Collections represent an API endpoint for a collection of resources you need to interact with, like
        <code>https://myapp.com/api/books</code>. This is the endpoint that gets used when fetching a collection of
        resources, or when querying and endpoint or creating a new resource.
      </p>

      <p>
        This file represents a configuration that ultimately gets passed to a Collection instance of
        <a href="https://github.com/lore/lore/tree/master/packages/lore-models">lore-models</a>. <code>Lore Models</code>
        is the library that Lore uses for making AJAX requests, the interface for which is heavily inspired by
        <a href="http://backbonejs.org/#Collection">Backbone.Collection</a>.
      </p>

      <p>
        Similar to models, collections inherit their properties from <code>config/collections.js</code>. This means that
        your collections themselves will often be empty, especially when you're only dealing with a single API that uses
        consistent conventions. The only time you should edit this file is if you need to set a behavior that is specific
        to this edit (something that is not shared by the other collections). All shared behavior should go in
        <code>config/collections.js</code>.
      </p>

      <p>
        Collections will inherit properties like <code>apiRoot</code> from models unless it's overridden, as they often
        share the same endpoints.
      </p>

      <Markdown text={`
      module.exports = {

        // The location of the API server. If you're only interacting with a single API,
        // you should set this value in config/models.js. But if you need to interact with
        // multiple API servers, then you should override this property on each model whose
        // endpoint does not used the main API server.
        apiRoot: 'https://api.exmaple.com',

        // Can change on a per-model basis, otherwise inherits from config/models.js
        pluralize: true,

        // Override default properties set in config/models.js.
        properties: {

          // The endpoint used for CRUD operations. The final url used when making AJAX
          // requests is "apiRoot + urlRoot". Lore sets this value automatically based
          // on the collection's name and the pluralization setting, but you can override if
          // if your endpoint does not match your collection name.
          urlRoot: '/posts',

          // This property can also be a function, which is neccesary when your API endpoints
          // use nested urls like "/authors/:authorId/posts", since it needs to be calculated
          // before the AJAX request goes out
          urlRoot: function() {
            return "/authors/" + this.author.id + "/posts";
          },

          // initialize() is especially useful for API endpoints with deeply
          // nested URLs to help build the url later. It's called once, during
          // construction of the collection
          initialize: function(attributes, options) {
            this.author = attributes.author;
          },

          // parse() is called whenever a collection's data is returned by the server, in fetch,
          // and save. The function is passed the raw response object, and should return
          // an object of values to be set on the collection.
          // Example: if your server response looks like this:
          //
          // [
          //   {
          //     id: "123",
          //     title: 'Bacon is yummy"
          //   }
          // ]
          //
          // then you don't need to override this function. But if your server response
          // looks like this:
          //
          // {
          //   meta: {
          //     count: 1,
          //     pageSize: 20,
          //     nextPage: null
          //   },
          //   data: [
          //     {
          //       id: "123",
          //       title: 'Bacon is yummy"
          //     }
          //   ]
          // }
          //
          // then you'll need to override parse() to extract the values from data. This
          // method is also extremely useful as a way to absorb breaking API changes and
          // prevent them from rippling through all the components in your application.
          parse: function(attributes) {
            return attributes.data;
          }

          // sync() has two really useful applications:
          //
          // 1. This method is especially useful for applications that have been around for
          // a time and survived API changes and the property names in the client side
          // JavaScript are no longer matched up to the server-side property names that
          // come back in the API. It allows you to trasform the data back to a format
          // that is meaningful to the server before sending the request
          //
          // 2. For inspecting the response before the application gets it. For example,
          // if you wanted to log the user out of the application whenever an API response
          // returns a 401 (because their token expired) sync is a method that ALL requests
          // go through. So it's a way to observe and act on or log all network requests.
          sync: function(method, collection, options) {
            // prep and send AJAX request
          }
        }
      };
      `}/>
    </Template>
  )
};
