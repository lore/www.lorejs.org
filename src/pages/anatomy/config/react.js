import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Anatomy';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        config/react.js
      </h1>
      <p>
        This file is connected to the <code>lore-hook-react</code> hook and overrides the default react behaviors.
      </p>
      <p>
        You can learn more about the configuration options <Link to="/hooks/lore-hook-react/">here</Link>.
      </p>

      <h2>
        Default Config
      </h2>
      <p>
        The default config is shown below.
      </p>
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
