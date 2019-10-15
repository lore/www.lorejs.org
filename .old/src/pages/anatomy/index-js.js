import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Anatomy';
import Markdown from '../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        index.js
      </h1>
      <p>
        This is the root JavaScript file of the application, and is responsible for building and mounting the
        application to the DOM.
      </p>
      <p>
        It also attaches the Lore singleton to the window, so you can access it from the command line in case
        you need to play with it, such as:
      </p>

      <ul>
        <li>
          Manually executing actions (<code>lore.actions.tweet.create(...)</code>)
        </li>
        <li>
          Checking the reducer state (<code>lore.store.getState().tweet.byId['1']</code>)
        </li>
        <li>
          Inspecting the config (<code>lore.config.connections.default.apiRoot</code>)
        </li>
        <li>
          Etc.
        </li>
      </ul>

      <h3>
        Defaults
      </h3>
      <p>
        The default file included in new projects looks like this:
      </p>
      <Markdown text={`
      import lore from 'lore';
      import _ from 'lodash';

      // Allows you to access your lore app globally as well as from within
      // the console. Remove this line if you don't want to be able to do that.
      window.lore = lore;

      // Hooks
      import auth from 'lore-hook-auth';
      import actions from 'lore-hook-actions';
      import bindActions from 'lore-hook-bind-actions';
      import collections from 'lore-hook-collections';
      import connections from 'lore-hook-connections';
      import connect from 'lore-hook-connect';
      import models from 'lore-hook-models';
      import react from 'lore-hook-react';
      import reducers from 'lore-hook-reducers';
      import redux from 'lore-hook-redux';
      import router from 'lore-hook-router';

      // Summon the app!
      lore.summon({
        hooks: {
          auth,
          actions,
          bindActions,
          collections,
          connections,
          connect,
          models,
          react,
          reducers,
          redux: _.extend(redux, {
            dependencies: ['reducers', 'auth']
          }),
          router
        }
      });
      `}/>
    </Template>
  );
};
