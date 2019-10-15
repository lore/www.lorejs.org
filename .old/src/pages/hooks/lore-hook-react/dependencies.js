import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/LoreHookReact';
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
          lore-hook-react
        </li>
        <li>
          lore-hook-router
        </li>
      </ul>
      <p>
        The <code>react</code> and <code>router</code> dependencies comes from the fact that this hook generates
        and mounts the root node of the application, which means it needs access to
        the <code>Provider</code> from from <code>redux</code> and
        the <code>Router</code> from <code>react-router</code>.
      </p>
    </Template>
  )
};
