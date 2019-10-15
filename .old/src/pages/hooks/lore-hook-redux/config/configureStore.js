import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/LoreHookRedux';
import Markdown from '../../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        configureStore
      </h1>
      <p>
        Configure the Store used by the application
      </p>
      <p>
        <a href="http://redux.js.org/docs/api/createStore.html">http://redux.js.org/docs/api/createStore.html</a>
      </p>
      <Markdown text={`
      configureStore: function(rootReducer, preloadedState, enhancer) {
        return Redux.createStore(rootReducer, preloadedState, enhancer);
      }
      `}/>
    </Template>
  )
};
