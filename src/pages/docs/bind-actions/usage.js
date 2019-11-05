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
      subtitle="Bind action creators to Redux store."
    >
      <h2>
        1. Invoke bindActionsToActionCreators()
      </h2>
      <p>
        Locate the entry point of your project and import the <code>bindActionsToActionCreators</code> function
        from <code>@lore/bind-actions</code>.
      </p>

      <h3>index.js</h3>
      <Code text={`
      const config = {
        actions: require('./config/actions').default,
        collections: require('./config/collections').default,
        connectionMap: require('./config/connectionMap').default,
        connections: require('./config/connections').default,
        models: require('./config/models').default,
        reducers: require('./config/reducers').default,
        redux: require('./config/redux').default,
      };
      
      const modules = {
        actions: {
          // no custom actions
        },
        collections: {
          // no custom collections
        },
        models: {
          tweet: require('./src/models/tweet').default,
          user: require('./src/models/user').default
        },
        reducers: {
          // no custom reducers
        },
      };
      
      
      /*
       * Models
       *
       * An AJAX abstraction that reduces the boilerplate associated with creating,
       * retrieving, updating, and deleting a single resource in a REST API.
       *
       * These are instances of Model from @lore/backbone.
       */
      
      import { getModels } from './.lore/models';
      
      const models = getModels(config, {
        models: modules.models
      });
      
      
      /*
       * Collections
       *
       * An AJAX abstraction that reduces the boilerplate associated with searching,
       * filtering, and paginating resources in a REST API.
       *
       * These are instances of Collection from @lore/backbone.
       */
      
      import { getCollections } from './.lore/collections';
      
      const collections = getCollections(config, { models }, {
        models: modules.models,
        collections: modules.collections
      });
      
      
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
      
      
      /*
       * Bind actions to the Redux Store
       *
       * Reduce the boilerplate associated with invoking action creators by creating
       * a version of them bound to the store. This makes it more convenient to call
       * them, as the actions they dispatch will automatically be sent the store.
       *
       * https://redux.js.org/api/bindactioncreators
       */
      
      import { bindActionsToActionCreators } from './.lore/bind-actions';
      
      const boundActions = bindActionsToActionCreators(actions, store);
      `}/>

      <p>
        With this code we can now access the bound actions from the boundActions object like this:
      </p>

      <Code text={`
      boundActions.tweet.find()
      `}/>

      <p>
        And if we inspect the Redux store, we'll see it received an action and extracted and store the
        payload data.
      </p>

    </Template>
  )
};
