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
      title="Usage"
      subtitle="Generate the combined application config."
    >
      <h2>
        1. Obtain the current environment
      </h2>
      <p>
        Locate the entry point of your project. Obtain the name of the current environment
        and store it in a variable called <code>environment</code>. The code used
        by <code>@lore/environment</code> is shown below as one example of how to do this.
      </p>

      <h3>index.js</h3>
      <Code text={`
      /*
       * Environment
       *
       * Get the environment we should be using. This is controlled via the LORE_ENV environment
       * variable, and defaults to 'development' if not defined.
       */
      
      import { getEnvironment } from './.lore/environment';
      
      const environment = getEnvironment();
      `}/>

      <h2>
        2. Import files from /config
      </h2>
      <p>
        Next we need to import the files from <code>/config</code> and generate the three config
        files we'll need; the base config, the environment-specific config, and the local config.
      </p>

      <h3>index.js</h3>
      <Code text={`
      /*
       * Modules
       *
       * Import files from the config directory and convert them into objects where
       * the key is the name of the file.
       *
       * The approach used below (require.context + regex) prevents us from needing to
       * explicitly import every file, which helps to reduce configuration errors related to
       * simple forgetfulness. Simply add a file to config directory, and it will automatically 
       * be imported.
       *
       * The downside to this approach is that it's not easy to understand. So if you'd
       * prefer to use a more explicit (or selective) approach, feel free to build the objects
       * yourself and manually import/require all files as needed.
       */
      
      import { getModuleFromContext, buildObjectFromContext } from '@lore/utils';
      
      const modules = {
        config: {
          // Import all the *.js files in the root of /config, excluding local.js
          baseConfig: buildObjectFromContext(require.context(\`./config\`, false, /^(?!.*(?:local.js$)).*\\.js$/)),
      
          // Import the environment config override from /config/env
          envConfig: require(\`./config/env/\${environment}\`).default,
      
          // Import the local.js file in the root of /config, but ONLY in development
          localConfig: environment === 'development' ?
            getModuleFromContext(require.context(\`./config\`, false, /local.js$/)) :
            undefined
        }
      };
      `}/>

      <p>
        Now we have a variable we can use that reflects the desired environment.
      </p>

      <h2>
        3. Invoke getConfig()
      </h2>
      <p>
        Finally, import the <code>getConfig</code> function from <code>.lore/config.js</code> and
        provide it with the config modules we just created.
      </p>

      <h3>index.js</h3>
      <Code text={`
      /*
       * Config
       *
       * Construct the final project config by combining the default/base config,
       * the environment specific overrides, and any local overrides defined in
       * config/local.js.
       */
      
      import { getConfig } from './.lore/config';
      
      const config = getConfig(modules.config);
      `}/>

      <p>
        The <code>config</code> variable now contains the combined config that the application
        should use for this environment. If you want to add new behaviors, services, or build
        environments simply add new files to <code>/config</code> and they will automatically
        be imported.
      </p>

    </Template>
  )
};
