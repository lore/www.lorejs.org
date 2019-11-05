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
      subtitle="Run the initializers."
    >
      <h2>
        1. Create initializers
      </h2>
      <p>
        While initializers could be used to run any code you want, in practice their primary value
        appears to lie in configuring 3rd party libraries that you plan on using for metrics, error
        reporting, customer support, etc.
      </p>
      <p>
        The basic template for initializers looks like this (a function with a single argument):
      </p>

      <h3>
        initializers/template.js
      </h3>
      <Code text={`
      export default function(config) {
        // do something
      };
      `}/>

      <p>
        To illustrate a practical use, we'll create one that's designed to initialize the Sentry
        package so that error reporting is ready before the application is mounted.
      </p>

      <h3>
        initializers/sentry.js
      </h3>
      <Code text={`
      import * as Sentry from '@sentry/browser';
      
      export default function(config) {
        const { sentry } = config;
      
        if (sentry.enabled) {
          Sentry.init({
            dsn: sentry.sentryDSN,
            environment: sentry.environment
          });
        }
      };
      `}/>

      <h2>
        2. Invoke runInitializers()
      </h2>
      <p>
        Locate the entry point of your project and import the <code>runInitializers</code> function
        from <code>@lore/initializers</code>.
      </p>

      <h3>index.js</h3>
      <Code text={`
      /*
       * Config
       *
       * Import any config files that contain information initializers might need.
       */
      
      const config = {
        sentry: require('./config/sentry.js').default    
      };
      
      /*
       * Modules
       *
       * Import any initializers you created. For this example we have only one; sentry.
       */
       
      const modules = {
        initializers: {
          sentry: require('./initializers/sentry.js').default
        }
      };
      
      /*
       * Run the initializers
       *
       * These are small functions that run before the application is mounted and
       * are primarily used to initialize libraries for analytics, error reporting,
       * support, etc.
       */
      
      import { runInitializers } from './.lore/initializers';
      
      runInitializers(config, {
        initializers: modules.initializers
      });
      `}/>

      <p>
        Now we have a function have can invoke that will iterate through all of our initializers.
      </p>

    </Template>
  )
};
