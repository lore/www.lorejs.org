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
      title="Setup"
      subtitle="Install and configure @lore/bind-actions."
    >
      <h2>
        1. Follow setup process for Actions and Redux Store
      </h2>
      <p>
        Navigate to the Actions and Redux Store sections and follow all the steps in Setup. This includes:
      </p>
      <ul className="list-decimal pl-8">
        <li className="mb-2">
          Installing @lore/actions, @lore/reducers, @lore/collections, @lore/models, @lore/connections,
          @lore/connections-map, and @lore/backbone.
        </li>
        <li className="mb-2">
          Adding config scripts for actions.js, reducers.js, connections.js, connectionsMap.js,
          models.js, and collections.js.
        </li>
        <li className="mb-2">
          Creating the files .lore/models.js, .lore/collections.js, .lore/actions.js, and .lore/reducers.js.
        </li>
      </ul>

      <h2>
        2. Install @lore/bind-actions via npm
      </h2>
      <p>
        Add @lore/bind-actions to your package.json.
      </p>
      <Code text={`
      npm install --save @lore/bind-actions
      `}/>

      <h2>
        3. Create bindActionsToActionCreators() function
      </h2>
      <p>
        Create a folder called <code>.lore</code> at the root of your project and create
        a file inside called <code>bind-actions.js</code>. Paste in the following code:
      </p>

      <h3>
        .lore/bind-actions.js
      </h3>
      <Code text={`
        import { bindActionCreators } from 'redux';
        import _ from 'lodash';
        
        function bindAction(action, store) {
          return bindActionCreators(action, store.dispatch);
        }
        
        export function bindActionsToActionCreators(actions={}, store) {
          Object.keys(actions).forEach(function(key) {
            const action = actions[key];
            let boundAction = null;
            if (_.isPlainObject(action) && Object.keys(action).length > 0) {
              boundAction = bindActionsToActionCreators(action, store);
            } else {
              boundAction = bindAction(action, store);
            }
            actions[key] = boundAction;
          });
          return actions;
        }
      `}/>

      <p>
        This code gives us a function called <code>bindActionsToActionCreators</code> that accepts
        a set of actions and a Redux store. It will then bind all the actions to that store, and return
        the set of bound actions.
      </p>

    </Template>
  )
};
