import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/LoreGenerateAction';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        generate action
      </h1>
      <p>
        CLI command to add an <Link to="/actions/">Action</Link> to your project.
      </p>

      <h3>
        Usage
      </h3>

      <Markdown type="sh" text={`
      lore generate action [action-name]
      `}/>

      <h3>
        Example
      </h3>
      <Markdown type="sh" text={`
      lore generate action example
      `}/>
      <p>
        The command above will generate a file located at <code>src/actions/example.js</code> that looks like this:
      </p>
      <Markdown text={`
      export default function(params) {
        return function(dispatch) {
          // return dispatch({
          //   type: 'ACTION_NAME',
          //   payload: {}
          // });
        };
      };
      `}/>
    </Template>
  )
};
