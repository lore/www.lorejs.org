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
      title="@lore/actions"
      subtitle="Library for auto-generating Redux actions from a set of blueprints."
    >
      <h2>
        Import custom modules
      </h2>
      <p>
        Assuming a folder with custom actions..
      </p>

      <Code type="sh" text={`
      /src
       |-- /actions
            |-- /post
                 |-- get.js
                 |-- find.js
      `} />
      <p>
        This code will import the directly and convert it into an object...
      </p>

      <Code type="jsx" text={`
      import { buildObjectFromContext } from '@lore/utils';
      
      const modules = {
        // Import all the *.js files in /actions, including subfolders
        actions: buildObjectFromContext(require.context('./src/actions', true, /\\.js$/))
      };
      `} />

      <p>
        Create Redux actions from blueprints...
      </p>

      <Code text={`
      /*
       * Actions/Action Creators
       *
       * A set of functions that dispatch actions containing payloads of information
       * that describe state changes in the application.
       *
       * https://redux.js.org/basics/actions
       *
       * In our case, these functions invoke the models and collections created above
       * to communicate with the REST API(s), and emit actions that describe what's
       * happening (such as creating, updating, and fetching data).
       */
      
      import { getActions } from './.lore/actions';
      
      const actions = getActions(config, { models, collections }, {
        models: modules.models,
        actions: modules.actions
      });
      `}/>

      <h2>
        Bind actions to Redux store...
      </h2>
      <p>
        If you're application has only one store, you can bind the actions to that store to save yourself
        from having to write some repetitive code...
      </p>

      <Code text={`
      /*
       * Bind actions to the Redux Store
       *
       * Reduce the boilerplate associated with invoking action creators by creating
       * a version of them bound to the store. This makes it more convenient to call
       * them, as the actions they dispatch will automatically be sent the store.
       *
       * https://redux.js.org/api/bindactioncreators
       */
      
      import { bindActionsToActionCreators } from '@lore/bind-actions';
      
      const boundActions = bindActionsToActionCreators(actions, store);
      `}/>

      <p>

      </p>


      <Code text={`
      /*
       * Root component
       */
      
      import React from 'react';
      import { hot } from 'react-hot-loader';
      import { BrowserRouter } from 'react-router-dom';
      import { ConfigContext } from '@lore/config';
      import { ConnectProvider } from '@lore/connect';
      import { ActionsContext } from '@lore/actions';
      import routes from './routes';
      
      function App(props) {
        const {
          config,
          actions,
          store
        } = props;
      
        return (
          <ConfigContext.Provider value={config}>
            <ActionsContext.Provider value={actions}>
              <ConnectProvider
                store={store}
                actions={actions}
                blueprints={config.connect.blueprints}
                reducerActionMap={config.connect.reducerActionMap}
              >
                <BrowserRouter basename={__BASENAME__}>
                  {routes}
                </BrowserRouter>
              </ConnectProvider>
            </ActionsContext.Provider>
          </ConfigContext.Provider>
        )
      }
      
      export default hot(module)(App);
      `}/>



    </Template>
  )
};
