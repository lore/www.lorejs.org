import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/forms/PatternConstruction';
import Markdown from '../../../../components/Markdown';
import CodeTabs from '../../../../components/CodeTabs';
import CodeTab from '../../../../components/CodeTab';
import QuickstartBranch from '../../../../components/QuickstartBranch';
import image from '../../../../assets/images/quickstart/setup/final.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Clone the Starter App
      </h1>
      <p>
        In this step we'll checkout the starter project and get it running.
      </p>
      <p>
        We'll be using a starter project so that we can focus on creating and refactoring the dialogs, and see
        them in a realistic context.
      </p>

      <h3>
        Clone the Project
      </h3>
      <p>
        To explain how the forms work, we're going to check out a project from GitHub that we'll build the forms
        into. The code we'll need is in a repository on GitHub
        under <a href="https://github.com/lore/lore-forms-pattern-tutorial">lore/lore-forms-pattern-tutorial</a>.
      </p>
      <p>
        Run this command to clone the server into your local environment:
      </p>

      <CodeTabs>
        <CodeTab title="SSH" active={true} text={`
        $ git clone git@github.com:lore/lore-forms-pattern-tutorial.git
        `}/>
        <CodeTab title="HTTPS" text={`
        $ git clone https://github.com/lore/lore-forms-pattern-tutorial.git
        `}/>
      </CodeTabs>

      <h3>
        Install Dependencies
      </h3>
      <p>
        Once the repo is cloned, navigate into the directory and install the dependencies:
      </p>

      <Markdown type="sh" text={`
      $ cd lore-forms-pattern-tutorial
      $ npm install
      `}/>

      <h3>
        Start the Webpack Development Server
      </h3>
      <p>
        With the dependencies are installed, run the application by typing <code>npm start</code>.
      </p>

      <Markdown type="sh" text={`
      $ npm start
      `}/>

      <p>
        A successful execution will produce output similar to this:
      </p>

      <Markdown type="sh" text={`
      webpack-dev-server --hot --env.webpack=development --env.lore=development

      build [==                  ] 10%
      Project is running at http://localhost:3000/

      webpack output is served from /
      404s will fallback to /index.html

      Build completed in 6.541s

      Hash: 199de1b7032b223700a9
      Version: webpack 3.12.0
      Time: 6712ms

                       Asset   Size       Chunks                    Chunk Names
        favicons/favicon.ico   33.3 kB            [emitted]
       favicon-manifest.json   613 bytes          [emitted]
      assets/images/logo.png   27.7 kB            [emitted]
              bundle.main.js   3.16 MB         0  [emitted]  [big]  main
            bundle.vendor.js   1.27 MB         1  [emitted]  [big]  vendor
                  index.html   4.41 kB            [emitted]

      ...

      webpack: Compiled successfully.
      `} />

      <p>
        This step invokes <a href="https://webpack.github.io/">Webpack</a> to build the application and starts a
        development server so you can view it in the browser. <strong>But don't view it just yet</strong> - the
        application won't work until we start the mock API server.
      </p>

      <h2>
        Next Steps
      </h2>
      <p>
        Next we're going to <Link to="../step-2/">start the mock API server</Link>.
      </p>
    </Template>
  )
};
