import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/HookTutorial';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/hooks/hook-tutorial.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Setup: Clone Starter Project
      </h1>

      <p>
        In this step we'll clone and run repository we'll be adding a custom hook to.
      </p>

      <h3>
        Clone the Repo
      </h3>
      <p>
        First clone the repo containing the starter code for this tutorial.
      </p>

      <CodeTabs>
        <CodeTab title="SSH" active={true} text={`
        $ git clone git@github.com:lore/lore-custom-hook-tutorial-v0.13.git
        `}/>
        <CodeTab title="HTTPS" text={`
        $ git clone https://github.com/lore/lore-custom-hook-tutorial-v0.13.git
        `}/>
      </CodeTabs>

      <blockquote>
        <p>
          NOTE: The written code in this tutorial will be displayed in both ES5 and ES6 syntax, but the code in the
          repository was written in ES6. If that causes any trouble or confusion for you,
          please <a href="https://github.com/lore/lore/issues">file an issue on GitHub</a>.
        </p>
      </blockquote>

      <h3>
        Checkout "start" Branch
      </h3>
      <p>
        The code for the beginning of the tutorial is in the <code>start</code> branch, so check out that branch
        to follow along with the tutorial.
      </p>

      <Markdown text={`
      $ git checkout start
      `}/>

      <h3>
        Install the Dependencies
      </h3>
      <p>
        Next install the dependencies:
      </p>

      <Markdown text={`
      npm install
      `}/>

      <h3>
        Start the API Server
      </h3>
      <p>
        Just like the Quickstart, this project uses <code>json-server</code> to provide us with a real API
        interface. Run this to command to start the server:
      </p>

      <Markdown text={`
      npm run server
      `}/>

      <p>
        Once the server is running, you should be able to navigate to <code>http://localhost:1337</code> and see a
        list of API endpoints.
      </p>

      <h3>
        Build the Project
      </h3>
      <p>
        Finally, run this command to build the project and start the development server:
      </p>

      <Markdown text={`
      npm start
      `}/>

      <p>
        Once the project is built, open a web browser and visit <code>http://localhost:3000</code>.
      </p>

      <h3>
        Visual Check-in
      </h3>

      <p>
        If everything went well, you should see this in your browser.
      </p>

      <img className="drop-shadow" src={image} />

      <h2>
        Next Steps
      </h2>

      <p>
        Next we're going to <Link to="../step-1/">generate the hook</Link>.
      </p>

    </Template>
  )
};
