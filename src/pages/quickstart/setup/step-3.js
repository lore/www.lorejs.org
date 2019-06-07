import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import image from '../../../assets/images/quickstart/setup/final.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 3: Run the Application
      </h1>
      <p>
        With the dependencies installed, run the application by typing <code>npm start</code>.
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
        development server so you can view it in the browser.
      </p>
      <blockquote>
        <p>
          You can learn more about Lore's webpack config <Link to="/anatomy/webpack-config/">here</Link>.
        </p>
      </blockquote>

      <h3>
        View the Application
      </h3>

      <p>
        Once the application is built, you can view it by navigating to <code>http://localhost:3000</code>. Once you
        do, you should see this:
      </p>

      <img className="drop-shadow" src={image} />

      <blockquote>
        <p>
          If you want to change the port the webpack dev server runs on, you can learn how to do
          that <Link to="/anatomy/package/">here</Link>.
        </p>
        <p>
          However, if you plan on following along with this Quickstart, it is strongly recommended that
          you <strong>do not change the port</strong>.
        </p>
        <p>
          Later in the Quickstart we'll be integrating with a real authentication server, and the application
          will need to be running on port 3000 to do so.
        </p>
      </blockquote>

      <h2>
        Next Steps
      </h2>
      <p>
        Next we're going to <Link to="/quickstart/setup/step-4/">setup the mock API server</Link> we'll be using for this Quickstart.
      </p>
    </Template>
  )
};
