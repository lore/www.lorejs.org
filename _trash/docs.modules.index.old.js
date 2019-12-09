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
      title="Modules"
      subtitle="Docs for converting directories into objects."
    >
      <h2>
        Purpose
      </h2>
      <p>
        Code that uses conventions often does so in order to remove the need for you to write it
        yourself. However it stills needs a little help to understand your intention. In convention-driven
        frameworks like Lore, this intention is derived from the names of the files you create, the structure
        of the folders you place them in, and the contents of files themselves.
      </p>
      <p>
        Convention-driven frameworks function by inspecting directories and deriving behaviors based on the content
        of those directories, such as the names, content, and structure of files. To accomplish we first need to
        be able to import the contents of a directory and convert it into a programmatic object we can
        inspect.
      </p>
      <p>
        Even if you don't use contentions, this same technique can be used as a way to import
        lots of files without having to import each one manually.
      </p>

      <h2>
        Concept
      </h2>
      <p>
        Pretend you have a project with the following folder structure:
      </p>

      <Code type="sh" text={`
      /src
       |-- /models
            |-- post.js
            |-- user.js
      `} />

      <p>
        If you wanted to use these files you could import them manually like this:
      </p>
      <Code text={`
      import post from '.src/models/post';
      import user from '.src/models/user';
      `} />

      <p>
        Alternatively you can use a concept in <code>webpack</code> called <code>context</code> to import
        the entire directory, like this:
      </p>

      <Code text={`
      const context = require.context('./src/models', false, /\\.js$/)
      `} />

      <p>
        The code above will return information all files in the directory we specify that match the
        conditions provided in the second and third arguments. The second argument declares whether we want
        information about nested directories, or just the one we specified. The third argument provides a
        regex conditions about the names of the files we're looking for.
      </p>
      <p>
        In the example above, we're declaring that we want information about all files in the root of
        the <code>src/models</code> directory that end in <code>.js</code>.
      </p>
      <p>
        Once we have this object, we can obtain the file names by calling <code>context.keys()</code>,
        which return an array of file paths, relative to the directory we specified:
      </p>

      <Code text={`
      [
        './post.js',
        './user.js',
      ]
      `} />

      <p>
        If we want the module associated with that file (whatever the default export is), we can
        call <code>context(path)</code> to obtain it, like this:
      </p>

      <Code text={`
      // Obtain path for './post.js'
      const path = context.keys()[0];
      
      // Obtain module returned from post.js
      const module = context(path);
      `} />

      <h2>
        Setup
      </h2>
      <p>
        Lore has several libraries which use this concept to convert whole directories to objects which it then
        inspects and converts to useful behaviors.
      </p>
      <p>
        To make this process easier the <code>@lore/utils</code> library provides two helpers functions
        called <code>getModuleFromContext</code> and <code>buildObjectFromContext</code>.
      </p>
      <p>
        <code>getModuleFromContext</code> is used to retrieve the first module from context, and is used
        when you're looking to see if a specific file exists. Unlike a direct import, which will throw
        and error if the file doesn't exist, this function will return undefined.
      </p>
      <Code text={`
      import { getModuleFromContext } from '@lore/utils';
      
      const context = require.context(\`./config\`, false, /local.js$/);
      const module = getModuleFromContext(context);
      
      // If the file ./config/local.js exists, module will be the default export. If
      // the file does NOT exist, module will be undefined.
      `} />
      <p>
        <code>buildObjectFromContext</code> is used to convert directories into nested objects that
        reflect the directory structure. To illustrate pretend you have the directory structure below:
      </p>

      <Code type="sh" text={`
      src/
      |-- actions/
          |-- post/
              |-- find.js
      |-- models/
          |-- post.js
          |-- user.js
      `} />

      <p>
        The code below will import the entire directory and convert it into the object below:
      </p>
      <Code text={`
      import { buildObjectFromContext } from '@lore/utils';
      
      const context = require.context('./src', true, /\\.js$/);
      const modules = getModuleFromContext(context);
      
      // If you inspect modules it will look like this:
      
      {
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

      <h2>
        Usage
      </h2>
      <p>
        With these two files we can selectively import and inspect entire directories. Lore uses this
        concept to import files from <code>config</code>, <code>src/actions</code>, <code>src/collections</code>,
        <code>src/models</code>, <code>src/reducers</code>, and <code>src/initializers</code>.
      </p>

      <Code text={`
      /*
       * Modules
       *
       * Import files from the project directories and convert them into objects where
       * the key is the name of the file. These objects will be used to set up the actions,
       * reducers, Redux store, and other parts of the application.
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
          envConfig: require(\`./config/env/\${environment || 'development'}\`).default,
      
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


    </Template>
  )
};
