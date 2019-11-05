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
      title="Actions"
      subtitle="Docs for creating Redux actions..."
    >
      <h2>
        Purpose
      </h2>
      <p>
        Actions refer to Redux Actions, and have the responsibility of creating and modifying the data that
        appears in the application. Most of the time this means they communicate with REST APIs to create,
        retrieve, update, and delete resources.
      </p>
      <p>
        In practice actions can be very repetitive to write, and have so much similarity it feels like
        writing boilerplate (cope that you generate by coping other code and making small modifications).
      </p>
      <p>
        A full explanation is a bit difficult for text, but if you watch this presentation you'll have a
        good idea of what that means.
      </p>

      <h2>
        Concept
      </h2>
      <p>
        Pretend you have a project with the following folder structure:
      </p>

      <Code type="sh" text={`
      /config
       |-- /env
            |-- production.js
       |-- auth0.js
       |-- local.js
       |-- sentry.js
      `} />

      <p>
        Using what we learned in Modules, about converting a directory into an object, we're going to
        convert the files in the root of the config directory into an object representing the base
        configuration (used in development) and then override those settings with any values provided in
        an environment-specific config located in <code>config/env</code>.
      </p>

      <p>
        To illustrate, pretend we perform those steps and end up with the following configs
      </p>

      <Code text={`
      const baseConfig = {
        auth0: {
          clientID: 'random-string',
          domain: 'example.auth0.com',
          redirectUri: 'http://localhost:3000/auth/callback',
        },
        sentry: {
          sentryDSN: 'https://example@sentry.io/12345678',
          environment: 'development',
          enabled: false
        }
      };
      
      const productionConfig = {
        auth0: {
          redirectUri: 'https://app.example.com/auth/callback',
        },
        sentry: {
          environment: 'production',
          enabled: true
        }
      };
      `}/>

      <p>
        The base config here mirrors development needs, and specifies information like the location of the
        authentication and error reporting servers. It also declares that error reporting should be turned
        off by default.
      </p>
      <p>
        The production config declares in production, the authentication server should redirect to a
        different URL after the user logs in, and that error reporting should be turned on.
      </p>

      <h2>
        Setup
      </h2>
      <p>
        Add this file to <code>.lore/config.js</code>, which will declares a function that accepts
        a set of config objects, and combines them using the rules we discussed above.
      </p>

      <h3>
        .lore/actions.js
      </h3>
      <Code text={`
      import _ from 'lodash';
      import { getNormalizer } from '@lore/normalize';
      
      export function getActions(config={}, resources={}, modules={}) {
        const {
          actions: {
            blueprints: _blueprints,
            normalize: _normalize,
            addCidToBody: _addCidToBody,
            cidBodyAttributeName: _cidBodyAttributeName
          }
        } = config;
      
        const { models, collections } = resources;
      
        /*
         * Generate default set of actions for all models using blueprints
         *
         * Note that this only creates actions for files in /collections
         * that have a corresponding model in /models
         */
      
        const actions = _.mapValues(models, function(Model, modelName) {
          const Collection = collections[modelName];
      
          const normalizer = getNormalizer(modelName, {
            models: models,
            collections: collections,
            normalize: _normalize,
            attributes: modules.models[modelName].attributes
          });
      
          return {
            create: _blueprints.create(modelName, Model, {
              addCidToBody: _addCidToBody,
              cidBodyAttributeName: _cidBodyAttributeName,
              normalizer
            }),
            destroy: _blueprints.destroy(modelName, Model, {
              normalizer
            }),
            get: _blueprints.get(modelName, Model, {
              normalizer
            }),
            find: _blueprints.find(modelName, Collection, {
              normalizer
            }),
            refetch: _blueprints.refetch(modelName, Collection, {
              normalizer
            }),
            update: _blueprints.update(modelName, Model, {
              normalizer
            })
          };
        });
      
        /*
         * Include any custom actions defined in src/actions and, when
         * the name matches one of the blueprints, use the custom
         * implementation instead
         */
      
        return _.defaultsDeep({}, modules.actions, actions);
      }
      `}/>

      <h2>
        Usage
      </h2>
      <p>
        With this function in place, we can now generate actions from our blueprints...
      </p>

      <Code text={`
      // NOTE: Requires models, collections, config, and modules...
      
      /*
       * Actions/Action Creators
       *
       * A set of functions that dispatch actions containing payloads of information
       * that describe state changes in the application.
       *
       * https://redux.js.org/basics/actions
       *
       * In our case, these functions invoke the models and collections created above
       * to communicate with the REST API(s), and emit actions that describe what's
       * happening (such as creating, updating, and fetching data).
       */
      
      import { getActions } from './.lore/actions';
      
      const actions = getActions(config, { models, collections }, {
        models: modules.models,
        actions: modules.actions
      });
      `}/>


    </Template>
  )
};
