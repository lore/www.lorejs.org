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
        Step 6: Publishing the Hook
      </h1>
      <p>
        If you plan on <a href="https://docs.npmjs.com/audience/publishing-npm-packages">publishing your hook to
        npm</a>, then you'll need to build it before doing so.
      </p>

      <blockquote>
        <p>
          You can view the finished code for this step by checking out the <code>step-6</code> branch.
        </p>
      </blockquote>

      <h3>
        Build the Hook
      </h3>
      <p>
        Before you publish, you need to run <code>npm install</code> inside the hook to build it. Doing this will cause
        the code will be transpiled and placed into two directories; raw ES5 code will be placed in
        a <code>lib/</code> directory, and ES5 code that leaves the import/export statements intact (a requirement for
        tree-shaking) will be placed in an <code>es/</code> directory.
      </p>
      <p>
        The final folder structure (after build) will look like this:
      </p>

      <Markdown text={`
      polling-hook
      |-- es
      |   |--index.js
      |-- lib
      |   |--index.js
      |-- src
      |   |--index.js
      |-- test
      |   |-- test.spec.js
      |-- .babelrc
      |-- package.json
      |-- README.md
      `}/>

      <h2>
        Code Changes
      </h2>

      <p>
        Below is a list of files modified during this step. To be clear, these files are <em>auto-generated</em> when
        you run <code>npm install</code> inside the <code>polling-hook</code> directory. They are simply included
        here so that you can see some of the differences between the generated files.
      </p>

      <h3>
        polling-hook/es/index.js
      </h3>

      <Markdown text={`
      var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

      import _ from 'lodash';

      /**
       * Flatten javascript objects into a single-depth object
       * https://gist.github.com/penguinboy/762197
       */

      function flattenObject(ob) {
        var toReturn = {};

        for (var i in ob) {
          if (!ob.hasOwnProperty(i)) continue;

          if (_typeof(ob[i]) == 'object') {
            var flatObject = flattenObject(ob[i]);
            for (var x in flatObject) {
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
        setTimeout(function () {
          poll(action, config);
        }, config.interval);
      }

      function createPollingWrapper(action, config) {
        return function callAction() {
          // Create a version of the action that is bound to the arguments provided by the
          // user. This makes sure the hook will work with any arbitrary function - it simply
          // invokes that action with the provided arguments on the requested interval
          var boundAction = Function.prototype.apply.bind(action).bind(null, null, arguments);

          // Begin polling the action
          return poll(boundAction, config);
        };
      }

      export default {

        dependencies: ['bindActions'],

        defaults: {
          polling: {
            interval: 3000
          }
        },

        load: function load(lore) {
          // 1. Get the actions so we can make them pollable
          var actions = lore.actions;

          // 2. Get the application level config (defaults + config/polling.js)
          var appConfig = lore.config.polling;

          // 3. Get the model specific configs
          var modelConfigs = lore.loader.loadModels();

          // 4. Create a polling object that will mirror the structure of the actions object
          lore.polling = {};

          // 5. Iterate over each action and create a pollable version attached to the polling object
          _.mapKeys(flattenObject(actions), function (action, actionKey) {
            // 6. Get the model specific config
            var modelName = actionKey.split('.')[0];
            var modelConfig = modelConfigs[modelName];

            // 7. Combine values from both configs, giving priority to values in the model config
            var config = _.defaults({}, modelConfig.polling, appConfig);

            // 8. Generate the pollable version of the action
            _.set(lore.polling, actionKey, createPollingWrapper(action, config));
          });
        }

      };
      `}/>

      <h3>
        polling-hook/lib/index.js
      </h3>

      <Markdown text={`
      'use strict';

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

      var _lodash = require('lodash');

      var _lodash2 = _interopRequireDefault(_lodash);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      /**
       * Flatten javascript objects into a single-depth object
       * https://gist.github.com/penguinboy/762197
       */

      function flattenObject(ob) {
        var toReturn = {};

        for (var i in ob) {
          if (!ob.hasOwnProperty(i)) continue;

          if (_typeof(ob[i]) == 'object') {
            var flatObject = flattenObject(ob[i]);
            for (var x in flatObject) {
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
        setTimeout(function () {
          poll(action, config);
        }, config.interval);
      }

      function createPollingWrapper(action, config) {
        return function callAction() {
          // Create a version of the action that is bound to the arguments provided by the
          // user. This makes sure the hook will work with any arbitrary function - it simply
          // invokes that action with the provided arguments on the requested interval
          var boundAction = Function.prototype.apply.bind(action).bind(null, null, arguments);

          // Begin polling the action
          return poll(boundAction, config);
        };
      }

      exports.default = {

        dependencies: ['bindActions'],

        defaults: {
          polling: {
            interval: 3000
          }
        },

        load: function load(lore) {
          // 1. Get the actions so we can make them pollable
          var actions = lore.actions;

          // 2. Get the application level config (defaults + config/polling.js)
          var appConfig = lore.config.polling;

          // 3. Get the model specific configs
          var modelConfigs = lore.loader.loadModels();

          // 4. Create a polling object that will mirror the structure of the actions object
          lore.polling = {};

          // 5. Iterate over each action and create a pollable version attached to the polling object
          _lodash2.default.mapKeys(flattenObject(actions), function (action, actionKey) {
            // 6. Get the model specific config
            var modelName = actionKey.split('.')[0];
            var modelConfig = modelConfigs[modelName];

            // 7. Combine values from both configs, giving priority to values in the model config
            var config = _lodash2.default.defaults({}, modelConfig.polling, appConfig);

            // 8. Generate the pollable version of the action
            _lodash2.default.set(lore.polling, actionKey, createPollingWrapper(action, config));
          });
        }

      };
      module.exports = exports['default'];
      `}/>

      <h2>
        Next Steps
      </h2>
      <p>
        That's all for this tutorial.
      </p>
      <p>
        If you want to see a more full-featured version of this hook, check out the
        official <a href="https://github.com/lore/lore/tree/master/packages/lore-hook-polling">
        lore-hook-polling</a> hook.
      </p>
    </Template>
  )
};
