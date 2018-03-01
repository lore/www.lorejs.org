import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Webpack';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        Development Build
      </h1>
      <p>
        This section describes the process of creating a development build of your project.
      </p>
      <blockquote>
        <p>
          The intent of providing a development build is to enable you to quickly generate a production-like
          build, and verify it works, or work out any issues.
        </p>
        <p>
          Then, once everything looks good, you can run the <code>npm run build:production</code> command to create
          the final build, which will also minify and uglify your assets, before pushing to production.
        </p>
      </blockquote>

      <h3>
        The Command
      </h3>
      <p>
        If you open up the <code>package.json</code> file you'll see a <code>build:development</code> script that
        looks like this:
      </p>
      <Markdown text={`
      "scripts": {
        "build:development": "npm run clean && webpack --env.webpack=production --env.lore=development",
      },
      `}/>
      <p>
        This script is used when you want to create a development build of your project.
      </p>

      <h3>
        Creating the Build
      </h3>
      <p>
        Run this command to create a development build of your project:
      </p>
      <Markdown type="jsx" text={`
      npm run build:development
      `}/>
      <p>
        You should see output similar to this once it completes, which took 15 seconds for this example:
      </p>
      <Markdown text={`
      Build completed in 15.319s

      Hash: 2057e1ed42158f2fde1f
      Version: webpack 2.4.1
      Time: 15323ms
                                                              Asset       Size  Chunks                    Chunk Names
                              bundle.vendor.760c1aca95f06ca49cc5.js     884 kB       1  [emitted]  [big]  vendor
        favicons-226798db74552f749c8ab26e8bfae037/favicon-32x32.png    1.58 kB          [emitted]
        favicons-226798db74552f749c8ab26e8bfae037/favicon-96x96.png    5.87 kB          [emitted]
      favicons-226798db74552f749c8ab26e8bfae037/favicon-230x230.png      17 kB          [emitted]
              favicons-226798db74552f749c8ab26e8bfae037/favicon.ico    33.3 kB          [emitted]
                   favicons-226798db74552f749c8ab26e8bfae037/.cache  996 bytes          [emitted]
                                              favicon-manifest.json  877 bytes          [emitted]
                                bundle.main.11e83aeeb2a9a9714d66.js    5.17 MB       0  [emitted]  [big]  main
        favicons-226798db74552f749c8ab26e8bfae037/favicon-16x16.png  644 bytes          [emitted]
                               styles.main.11e83aeeb2a9a9714d66.css    1.62 kB       0  [emitted]         main
                            bundle.main.11e83aeeb2a9a9714d66.js.map    6.36 MB       0  [emitted]         main
                           styles.main.11e83aeeb2a9a9714d66.css.map  113 bytes       0  [emitted]         main
                          bundle.vendor.760c1aca95f06ca49cc5.js.map    1.04 MB       1  [emitted]         vendor
                                                asset-manifest.json  472 bytes          [emitted]
                                             assets/images/logo.png    27.7 kB          [emitted]
                                          assets/images/favicon.png     266 kB          [emitted]  [big]
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
        This process will:
      </p>

      <ul>
        <li>
          Bundle all JavaScript files into two files called  <code>bundle.js</code> and <code>vendor.js</code>
        </li>
        <li>
          Copy all files inside <code>/assets/images</code> to <code>/dist/assets/images</code>
        </li>
        <li>
          Generate a favicon from the image located at <code>/assets/images/favicon.png</code>
        </li>
        <li>
          Extract all styles in a single file called <code>styles.main.css</code>
        </li>
        <li>
          Add a unique cache-busting hash to each file, like <code>styles.main.9bf83a4f997884d3aef5.css</code>
        </li>
      </ul>
    </Template>
  );
};
