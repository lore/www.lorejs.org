import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Models';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        Custom Properties
      </h1>
      <p>
        When creating models, you can also define your own custom properties and methods, and use them in other
        methods, or invoke them directly.
      </p>
      <p>
        To illustrate, take a look at this code:
      </p>
      <Markdown type="jsx" text={`
      import { Model } from 'lore-models';

      const Tweet = Model.extend({
        wordCount: function() {
          return this.attributes.text.split(' ').length;
        }
      });

      const t1 = new Tweet({
        text: 'Some old tweet'
      });
      `}/>
      <p>
        In the code above, we can now call <code>tweet.wordCount()</code> and it would return <code>3</code>.
      </p>
    </Template>
  );
};
