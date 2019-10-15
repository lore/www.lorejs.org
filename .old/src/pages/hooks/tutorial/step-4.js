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
        Step 4: Add Implementation
      </h1>

      <p>
        In this step we're going to implement the core functionality of our hook.
      </p>

      <blockquote>
        <p>
          You can view the finished code for this step by checking out the <code>step-4</code> branch.
        </p>
      </blockquote>

      <h3>
        Define the Interface
      </h3>
      <p>
        For this tutorial, we want to be able to continually fetch the array of tweets every X seconds. To do that, we're going
        to configure this hook so that it has an interface that looks like this:
      </p>

      <Markdown text={`
      lore.polling.tweet.find(query);
      `}/>

      <p>
        This interface will mean "invoke the tweet.find action with the provided query and continually invoke that action every
        X seconds".
      </p>

      <h3>
        Add Polling Function
      </h3>
      <p>
        Let's start by adding a function called <code>poll</code> that will repeatedly call an action. Add this function to the top of
        your <code>index.js</code> file:
      </p>

      <Markdown text={`
      function poll(action, config) {
        // invoke the action
        action();

        // wait the specified interval, then invoke the action again
        setTimeout(function() {
          poll(action, config);
        }, config.interval);
      }
      `}/>

      <p>
        This function will take an <em>action</em> and a <em>config</em> object, and will invoke that action
        every X milliseconds (determined by the <code>interval</code> value in the config object).
      </p>

      <h3>
        Add Polling Wrapper Function
      </h3>
      <p>
        You may notice that we don't provide any arguments to the <code>action</code> we invoke in
        the <code>poll</code> function, and that's intentional.
      </p>

      <p>
        This hook is designed to repeatedly call any action, but it doesn't know what the interface for any
        of those actions looks like. But luckily, through the magic of JavaScript, we also don't need to.
        The <code>action</code> we invoke above is actually a wrapper around the real action, where the
        arguments are already bound to it.
      </p>

      <p>
        To illustrate, add this function to your <code>index.js</code> file as well:
      </p>

      <Markdown text={`
      function createPollingWrapper(action, config) {
        return function callAction() {
          // Create a version of the action that is bound to the arguments provided by the
          // user. This makes sure the hook will work with any arbitrary function - it simply
          // invokes that action with the provided arguments on the requested interval
          const boundAction = Function.prototype.apply.bind(action).bind(null, null, arguments);

          // Begin polling the action
          return poll(boundAction, config);
        }
      }
      `}/>

      <p>
        This function might look strange, but it's pretty nifty. Let's say our application wants to poll for tweets by the
        user with the <code>userId</code> of 1. That call (given our interface defined above) would look like this:
      </p>

      <Markdown text={`
      lore.polling.tweet.find({
        userId: 1
      })
      `}/>

      <p>
        This function essentially creates a function (the <code>boundAction</code>) that looks like this:
      </p>

      <Markdown text={`
      function boundAction() {
        return lore.actions.tweet.find({
          userId: 1
        })
      }
      `}/>

      <p>
        It's that <code>boundAction</code> function that gets passed to (and invoked) by <code>poll</code>, and which
        already contains whatever arguments were originally provided by the user.
      </p>

      <h3>
        Add Function to flatten the Actions Object
      </h3>
      <p>
        The last helper function we're going to create will help us convert the actions object into an object that mirrors
        the structure, but where each function is a pollable wrapper over the action (what will ultimately be exposed by
        our hook).
      </p>

      <p>
        The actions object (<code>lore.actions</code>) for this application looks like this:
      </p>

      <Markdown text={`
      lore.actions = {
        currentUser: function() {...},
        tweet: {
          create: function() {...},
          destroy: function() {...},
          find: function() {...},
          get: function() {...},
          update: function() {...}
        },
        user: {
          create: function() {...},
          destroy: function() {...},
          find: function() {...},
          get: function() {...},
          update: function() {...}
        }
      }
      `}/>

      <p>
        To help us iterate through it, we're going to write a function that will flatten that object into a structure that
        looks like this:
      </p>

      <Markdown text={`
      lore.actions = {
        'currentUser': function() {...},
        'tweet.create': function() {...},
        'tweet.destroy': function() {...},
        'tweet.find': function() {...},
        'tweet.get': function() {...},
        'tweet.update': function() {...},
        'user.create': function() {...},
        // ... etc.
      }
      `}/>

      <p>
        Add this function to the <code>index.js</code> file:
      </p>

      <Markdown text={`
      /**
      * Flatten javascript objects into a single-depth object
      * https://gist.github.com/penguinboy/762197
      */

      function flattenObject(ob) {
        const toReturn = {};

        for (let i in ob) {
          if (!ob.hasOwnProperty(i)) continue;

          if ((typeof ob[i]) == 'object') {
            const flatObject = flattenObject(ob[i]);
            for (let x in flatObject) {
              if (!flatObject.hasOwnProperty(x)) continue;

              toReturn[i + '.' + x] = flatObject[x];
            }
          } else {
            toReturn[i] = ob[i];
          }
        }
        return toReturn;
      }
      `}/>

      <h3>
        Add Implementation
      </h3>
      <p>
        With those functions in place, we're ready to finish our hook. Update the <code>load</code> method to look like this:
      </p>

      <Markdown text={`
      ...
        load: function(lore) {
          // 1. Get the actions so we can make them pollable
          const actions = lore.actions;

          // 2. Get the application level config (defaults + config/polling.js)
          const appConfig = lore.config.polling;

          // 3. Get the model specific configs
          const modelConfigs = lore.loader.loadModels();

          // 4. Create a polling object that will mirror the structure of the actions object
          lore.polling = {};

          // 5. Iterate over each action and create a pollable version attached to the polling object
          _.mapKeys(flattenObject(actions), function(action, actionKey) {
            // 6. Get the model specific config
            const modelName = actionKey.split('.')[0];
            const modelConfig = modelConfigs[modelName];

            // 7. Combine values from both configs, giving priority to values in the model config
            const config = _.defaults({}, modelConfig.polling, appConfig);

            // 8. Generate the pollable version of the action
            _.set(lore.polling, actionKey, createPollingWrapper(action, config));
          });
        }
      ...
      `}/>

      <p>
        There's a few things happening here again, so let's break down each line to discuss what this code means.
      </p>

      <h4>
        4. Expose Hook Functionality
      </h4>
      <p>
        Some (though not all) hooks are intended to expose functionality for the user to leverage. The typical way of doing
        that is by modifying the <code>lore</code> object and attaching the functionality we want to expose. Since the inteface
        for this hook is going to access through calls like <code>lore.polling.tweet.find()</code> we're going to
        extend <code>lore</code> with a <code>polling</code> object we'll fill in shortly.
      </p>

      <h4>
        5. Iterate over the Actions
      </h4>
      <p>
        This line flattens the <code>actions</code> object (as described above), and then iterates through it, returning the action and
        the actionKey (such as <code>tweet.find</code>).
      </p>

      <h4>
        6. Extract Model Config
      </h4>
      <p>
        To respect the behavior of cascading overrides, we need to get the config file corresponding to the action we're
        mapping. We do this by splitting the actionKey (<code>tweet.find</code>) and grabbing the first token (<code>tweet</code>). When we
        get the config for the <code>tweet</code> model.
      </p>

      <h4>
        7. Generate Combined Config
      </h4>
      <p>
        This line creates the final config, starting with values defined in the <code>polling</code> section of the model config (if
        it exists) and then adding any values from <code>config/polling.js</code> that aren't defined (it's the same effect as using the
        model config to override values in the application level config).
      </p>

      <h4>
        8. Populate Polling Object
      </h4>
      <p>
        This line populates our <code>polling</code> object by creating an entry for the action name and assigning a
        value that is our pollable function. For example, given an <code>actionKey</code> of <code>tweet.find</code>, this
        line will nest the wrapped action at <code>lore.polling.tweet.find</code>.
      </p>

      <h3>
        Check In
      </h3>
      <p>
        With these changes in place, our hook is finished, and your <code>index.js</code> file should look like the
        code below.
      </p>

      <h2>
        Code Changes
      </h2>

      <p>
        Below is a list of files modified during this step.
      </p>

      <h3>
        polling-hook/src/index.js
      </h3>

      <Markdown text={`
      import _ from 'lodash';

      /**
       * Flatten javascript objects into a single-depth object
       * https://gist.github.com/penguinboy/762197
       */
      function flattenObject(ob) {
        const toReturn = {};

        for (let i in ob) {
          if (!ob.hasOwnProperty(i)) continue;

          if ((typeof ob[i]) == 'object') {
            const flatObject = flattenObject(ob[i]);
            for (let x in flatObject) {
              if (!flatObject.hasOwnProperty(x)) continue;

              toReturn[i + '.' + x] = flatObject[x];
            }
          } else {
            toReturn[i] = ob[i];
          }
        }
        return toReturn;
      }

      /**
       * Call the action (with the bound arguments) every [interval] milliseconds
       */
      function poll(action, config) {
        // invoke the action
        action();

        // wait the specified interval, then invoke the action again
        setTimeout(function() {
          poll(action, config);
        }, config.interval);
      }

      function createPollingWrapper(action, config) {
        return function callAction() {
          // Create a version of the action that is bound to the arguments provided by the
          // user. This makes sure the hook will work with any arbitrary function - it simply
          // invokes that action with the provided arguments on the requested interval
          const boundAction = Function.prototype.apply.bind(action).bind(null, null, arguments);

          // Begin polling the action
          return poll(boundAction, config);
        }
      }

      export default {

        dependencies: ['bindActions'],

        defaults: {
          polling: {
            interval: 3000
          }
        },

        load: function(lore) {
          // 1. Get the actions so we can make them pollable
          const actions = lore.actions;

          // 2. Get the application level config (defaults + config/polling.js)
          const appConfig = lore.config.polling;

          // 3. Get the model specific configs
          const modelConfigs = lore.loader.loadModels();

          // 4. Create a polling object that will mirror the structure of the actions object
          lore.polling = {};

          // 5. Iterate over each action and create a pollable version attached to the polling object
          _.mapKeys(flattenObject(actions), function(action, actionKey) {
            // 6. Get the model specific config
            const modelName = actionKey.split('.')[0];
            const modelConfig = modelConfigs[modelName];

            // 7. Combine values from both configs, giving priority to values in the model config
            const config = _.defaults({}, modelConfig.polling, appConfig);

            // 8. Generate the pollable version of the action
            _.set(lore.polling, actionKey, createPollingWrapper(action, config));
          });
        }

      }
      `}/>

      <h2>
        Next Steps
      </h2>
      <p>
        Next we're going to <Link to="../step-5/">integrate the hook into our application</Link>.
      </p>
    </Template>
  )
};
