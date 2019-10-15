import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/LoreHookConnections';
import Markdown from '../../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        models
      </h1>
      <p>
        This establishes the default configuration for all <code>models</code> that use this connection. You can pass
        in any options that are supported by <code>models</code>. For a list of options, see
        the <Link to="/architecture/models/">model documentation</Link>.
      </p>
    </Template>
  )
};
