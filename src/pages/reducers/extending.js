import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Reducers';
import Markdown from '../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        Extending & Overriding Reducers
      </h1>

      <p>
        Given a project where a custom <code>tweet.count</code> reducer has been declared like so:
      </p>

      <Markdown text={`
      src
      |-reducers
        |-tweet
          |-count.js
      `}/>

      <p>
        This hook will find it and expose it on <code>lore.reducers.tweet.count</code> and make sure it's combined
        into the Redux store.
      </p>

      <p>
        Reducers should follow this format:
      </p>

      <Markdown text={`
      // file: src/reducers/tweet/count.js

      module.exports = function count(state, action) {
        state = state || 0;

        switch (action.type) {
          case ActionTypes.ADD_TWEET:
            return state + 1;

          default:
            return nextState
        }
      };
      `}/>
    </Template>
  );
};
