import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/LoreHookRedux';
import Markdown from '../../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h2>
        Example Usage
      </h2>
      <p>
        This hook essentially just breaks up the standard Redux store creation process into a single of
        functions that can be overridden on a per-environment basis, so that you don't have to override
        the <em>entire</em> store creation process.
      </p>

      <p>
        For example, in some environments (like development) you might want to override just the middleware, and
        apply apply a store enhancer to enable the <a href="https://github.com/gaearon/redux-devtools">Redux
        DevTools</a>, but leave the rest of the creation process the same.
      </p>

      <p>
        This standard Redux Store build process looks like this:
      </p>

      <Markdown text={`
      import { compose, applyMiddleware, combineReducers, createStore } from 'redux';
      import { thunk } from 'redux-thunk';

      const middleware = [thunk];
      const enhancer = compose(
        applyMiddleware.apply(null, middleware)
      );
      const rootReducer = combineReducers(reducers);
      const preloadedState = {};
      const store = createStore(rootReducer, preloadedState, enhancer);

      // expose store on Lore instance
      lore.store = store;
      `}/>

      <h2>
        Overview
      </h2>
      <p>
        This config file allows you to modify how Redux is constructed.
      </p>

      <h2>
        Example Config File
      </h2>

      <Markdown text={`
      import { applyMiddleware } from 'redux';
      import { thunk } from 'redux-thunk';

      export default {
        middleware: [
          applyMiddleware(thunk)
        ]
      };
      `}/>

      <h3>
        Configuration Options
      </h3>
      <h4>
        middleware
      </h4>
      <p>
        What <a href="http://redux.js.org/docs/advanced/Middleware.html">middleware</a> you want Redux to use.
      </p>
    </Template>
  )
};
