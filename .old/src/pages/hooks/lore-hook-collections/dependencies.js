import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/LoreHookCollections';
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
        <li>
          lore-hook-models
        </li>
      </ul>
      <p>
        The <code>connections</code> dependency comes from the fact that this hook uses the connections configuration
        to generate the properties for the collections, so that different collections can be configured for
        different API endpoints.
      </p>
      <p>
        The <code>models</code> dependency comes from the fact that collections require a model in order to parse
        a server response correctly.
      </p>
    </Template>
  )
};
