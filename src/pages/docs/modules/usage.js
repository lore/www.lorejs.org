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
      subtitle="Obtain the current environment."
    >
      <h2>
        1. Locate your project entry point
      </h2>
      <p>
        In order for require.context to function the way you expect, the code needs to be statically
        analyzable by webpack, which is not always possible if use require.context from inside functions
        within your project.
      </p>
      <p>
        The safest and simplest approach is to import all your files in the entry point to your project,
        and then pass the resulting objects to any functions that need them. That's the approach we'll
        be following below.
      </p>

      <h2>
        2. Write require.context calls
      </h2>
      <p>
        The <code>require.context</code> function has the following signiture:
      </p>
      <Code text={`
      require.context(directory, useSubdirectories = true, regExp = /^\\.\\/.*$/);
      `}/>

      <p>
        The first argument is the directory containing the files you want to import. The second argument
        specifies whether you want to include files from subdirectories, and defaults to true. The third
        argument is a RegEx expression that determines which files to import, based on whether the name
        of each file matches the expression.
      </p>
      <p>
        Here are some examples of <code>require.context</code> calls for common use cases:
      </p>

      <Code text={`
      // Import all the *.js files in the root of /config, excluding the file local.js
      require.context(\`./config\`, false, /^(?!.*(?:local.js$)).*\\.js$/)
    
      // Import the file 'development.js' from the /config/env directory
      const environment = 'development';
      require(\`./config/env/\${environment}\`).default,
    
      // Import the file local.js from the /config directory, but ONLY if the environment is set to 'development'
      environment === 'development' ?
        require.context(\`./config\`, false, /local.js$/) :
        undefined
    
      // Import all the *.js files in /actions, including files in subfolders
      require.context('./src/actions', true, /\\.js$/)
    
      // Import all the *.js files in the root of /models, but ignore files in subfolders
      require.context('./src/models', false, /\\.js$/)
      `}/>


      <h2>
        3. Import modules and build objects using @lore/utils
      </h2>
      <p>
        The value return from require.context is not actually the contents of the module, but
        information about the files found that match the search pattern. In order to import
        the files themselves, you need to iterate through the file list and import each of them
        individually.
      </p>
      <p>
        To simplify this process, <code>@lore/utils</code> exports two functions
        called <code>getModuleFromContext</code> and <code>buildObjectFromContext</code>. Both
        functions expect to be provided a context object, and will return an object that mirrors
        the directory structure. Each key will be the name of a file, and the value of that
        key will be the default export for that file.
      </p>
      <p>
        The code below demonstrates how to build an object using require.context, using the
        examples shown above a few more used by other libraries in the Lore ecosystem.
      </p>

      <h3>index.js</h3>
      <Code text={`
      /*
       * Modules
       *
       * Import files from the project directories and convert them into objects where
       * the key is the name of the file.
       *
       * The approach used below (require.context + regex) prevents us from needing to
       * explicitly import every file, which helps to reduce configuration errors related to
       * simple forgetfulness. Simply add a file to one of the imported directories, and it
       * will automatically be imported.
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
        },
      
        // Import all the *.js files in /actions, including subfolders
        actions: buildObjectFromContext(require.context('./src/actions', true, /\\.js$/)),
      
        // Import all the *.js files in the root of /collections
        collections: buildObjectFromContext(require.context('./src/collections', false, /\\.js$/)),
      
        // Import all the *.js files in the root of  /models
        models: buildObjectFromContext(require.context('./src/models', false, /\\.js$/)),
      
        // Import all the *.js files in /reducers, including subfolders
        reducers: buildObjectFromContext(require.context('./src/reducers', true, /\\.js$/)),
      
        // Import all the *.js files in the root of /initializers
        initializers: buildObjectFromContext(require.context('./initializers', false, /\\.js$/))
      };
      `}/>

      <h3>
        Example
      </h3>
      <p>
        To illustrate, pretend you have the folder structure below.
      </p>

      <Code type="sh" text={`
      /src
      |-- /actions
          |-- /post
              |-- find.js
      |-- /models
          |-- post.js
          |-- user.js
      `} />

      <p>
        You could import the files the /actions and /models directories using this code.
      </p>
      <Code text={`
      import { getModuleFromContext, buildObjectFromContext } from '@lore/utils';
      
      const modules = {
        // Import all the *.js files in /actions, including subfolders
        actions: buildObjectFromContext(require.context('./src/actions', true, /\\.js$/)),
      
        // Import all the *.js files in the root of  /models
        models: buildObjectFromContext(require.context('./src/models', false, /\\.js$/)),
      };
      `}/>

      <p>
        The result modules variable would look like this.
      </p>

      <Code text={`
      const modules = {
        actions: {
          post: {
            find: // default export from actions/post/find.js
          }
        },
        models: {
          post: // default export from models/post.js
          user: // default export from models/user.js
        }
      }
      `} />

    </Template>
  )
};
