import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/LoreHookRedux';
import Markdown from '../../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        rootReducer
      </h1>
      <p>
        Combine all reducers into a single reducer function, which will be used
        by the Redux store. If there are no reducers, returns an empty function
        to prevent Redux from throwing an error.
      </p>
      <p>
        <a href="http://redux.js.org/docs/api/combineReducers.html">http://redux.js.org/docs/api/combineReducers.html</a>
      </p>
      <Markdown text={`
      rootReducer: function(reducers) {
        var hasReducers = Object.keys(reducers).length > 0;
        return hasReducers ? Redux.combineReducers(reducers) : function() {};
      }
      `}/>
    </Template>
  )
};
