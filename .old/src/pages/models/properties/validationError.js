import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Models';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        validationError
      </h1>
      <p>
        The <code>validationError</code> property is used to store and retrieve any validation error that occured,
        assuming you defined a <code>validate()</code> method.
      </p>

      <h3>
        Default Implementation
      </h3>
      <p>
        The default implementation looks like this:
      </p>
      <Markdown type="jsx" text={`
      validationError: null,
      `}/>

      <h3>
        Usage
      </h3>
      <p>
        To see how <code>validationError</code> is used, see the example in the <code>validate()</code> documentation
        which you can find <Link to="/models/properties/validate/">here</Link>.
      </p>
    </Template>
  );
};
