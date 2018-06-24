import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Models';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        validate
      </h1>
      <p>
        The <code>validate()</code> method can be used to validate whether the attributes provided to a model
        are valid.
      </p>
      <p>
        This method does nothing by default, and it's rare that you would need it.
      </p>

      <h3>
        Default Implementation
      </h3>
      <p>
        The default implementation looks like this:
      </p>
      <Markdown type="jsx" text={`
      // Run validation against the next complete set of model attributes,
      // returning \`true\` if all is well. Otherwise, fire an \`"invalid"\` event.
      validate: function(attrs, options) {
        // does nothing
      }
      `}/>

      <h3>
        Usage
      </h3>
      <p>
        Let's say you you're creating a tweet, and for some reason, a tweet is considered invalid if
        the <code>text</code> property is equal to "Some old tweet".
      </p>
      <p>
        You could use the <code>validate()</code> method to check for that like this:
      </p>
      <Markdown type="jsx" text={`
      import { Model } from 'lore-models';

      const Tweet = Model.extend({
        validate: function(attributes, options) {
          if (attributes.text === 'Some old tweet') {
            return 'Text is invalid';
          }
        }
      })

      const t1 = new Tweet({
        text: 'Some old tweet'
      })
      const t2 = new Tweet({
        text: 'Some new tweet'
      })
      `}/>
      <p>
        The <code>validate()</code> method will be executed when the tweet is created, or when attributes are updated
        via the <code>set()</code> method.
      </p>
      <p>
        You can check if the tweet is considered valid by inspecting the <code>validationError</code> property.
      </p>
      <p>
        In this case, <code>t1.validationError</code> will return <code>'Text is invalid'</code>, because that's
        what the <code>validate()</code> method returned. On the other hand, <code>tw.validationError</code> will
        return <code>null</code>, because there was no validation error.
      </p>
    </Template>
  );
};
