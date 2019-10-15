import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/LoreHookRedux';
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
          lore-hook-reducers
        </li>
      </ul>
      <p>
        The <code>reducers</code> dependency comes from the fact that this hook needs the reducers to exist before
        it can generate the Redux store.
      </p>
    </Template>
  )
};
