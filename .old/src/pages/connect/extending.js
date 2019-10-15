import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Connect';
import Markdown from '../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        Extending or Overriding Blueprints
      </h1>
      <p>
        This section explains how to create your own blueprints.
      </p>

      <h3>
        Blueprint Structure
      </h3>
      <p>
        All blueprints are a template that describe how to convert the arguments in the <code>getState</code> method
        call to a reducer lookup and an action call.
      </p>
      <p>
        You have no control over the template itself (without creating a custom <code>lore-hook-connect</code> hook),
        but you have complete control over the steps <em>within</em> each the template.
      </p>
      <p>
        This is the structure of a template.
      </p>
      <Markdown text={`
      export default {

        defaults: {
          // default arguments you want provided to all getState calls for this blueprint
        },

        verifyParams: function(params) {
          // determines whether the parameters passed to the getState call are valid
        },

        getReducerState: function(storeState) {
          // gets the subset of the store state we are interested in
        },

        getPayload: function(reducerState, params) {
          // gets the piece of data in the subset of the store state we want
        },

        callAction: function(action, params) {
          // controls how the action gets called
        }

      }
      `}/>

      <h3>
        Usage
      </h3>
      <p>
        To illustrate the interface, let's take a look at how you could add the <code>all</code> blueprint yourself.
      </p>
      <p>
        First, you need to define the blueprint in the <code>config/connect.js</code> file like this:
      </p>

      <Markdown text={`
      // config/connect.js
      import _ from 'lodash';

      export default {

        blueprints: {
          all: {
            defaults: {
              where: function(model) {
                return true;
              },
              sortBy: function(model) {
                return true;
              }
            },

            verifyParams: function(params) {
              if (!_.isFunction(params.where)) {
                throw new Error("The 'where' field must be a function");
              }

              if (!_.isFunction(params.sortBy)) {
                throw new Error("The 'sortBy' field must be a function");
              }
            },

            getAction: function(actions) {
              // no op
            },

            getPayload: function(reducerState, params) {
              var data = _
                .chain(reducerState)
                .transform(function(result, model) {
                  result.push(model);
                }, [])
                .filter(params.where)
                .sortBy(params.sortBy)
                .value();

              return {
                state: 'RESOLVED',
                data: data
              };
            }
          }
        }
      };
      `}/>

      <p>
        This blueprint defines two default parameters, <code>where</code> and <code>sortBy</code>, has no action, and
        iterates through the provided <code>reducerState</code>, filtering and sorting the results, which are then
        returned in a data structure with the state always set to <code>RESOLVED</code> (since it makes no server calls,
        the state is never transient).
      </p>
      <p>
        Next, you need to tell lore how to use it. To do that, we need to define a <code>reducerActionMap</code>,
        and we can use the new <code>*</code> syntax to say "this mapping applies to all models".
      </p>

      <Markdown text={`
      // config/connect.js
      export default {
        blueprints: {
          all: {
            // ... definition
          }
        },

        reducerActionMap: {
          '*.all': {
            action: null,
            reducer: '*.byCid',
            blueprint: 'filter'
          }
        }

      };
      `}/>
      <p>
        That's it! With those two changes, you can easily extend and override the behavior of
        the <code>connect</code> function and associated <code>getState</code> calls.
      </p>
    </Template>
  );
};
