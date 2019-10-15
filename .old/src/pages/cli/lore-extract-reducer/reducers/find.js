import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/LoreExtractReducer';
import Markdown from '../../../../components/Markdown';
import CodeTabs from '../../../../components/CodeTabs';
import CodeTab from '../../../../components/CodeTab';
import QuickstartBranch from '../../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        find
      </h1>
      <p>
        CLI command to extract the <Link to="/reducers/find/">find reducer</Link> for a given model into
        your project.
      </p>

      <h3>
        Usage
      </h3>

      <Markdown type="sh" text={`
      lore extract reducer [model]/find
      `}/>

      <h3>
        Example
      </h3>

      <Markdown type="sh" text={`
      lore extract reducer post/find
      `}/>

      <Markdown text={`
      import { ActionTypes } from 'lore-utils';
      import _ from 'lodash';

      /*
       * find Reducer Blueprint
       */

      function mergeDataAndIntersectWithDictionaryKeys(oldData, newData, dictionary) {
        const ids = _.map(oldData, 'id');
        const newIds = _.map(newData, 'id');
        const combinedIds = _.union(ids, newIds);
        const dictionaryKeys = _.keys(dictionary);

        // If any ids are Numbers, convert them to Strings so we can compare equality
        // with the dictionary keys
        const combinedIdsAsStrings = combinedIds.map(function(id) {
          return id.toString();
        });

        const idsInDictionary = _.intersection(combinedIdsAsStrings, dictionaryKeys);
        return idsInDictionary.map(function(id) {
          return dictionary[id];
        });
      }

      const initialState = {};

      export default function find(state, action, options) {
        state = state || initialState;

        let nextState = _.assign({}, state);
        const byId = options.nextState.byId;
        const byCid = options.nextState.byCid;

        switch (action.type) {
          case ActionTypes.fetchPlural('post'): {
            const query = JSON.stringify(action.query);
            nextState[query] = nextState[query] || {};
            nextState[query] = _.assign({}, action.payload, {
              data: mergeDataAndIntersectWithDictionaryKeys(
                nextState[query].data,
                action.payload.data,
                byId
              )
            });
            return nextState;
          }

          case ActionTypes.update('post'): {
            nextState = _.mapValues(nextState, function(collection, key) {
              collection.data = collection.data.map(function(datum) {
                if (datum.id === action.payload.id) {
                  return action.payload;
                }
                return datum;
              });

              return collection;
            });
            return nextState;
          }

          case ActionTypes.remove('post'): {
            nextState = _.mapValues(nextState, function(collection, key) {
              collection.data = collection.data.map(function(datum) {
                if (datum.id === action.payload.id) {
                  return action.payload;
                }
                return datum;
              });

              return collection;
            });
            return nextState;
          }

          default:
            return nextState
        }
      };
      `}/>
    </Template>
  )
};
