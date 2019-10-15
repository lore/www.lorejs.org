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

      export default function(modelName, models, lore) {
        const Model = models[modelName];

        return {
          blueprint: 'update',

          model: Model,

          optimistic: {
            actionType: ActionTypes.update(modelName),
            payloadState: PayloadStates.UPDATING
          },

          onSuccess: {
            actionType: ActionTypes.update(modelName),
            payloadState: PayloadStates.RESOLVED
          },

          onError: {
            actionType: ActionTypes.update(modelName),
            payloadState: PayloadStates.ERROR_UPDATING
          },

          onNotFound: {
            actionType: ActionTypes.update(modelName),
            payloadState: PayloadStates.NOT_FOUND
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
      import { defaultOptions, validatePartialPairs } from '../utils';

      /*
       * Blueprint for Update method
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

        return function update(model, params) {
          return function(dispatch) {
            const proxyModel = new Model(model.data);
            proxyModel.set(params);

            proxyModel.save().then(function() {
              if (options.onSuccess) {
                let actions = [];

                if (options.normalize && options.normalize.getActions) {
                  // look through the model and generate actions for any attributes with
                  // nested data that should be normalized
                  actions = options.normalize.getActions(proxyModel);
                }

                dispatch({
                  type: options.onSuccess.actionType,
                  payload: _.merge(model, {
                    data: proxyModel.toJSON(),
                    state: options.onSuccess.payloadState
                  })
                });

                if (options.normalize && options.normalize.dispatchActions) {
                  // dispatch any actions created from normalizing nested data
                  options.normalize.dispatchActions(actions, dispatch);
                }
              }
            }).catch(function(response) {
              const error = response.data;

              if (response.status === 404) {
                if (options.onNotFound) {
                  if (options.onNotFound.beforeDispatch) {
                    options.onNotFound.beforeDispatch(response, [model]);
                  }

                  dispatch({
                    type: options.onNotFound.actionType,
                    payload: _.merge(model, {
                      state: options.onNotFound.payloadState,
                      error: error
                    })
                  });
                }
              } else if (options.onError) {
                if (options.onError.beforeDispatch) {
                  options.onError.beforeDispatch(response, [model, params]);
                }

                dispatch({
                  type: options.onError.actionType,
                  payload: _.merge(model, {
                    data: proxyModel.toJSON(),
                    state: options.onError.payloadState,
                    error: error
                  })
                });
              }
            });

            if (options.optimistic) {
              return dispatch({
                type: options.optimistic.actionType,
                payload: _.merge(model, {
                  data: proxyModel.toJSON(),
                  state: options.optimistic.payloadState
                })
              });
            }
          };
        };
      }
      `}/>
    </Template>
  )
};
