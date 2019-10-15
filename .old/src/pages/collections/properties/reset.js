import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Collections';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        reset
      </h1>
      <p>
        The <code>reset()</code> method can be used to remove all models from the collection, or to replace the
        models with a new set.
      </p>

      <h3>
        Default Implementation
      </h3>
      <p>
        The default implementation looks like this:
      </p>
      <Markdown type="jsx" text={`
      reset: function(models, options) {
        options = options ? _.clone(options) : {};
        this._reset();
        models = this.add(models, options);
        return models;
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

      const tweets = new TweetCollection([
        {
          id: 1,
          text: 'Some old tweet'
        }
      ])
      `}/>
      <p>
        At this point <code>tweets.models.length</code> would return <code>1</code>, since we have 1 model.
      </p>
      <p>
        Calling <code>tweets.reset()</code> with no arguments will remove all models from the collection,
        and now <code>tweets.models.length</code> would return <code>0</code>.
      </p>
      <p>
        You can also invoke <code>reset()</code> with arguments like this:
      </p>
      <Markdown type="jsx" text={`
      tweets.reset([
        {
          id: 2,
          text: 'Some new tweet'
        }
      ])
      `}/>

      <p>
        In this case, the method will first remove the existing models, and then add the new models. So after this
        method is called, <code>tweets.models.length</code> would still return <code>1</code>, but if we
        examined <code>tweet.models</code> we would see this, reflecting the array we just provied:
      </p>
      <Markdown type="jsx" text={`
      [
        new Model({
          id: 2,
          text: 'Some new tweet'
        })
      ]
      `}/>
    </Template>
  );
};
