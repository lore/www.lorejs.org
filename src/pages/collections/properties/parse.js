import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Collections';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        parse
      </h1>
      <p>
        The <code>parse()</code> method provides a way to transform data provided to the collection before it's saved
        as the collections <code>models</code>.
      </p>

      <h3>
        Default Implementation
      </h3>
      <p>
        The default implementation looks like this:
      </p>
      <Markdown type="jsx" text={`
      parse: function(resp, options) {
        return resp;
      },
      `}/>

      <h3>
        Usage
      </h3>
      <p>
        Let's say you have an API endpoint located at <code>http://localhost:1337/tweets</code>, that returns a
        collection of tweets that looks like this:
      </p>
      <Markdown type="jsx" text={`
      [
        {
          id: 1,
          text: 'An old tweet'
        },
        {
          id: 2,
          text: 'A new tweet'
        }
      ]
      `}/>
      <p>
        If you wanted to retrieve those tweets, you could create this collection:
      </p>
      <Markdown type="jsx" text={`
      import { Collection } from 'lore-models';

      const TweetCollection = Collection.extend({
        url: 'http://localhost:1337/tweets'
      });

      const tweets = new TweetCollection();

      tweets.fetch();
      `}/>
      <p>
        Once the API call returns, <code>tweet.toJSON()</code> would look like this (exactly mirroring the API
        response):
      </p>
      <Markdown type="jsx" text={`
      [
        {
          id: 1,
          text: 'An old tweet'
        },
        {
          id: 2,
          text: 'A new tweet'
        }
      ]
      `}/>
      <p>
        But many APIs wrap the data they return in an object that contains metadata information for pagination,
        like this:
      </p>
      <Markdown type="jsx" text={`
      {
        data: [
          {
            id: 1,
            text: 'An old tweet'
          },
          {
            id: 2,
            text: 'A new tweet'
          }
        ],
        meta: {
          page: 1,
          pageSize: 5,
          nextPage: null
        }
      }
      `}/>
      <p>
        In that case, the collection will need help in order to extract the array of tweets from the object returned
        by the API, and you do that by defining a custom <code>parse()</code> method, like this:
      </p>
      <Markdown type="jsx" text={`
      import { Collection } from 'lore-models';

      const TweetCollection = Collection.extend({
        url: 'http://localhost:1337/tweets',

        parse: function(response){
          return response.data;
        }
      });

      const tweets = new TweetCollection();

      tweets.fetch();
      `}/>
      <p>
        Whatever the API returns will be passed to <code>parse()</code> as <code>response</code>, and whatever
        that function returns will be saved as the array of models for the collection.
      </p>
      <p>
        So now, even though the API response is no longer an array, calling <code>tweets.toJSON()</code> will still
        return this:
      </p>
      <Markdown type="jsx" text={`
      [
        {
          id: 1,
          text: 'An old tweet'
        },
        {
          id: 2,
          text: 'A new tweet'
        }
      ]
      `}/>
      <p>
        That's the normal use for <code>parse()</code> - transforming data returned from an API endpoint. But the
        method will also be invoked when creating a collection, if you provide it with data yourself, like this:
      </p>
      <Markdown type="jsx" text={`
      import { Collection } from 'lore-models';

      const TweetCollection = Collection.extend({
        url: 'http://localhost:1337/tweets',

        parse: function(response){
          return response.data;
        }
      });

      const tweets = new TweetCollection({
        data: [
          {
            id: 1,
            text: 'An old tweet'
          },
          {
            id: 2,
            text: 'A new tweet'
          }
        ],
        meta: {
          page: 1,
          pageSize: 5,
          nextPage: null
        }
      });
      `}/>
      <p>
        If we were to examine <code>tweets.toJSON()</code> at this point, it would return exactly the same result
        as it did when we got the data from the API:
      </p>
      <Markdown type="jsx" text={`
      [
        {
          id: 1,
          text: 'An old tweet'
        },
        {
          id: 2,
          text: 'A new tweet'
        }
      ]
      `}/>
    </Template>
  );
};
