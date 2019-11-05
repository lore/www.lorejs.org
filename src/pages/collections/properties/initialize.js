import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Collections';
import Code from '../../../components/Code';

export default (props) => {
  return (
    <Template>
      <h1>
        initialize
      </h1>
      <p>
        The <code>initialize()</code> method is called at the end of collection instantiation, and is useful for
        storing data that other methods will need.
      </p>

      <h3>
        Default Implementation
      </h3>
      <p>
        The default implementation looks like this:
      </p>
      <Code type="jsx" text={`
      initialize: function(attributes, options) {
        // does nothing
      },
      `}/>

      <h3>
        Usage
      </h3>
      <p>
        One use for <code>initialize()</code> is to construct nested URLs. You can read more about that in
        the <code>url()</code> documentation <Link to="/collections/properties/url/">here</Link>.
      </p>
    </Template>
  );
};
