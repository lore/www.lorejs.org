import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Collections';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        fetch
      </h1>
      <p>
        The <code>fetch()</code> method is used to retrieve a collection of resources.
      </p>

      <h3>
        Usage
      </h3>
      <p>
        You can learn about how this method can be used to retrieve
        resources <Link to="/collections/usage/retrieve/">here</Link>.
      </p>

      <h3>
        Default Implementation
      </h3>
      <p>
        The default implementation looks like this:
      </p>
      <Markdown type="jsx" text={`
      // Fetch the default set of models for this collection, resetting the
      // collection when they arrive.
      fetch: function(options) {
        options = _.extend({ parse: true }, options);

        // Reset the default models
        const collection = this;
        options.success = function(attributes) {
          collection.reset(attributes, options);
        };

        return this.sync('read', this, options);
      },
      `}/>
    </Template>
  );
};
