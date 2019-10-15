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
        create
      </h1>
      <p>
        CLI command to extract the <Link to="/reducers/byId/">byId reducer</Link> for a given model into
        your project.
      </p>

      <h3>
        Usage
      </h3>

      <Markdown type="sh" text={`
      lore extract reducer [model]/byId
      `}/>

      <h3>
        Example
      </h3>

      <Markdown type="sh" text={`
      lore extract reducer post/byId
      `}/>

      <Markdown text={`
      import { ActionTypes } from 'lore-utils';
      import _ from 'lodash';

      /*
       * byId Reducer Blueprint
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

      function removeById(nextState, payload) {
        const id = payload && payload.id;
        if (id) {
          delete nextState[id];
        }
        return nextState;
      }

      export default function byId(state, action) {
        state = state || {};
        let nextState = _.assign({}, state);

        switch (action.type) {
          case ActionTypes.add('post'):
            return addOrUpdateById(nextState, action.payload);

          case ActionTypes.update('post'):
            return addOrUpdateById(nextState, action.payload);

          case ActionTypes.remove('post'):
            return removeById(nextState, action.payload);

          case ActionTypes.fetchPlural('post'):
            action.payload.data.forEach(function(datum) {
              addOrUpdateById(nextState, datum);
            });
            return nextState;

          default:
            return nextState
        }
      };
      `}/>
    </Template>
  )
};
