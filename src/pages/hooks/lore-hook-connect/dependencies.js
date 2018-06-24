import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/LoreHookConnect';
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
          lore-hook-actions
        </li>
      </ul>
      <p>
        The <code>actions</code> dependency comes from the fact that this hook needs to invoke actions.
      </p>
    </Template>
  )
};
