import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Models';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        sync
      </h1>
      <p>
        The <code>sync()</code> method is a wrapper over the <Link to="/sync/">sync</Link> function, and allows you
        to modify how server calls are made for the model.
      </p>

      <h3>
        Default Implementation
      </h3>
      <p>
        The default implementation looks like this:
      </p>
      <Markdown type="jsx" text={`
      import { sync } from 'lore-models';
      ...
      sync: function(method, model, options) {
        return sync(method, model, options);
      },
      `}/>

      <h3>
        Usage
      </h3>
      <p>
        One use case for this method is to modify the data before it's sent to the API. For example, let's say the
        tweets in our application currently use an attribute named <code>text</code> to describe what the user said,
        but the API underwent a change recently and that property is now called <code>message</code>.
      </p>
      <p>
        If we send the <code>text</code> attribute to the API, it will ignore the attribute, because it doesn't
        recognize it. So we need to transform <code>text</code> to <code>message</code> before making the API
        call.
      </p>
      <p>
        We can do that using this code:
      </p>
      <Markdown type="jsx" text={`
      import { sync } from 'lore-models';
      ...
      sync: function(method, model, options) {
        if (method === 'create' || method === 'update') {
          // copy the model's attributes
          const data = _.assign({}, model.attributes);

          // replace 'text' with 'message'
          data.message = data.text;
          delete data.text;

          // provide the new 'data' through 'options', which will be sent to the API
          return sync(method, model, _.assign({}, options, {
            data: data
          }));
        }

        return sync(method, model, options);
      },
      `}/>
      <p>
        In the code above, we're checking the <code>method</code> to see whether we're performing
        a <code>create</code> or <code>update</code> action.
      </p>
      <p>
        If we are, then we're coping the model's attributes, replacing <code>text</code> with <code>message</code>,
        and then providing the new data to <code>sync</code>, so that it will be sent to the API instead of the
        models normal attributes.
      </p>
      <p>
        A simpler version of the code above would look like this:
      </p>
      <Markdown type="jsx" text={`
      import { sync } from 'lore-models';
      ...
      sync: function(method, model, options) {
        if (method === 'create' || method === 'update') {
          model.attributes.message = model.attributes.text;
        }

        return sync(method, model, options);
      },
      `}/>
      <p>
        The difference is that in this code, we're actually modifying the attributes of the model, whereas the
        previous code only modify the network request.
      </p>
    </Template>
  );
};
