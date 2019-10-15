import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/LoreHookAuth';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        Purpose
      </h1>
      <p>
        Generates actions for retrieving and updating the current user, along with a reducer for storing the
        current user.
      </p>

      <h2>
        Installation
      </h2>
      <p>
        First install the hook:
      </p>
      <Markdown text={`
      npm install lore-hook-auth --save
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
      import auth from 'lore-hook-auth';
      import redux from 'lore-hook-redux';

      lore.summon({
        hooks: {
          auth,
          ...,
          redux: _.extend(redux, {
            dependencies: ['reducers', 'auth']
          }),
          ...
        }
      });
      `}/>

      <h2>
        Code
      </h2>
      <p>
        The source code for this hook can be
        found <a href="https://github.com/lore/lore/tree/master/packages/lore-hook-auth">here</a>.
      </p>
    </Template>
  )
};
