import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/LoreHookReact';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        lore-hook-react
      </h1>
      <p>
        Source code for this hook can be found on GitHub <a href="https://github.com/lore/lore/tree/master/packages/lore-hook-react">at this link</a>.
      </p>

      <h2>
        Purpose
      </h2>
      <p>
        A hook for generating the root React component and mounting it to the DOM.
      </p>

      <h2>
        Config
      </h2>

      <Markdown text={`
      /**
       * Configuration file for React
       *
       * This file is where you define overrides for the default mounting behavior.
       */

      // import React from 'react';
      // import ReactDOM from 'react-dom';
      // import { Provider } from 'react-redux';
      // import { Router } from 'react-router';

      export default {

        /**
         * ID of DOM Element the application will be mounted to
         */

        // domElementId: 'root',

        /**
         * Generate the root component that will be mounted to the DOM. This
         * function will be invoked by lore after all hooks have been loaded.
         */

        // getRootComponent: function(lore) {
        //   const store = lore.store;
        //   const routes = lore.router.routes;
        //   const history = lore.router.history;
        //
        //   return (
        //     <Provider store={store}>
        //       <Router history={history}>
        //         {routes}
        //       </Router>
        //     </Provider>
        //   );
        // },

        /**
         * Mount the root component to the DOM
         */

        // mount: function(Root, lore) {
        //   const config = lore.config.react;
        //   ReactDOM.render(Root, document.getElementById(config.domElementId), cb);
        // }

      }
      `}/>
    </Template>
  )
};
