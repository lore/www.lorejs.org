import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/LoreHookModels';
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
          lore-hook-connections
        </li>
      </ul>
      <p>
        The <code>connections</code> dependency comes from the fact that this uses the connections in order to
        generates the properties to configure the models.
      </p>
    </Template>
  )
};
