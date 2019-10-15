import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Models';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        set
      </h1>
      <p>
        The <code>set()</code> method can be used to set attributes on the model outside the constructor.
      </p>

      <h3>
        Default Implementation
      </h3>
      <p>
        The default implementation looks like this:
      </p>
      <Markdown type="jsx" text={`
      set: function(key, val, options) {
        if (key == null) {
          return this
        };

        let attrs;
        if (typeof key === 'object') {
          attrs = key;
          options = val;
        } else {
          (attrs = {})[key] = val;
        }

        options || (options = {});

        if (!this._validate(attrs, options)) return false;

        const current = this.attributes;

        for (const attr in attrs) {
          val = attrs[attr];
          current[attr] = val;
        }

        if (this.idAttribute in attrs) {
          this.id = this.get(this.idAttribute)
        };

        return this;
      },
      `}/>

      <h3>
        Usage
      </h3>
      <p>
        Let's save you've created a tweet like this:
      </p>
      <Markdown type="jsx" text={`
      import { Model } from 'lore-models';

      const Tweet = Model.extend({
        urlRoot: 'http://localhost:1337/tweets'
      })

      const tweet = new Tweet()
      `}/>
      <p>
        The <code>set()</code> method can be used add additional attributes to the model, and there are two ways
        to call it.
      </p>
      <p>
        The first is by providing a key/value pair, like this:
      </p>
      <Markdown type="jsx" text={`
      tweet.set('text', 'Some new tweet')
      `}/>
      <p>
        The second is by providing an object, like this:
      </p>
      <Markdown type="jsx" text={`
      tweet.set({
        text: 'Some new tweet'
      })
      `}/>
      <p>
        In both cases, if you now examined the <code>tweet.attributes</code> property you would see this:
      </p>
      <Markdown type="jsx" text={`
      {
        id: 1,
        text: 'Some new tweet'
      }
      `}/>
      <p>
        Most of the time, if you understand what it's doing, you <em>could</em> set the attributes directly, like
        this:
      </p>
      <Markdown type="jsx" text={`
      tweet.attributes = {
        id: 1,
        text: 'Some new tweet'
      }
      `}/>
      <p>
        The reason you generally shouldn't, is because this method examines the attributes you provide, and if
        any of them match the <code>idAttribute</code>, it will set that property to the correct value. If you
        assign the attributes directly, this value may not set.
      </p>
    </Template>
  );
};
