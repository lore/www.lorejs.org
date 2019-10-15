import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/LoreHookBindActions';
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
        <li>
          lore-hook-redux
        </li>
      </ul>
      <p>
        Because this hook generates actions, it needs the <code>models</code> and <code>collections</code> to exist
        before it runs.
      </p>
      <p>
        The <code>actions</code> dependency comes from the fact that the role of this hook is to bind the actions
        to the <code>dispatch()</code> method of the Redux store.
      </p>
      <p>
        The <code>redux</code> dependency comes from the fact that it needs the Redux store to exist before it
        can get the <code>dispatch()</code> method.
      </p>
    </Template>
  )
};
