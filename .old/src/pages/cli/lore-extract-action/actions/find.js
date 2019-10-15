import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/LoreExtractAction';
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
        CLI command to extract the <Link to="/actions/find/">find action</Link> for a given model into
        your project.
      </p>

      <h3>
        Usage
      </h3>

      <Markdown type="sh" text={`
      lore extract action [model]/find
      `}/>

      <h3>
        Example
      </h3>

      <Markdown type="sh" text={`
      lore extract action post/find
      `}/>

      <Markdown text={`
      import _ from 'lodash';
      import { ActionTypes, PayloadStates, payloadCollection, normalize } from 'lore-utils';

      /*
       * Blueprint for Find method
       */
      export default function find(query = {}, pagination) {
        return function(dispatch) {
          const Collection = lore.collections.post;
          const collection = new Collection();

          const queryParameters = _.extend({}, query, pagination);

          const combinedQuery = {
            where: query,
            pagination: pagination
          };

          collection.fetch({
            data: queryParameters
          }).then(function() {
            // look through all models in the collection and generate actions for any attributes
            // with nested data that should be normalized
            const actions = normalize(lore, 'post').collection(collection);

            dispatch({
              type: ActionTypes.fetchPlural('post'),
              payload: payloadCollection(collection, PayloadStates.RESOLVED, null, combinedQuery),
              query: combinedQuery
            });

            // dispatch any actions created from normalizing nested data
            actions.forEach(dispatch);
          }).catch(function(response) {
            const error = response.data;

            dispatch({
              type: ActionTypes.fetchPlural('post'),
              payload: payloadCollection(collection, PayloadStates.ERROR_FETCHING, error, combinedQuery),
              query: combinedQuery
            });
          });

          return dispatch({
            type: ActionTypes.fetchPlural('post'),
            payload: payloadCollection(collection, PayloadStates.FETCHING, null, combinedQuery),
            query: combinedQuery
          });
        };
      };
      `}/>
    </Template>
  )
};
