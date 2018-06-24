import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/LoreHookReducers';
import Markdown from '../../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        nextState
      </h1>
      <p>
        Change what gets returned from the Redux store.
      </p>
      <p>
        This method is intended ONLY as a way to explore different solutions for addressing
        immutability concerns that arise when components have a direct reference to
        the data kept in the reducers.
      </p>
      <p>
        The default behavior in Redux is to provide components with a reference to the
        store state returned from the reducers. This poses a problem when a component
        tries to change that data, because it will modify the state of the store through
        that reference.
      </p>
      <p>
        To address this issue, the top-level reducer will invoke this method right before
        returning the next state, which gives you the ability to experiment with different
        solutions for this problem.
      </p>
      <p>
        The default behavior is to return a copy of the store state, which will prevent any
        component from being able to modify the "truth" kept in the reducers.
      </p>
      <p>
        Others solutions could be invoking <code>Object.freeze(nextState)</code> (which will throw an
        error if a component tries to modify the store state) or converting the store state
        to an Immutable object using <code>Immutable.map(nextState)</code> from Immutable.js.
      </p>
      <Markdown text={`
      nextState: function(nextState) {
        return _.cloneDeep(nextState);
      }
      `}/>
    </Template>
  )
};
