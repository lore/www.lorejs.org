import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Collections';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        models
      </h1>
      <p>
        The <code>models</code> property is an array of models representing the data for the collection.
      </p>

      <h3>
        Default Implementation
      </h3>
      <p>
        The default implementation looks like this:
      </p>
      <Markdown type="jsx" text={`
      models: []
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
        Once the API call returns, <code>tweet.models</code> would look like this, where each resource from the API
        has been converted into a Model:
      </p>
      <Markdown type="jsx" text={`
      [
        new Model({
          id: 1,
          text: 'An old tweet'
        }),
        new Model({
          id: 2,
          text: 'A new tweet'
        })
      ]
      `}/>
    </Template>
  );
};
