import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Hooks';
import Markdown from '../../components/Markdown';
import CodeTabs from '../../components/CodeTabs';
import CodeTab from '../../components/CodeTab';
import QuickstartBranch from '../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        Introduction
      </h1>
      <p>
        Lore applications do a lot of things, including mounting the application, setting up routing, generating
        reducers and actions, and orchestrating data fetching for components. But at it's core, Lore doesn't
        have <em>any</em> of that functionality built into it.
      </p>
      <p>
        Lore itself isn't a framework so much as a plugin engine, and it's all the plugins that combine
        to <em>make</em> it a framework for building React applications. At it's core, Lore only does two things:
      </p>
      <ol>
        <li>
          Define the rules for how <code>config</code> files are loaded and combined
        </li>
        <li>
          Define the interface for what these plugins should look like, and how to specify dependencies between
          them, in order to determine the order they should be loaded
        </li>
      </ol>
      <p>
        These plugins are referred to as <strong>hooks</strong>, and new projects include a set of default hooks, which
        you can see if you open up the <code>index.js</code> file at the root of your project:
      </p>

      <Markdown text={`
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
  )
};
