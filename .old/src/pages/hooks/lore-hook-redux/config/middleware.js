import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/LoreHookRedux';
import Markdown from '../../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        middleware
      </h1>
      <p>
        Middleware injected into the dispatch flow, placed at the point between
        dispatching an action, and the moment it reaches the reducer.
      </p>
      <p>
        <a href="http://redux.js.org/docs/advanced/Middleware.html">http://redux.js.org/docs/advanced/Middleware.html</a>
      </p>
      <Markdown text={`
      middleware: [thunk]
      `}/>
    </Template>
  )
};
