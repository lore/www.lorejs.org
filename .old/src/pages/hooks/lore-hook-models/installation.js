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
        Installation
      </h1>
      <p>
        First install the hook:
      </p>
      <Markdown text={`
      npm install lore-hook-models --save
      `}/>
      <p>
        Then add the hook to your <code>index.js</code> file.
      </p>
      <p>
        Because this hook generates a reducer, you also need to modify the dependencies array of
        the <code>redux</code> hook in order to make sure it runs <em>after</em> this hook, so that the reducer
        is guaranteed to exist when the Redux store is built.
      </p>

      <Markdown text={`
      // index.js
      import connections from 'lore-hook-connections';
      import models from 'lore-hook-models';

      lore.summon({
        hooks: {
          connections,
          models
        }
      });
      `}/>
    </Template>
  )
};
