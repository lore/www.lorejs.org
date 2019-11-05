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
      subtitle="Install and configure @lore/config."
    >
      <h2>
        1. Install @lore/config and @lore/utils via npm
      </h2>
      <p>
        Add @lore/config and @lore/utils to your package.json.
      </p>
      <Code text={`
      npm install --save @lore/config @lore/utils
      `}/>

      <h2>
        2. Create getConfig() function
      </h2>
      <p>
        Create a folder called <code>.lore</code> at the root of your project and create
        a file inside called <code>config.js</code>. Paste in the following code:
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

      <p>
        This code gives us a function called <code>getConfig</code> that will accept a set of config
        objects and combine them in a specific order to produce a final configuration matching the
        override priorities listed below.
      </p>

      <ul className="list-decimal pl-8">
        <li className="mb-2">
          Start with the base config object.
        </li>
        <li className="mb-2">
          Override the base config with any values provided by the environment config.
        </li>
        <li className="mb-2">
          Override the environment config with any values provided by the local config.
        </li>
        <li className="mb-2">
          Override the local config with any values provided by the second argument to this function.
        </li>
      </ul>

    </Template>
  )
};
