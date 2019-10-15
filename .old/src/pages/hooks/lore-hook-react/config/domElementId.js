import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/LoreHookReact';
import Markdown from '../../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        domElementId
      </h1>
      <p>
        ID of DOM Element the application will be mounted to.
      </p>
      <Markdown text={`
      domElementId: 'root'
      `}/>
    </Template>
  )
};
