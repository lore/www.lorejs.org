import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/LoreHookWebsockets';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        lore-hook-websockets
      </h1>
      <p>
        Source code for this hook can be found on
        GitHub <a href="https://github.com/lore/lore/tree/master/packages/lore-hook-websockets">at this link</a>.
      </p>

      <h2>
        Purpose
      </h2>
      <p>
        This hook can be used to define a custom implementation
        of the <a href="https://github.com/lore/lore/tree/master/packages/lore-websockets">lore-websockets</a> library.
      </p>
    </Template>
  )
};
