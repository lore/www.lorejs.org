import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/LoreHookReact';
import Markdown from '../../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        mount
      </h1>
      <p>
        Mount the root component to the DOM
      </p>
      <Markdown text={`
      mount: function(Root, lore) {
        var config = lore.config.react;
        ReactDOM.render(Root, document.getElementById(config.domElementId), cb);
      }
      `}/>
    </Template>
  )
};
