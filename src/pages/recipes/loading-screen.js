import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Recipes';
import Markdown from '../../components/Markdown';
import CodeTabs from '../../components/CodeTabs';
import CodeTab from '../../components/CodeTab';
import QuickstartBranch from '../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        Loading Screen
      </h1>
      <p>
        At the root of your project you should see an <code>index.html</code> file. This file is what gets served to the
        browser, and should currently look like this:
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

      <p>
        The #root element is where your application is going to be attached. The default <em>style</em> tag
        and <strong>.loading-text</strong> element are there to serve as a minimalistic splash screen while
        the browser fetches the JavaScript files. It's intended to be a more meaningful alternative to the
        standard blank white page. The loading screen will look like this:
      </p>

      <img src="/assets/images/recipes/loading-screen.png" alt="Loading Screen" style={{ width: '100%' }} />

      <h1>
        Todo
      </h1>
      <p>
        Update this to show how to add a more interesting loading screen.
      </p>
    </Template>
  )
};
