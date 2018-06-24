import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Models';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        has
      </h1>
      <p>
        The <code>has()</code> method can be used to get a true/false value based on whether an attribute exists
        on the model.
      </p>
      <p>
        Values that are <code>undefined</code> or <code>null</code> will return <code>false</code>. Any other value
        will return <code>true</code>.
      </p>

      <h3>
        Default Implementation
      </h3>
      <p>
        The default implementation looks like this:
      </p>
      <Markdown type="jsx" text={`
      has: function(attr) {
        return this.get(attr) != null;
      },
      `}/>

      <h3>
        Usage
      </h3>
      <p>
        Let's use this code to illustrate:
      </p>
      <Markdown type="jsx" text={`
      import { Model } from 'lore-models';

      const Tweet = Model.extend();

      const tweet = new Tweet({
        id: 1,
        text: 'Some old tweet'
      });
      `}/>
      <p>
        In the code above, <code>tweet.has('text')</code> will return <code>true</code>,
        whereas <code>tweet.has('user')</code> would return <code>false</code> because it's not defined.
      </p>
    </Template>
  );
};
