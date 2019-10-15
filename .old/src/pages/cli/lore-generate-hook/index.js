import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/LoreGenerateHook';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        hook
      </h1>
      <p>
        CLI command to create a new hook.
      </p>

      <h3>
        Usage
      </h3>

      <Markdown type="sh" text={`
      lore generate hook [hook-name]
      `}/>

      <h3>
        Example
      </h3>
      <p>
        Let's say you want to create a new hook called <code>lore-hook-example</code>. To do that, you would run
        this command:
      </p>

      <Markdown type="sh" text={`
      lore generate hook lore-hook-example
      `}/>

      <p>
        This would create a new folder named <code>lore-hook-example</code> and place all the files inside that
        reflect an empty hook. You can then register this hook in <code>index.js</code> while you develop it,
        and then (eventually, if you want) publish it to npm.
      </p>
    </Template>
  )
};
