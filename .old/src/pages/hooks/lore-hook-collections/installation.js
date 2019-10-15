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
        Installation
      </h1>
      <p>
        First install the hook:
      </p>
      <Markdown text={`
      npm install lore-hook-collections --save
      `}/>
      <p>
        Then add the hook to your <code>index.js</code> file.
      </p>
      <Markdown text={`
      // index.js
      import collections from 'lore-hook-collections';
      import connections from 'lore-hook-connections';
      import models from 'lore-hook-models';

      lore.summon({
        hooks: {
          collections,
          connections,
          models
        }
      });
      `}/>
    </Template>
  )
};
