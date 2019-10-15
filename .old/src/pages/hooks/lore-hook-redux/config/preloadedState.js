import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/LoreHookRedux';
import Markdown from '../../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        preloadedState
      </h1>
      <p>
        Initial state of the Redux store. Any data you specify here will
        be in the store when the application starts.
      </p>
      <p>
        <a href="http://redux.js.org/docs/api/createStore.html">http://redux.js.org/docs/api/createStore.html</a>
      </p>
      <Markdown text={`
      preloadedState: function() {
        return {};
      }
      `}/>
    </Template>
  )
};
