import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Actions';
import Code from '../../components/Code';

export default (props) => {
  return (
    <Template>
      <h1>
        Extracting Actions
      </h1>
      <p>
        The CLI provides a way to extract the auto-generated actions so that you can see the code, as well as modify
        its behavior.
      </p>
      <p>
        You can learn more about that command <Link to="/cli/lore-extract-action/">here</Link>.
      </p>
    </Template>
  );
};
