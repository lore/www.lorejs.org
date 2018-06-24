import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/LoreHookActions';
import Markdown from '../../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        cidBodyAttributeName
      </h1>
      <p>
        This field let's you change the name of the cid field sent to the server when performing optimistic
        updates through WebSockets. By default the property send to the server is called <code>cid</code>,
        matching the name of the attribute on the client-side, but you can change if you need to to match
        the API.
      </p>
      <Markdown text={`
      cidBodyAttributeName: 'cid'
      `}/>
    </Template>
  )
};
