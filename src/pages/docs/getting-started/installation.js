import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Documentation';
import Markdown from '../../../components/Markdown';
import Video from '../../../components/Video';
import Code from '../../../components/Code';
import image from '../../../assets/images/quickstart/setup/final.png';

export default (props) => {
  return (
    <Template
      title="Installation"
      subtitle="Instructions for installing Lore and creating your first application."
    >
      <blockquote>
        Before you can use Lore, you will need to install Node. If you don't have it installed,
        see <Link to="/quickstart/misc/installing-node/">these instructions</Link>.
      </blockquote>

      <h2>
        Install Lore
      </h2>
      <p>
        To get started with Lore, first install the CLI (Command Line Interface) from <code>npm</code>:
      </p>

      <Code type="sh" text={`
      $ npm install -g @lore/cli
      `} />

      <p>
        Once the CLI is installed, you will have access to <code>lore</code> from the command line.
        Run <code>lore</code> to see a list of available commands:
      </p>

      <Code type="sh" text={`
      $ lore

      Usage: $ <command>

      Commands:
      new       Create a new application
      generate  Generate common project files


      Options:
      --version  Show version number                                       [boolean]
      --help     Show help                                                 [boolean]

      Please enter a valid command.
      `} />

      <h2>
        Create a new application
      </h2>
      <p>
        To create a new application, type <code>lore new</code> into the command line followed by the name of your
        application. For this example we are going to call our application <code>lore-quickstart</code>.
      </p>

      <Code type="jsx" text={`
      $ lore new lore-quickstart
      `} />

      <p>
        This will create a new directory called <code>lore-quickstart</code>, and place all the application files
        inside. You should see this message when the task completes.
      </p>

      <Code type="sh" text={`
      info:  Created a new Lore application 'lore-quickstart'
      `}/>

      <h2>
        Install application dependencies
      </h2>
      <p>
        Once the project is created, navigate into the project directory and install the dependencies.
      </p>

      <Code type="sh" text={`
      $ cd lore-quickstart
      $ npm install
      `}/>

      <p>
        Depending on your network connection, it may take a few minutes for this step to complete.
      </p>

      <h2>
        Run the application
      </h2>
      <p>
        With the dependencies installed, run the application by typing <code>npm start</code>.
      </p>

      <Code type="sh" text={`
      $ npm start
      `}/>

      <p>
        A successful execution will produce output similar to this:
      </p>

      <Code type="sh" text={`
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
        This step invokes <a href="https://webpack.js.org/">webpack</a> to build the application and starts a
        development server so you can view it in the browser.
      </p>

      <h2>
        View the Application
      </h2>

      <p>
        Once the application is built, you can view it by navigating to <code>http://localhost:3000</code>. Once you
        do, you should see this:
      </p>

      <img className="drop-shadow" src={image} />


    </Template>
  )
};
