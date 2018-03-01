import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/LoreHookConnections';
import Markdown from '../../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        collections
      </h1>
      <p>
        This establishes the default configuration for all <code>collections</code> that use this connection. You
        can pass in any options that are supported by <code>collections</code>. For a list of options, see
        the <Link to="/architecture/collections/">collection documentation</Link>.
      </p>
    </Template>
  )
};
