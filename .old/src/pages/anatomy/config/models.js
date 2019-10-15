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
        config/models.js
      </h1>
      <p>
        This file is connected to the <code>lore-hook-models</code> hook and allows you to map models to connections.
      </p>
      <p>
        You can learn more about the configuration options <Link to="/hooks/lore-hook-models/">here</Link>.
      </p>

      <h2>
        Default Config
      </h2>
      <p>
        The default config is shown below.
      </p>
      <Markdown text={`
      /**
       * Configuration file for models
       *
       * This file is where you define overrides for the default model behaviors.
       * Settings here apply to all models, and some are inherited by collections.
       */

      export default {

        /**
         * The default API connection that models should use if they have no explicit mapping.
         */

        // defaultConnection: 'default'

        /**
         * If your application interacts with multiple APIs, create a connection for each
         * API and then define which models are associated with each connection here.
         *
         * Here is an example for an application with a versioned API (v1 and v2):
         *
         * {
         *   v1: [
         *     'currentUser',
         *     'author'
         *   ],
         *   v2: [
         *     'book',
         *     'publisher'
         *   ]
         * }
         */

        // connectionModelMap: {
        //   default: []
        // }

      }
      `}/>
    </Template>
  )
};
