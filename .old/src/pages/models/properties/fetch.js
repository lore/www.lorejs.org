import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Models';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        fetch
      </h1>
      <p>
        The <code>fetch()</code> method is used to retrieve a resource.
      </p>

      <h3>
        Usage
      </h3>
      <p>
        You can learn about how this method can be used to retrieve
        resources <Link to="/models/usage/retrieve/">here</Link>.
      </p>

      <h3>
        Default Implementation
      </h3>
      <Markdown type="jsx" text={`
      fetch: function(options) {
        options = _.extend({ parse: true }, options);

        // After a successful fetch, the model is updated with the server-side state.
        const model = this;
        options.success = function(attributes) {
          if (options.parse) {
            attributes = model.parse(attributes, options);
          }

          if (attributes && !model.set(attributes, options)) {
            return false;
          }
        };

        return this.sync('read', this, options);
      },
      `}/>
    </Template>
  );
};
