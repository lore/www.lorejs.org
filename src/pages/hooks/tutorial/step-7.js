import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/HookTutorial';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 7: Publishing the Hook
      </h1>
      <p>
        If you plan on <a href="https://docs.npmjs.com/audience/publishing-npm-packages">publishing your hook to
        npm</a>, then you'll need to build it before doing so.
      </p>

      <blockquote>
        <p>
          You can view the finished code for this step by checking out the <code>step-7</code> branch.
        </p>
      </blockquote>

      <h3>
        Build the Hook
      </h3>
      <p>
        Before you publish, you need to run <code>npm install</code> inside the hook to build it. Doing this will cause
        the code will be transpiled and placed into two directories; raw ES5 code will be placed in
        a <code>lib/</code> directory, and ES5 code that leaves the import/export statements intact (a requirement for
        tree-shaking) will be placed in an <code>es/</code> directory.
      </p>
      <p>
        The final folder structure (after build) will look like this:
      </p>

      <Markdown text={`
      polling-hook
      |-- es
      |   |--index.js
      |-- lib
      |   |--index.js
      |-- src
      |   |--index.js
      |-- test
      |   |-- test.spec.js
      |-- .babelrc
      |-- package.json
      |-- README.md
      `}/>

      <h3>
        Next Steps
      </h3>
      <p>
        That's all for this tutorial.
      </p>
      <p>
        If you want to see a more full-featured version of this hook, check out the
        official <a href="https://github.com/lore/lore/tree/master/packages/lore-hook-polling">
        lore-hook-polling</a> hook.
      </p>
    </Template>
  )
};
