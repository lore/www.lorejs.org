import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/LoreGenerateCollection';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        generate collection
      </h1>
      <p>
        CLI command to add a <Link to="/collections/">Collection</Link>] to your project.
      </p>

      <h3>
        Usage
      </h3>

      <Markdown type="sh" text={`
      lore generate collection [collection-name]
      `}/>

      <h3>
        Example
      </h3>
      <Markdown type="sh" text={`
      lore generate collection example
      `}/>
      <p>
        The command above will generate a file located at <code>src/collections/example.js</code> that looks like this:
      </p>
      <Markdown text={`
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
    </Template>
  )
};
