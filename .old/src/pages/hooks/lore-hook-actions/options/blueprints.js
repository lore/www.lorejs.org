import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/LoreHookActions';
import Markdown from '../../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        blueprints
      </h1>
      <p>
        Blueprints are used to provide models with a default set of actions for interacting with a REST API. If
        you want to modify the behavior of those actions you can provide your own implementation here.
      </p>
      <Markdown text={`
      blueprints: {
        create: function() { /*...*/ },
        destroy: function() { /*...*/ },
        find: function() { /*...*/ },
        get: function() { /*...*/ },
        update: function() { /*...*/ }
      }
      `}/>
    </Template>
  )
};
