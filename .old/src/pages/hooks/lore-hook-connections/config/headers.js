import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/LoreHookConnections';
import Markdown from '../../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        headers
      </h1>
      <p>
        Headers that should be applied to all network requests. This function will be called before every network request,
        and any keys you provide will be added as a header in the network request.
      </p>
      <p>
        A common use would be sending an authorization token with each request:
      </p>
    </Template>
  )
};
