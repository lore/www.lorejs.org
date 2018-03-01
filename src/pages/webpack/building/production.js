import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Webpack';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        Production Build
      </h1>
      <p>
        This section describes the process of creating a development build of your project.
      </p>

      <h3>
        The Command
      </h3>
      <p>
        If you open up the <code>package.json</code> file you'll see a <code>build:production</code> script that
        looks like this:
      </p>
      <Markdown text={`
      "scripts": {
        "build:production": "npm run clean && webpack --env.webpack=production --env.lore=production -p",
      },
      `}/>
      <p>
        This script is used when you want to create a production build of your project.
      </p>

      <h3>
        Creating the Build
      </h3>
      <p>
        Run this command to create a development build of your project:
      </p>
      <Markdown type="jsx" text={`
      npm run build:production
      `}/>
      <p>
        You should see output similar to this once it completes, which took 49 seconds for this example:
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

      <h3>
        What does it do?
      </h3>
      <p>
        Running this command will compile your project and place all the assets in a new folder
        named <code>/dist</code> at the root of your project.
      </p>
      <p>
        This process will do everything the <Link to="/webpack/building/development/">development build</Link> does,
        but will also:
      </p>
      <ul>
        <li>
          Minify and uglify all assets, to reduce their file sizes.
        </li>
      </ul>
      <p>
        The minification and ugliciation process can take a significant amount of time to complete depending on the
        size of your project, which is why the development build exists. But otherwise the process and generated
        files are identical.
      </p>
    </Template>
  );
};
