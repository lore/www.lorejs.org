import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Collections';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        toJSON
      </h1>
      <p>
        The <code>toJSON()</code> method returns a copy of the collections data.
      </p>

      <h3>
        Default Implementation
      </h3>
      <p>
        The default implementation looks like this:
      </p>
      <Markdown type="jsx" text={`
      toJSON: function(options) {
        return this.models.map(function(model) {
          return model.toJSON();
        })
      },
      `}/>

      <h3>
        Usage
      </h3>
      <p>
        Let's say you have a collection that looks like this:
      </p>
      <Markdown type="jsx" text={`
      import { Collection } from 'lore-models';

      const TweetCollection = Collection.extend({
        url: 'http://localhost:1337/tweets'
      })

      const tweets = new Collection([
        {
          id: 1,
          text: 'Some tweet'
        },
        {
          id: 2,
          text: 'Some other tweet'
        }
      ]);
      `}/>
      <p>
        Then invoking <code>tweets.toJSON()</code> would return this:
      </p>
      <Markdown text={`
      [
        {
          id: 1,
          text: 'Some tweet'
        },
        {
          id: 2,
          text: 'Some other tweet'
        }
      ]
      `}/>
    </Template>
  );
};
