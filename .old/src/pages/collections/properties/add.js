import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Collections';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        add
      </h1>
      <p>
        The <code>add()</code> method can be used to add models to the collection outside the constructor.
      </p>

      <h3>
        Default Implementation
      </h3>
      <p>
        The default implementation looks like this:
      </p>
      <Markdown type="jsx" text={`
      add: function(models, options) {
        return this.set(models, _.extend({}, options));
      },
      `}/>

      <h3>
        Usage
      </h3>
      <p>
        Let's save you've created a collection like this:
      </p>
      <Markdown type="jsx" text={`
      import { Collection } from 'lore-models';

      const TweetCollection = Collection.extend({
        url: 'http://localhost:1337/tweets'
      })

      const tweets = new TweetCollection()
      `}/>
      <p>
        The <code>add()</code> method can be used add additional models to the collection, and there are two ways
        to call it.
      </p>
      <p>
        The first is by providing a object, like this:
      </p>
      <Markdown type="jsx" text={`
      tweets.add({
        id: 1,
        text: 'Some new tweet'
      })
      `}/>
      <p>
        The second is by providing an array, like this:
      </p>
      <Markdown type="jsx" text={`
      tweets.add([
        {
          id: 1,
          text: 'Some new tweet'
        }
      ])
      `}/>
      <p>
        In both cases, if you now examined the <code>tweet.models</code> property you would see this:
      </p>
      <Markdown type="jsx" text={`
      [
        new Model({
          id: 1,
          text: 'Some new tweet'
        })
      ]
      `}/>
    </Template>
  );
};
