import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Models';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        toJSON
      </h1>
      <p>
        The <code>toJSON()</code> method returns a copy of the model's attributes.
      </p>

      <h3>
        Default Implementation
      </h3>
      <p>
        The default implementation looks like this:
      </p>
      <Markdown type="jsx" text={`
      import _ from 'lodash';
      ...
      toJSON: function(options) {
        return _.clone(this.attributes);
      },
      `}/>

      <h3>
        Usage
      </h3>
      <p>
        Let's say you have a model that looks like this:
      </p>
      <Markdown type="jsx" text={`
      import { Model } from 'lore-models';

      const Tweet = Model.extend({
        urlRoot: 'http://localhost:1337/tweets'
      })

      const tweet = new Tweet({
        id: 1,
        text: 'Some tweet'
      });
      `}/>
      <p>
        Then invoking <code>tweet.toJSON()</code> would return this:
      </p>
      <Markdown text={`
      {
        id: 1,
        text: 'Some tweet'
      }
      `}/>
    </Template>
  );
};
