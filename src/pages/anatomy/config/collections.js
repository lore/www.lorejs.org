import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Anatomy';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        /config/collections.js
      </h1>
      <p>
        This is the configuration file for <code>lore-hook-collections</code> and is where you define overrides
        for the default collection behaviors.
      </p>
      <p>
        You can learn more about the configuration options <Link to="/hooks/lore-hook-collections/">here</Link>.
      </p>

      <blockquote>
        <p>
          While this file can influence the behavior of collections, there is currently no clear reason why you would
          ever need to use it.
        </p>

        <p>
          If you need to define collection specific behavior (such as parsing server responses or defining headers to
          add to requests) you should do that in <Link to="/anatomy/config/connections/">/config/connections.js</Link>.
        </p>

        <p>
          If you have multiple connections, and need to define which collections use each connection, you should do
          that in <Link to="/anatomy/config/models/">/config/models.js</Link> as this file inherits that behavior.
        </p>
      </blockquote>

      <h2>
        Default Config
      </h2>
      <p>
        The default config is shown below.
      </p>
      <Markdown text={`
      /**
       * Configuration file for collections
       *
       * This file is where you define overrides for the default collection behaviors.
       */

      export default {

        /**
         * While this file can influence the behavior of collections, there is currently
         * no clear reason why you would ever need to use it.
         *
         * If you need to define collection specific behavior (such as parsing server responses
         * or defining headers to add to requests) you should do that in 'config/connections.js'.
         *
         * If you have multiple connections, and need to define which collections use each
         * connection, you should do that in 'config/models.js' as this file inherits that
         * behavior.
         *
         */

      }
      `}/>
    </Template>
  )
};
