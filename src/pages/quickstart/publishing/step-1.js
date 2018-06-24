import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/filtering/final.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 1: Create Production Build
      </h1>

      <p>
        In this step we'll learn how to build the application for production.
      </p>

      <blockquote>
        <p>
          There is no branch for this step because it does not modify any code.
        </p>
      </blockquote>

      <h3>
        Build the Project
      </h3>
      <p>
        If you open up the <code>package.json</code> file you'll see two scripts related to building the project:
      </p>

      <Markdown text={`
      "scripts": {
        "build:development": "npm run clean && webpack --env.webpack=production --env.lore=development",
        "build:production": "npm run clean && webpack --env.webpack=production --env.lore=production -p",
        ...
      },
      `}/>

      <p>
        Build the application for production by running this command:
      </p>
      <Markdown type="jsx" text={`
      npm run build:production
      `}/>

      <p>
        You should see output similar to this once it completes, which took 49 seconds in this example:
      </p>

      <Markdown text={`
      Build completed in 49.237s

      Hash: e26aa54c61ee42b36fef
      Version: webpack 2.4.1
      Time: 49241ms
                                                              Asset       Size  Chunks                    Chunk Names
                              bundle.vendor.760c1aca95f06ca49cc5.js     197 kB       1  [emitted]         vendor
        favicons-226798db74552f749c8ab26e8bfae037/favicon-16x16.png  644 bytes          [emitted]
      favicons-226798db74552f749c8ab26e8bfae037/favicon-230x230.png      17 kB          [emitted]
        favicons-226798db74552f749c8ab26e8bfae037/favicon-96x96.png    5.87 kB          [emitted]
              favicons-226798db74552f749c8ab26e8bfae037/favicon.ico    33.3 kB          [emitted]
                   favicons-226798db74552f749c8ab26e8bfae037/.cache  996 bytes          [emitted]
                                              favicon-manifest.json  877 bytes          [emitted]
                                bundle.main.11e83aeeb2a9a9714d66.js    1.41 MB       0  [emitted]  [big]  main
        favicons-226798db74552f749c8ab26e8bfae037/favicon-32x32.png    1.58 kB          [emitted]
                               styles.main.11e83aeeb2a9a9714d66.css    1.15 kB       0  [emitted]         main
                            bundle.main.11e83aeeb2a9a9714d66.js.map    12.4 MB       0  [emitted]         main
                           styles.main.11e83aeeb2a9a9714d66.css.map  113 bytes       0  [emitted]         main
                          bundle.vendor.760c1aca95f06ca49cc5.js.map     2.1 MB       1  [emitted]         vendor
                                                asset-manifest.json  472 bytes          [emitted]
                                          assets/images/favicon.png     266 kB          [emitted]  [big]
                                             assets/images/logo.png    27.7 kB          [emitted]
                                                         index.html    5.27 kB          [emitted]
      `}/>

      <p>
        This build process will compile and minify all your assets and place them in a new folder
        called <code>/dist</code> at the root of your project.
      </p>

      <h3>
        Visual Check-in
      </h3>

      <p>
        If everything went well, your application should still look like this (exactly the same).
      </p>

      <img className="drop-shadow" src={image} />


      <h2>
        Code Changes
      </h2>

      <p>
        There are no code changes required for this step.
      </p>


      <h2>
        Next Steps
      </h2>

      <p>
        In the next section we'll <Link to="../step-2/">publish the application to the web</Link>.
      </p>
    </Template>
  )
};
