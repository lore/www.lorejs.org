import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Reducers';
import Markdown from '../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        byId
      </h1>
      <p>
        This blueprint...
      </p>

      <h3>
        Usage
      </h3>
      <p>
        Example usage is below:
      </p>
      <Markdown text={`
      const state = lore.store.getState();
      const tweet = state.tweet.byId[1];
      `}/>

      <h3>
        Blueprint
      </h3>
      <Markdown text={`
      import _ from 'lodash';

      /*
       * addOrUpdateById()
       *
       * Insert a model into this reducer's state, or update the data for
       * that model if it's already exists in state.
       */

      function addOrUpdateById(nextState, payload) {
        const id = payload && payload.id;
        let existingModel = null;

        if (id) {
          existingModel = nextState[id];
          if (existingModel) {
            nextState[id] = _.assign({}, payload, {
              cid: existingModel.cid
            });
          } else {
            nextState[id] = payload;
          }
        }
        return nextState;
      }

      /*
       * removeById()
       *
       * Remove a model from this reducer's state.
       */

      function removeById(nextState, payload) {
        const id = payload && payload.id;
        if (id) {
          delete nextState[id];
        }
        return nextState;
      }

      export default function(modelName) {
        return function byId(state, action) {
          state = state || {};
          const nextState = _.assign({}, state);

          switch (action.type) {
            case 'ADD_TWEET:
              return addOrUpdateById(nextState, action.payload);

            case 'UPDATE_TWEET:
              return addOrUpdateById(nextState, action.payload);

            case 'REMOVE_TWEET:
              return removeById(nextState, action.payload);

            case 'FETCH_TWEETS:
              action.payload.data.forEach(function(datum) {
                addOrUpdateById(nextState, datum);
              });
              return nextState;

            default:
              return nextState;
          }
        };
      }

      `}/>
    </Template>
  );
};
