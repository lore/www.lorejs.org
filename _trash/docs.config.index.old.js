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
      title="Config"
      subtitle="Docs for creating a modular configuration."
    >
      <h2>
        Purpose
      </h2>
      <p>
        Applications that operate in different environments such as development and production often need
        a configuration that can be modified based on the environment. Frequently there's a base configuration
        that reflects settings common across all environments, with modifications for things specific to
        each environment. Examples of configurations that might differ based on the environment include the API
        server, the authentication server, and the services used for error reporting and customer support.
      </p>

      <h2>
        Concept
      </h2>
      <p>
        Pretend you have a project with the following folder structure:
      </p>

      <Code type="sh" text={`
      /config
       |-- /env
            |-- development.js
            |-- production.js
            |-- staging.js
       |-- auth0.js
       |-- local.js
       |-- sentry.js
      `} />

      <p>
        Using what we learned in Modules, about converting a directory into an object, we're going to
        convert the files in the root of the config directory into an object representing the base
        configuration (used in development) and then override those settings with any values provided in
        an environment-specific config located in <code>config/env</code>.
      </p>

      <p>
        To illustrate, pretend we perform those steps and end up with the following configs
      </p>

      <Code text={`
      const baseConfig = {
        auth0: {
          clientID: 'random-string',
          domain: 'example.auth0.com',
          redirectUri: 'http://localhost:3000/auth/callback',
        },
        sentry: {
          sentryDSN: 'https://example@sentry.io/12345678',
          environment: 'development',
          enabled: false
        }
      };
      
      const productionConfig = {
        auth0: {
          redirectUri: 'https://app.example.com/auth/callback',
        },
        sentry: {
          environment: 'production',
          enabled: true
        }
      };
      `}/>

      <p>
        The base config here mirrors development needs, and specifies information like the location of the
        authentication and error reporting servers. It also declares that error reporting should be turned
        off by default.
      </p>
      <p>
        The production config declares in production, the authentication server should redirect to a
        different URL after the user logs in, and that error reporting should be turned on.
      </p>

      <h2>
        Setup
      </h2>
      <p>
        Add this file to <code>.lore/config.js</code>, which will declares a function that accepts
        a set of config objects, and combines them using the rules we discussed above.
      </p>

      <h3>
        .lore/config.js
      </h3>
      <Code text={`
      import _ from 'lodash';
      
      /**
       * Generate the final config from the combination of overrides provided.
       *
       * @param {Object} configs
       * @param {Object} configOverride
       */
      
      export function getConfig(configs={}, configOverride={}) {
        const {
          baseConfig,
          envConfig,
          localConfig
        } = configs;
      
        /**
         * Generate the final config using the following rules:
         *
         * 1. Start with base project config
         * 2. Override with any environment specific settings
         * 3. Override with any settings provided via the local user config
         * 4. Override with any settings provided via the override
         */
      
        return _.merge({},
          baseConfig,
          envConfig,
          localConfig,
          configOverride
        );
      }
      `}/>

      <h2>
        Usage
      </h2>
      <p>
        With this function in place, we just need to provide it with a set of config objects, and it
        will combine them according to our rules. To do this use the dynamic modules strategy to import
        the configs we want, and convert them into a final config object.
      </p>

      <Code text={`
      import { getModuleFromContext, buildObjectFromContext } from '@lore/utils';
      import { getConfig } from './lore/config';
      
      const modules = {
        config: {
          // Import all the *.js files in the root of /config, excluding local.js
          baseConfig: buildObjectFromContext(require.context(\`./config\`, false, /^(?!.*(?:local.js$)).*\\.js$/)),
      
          // Import the environment config override from /config/env
          envConfig: require(\`./config/env/\${environment || 'development'}\`).default,
      
          // Import the local.js file in the root of /config, but ONLY in development
          localConfig: environment === 'development' ?
            getModuleFromContext(require.context(\`./config\`, false, /local.js$/)) :
            undefined
        }
      };
      
      const config = getConfig(modules.config);
      `}/>

      <p>
        Now we have a configuration object that includes all base configuration values, along with any
        environment-specific overrides.
      </p>

    </Template>
  )
};
