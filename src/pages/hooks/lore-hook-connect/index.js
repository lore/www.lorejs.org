import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/LoreHookConnect';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        lore-hook-connect
      </h1>
      <p>
        Source code for this hook can be found on GitHub <a href="https://github.com/lore/lore/tree/master/packages/lore-hook-connect">at this link</a>.
      </p>

      <h2>
        Purpose
      </h2>

      <p>
        Provides a decorator for React components that allows components to specify which data they need and will automatically
        fetch that data if it doesn't exist.  The data is either returned from the store or triggers the action they fetches
        the data (and notifies the store when it arrives).
      </p>

      <h2>
        Config
      </h2>

      <Markdown text={`
      module.exports = {

        /**
         * Extend or override the built-in blueprints. This is helpful if you want to
         * change the interface for 'lore.connect'.
         *
         * Lore has three built-in blueprints:
         *
         *  - find      : used for calls like getState('tweet.find')
         *  - byId      : used for calls like getState('tweet.byId')
         *  - singleton : used for calls like getState('currentUser')
         */

        blueprints: {

          /**
           * As an example, the default syntax to fetch a model by id looks like this:
           *
           *   getState('tweet.byId', {
           *     id: 1
           *   })
           *
           * If you wanted to modify the syntax to use a 'where' clause (similar to the
           * 'find' blueprint) you could achieve that by overriding 'byId' blueprint with
           * the implementation below.
           *
           *   getState('tweet.find', {
           *     where: {
           *       id: 1
           *     }
           *   })
           */

          // byId: {
          //   defaults: {
          //     where: {
          //       id: null
          //     }
          //   },
          //
          //   verifyParams: function(params) {
          //     if (!params.where.id) {
          //       throw new Error('Missing required field: id');
          //     }
          //   },
          //
          //   getPayload: function(reducerState, params) {
          //     var key = params.where.id;
          //     return reducerState[key];
          //   },
          //
          //   callAction: function(action, params) {
          //     var id = params.where.id;
          //     return action(id).payload;
          //   }
          // }

        },

        /**
         * Add custom reducer-action maps here, or override existing ones
         *
         * This map determines what action gets called when the requested
         * reducer state does not exist. The blueprint is responsible for:
         *
         * 1. Validating the parameters passed to the getState method
         * 2. Extracting the desired state from the Redux Store
         * 3. Calling the action if that state does not exist
         */

        reducerActionMap: {

          /**
           * There are three blueprints built into the framework, with mappings
           * that look like this. These are examples of the mappings automatically
           * created by the framework based on conventions.
           *
           * You can reuse built-in blueprints by setting the value of blueprint
           * to the name of the blueprint you want to reuse.
           */

          // 'post.find': {
          //   action: 'post.find',
          //   reducer: 'post.find',
          //   blueprint: 'find'
          // },
          //
          // 'post.byId': {
          //   action: 'post.get',
          //   reducer: 'post.byId',
          //   blueprint: 'byId'
          // },
          //
          // 'currentUser': {
          //   action: 'currentUser',
          //   reducer: 'currentUser',
          //   blueprint: 'singleton'
          // },

          /**
           * If the built-in blueprints don't work for you, you can use a custom
           * blueprint by providing an object as the value of the blueprint. The
           * code below mimics the built-in singleton blueprint.
           */

          // 'currentUser': {
          //   action: 'currentUser',
          //   reducer: 'currentUser',
          //   blueprint: {
          //     getPayload: function(reducerState, params) {
          //       return reducerState;
          //     },
          //
          //     callAction: function(action, params) {
          //       return action().payload;
          //     }
          //   }
          // }

        }

      };
      `}/>

      <h2>
        Example Usage
      </h2>

      <p>
        The illustrate usage of the <code>lore.connect</code> method we'll walk through a series of scenarios.
      </p>

      <h4>
        Scenario 1
      </h4>

      <p>
        If the component doesn't need to be subscribed to changes in the store (which is the typical scenario) just return the
        data you want to be provided through <code>props</code> to the decorated Component:
      </p>

      <Markdown text={`
      lore.connect(function(getState, props) {
        return {
          user: getState('tweet.find', {
            where: {
              user: 1
            }
          })
        }
      })(Component)
      `}/>

      <h4>
        Scenario 2
      </h4>

      <p>
        If you <em>do</em> want to subscribe the component to changes in the Redux store (which should typically
        only be done for dialogs and the <code>Master</code> component) provide a second argument of options
        with <code>subscribe</code> set to <code>true</code>:
      </p>

      <Markdown text={`
      lore.connect(function(getState, props) {
        return {
          user: getState('tweet.find', {
            where: {
              user: 1
            }
          })
        }
      }, { subscribe: true })(Component)
      `}/>

      <h4>
        Scenario 3
      </h4>

      <p>
        If you want to <em>force</em> the component to fetch data on mount, provide a third options argument
        to the <code>getState</code> call setting <code>forceFetchOnMount</code> to <code>true</code>. This is
        useful when you need to create an experience that will always fetch data again when the user navigates
        away from a page and back (emulating the behavior you would experience in a typical server-side
        rendered application):
      </p>

      <Markdown text={`
      lore.connect(function(getState, props) {
        return {
          user: getState('tweet.find', {
            where: {
              user: 1
            }
          },{
            forceFetchOnMount: true
          })
        }
      }, { subscribe: true })(Component)
      `}/>
    </Template>
  )
};
