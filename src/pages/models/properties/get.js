import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Models';
import Code from '../../../components/Code';

export default (props) => {
  return (
    <Template>
      <h1>
        get
      </h1>

      <h3>
        Default Implementation
      </h3>
      <p>
        The default implementation looks like this:
      </p>
      <Code type="jsx" text={`
      // Get the value of an attribute.
      get: function(attr) {
        return this.attributes[attr];
      },
      `}/>
    </Template>
  );
};
