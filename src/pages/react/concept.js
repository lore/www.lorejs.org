import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/React';
import Markdown from '../../components/Markdown';
import CodeTabs from '../../components/CodeTabs';
import CodeTab from '../../components/CodeTab';
import QuickstartBranch from '../../components/QuickstartBranch';
import Video from '../../components/Video';

export default (props) => {
  return (
    <Template>
      <h1>
        React
      </h1>
      <p>
        This section documents the parts of Lore that are directly relevant to React. For now that means where the
        application gets mounted, how it gets mounted, and how the application refreshes when data changes.
      </p>

      <p>
        The video below is an excerpt from the full <Link to="/audience/introduction-to-lore/">Introduction to Lore</Link>
        video and provides a summary of how Lore helps with React.
      </p>

      <br/>

      <Video videoId="p3wFp2xJVkc" />

      <h2>
        Relevant Files
      </h2>
      <p>
        The files below are worth calling out as especially relevant to React in terms of where the app gets mounted,
        how/when it gets mounted, and how the application refreshes when data changes.
      </p>

      <h3>
        index.html
      </h3>
      <p>
        This is the HTML file that gets served to the browser.  It contains text that says "Loading..." that will disappear
        as soon as <code>bundle.js</code> has been downloaded and <code>lore.summon()</code> has finished setting up your application.
      </p>

      <p>
        It also contains a DOM element to hang dialogs from so they don't conflict with any CSS or JavaScript behaviors in
        the application (styling overrides or event bubbling cancellation).
      </p>

      <Markdown type="html" text={`
      <html>
      <head>
        <title>New Lore App</title>
        <style>
          .loading-text {
            text-align: center;
            line-height: 100vh;
            font-size: 32px;
            margin: 0;
            font-weight: bold;
            color: rgba(0,0,0,.54);
          }
        </style>
      </head>
      <body>
      <div id="root">
        <h1 class="loading-text">
          Loading...
        </h1>
      </div>
      <div id="dialog"></div>

      <script src="/dist/bundle.js"></script>
      </body>
      </html>
      `}/>

      <h3>
        index.js
      </h3>
      <p>
        This file kicks off lore, which compiles the application from explicit files and conventions, and then (once
        finished) mounts the application to the <code>#root</code> element in <code>index.html</code>. It also attaches the
        Lore singleton to the window, so you can access it from the command line in case you need to play with it or want to
        manually kick off actions or check the reducer state (through <code>lore.actions.xyz</code>, <code>lore.reducers.xyz</code>,
        <code>lore.models.xyz</code>, etc.)
      </p>

      <Markdown text={`
      import lore from 'lore';

      // Allows you to access your lore app globally as well as from within
      // the console. Remove this line if you don't want to be able to do that.
      window.lore = lore;

      // Summon the app!
      lore.summon();
      \`\`\`

      ### src/components/Master.js
      This component serves as the root of your application. It should also be the only component subscribed to the store,
      unless you really know what you're doing and need to modify the rendering flow for performance reasons.

      \`\`\`js
      import React from 'react';

      export default connect(function(getState, props) {
          return {};
        }, {subscribe: true})(
        createReactClass({
          displayName: 'Master',

          render: function() {
            return (
              <div>
                {React.cloneElement(this.props.children)}
              </div>
            );
          }
        })
      );
      `}/>
    </Template>
  );
};
