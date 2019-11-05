import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Documentation';
import Markdown from '../../../components/Markdown';
import Video from '../../../components/Video';
import Code from '../../../components/Code';
import image from '../../../assets/images/quickstart/setup/final.png';

export default (props) => {
  return (
    <Template
      title="Usage"
      subtitle="Create the Redux store from a set of reducers."
    >
      <h2>
        1. Follow usage process for Reducers.
      </h2>
      <p>
        Navigate to the Reducers sections and follow all the steps in Usage. Once you have a
        working set of reducers, you'll be ready to create the Redux store.
      </p>

      <h2>
        2. Invoke getStore()
      </h2>
      <p>
        Locate the entry point of your project and import the <code>getStore</code> function
        from <code>@lore/redux</code>.
      </p>

      <h3>index.js</h3>
      <Code text={`
      const config = {
        reducers: require('./config/reducers').default,
        redux: require('./config/redux').default
      };
      
      const modules = {
        models: {
          tweet: require('./src/models/tweet').default,
          user: require('./src/models/user').default
        },
        reducers: {
          // no custom reducers
        }
      };
      
      
      /*
       * Reducers
       *
       * A set of functions that specify how the application's state should
       * change in response to actions sent to the store.
       *
       * https://redux.js.org/basics/reducers
       */
      
      import { getReducers } from './.lore/reducers';
      
      const reducers = getReducers(config, {
        models: modules.models,
        reducers: modules.reducers
      });
      
      
      /*
       * Redux Store
       *
       * Responsible for storing and updating application state using the behavior defined
       * in the reducers.
       *
       * https://redux.js.org/basics/store
       */
      
      import { getStore } from './.lore/redux';
      
      const store = getStore(config, { reducers });
      `}/>

      <p>
        With this code we can now dispatch actions to the store, and let it take care of invoking
        the reducers and building the full application state.
      </p>

      <Code text={`
      store.dispatch({ 
        type: 'ADD_TWEET', 
        payload: { 
          id: 1, 
          text: 'first tweet',
          userId: 1
        }
      })
      `}/>

    </Template>
  )
};
