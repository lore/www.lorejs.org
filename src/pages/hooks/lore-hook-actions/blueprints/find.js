import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/LoreHookActions';
import Markdown from '../../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        find
      </h1>
      <p>
        The <code>find</code> blueprint...
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

      export default function(collectionName, collections, lore) {
        const Collection = collections[collectionName];

        return {
          blueprint: 'find',

          collection: Collection,

          optimistic: {
            actionType: ActionTypes.fetchPlural(collectionName),
            payloadState: PayloadStates.FETCHING
          },

          onSuccess: {
            actionType: ActionTypes.fetchPlural(collectionName),
            payloadState: PayloadStates.RESOLVED
          },

          onError: {
            actionType: ActionTypes.fetchPlural(collectionName),
            payloadState: PayloadStates.ERROR_FETCHING
          },

          normalize: {

            // look through all models in the collection and generate actions for any attributes
            // with nested data that should be normalized
            getActions: function(collection) {
              return normalize(lore, collectionName).collection(collection);
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
      import { payloadCollection } from 'lore-utils';
      import { defaultOptions, validatePartialPairs } from '../utils';

      /*
       * Blueprint for Find method
       */

      export default function(opts = {}) {
        // clone the options so we don't unintentionally modify them
        let options = _.cloneDeep(opts);

        options = _.defaultsDeep(options, defaultOptions);

        if (!options.collection) {
          throw new Error('Must specify a collection');
        }

        const Collection = options.collection;

        validatePartialPairs(options);

        return function find(query = {}, pagination = {}) {
          return function(dispatch) {
            const collection = new Collection();

            const queryParameters = _.extend({}, query, pagination);

            const combinedQuery = {
              where: query,
              pagination: pagination
            };

            collection.fetch({
              data: queryParameters
            }).then(function() {
              if (options.onSuccess) {
                let actions = [];

                if (options.normalize && options.normalize.getActions) {
                  // look through all models in the collection and generate actions for any attributes
                  // with nested data that should be normalized
                  actions = options.normalize.getActions(collection);
                }

                dispatch({
                  type: options.onSuccess.actionType,
                  payload: payloadCollection(
                    collection,
                    options.onSuccess.payloadState,
                    null,
                    combinedQuery
                  ),
                  query: combinedQuery
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
                  options.onError.beforeDispatch(response, [query]);
                }

                dispatch({
                  type: options.onError.actionType,
                  payload: payloadCollection(
                    collection,
                    options.onError.payloadState,
                    error,
                    combinedQuery
                  ),
                  query: combinedQuery
                });
              }
            });

            if (options.optimistic) {
              return dispatch({
                type: options.optimistic.actionType,
                payload: payloadCollection(
                  collection,
                  options.optimistic.payloadState,
                  null,
                  combinedQuery
                ),
                query: combinedQuery
              });
            }
          };
        };
      }
      `}/>
    </Template>
  )
};
