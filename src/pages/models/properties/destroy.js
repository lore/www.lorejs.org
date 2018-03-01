import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Models';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        destroy
      </h1>
      <p>
        The <code>destroy()</code> method is used to delete a resource.
      </p>

      <h3>
        Usage
      </h3>
      <p>
        You can learn about how this method can be used to delete
        resources <Link to="/models/usage/delete/">here</Link>.
      </p>

      <h3>
        Default Implementation
      </h3>
      <p>
        The default implementation looks like this:
      </p>

      <Markdown type="jsx" text={`
      destroy: function(options) {
        options = options ? _.clone(options) : {};
        return this.sync('delete', this, options);
      },
      `}/>
    </Template>
  );
};
