import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/LoreHookConnections';
import Markdown from '../../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        apiRoot
      </h1>
      <p>
        The URL of the API server.
      </p>
      <p>
        If your API is behind a server route like <code>/api</code>, then make sure to include
        that in url in the apiRoot, e.g. <code>https://www.example.com/api</code>
      </p>
      <Markdown text={`

      `}/>
    </Template>
  )
};
