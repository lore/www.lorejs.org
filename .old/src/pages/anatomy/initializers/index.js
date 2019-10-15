import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Anatomy';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        /initializers
      </h1>
      <p>
        Initializers provide a means of injecting custom functionality into Lore without going through
        the full effort of creating and registering a hook. Think of them as functions that get invoked
        during the build and mounting process of your application, and what happens within that function
        is entirely up to you.
      </p>
      <p>
        All files within this directory are assumed to be initializers (functions) and will be invoked
        during the startup process of your application.
      </p>

      <h3>
        What does an initializer look like?
      </h3>

      <p>
        The signature for an initializer looks like this:
      </p>

      <Markdown text={`
      export default function(lore) {
        // do something
      };
      `}/>

      <h3>
        When are initializers useful?
      </h3>

      <p>
        In practice, initializers have limited value, but one place they can be helpful is when needing
        to configure and initialize 3rd party libraries used for metrics or error reporting.
      </p>

      <h3>
        When are initializers invoked?
      </h3>

      <p>
        Initializers are invoked between the <strong>build</strong> and <strong>mounting</strong> steps
        of Lore's <code>lore.summon(...)</code> call in <code>index.js</code>. This means that initializers
        get invoked <strong>after</strong> the application is built (ensuring the config object reflects
        the correct environment and all hooks have been executed) but <strong>before</strong> the application
        is mounted to the DOM.
      </p>

      <h3>
        Example
      </h3>

      <p>
        The example below illustrates how to create an initializer that can be used to configure
        the <a href="https://github.com/getsentry/raven-js">Raven.js</a> client used
        by <a href="https://sentry.io">Sentry</a>, a web service that provides error reporting.
      </p>

      <p>
        First, create a new config file called <code>config/raven.js</code> that will be used to hold the
        settings for the Raven client. We're putting these settings in a config file so we can modify them
        on a per-environment basis (different settings for development, production, etc).
      </p>

      <h4>
        config/raven.js
      </h4>
      <Markdown text={`
      export default {

        /**
         * Sentry DSN
         */

        sentryDSN: 'https://******@sentry.io/<project>',

        /**
         * Sentry environment to report as
         */

        environment: 'development',

        /**
         * Enable or disable reporting
         */

        enabled: true

      };
      `}/>

      <p>
        Next, create a new initializer called <code>initializers/raven.js</code> that looks like this:
      </p>

      <h4>
        initializers/raven.js
      </h4>
      <Markdown text={`
      import Raven from 'raven-js';

      export default function(lore) {
        const { raven } = lore.config;

        if (raven.enabled) {
          Raven.config(raven.sentryDSN, {
            environment: raven.environment
          }).install();
        }
      };
      `}/>

      <p>
        If Raven is <code>enabled</code> for that environment, then the client will be configured for use.
      </p>
    </Template>
  );
};
