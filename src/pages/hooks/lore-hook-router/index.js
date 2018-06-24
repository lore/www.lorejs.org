import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/LoreHookRouter';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        lore-hook-router
      </h1>
      <p>
        Source code for this hook can be found on GitHub <a href="https://github.com/lore/lore/tree/master/packages/lore-hook-router">at this link</a>.
      </p>

      <h2>
        Purpose
      </h2>

      <p>
        A hook for generating the routes for React Router and specifying the type of history that should be
        used (hash or browser). The actual inclusion of React Router is handled by <code>lore-hook-react</code> since the <code>Router</code> needs
        to wrap the application, and that's part of the mounting process.
      </p>

      <h2>
        Config
      </h2>

      <Markdown text={`
      /**
       * This file is where you define overrides for the default routing behavior.
       **/

      import { browserHistory, useRouterHistory } from 'react-router';
      import { createHistory } from 'history';

      export default {

        /**
         * Whether browser should use pushState or hash to keep track of routes
         * See: https://github.com/ReactTraining/react-router/blob/v3.2.0/docs/guides/Histories.md
         **/

        // history: browserHistory,

        /*
         * The default setting for the routing history, as defined in lore-hook-router,
         * is "browserHistory", which is shown above. But this configuration assumes your
         * application will be served from a root domain, such as https://app.mycompany.com.
         *
         * If your application needs to be served from behind a proxy URL instead, such as
         * https://www.mycompany.com/application/, then you need to do some extra steps when
         * configuring webpack and react-router so that you get the correct URLS for the
         * generated assets and so that actions like page refresh work like you expect.
         *
         * To make that process easier, this file has modified the default. The code below
         * generates identical behavior to 'browserHistory' except that it also allows you to
         * specify a 'basename' so that you can serve the application from a URL like /application/
         * instead of being restricted to the root domain.
         *
         * To coordinate the change with webpack, basename is provided as __BASENAME__, which
         * will be defined by webpack during build, and replaced with a real value. This will
         * be an empty string if the app will be served from the root domain, or something like
         * '/application' if the app will be served from /application/.
         */

        history: useRouterHistory(createHistory)({
          basename: __BASENAME__
        }),

        /**
         * Returns the routes used by the application.
         *
         * The 'lore.loader' object is a way of lazy-loading files and directories the framework
         * doesn't have control over such as the models, config directory, and in this case the
         * routes.js file at the root of the project.
         *
         * The reason the loader is used here is because the routes _must_ to be lazy-loaded,
         * since loading the routes will pull in the components, which may be using the
         * 'lore.connect' decorator that won't exist until the 'connect' hooks loads.
         *
         * Trying to load the routes directly in this config file will throw an error during
         * build, because lore loads the config file _before_ any of the hooks, since they
         * need information in the config to determine their behavior.
         */

        // routes: function(lore) {
        //   return lore.loader.loadRoutes();
        // }

      }
      `}/>
    </Template>
  )
};
