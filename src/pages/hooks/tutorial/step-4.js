import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/HookTutorial';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 4: Make Configurable
      </h1>

      <p>
        In this step we're going to make our hook configurable so it can be overridden on an app-level or on a per-model basis.
      </p>

      <blockquote>
        <p>
          You can view the finished code for this step by checking out the <code>step-4</code> branch.
        </p>
      </blockquote>

      <h3>
        Hook Configuration
      </h3>
      <p>
        It's good practice to expose configuration values that will allow the user to tailor the behavior of your hook,
        provided there are configuration values that make sense to expose.
      </p>

      <p>
        Lore exposes many configuration values, and it's these values that allow the framework to adapt to different needs
        such as varying API conventions, hash-based or push-state routes, and adding headers to AJAX requests.
      </p>

      <p>
        In addition to exposing config values, Lore also encourages a pattern cascading overrides, which looks like this:
      </p>

      <ol>
        <li>
          Hooks decide what values to make configurable, and expose those values to the framework (they also provide a default
          value)
        </li>
        <li>
          Config files in the <code>config/</code> directory (such as <code>config/models.js</code>) allow the user to override those defaults and
          change the behavior of that hook across the whole application.
        </li>
        <li>
          Config files in the <code>src/models</code> and <code>src/collections</code> directories allow the user to override the application
          level configuration and change the behavior a per-model (or per-endpoint) basis.
        </li>
      </ol>

      <p>
        This approach is designed to require the least amount of configuration by the user, while also providing a high level
        of adaptability, and we'll be configuring our custom hook to use this approach.
      </p>


      <h3>
        Add Default Values
      </h3>
      <p>
        First, we need to think about what config values to expose. In this case, our hook is going to invoke an action on
        some interval (every X seconds), so let's make that interval configurable.
      </p>

      <p>
        Open up <code>polling-hook/src/index.js</code> and modify the <code>defaults</code> object to look like this:
      </p>

      <Markdown text={`
      ...
        defaults: {
          polling: {
            interval: 3000
          }
        },
      ...
      `}/>

      <p>
        The default config for Lore is composed by combining all the of the <code>defaults</code> from every hook that gets loaded. To
        prove that, open the console in the browser's developer tools and type this command:
      </p>

      <Markdown type="sh" text={`
      lore.config.polling.interval
      `}/>

      <p>
        You should see <code>3000</code> printed out as the value. At this point we have successfully exposed the polling <code>interval</code> to
        the user and set it's default value to 3 seconds.
      </p>

      <blockquote>
        <p>
          The reason you have to specify <code>polling</code> inside the <code>defaults</code> object is because hooks have the potential to define
          or override config values outside their own hook.
        </p>
      </blockquote>


      <h3>
        Add Application-Level Config
      </h3>
      <p>
        Now that we've added a default config to our hook, let's give the user the ability to change the default interval. To
        do that, create a config file called <code>polling</code>, located at <code>config/polling.js</code>. Paste this code into that file:
      </p>

      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        module.exports = {

           /**
            * The frequency at which the action should be invoked (in milliseconds)
            */

          interval: 5000

        };
        `}/>
        <CodeTab syntax="ES6" text={`
        export default {

           /**
            * The frequency at which the action should be invoked (in milliseconds)
            */

          interval: 5000

        }
        `}/>
        <CodeTab syntax="ESNext" text={`
        export default {

           /**
            * The frequency at which the action should be invoked (in milliseconds)
            */

          interval: 5000

        }
        `}/>
      </CodeTabs>

      <p>
        With that file in place, the user can now change the <code>interval</code> value and it will override the default provided by
        the hook. In this case, we're changing the default interval of 3000 milliseconds to 5000 milliseconds.
      </p>


      <h3>
        Add Model-Level Config
      </h3>
      <p>
        While it's great that the user can now override the default at an app level (through <code>config/polling.js</code>) they might
        need to change that behavior on a per-model basis. For example, maybe some models change more quickly than others,
        and the user may need to adjust the polling frequency accordingly.
      </p>

      <p>
        Luckily accommodating that is pretty easy to. Open up <code>models/tweet.js</code> and add a section for a polling config:
      </p>

      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        module.exports = {
          attributes: {
            // ...
          },

          polling: {
            interval: 2000
          },

          properties: {
            // ...
          }
        };
        `}/>
        <CodeTab syntax="ES6" text={`
        export default {
          attributes: {
            // ...
          },

          polling: {
            interval: 2000
          },

          properties: {
            // ...
          }
        }
        `}/>
        <CodeTab syntax="ESNext" text={`
        export default {
          attributes: {
            // ...
          },

          polling: {
            interval: 2000
          },

          properties: {
            // ...
          }
        }
        `}/>
      </CodeTabs>

      <p>
        Which this change, we've now declared that we want to change the application interval of 5000 milliseconds to be
        2000 milliseconds, but <em>only</em> when polling for tweets.
      </p>

      <h3>
        Update Hook to Read Config Values
      </h3>
      <p>
        At this point we've set up our application to declare cascading overrides, but we still need to implement that
        behavior in our hook. Let's work on that now.
      </p>

      <p>
        Open up <code>polling-hook/src/index.js</code> and update the <code>load</code> method to look like this:
      </p>

      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        ...
          load: function(lore) {
            // 1. Get the actions so we can make them pollable
            var actions = lore.actions;

            // 2. Get the application level config (defaults + config/polling.js)
            var appConfig = lore.config.polling;

            // 3. Get the model specific configs
            var modelConfigs = lore.loader.loadModels();

            // TODO: create a pollable version of each action
          }
        ...
        `}/>
        <CodeTab syntax="ES6" text={`
        ...
          load: (lore) => {
            // 1. Get the actions so we can make them pollable
            const actions = lore.actions;

            // 2. Get the application level config (defaults + config/polling.js)
            const appConfig = lore.config.polling;

            // 3. Get the model specific configs
            const modelConfigs = lore.loader.loadModels();

            // TODO: create a pollable version of each action
          }
        ...
        `}/>
        <CodeTab syntax="ESNext" text={`
        ...
          load: (lore) => {
            // 1. Get the actions so we can make them pollable
            const actions = lore.actions;

            // 2. Get the application level config (defaults + config/polling.js)
            const appConfig = lore.config.polling;

            // 3. Get the model specific configs
            const modelConfigs = lore.loader.loadModels();

            // TODO: create a pollable version of each action
          }
        ...
        `}/>
      </CodeTabs>

      <p>
        There's a few things happening here, so let's break down each line to discuss what this code means.
      </p>

      <h4>
        1. Actions
      </h4>
      <p>
        Because we declared a dependency on <code>bindActions</code>, we know that <code>lore.actions</code> is going to exist, and that it will
        be populated with all of the actions in the application, a structure that looks like this:
      </p>

      <Markdown text={`
      lore.actions = {
        ...
        tweet: {
          create: function() {...},
          destroy: function() {...},
          find: function() {...},
          get: function() {...},
          update: function() {...}
        },
        ...
      }
      `}/>

      <h4>
        2. App Config
      </h4>
      <p>
        The application configuration is composed before any actions load, and is composed of the hook defaults overridden
        with any values specified in files in the <code>config/</code> directory. Here we're accessing the config object, and extracting
        the portion of the configuration specific to <code>polling</code> behavior.
      </p>

      <h4>
        3. Model Configs
      </h4>
      <p>
        To get the model-specific configuration files, we're invoking <code>lore.loader.loadModels()</code>.
      </p>

      <p>
        The framework includes a series of loaders that convert project directories into objects. In this case, we want all
        the files in <code>src/models/</code>, since those are the config files we need to examine for <code>polling</code> overrides. To get them
        we can use the <code>models</code> loader invoked by calling <code>lore.loader.loadModels()</code>. This method will return an object that
        looks like this:
      </p>

      <Markdown text={`
      {
        currentUser: {/* files contents */},
        tweet: {/* files contents */},
        user: {/* files contents */}
      }
      `}/>

      <blockquote>
        <p>
          In this case, we don't want <code>lore.models</code> because that contains the actual Model classes the framework uses to make
          AJAX calls.
        </p>
        <p>
          The <code>models</code> hook uses this same loader to get the config files, and then converts those files into instances of
          Model stored under <code>lore.models</code>.
        </p>
      </blockquote>

      <h2>
        Next Steps
      </h2>
      <p>
        Next we're going to <Link to="../step-5/">implement the functionality of our hook</Link>.
      </p>
    </Template>
  )
};
