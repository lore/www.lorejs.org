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
        Step 1: Generate the Hook
      </h1>

      <p>
        In this step we're going to generate the custom hook.
      </p>

      <blockquote>
        <p>
          You can view the finished code for this step by checking out the <code>step-1</code> branch.
        </p>
      </blockquote>

      <h3>
        Run the Generator
      </h3>
      <p>
        The Lore CLI includes a number of commands that can generate files. Among them is a command that will generate starter
        code for a custom hook. Run this command to create a hook called <code>polling-hook</code>:
      </p>

      <Markdown type="sh" text={`
      lore generate hook polling-hook
      `}/>

      <p>
        This command will create a folder called <code>polling-hook</code> at the root of your project, and place the
        starter code for a hook inside that folder. The structure should look like this:
      </p>

      <Markdown text={`
      polling-hook
      |-- src
      |   |--index.js
      |-- test
      |   |-- test.spec.js
      |-- .babelrc
      |-- package.json
      |-- README.md
      `}/>

      <h3>
        Add the Hook
      </h3>
      <p>
        Now that we've generated the hook, let's add it to the project so it gets loaded when the application boots up.
      </p>

      <p>
        Open up <code>index.js</code> file at the root of your project and insert the <code>polling-hook</code> into
        the list of hooks. Note that we're using a relative path, since the hook is located within our project
        and <em>not</em> installed as an npm module.
      </p>

      <Markdown text={`
      // index.js
      import models from 'lore-hook-models';
      import polling from './polling-hook/src';
      import reducers from 'lore-hook-reducers';
      ...
      lore.summon({
        hooks: {
          ...
          models,
          polling,
          reducers,
          ...
        }
      });
      `}/>

      <p>
        With this change in place, the hook will now be loaded as the application boots up. To prove that, open up the
        file <code>polling-hook/src/index.js</code>. It currently it looks like this:
      </p>

      <Markdown text={`
      export default {

        dependencies: [],

        defaults: {},

        load: function(lore) {
          // do something
        }

      };
      `}/>

      <p>
        Modify the <code>load</code> function to look like this:
      </p>

      <Markdown text={`
      ...
        load: function(lore) {
          console.log('polling-hook loading!');
        }
      ...
      `}/>

      <p>
        Now open the developer tools in the browser and refresh the page. If you examine the console, you should see
        the phrase <code>polling-hook loading!</code> printed out.
      </p>

      <h2>
        Code Changes
      </h2>

      <p>
        Below is a list of files modified during this step.
      </p>

      <h3>
        polling-hook/src/index.js
      </h3>

      <Markdown text={`
      export default {

        dependencies: [],

        defaults: {},

        load: function(lore) {
          console.log('polling-hook loading!');
        }

      }
      `}/>

      <h2>
        Next Steps
      </h2>
      <p>
        Next we're going to <Link to="../step-2/">specify our hook dependencies</Link>.
      </p>
    </Template>
  )
};
