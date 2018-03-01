import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/LoreHookAuth';
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
          lore-hook-models
        </li>
        <li>
          lore-hook-actions
        </li>
        <li>
          lore-hook-reducers
        </li>
        <li>
          lore-hook-connect
        </li>
      </ul>
      <p>
        Because this hook generates actions, it needs the <code>models</code> and <code>collections</code> to exist
        before it runs.
      </p>
      <p>
        The <code>actions</code> dependency comes from the fact that it is extending the default actions, and so
        it expects <code>lore.actions</code> to exist before it runs.
      </p>
      <p>
        The <code>reducers</code> dependency comes from the fact that it is extending the default reducers, and so
        it expects <code>lore.reducers</code> to exist before it runs.
      </p>
      <p>
        The <code>connect</code> dependency comes from the fact that it modifies the <code>reducerActionMap</code> in
        for the <code>connect</code> decorator, in order to link the <code>currentUser.get</code> action that it
        generates to the <code>currentUser</code> reducer that it generates.
      </p>
    </Template>
  )
};
