import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
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
      ｢wds｣: Project is running at http://localhost:3000/
      
      ｢wds｣: webpack output is served from /
      ｢wds｣: 404s will fallback to /index.html

      Build completed in 6.541s

      Hash: 199de1b7032b223700a9
      Version: webpack 4.35.0
      Time: 6712ms

                       Asset       Size        Chunks             Chunk Names
      assets/images/logo.png   27.1 KiB                [emitted]  
              bundle.main.js    461 KiB          main  [emitted]  main
      bundle.vendors~main.js   12.4 MiB  vendors~main  [emitted]  vendors~main  
        favicons/favicon.ico   32.5 KiB                [emitted]  
                  index.html   4.26 KiB                [emitted] 
                                                 
      Entrypoint main = bundle.vendors~main.js bundle.main.js
      
      ...
                                                 
      [wdm]: Compiled successfully.
      `} />

      <p>
        This step invokes <a href="https://webpack.js.org/">Webpack</a> to build the application and starts a
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
