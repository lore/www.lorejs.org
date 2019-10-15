import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/LoreHookRouter';
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
          lore-hook-connect
        </li>
      </ul>
      <p>
        The <code>connect</code> dependency can be removed at this point, but is included (for the moment) due to
        legacy reasons to guarantee that <code>lore.connect</code> existed before the components where loaded (since
        loading the routes will load all components in the application).
      </p>
    </Template>
  )
};
