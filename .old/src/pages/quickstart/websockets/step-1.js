import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/filtering/final.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 1: Add WebSocket Support
      </h1>

      <p>
        In this step we'll update our application to include support for WebSockets, so we can automatically
        display changes made by users without having to refresh the page.
      </p>

      <QuickstartBranch branch="websockets.1" />

      <h2>
        Install WebSockets Package
      </h2>
      <p>
        To obtain this functionality, we'll be using the <code>@lore/websockets-sails</code> package, which provides
        a way to create websocket connections with a Sails server, and dispatch any events received to the
        Redux store as actions.
      </p>
      <p>
        To get started, first install the <code>@lore/websockets-sails</code> package and its peer dependencies:
      </p>

      <Markdown text={`
      npm install @lore/websockets-sails sails.io.js@~0.13.8 socket.io-client@^1.4.8 --save
      `}/>


      <h2>
        Create WebSockets Config
      </h2>
      <p>
        Next create a new config file at <code>config/websockets.js</code> and paste in the code below:
      </p>

      <Markdown text={`
      // config/websockets.js
      import { getConfig } from '@lore/websockets-sails';
      
      export default getConfig({
        serverUrl: 'http://localhost:1337'
      });
      `}/>

      <p>
        While the hook exposes more config options, the only one we need for this example is the location
        of the socket.io server, which runs on the same port as the Sails API.
      </p>

      <h3>
        Setup WebSocket Connections
      </h3>
      <p>
        Next we need to setup the library, in order to obtain a set of connections that know how to connect
        to the Sails server, and subscribe to data.
      </p>
      <p>
        To do that, open up <code>index.js</code>. Then paste this code near the bottom, just above all the
        React code that mounts the application to the DOM:
      </p>

      <Markdown type="sh" text={`
      ...
      
      /*
       * WebSockets
       *
       * Create WebSocket connections that will listen for events on
       * specified endpoints and dispatch those events to the Redux store.
       */
      
      import { getWebSocketConnections } from '@lore/websockets-sails';
      const webSocketConnections = getWebSocketConnections(config, { models, store });
      
      /*
       * React
       *
       * Establish the root component and render it to the DOM
       */
       
       ...
      `}/>

      <p>
        The <code>getWebSocketConnections</code> method above requires the websockets config (to know where the
        socket.io server is), along with the models our application uses and a copy of the Redux store. What it
        returns is a set of connections, one for each model, that is designed to listen for a particular type of
        resource, and then dispatch any events it receives to the Redux store in order create, update, or delete
        resources.
      </p>

      <h3>
        Create a WebSockets Component
      </h3>
      <p>
        The lifecycle of WebSocket connections involve subscribing and unsubscribing to data. For our application,
        we want to subscribe to <code>tweet</code> events as soon as the user is logged in. To do that, we're going
        to create a React component that is purely functional, in the sense that it doesn't render anything. We're
        using this approach so that we can take advantage of the React lifecycle, and automatically subscribe
        to <code>tweet</code> events when this component is mounted, and unsubscribe to events when the component is
        unmounted.
      </p>
      <p>
        Run the command below to create a new component called <code>WebSockets</code>:
      </p>

      <Markdown type="sh" text={`
      lore generate component WebSockets
      `}/>

      <p>
        Then paste the code below into the component:
      </p>

      <Markdown type="sh" text={`
      // src/components/WebSockets.js
      import React, { useEffect } from 'react';
      import PropTypes from 'prop-types';
      import { useWebSockets } from '@lore/websockets-sails';
      
      export default function WebSockets(props) {
        const websockets = useWebSockets();
      
        useEffect(() => {
          websockets.tweet.connect();
          websockets.tweet.subscribe();
      
          return () => {
            websockets.tweet.unsubscribe();
          }
        }, []);
      
        return null;
      }
      `}/>

      <p>
        This component will subscribe to <code>tweet</code> events after it's mounted, and will also automatically
        unsubscribe to those events when it's unmounted.
      </p>

      <h3>
        Subscribe to Data
      </h3>
      <p>
        Next, we need to subscribe to data related to <code>tweets</code>. To do that, open
        the <code>Master</code> component, import the <code>WebSockets</code> component we just created, and
        insert it into the rendered code after the current user is retrieved:
      </p>

      <Markdown type="jsx" text={`
      // src/components/Master.js
      ...
      import WebSockets from './WebSockets';
      
      export default function Master(props) {
        ...
      
        return (
          <UserContext.Provider value={user}>
            <RemoveLoadingScreen />
            <WebSockets/>
            <DialogProvider
              domElementId={config.dialogs.domElementId}
              templates={config.dialogs.templates}
              defaultTemplate={config.dialogs.defaultTemplate}
            >
              {props.children}
            </DialogProvider>
          </UserContext.Provider>
        );
      }
      `}/>

      <p>
        That's it! With that change in place, the application will start listening for new data when it mounts,
        and tweets created by other users will immediately show up at the top of the feed, just like tweets you
        create yourself.
      </p>
      <p>
        However, there's also a new bug, where the tweets you create yourself end up with a duplicate tweet
        that's faded out. We'll fix that in the next step.
      </p>

      <h3>
        Visual Check-in
      </h3>

      <p>
        If everything went well, your application should now look like this (the same as before) but now you can
        have multiple browser tabs open and the changes will synchronize across them.
      </p>

      <img className="drop-shadow" src={image} />


      <h2>
        Code Changes
      </h2>

      <p>
        Below is a list of files modified during this step.
      </p>

      <h3>
        config/websockets.js
      </h3>
      <Markdown text={`
      import { getConfig } from '@lore/websockets-sails';

      export default getConfig({
        serverUrl: 'http://localhost:1337'
      });
      `}/>

      <h3>
        src/components/WebSockets.js
      </h3>
      <Markdown type="jsx" text={`
      import React, { useEffect } from 'react';
      import PropTypes from 'prop-types';
      import { useWebSockets } from '@lore/websockets-sails';
      
      export default function WebSockets(props) {
        const websockets = useWebSockets();
      
        useEffect(() => {
          console.log('subscribing');
          websockets.tweet.connect();
          websockets.tweet.subscribe();
      
          return () => {
            console.log('unsubscribing');
            websockets.tweet.unsubscribe();
          }
        }, []);
      
        return null;
      }
      `}/>

      <h3>
        index.js
      </h3>
      <Markdown text={`
      /*
       * This file kicks off the build process for the application.
       */
      
      
      /*
       * Import the styles for the loading screen. We're doing that here to make
       * sure they get loaded regardless of the entry point for the application.
       */
      
      import './assets/css/loading-screen.css';
      import './assets/css/main.css';
      
      /*
       * Environment
       */
      
      import { getEnvironment } from './.lore/environment';
      
      const environment = getEnvironment();
      
      
      /*
       * Config
       */
      
      import { getConfig } from './.lore/config';
      
      const config = getConfig(environment);
      
      
      /*
       * Models
       */
      
      import { getModels } from './.lore/models';
      import { getCollections } from './.lore/collections';
      
      const models = getModels(config);
      const collections = getCollections(config, models);
      
      
      /*
       * Reducers
       *
       * Store application state. See redux.
       */
      
      import { getReducers } from './.lore/reducers';
      
      const reducers = getReducers(config);
      
      
      /*
       * Actions
       *
       * Invoke models to make API calls and dispatch resulting
       * actions to reducers for storage.
       */
      
      import { getActions } from './.lore/actions';
      
      const actions = getActions(config, {
        models,
        collections
      });
      
      
      /*
       * Auth
       *
       * Insert actions for fetching and updating current user, along with a
       * reducer to store the current user, and an entry in the reducerActionMap
       * to orchestrate between them.
       */
      
      import { getUserActions, getUserReducer, getUserReducerActionMapEntry } from './.lore/auth';
      
      reducers[config.auth.reducerName] = getUserReducer(config);
      actions[config.auth.actionName] = getUserActions(config, { models, collections });
      config.connect.reducerActionMap[config.auth.modelName] = getUserReducerActionMapEntry(config);
      
      
      /*
       * Redux
       *
       * Create store, bind actions
       */
      
      import { getStore } from './.lore/redux';
      
      const store = getStore(config, { reducers });
      
      
      /*
       * Bind actions to Redux store
       *
       * This makes it more convenient to call actions, as the actions
       * they dispatch will automatically be sent the the application's
       * data store.
       */
      
      import { bindActionsToActionCreators } from '@lore/bind-actions';
      const boundActions = bindActionsToActionCreators(actions, store);
      
      
      /*
       * Load and run initializers
       */
      
      import { getInitializers, runInitializers } from '@lore/initializers';
      const initializers = getInitializers(config);
      runInitializers(config, { initializers });
      
      
      /*
       * WebSockets
       *
       * Create WebSocket connections that will listen for events on
       * specified endpoints and dispatch those events to the Redux store.
       */
      
      import { getWebSocketConnections } from '@lore/websockets-sails';
      const webSocketConnections = getWebSocketConnections(config, { models, store });
      
      
      /*
       * React
       *
       * Establish the root component and render it to the DOM
       */
      
      import React from 'react';
      import ReactDOM from 'react-dom';
      import { BrowserRouter } from 'react-router-dom';
      import { ConfigContext } from '@lore/config';
      import { ConnectProvider } from '@lore/connect';
      import { ActionsContext } from '@lore/actions';
      import { WebSocketsContext } from '@lore/websockets-sails';
      import routes from './routes';
      
      const domElementId = 'root';
      
      ReactDOM.render((
        <ConfigContext.Provider value={config}>
          <ActionsContext.Provider value={actions}>
            <WebSocketsContext.Provider value={webSocketConnections}>
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
            </WebSocketsContext.Provider>
          </ActionsContext.Provider>
        </ConfigContext.Provider>
      ), document.getElementById(domElementId));
      
      
      /*
       * Optional: attach key values to the window, so you can access them from
       * the command line. Useful if you want to manually invoke actions or check
       * the reducer state.
       *
       * Examples:
       *
       * lore.actions.xyz()          => invoke the xyz action
       * lore.store.getState().xyz   => check the state of xyz reducer
       * new lore.models.xyz()       => create instance of xyz model
       * new lore.collections.xyz()  => create instance of xyz collection
       */
      
      window.lore = {
        environment: environment,
        config: config,
        models: models,
        collections: collections,
        actions: boundActions,
        store: store
      };
      `}/>

      <h3>
        src/components/Master.js
      </h3>
      <Markdown type="jsx" text={`
      import React from 'react';
      import PropTypes from 'prop-types';
      import { useConnect } from '@lore/connect';
      import { UserContext } from '@lore/auth';
      import { useConfig } from '@lore/config';
      import { DialogProvider } from '@lore/dialogs';
      import PayloadStates from '../constants/PayloadStates';
      import RemoveLoadingScreen from '../components/RemoveLoadingScreen';
      import WebSockets from './WebSockets';
      
      export default function Master(props) {
        const config = useConfig();
        const user = useConnect('currentUser');
      
        if (user.state === PayloadStates.FETCHING) {
          return null;
        }
      
        if (user.state === PayloadStates.ERROR_FETCHING) {
          return (
            <div>
              <RemoveLoadingScreen />
              <h1 className="full-page-text">
                Unauthorized
              </h1>
            </div>
          );
        }
      
        return (
          <UserContext.Provider value={user}>
            <RemoveLoadingScreen />
            <WebSockets/>
            <DialogProvider
              domElementId={config.dialogs.domElementId}
              templates={config.dialogs.templates}
              defaultTemplate={config.dialogs.defaultTemplate}
            >
              {props.children}
            </DialogProvider>
          </UserContext.Provider>
        );
      }
      `}/>

      <h2>
        Next Steps
      </h2>
      <p>
        In the next step we'll learn how to <Link to="/quickstart/websockets/step-2/">fix the create bug</Link>.
      </p>
    </Template>
  )
};
