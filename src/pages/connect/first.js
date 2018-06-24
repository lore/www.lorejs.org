import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Connect';
import Markdown from '../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        first
      </h1>
      <p>
        This blueprint returns the <strong>first</strong> resource matching the provided criteria.
      </p>
      <p>
        This is useful when you know an API has certain queries that will only ever return 0 or 1 results, but
        you do not know the <code>id</code> of the resource you're looking for (or whether it exists at all).
      </p>
      <p>
        Additionally, you could also use this blueprint to the return the <strong>most recent</strong> resource
        a user created, by saying "give me a list of data, sort by the date that data was created, and give
        me the first thing in that list".
      </p>

      <h3>
        Usage
      </h3>
      <p>
        Example usage is below:
      </p>
      <Markdown text={`
      import { connect } from 'lore-hook-connect';

      connect((getState, props) => {
        return {
          tweet: getState('tweet.first', {
            where: {
              user: 1
            },
            pagination: {
              _sort: 'createdAt',
              _order: 'desc'
            }
          })
        }
      })
      `}/>
      <p>
        When invoked, this blueprint will return one of three responses.
      </p>

      <h3>
        Response #1: Data is Fetching
      </h3>
      <p>
        If the query has never been asked, the response will look like this (because it's being retrieved from
        the API):
      </p>
      <Markdown text={`
      const tweet = {
        state: PayloadStates.FETCHING
      };
      `}/>

      <h3>
        Response #2: Data is Found
      </h3>
      <p>
        If the API response contains data, this will return the first resource in the list:
      </p>
      <Markdown text={`
      const tweet = {
        id: 1,
        cid: '1',
        state: PayloadStates.RESOLVED,
        data: {
          name: 'resource name'
        }
      };
      `}/>

      <h3>
        Response #3: Data is Not Found
      </h3>
      <p>
        If the API response contains NO data, this will return a resource declaring nothing was found, as well
        as the <code>meta</code> and <code>query</code> parameters from the collection that describe what question
        was asked.
      </p>
      <Markdown text={`
      const tweet = {
        id: undefined,
        cid: undefined,
        state: PayloadStates.NOT_FOUND,
        data: {},
        error: {},
        meta: { /* if applicable */ },
        query: { /* if applicable */ }
      };
      `}/>

      <h3>
        Blueprint
      </h3>
      <Markdown text={`
      export default _.defaultsDeep({

        defaults: {
          where: {},
          pagination: {}
        },

        getPayload: function(reducerState, params, reducer) {
          const jsonKey = toJsonKey(params);
          const state = reducerState[jsonKey];

          if (state) {
            if (state.state !== PayloadStates.FETCHING) {
              if (state.data.length === 0) {
                return _.assign({}, {
                  id: undefined,
                  cid: undefined,
                  state: PayloadStates.NOT_FOUND,
                  data: {},
                  error: {}
                }, _.pick(state, ['meta', 'query']));
              }
              return _.assign({}, state.data[0], _.pick(state, ['meta', 'query']));
            }
          }

          return state;
        },

        callAction: function(action, params) {
          return action(params.where, params.pagination).payload;
        },

      };
      `}/>
    </Template>
  );
};
