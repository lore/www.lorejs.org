import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/data/final.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 1: Set the API Location
      </h1>

      <p>
        In this step we're going to set the location of the API server.
      </p>

      <QuickstartBranch branch="fetching.1" />

      <h3>
        The Config Folder
      </h3>
      <p>
        At the root of your project is a folder called <code>/config</code>. This folder contains
        files that expose all the configuration settings for Lore, so that you can tailor the framework's behavior
        to meet the specific needs of your application.
      </p>
      <p>
        Navigate into this folder and open a file called <code>connections.js</code>. Toward the top of
        the <code>connections</code> file you'll see a commented out line that looks like this:
      </p>

      <Markdown text={`
      // config/connections.js
      ...
        default: {

          // apiRoot: 'https://api.example.com',

          ...
        }
      ...
      `}/>

      <p>
        Commented out lines like this exist across all of the config files, and they reflect the built-in defaults
        that Lore uses. In this case, this comment tells us that Lore assumes the API is located
        at <code>https://api.example.com</code>.
      </p>

      <blockquote>
        <p>
          Lore is designed to interact with multiple API endpoints. The config settings for each API is called
          a <code>connection</code>. New projects begin configured for a single API, and this connection is
          named <code>default</code>.
        </p>
        <p>
          You can learn more about the <code>connections</code> file <Link to="/anatomy/config/connections/">here</Link>.
        </p>
      </blockquote>

      <p>
        Since this is not where our API is located, uncomment that line and change it
        to <code>http://localhost:1337</code>, so that Lore knows where the API can be found:
      </p>

      <Markdown text={`
      // config/connections.js
      ...
        apiRoot: 'http://localhost:1337',
      ...
      `}/>

      <p>
        With this change in place, we're almost ready to fetch data.
      </p>

      <h3>
        Visual Check-in
      </h3>

      <p>
        If everything went well, your application should now look like this. Exactly the same as before :)
      </p>

      <img className="drop-shadow" src={image} />

      <h2>
        Code Changes
      </h2>

      <p>
        Below is a list of files modified during this step.
      </p>

      <h3>
        config/connections.js
      </h3>

      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        export default {
          default: {
            apiRoot: 'http://localhost:1337'
          }
        };
        `}/>
        <CodeTab syntax="ES6" text={`
        export default {
          default: {
            apiRoot: 'http://localhost:1337'
          }
        }
        `}/>
        <CodeTab syntax="ESNext" text={`
        export default {
          default: {
            apiRoot: 'http://localhost:1337'
          }
        }
        `}/>
      </CodeTabs>

      <h2>
        Next Steps
      </h2>

      <p>
        Next we're going to <Link to="../step-2/">create our tweet model</Link>.
      </p>
    </Template>
  )
};
