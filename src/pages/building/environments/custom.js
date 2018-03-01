import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Building';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';
import Video from '../../../components/Video';

export default (props) => {
  return (
    <Template>
      <h1>
        Custom Build
      </h1>
      <p>
        New projects include built-in support for development and production builds of your application, but
        you can also create custom environments, in case you also need special builds for environments
        like <code>test</code>, <code>staging</code>, etc.
      </p>
      <p>
        To illustrate, we'll walk through the steps required to add a new build for
        a <code>staging</code> environment.
      </p>

      <h3>
        Create Custom Config
      </h3>
      <p>
        The first step is to create a custom config file, and add it to <code>/config/env</code>. In this example
        we will create a new file named <code>/config/env/staging.js</code> that looks like this:
      </p>
      <Markdown text={`
      /**
       * Staging environment settings
       *
       * This file is where you define overrides for any of the config settings that
       * should only be applied in the staging environment.
       *
       * The staging environment is defined as 'process.env.LORE_ENV=staging' and
       * is automatically set when webpack is invoked using the --env.lore=staging argument.
       **/

      export default {

        /**
         * To override a config setting, specify the name of the config file you
         * want to override, followed by the settings you want to change.
         */

        // actions: {
        //   normalize: true
        // },

        // connections: {
        //   default: {
        //     apiRoot: 'https://api.example.dev'
        //   }
        // }

      }
      `}/>
      <p>
        This file allows us to customize the application settings for this environment, such as setting the API
        location, specific feature flags, whatever we need.
      </p>

      <h3>
        Create Custom Script
      </h3>
      <p>
        Next we need to add a script to <code>package.json</code> so that we can build the project for this
        environment. For that, we're going to add the script below:
      </p>
      <Markdown text={`
      "scripts": {
        "build:staging": "npm run clean && webpack --env.webpack=production --env.lore=staging -p",
      },
      `}/>
      <p>
        This script will tell webpack to build the files in production mode, which sets
        the <code>NODE_ENV</code> to <code>production</code>, but then tells lore to use
        the <code>staging</code> config. The <code>-p</code> at the end tells Webpack to minify and uglify the
        assets.
      </p>

      <h3>
        Done!
      </h3>
      <p>
        That's it! Those steps are all you need to set up your own custom build environments, and you can create
        as many as you want.
      </p>
    </Template>
  )
};
