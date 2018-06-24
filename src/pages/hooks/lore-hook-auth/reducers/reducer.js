import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/LoreHookAuth';
import Markdown from '../../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        reducer
      </h1>
      <p>
        The <code>reducer</code> ...
      </p>

      <h3>
        Default Implementation
      </h3>
      <p>
        The default implementation looks like this:
      </p>
      <Markdown type="jsx" text={`
      import { ActionTypes, PayloadStates } from 'lore-utils';
      import _ from 'lodash';

      export default function(modelName) {
        const initialState = {
          state: PayloadStates.INITIAL_STATE
        };

        return function authHookReducer(state = initialState, action) {
          const nextState = _.assign({}, state);

          switch (action.type) {
            case ActionTypes.add(modelName):
              return action.payload;

            case ActionTypes.update(modelName):
              return action.payload;

            case ActionTypes.remove(modelName):
              return action.payload;

            case ActionTypes.RESET_STORE:
              return initialState;

            default:
              return nextState;
          }
        };
      }
      `}/>
    </Template>
  )
};
