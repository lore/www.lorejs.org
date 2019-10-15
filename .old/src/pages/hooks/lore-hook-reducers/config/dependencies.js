import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/LoreHookReducers';
import Markdown from '../../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        dependencies
      </h1>
      <p>
        Specify dependencies between child reducers, which will determine the
        order they are called in, as well as what data is passed in through the
        third 'options' argument:
      </p>
      <Markdown text={`
      function someReducer(state, action, options) {
        // your reducer code...
      }
      `}/>
      <p>
        The `options.nextState` property will contain the results of the child
        reducers you have declared a dependency on.
      </p>
      <p>
        The default dependency structure (based on the built-in blueprints) looks
        like this:
      </p>
      <Markdown text={`
      dependencies: {
        modelName: {
          byId: [],
          byCid: [],
          find: ['byId', 'byCid']
        }
      }
      `}/>
    </Template>
  )
};
