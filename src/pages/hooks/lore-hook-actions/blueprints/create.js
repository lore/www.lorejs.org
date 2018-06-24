import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/LoreHookActions';
import Markdown from '../../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        create
      </h1>
      <p>
        The <code>create</code> blueprint...
      </p>

      <h3>
        Default Implementation
      </h3>
      <p>
        The default implementation looks like this:
      </p>
      <Markdown type="jsx" text={`
      import { ActionTypes, PayloadStates } from 'lore-utils';
      import normalize from '../normalize';

      export default function(modelName, models, options = {}, lore) {
        const Model = models[modelName];

        return {
          blueprint: 'create',

          model: Model,

          addCidToBody: options.addCidToBody || false,

          cidBodyAttributeName: options.cidField || 'cid',

          optimistic: {
            actionType: ActionTypes.add(modelName),
            payloadState: PayloadStates.CREATING
          },

          onSuccess: {
            actionType: ActionTypes.update(modelName),
            payloadState: PayloadStates.RESOLVED
          },

          onError: {
            actionType: ActionTypes.update(modelName),
            payloadState: PayloadStates.ERROR_CREATING,
            beforeDispatch: function(response, args) {
              // no op
            }
          },

          normalize: {

            // look through the model and generate actions for any attributes with
            // nested data that should be normalized
            getActions: function(model) {
              return normalize(lore, modelName).model(model);
            },

            // dispatch any actions created from normalizing nested data
            dispatchActions: function(actions, dispatch) {
              actions.forEach(dispatch);
            }

          }
        };
      }
      `}/>

      <Markdown text={`
      /* eslint consistent-return: "off" */

      import _ from 'lodash';
      import { payload } from 'lore-utils';
      import { defaultOptions, validatePartialPairs } from '../utils';

      /*
       * Blueprint for Create method
       */
      export default function(opts = {}) {
        // clone the options so we don't unintentionally modify them
        let options = _.cloneDeep(opts);

        options = _.defaultsDeep(options, defaultOptions);

        if (!options.model) {
          throw new Error('Must specify a model');
        }

        const Model = options.model;

        validatePartialPairs(options);

        return function create(params) {
          return function(dispatch) {
            const model = new Model(params);

            if (options.addCidToBody) {
              model.set(options.cidBodyAttributeName, model.cid);
            }

            model.save().then(function() {
              if (options.onSuccess) {
                let actions = [];

                if (options.normalize && options.normalize.getActions) {
                  // look through the model and generate actions for any attributes with
                  // nested data that should be normalized
                  actions = options.normalize.getActions(model);
                }

                dispatch({
                  type: options.onSuccess.actionType,
                  payload: payload(model, options.onSuccess.payloadState)
                });

                if (options.normalize && options.normalize.dispatchActions) {
                  // dispatch any actions created from normalizing nested data
                  options.normalize.dispatchActions(actions, dispatch);
                }
              }
            }).catch(function(response) {
              if (options.onError) {
                const error = response.data;

                if (options.onError.beforeDispatch) {
                  options.onError.beforeDispatch(response, [model]);
                }

                dispatch({
                  type: options.onError.actionType,
                  payload: payload(model, options.onError.payloadState, error)
                });
              }
            });

            if (options.optimistic) {
              return dispatch({
                type: options.optimistic.actionType,
                payload: payload(model, options.optimistic.payloadState)
              });
            }
          };
        };
      }
      `}/>
    </Template>
  )
};
