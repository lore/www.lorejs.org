import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/LoreHookActions';
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
          lore-hook-collections
        </li>
      </ul>
      <p>
        Since the actions all make network requests, they need the models and collections to exist first, since
        that's what they use for network calls.
      </p>
    </Template>
  )
};
