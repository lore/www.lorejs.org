import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/LoreGenerateReducer';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        generate reducer
      </h1>
      <p>
        CLI command to add an <Link to="/reducers/">Reducer</Link> to your project.
      </p>

      <h3>
        Usage
      </h3>

      <Markdown type="sh" text={`
      lore generate reducer [reducer-name]
      `}/>

      <h3>
        Example
      </h3>
      <Markdown type="sh" text={`
      lore generate reducer example
      `}/>
      <p>
        The command above will generate a file located at <code>src/reducers/example.js</code> that looks like this:
      </p>
      <Markdown text={`
      import _ from 'lodash';
      import ActionTypes from '../constants/ActionTypes';
      import PayloadStates from '../constants/PayloadStates';

      const initialState = {
        state: PayloadStates.INITIAL_STATE,
        data: []
      };

      export default function(state = initialState, action) {
        let nextState = _.assign({}, state);

        switch (action.type) {
          // case ActionTypes.FOUND_SOMETHING_COOL:
          //   // push the cool things into the array of other cool things
          //   return _.assign(nextState, {
          //      data: nextState.data.concat(action.payload.data)
          //    });

          default:
            return nextState
        }
      }
      `}/>
    </Template>
  )
};
