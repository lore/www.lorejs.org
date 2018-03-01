import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/LoreHookPolling';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        Dependencies
      </h1>
      <p>
        This hook depends on:
      </p>
      <ul>
        <li>
          lore-hook-bind-actions
        </li>
      </ul>
      <p>
        The <code>bind-actions</code> dependency comes from the fact that this hook needs the actions to be bound
        in order to generates versions of them wrapped with polling logic.
      </p>
    </Template>
  )
};
