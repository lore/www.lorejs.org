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
        Start the Mock API Server
      </h1>
      <p>
        In this step we'll start the mock API server, so that we can create, update and delete data.
      </p>

      <h3>
        Start the Mock API Server
      </h3>
      <p>
        Open a second command line interface, and start the mock server using this command:
      </p>

      <Markdown type="sh" text={`
      $ npm run server
      `}/>

      <p>
        Once the API server boots up, you should see output that looks like this:
      </p>

      <Markdown type="sh" text={`
      \{^_^}/ hi!

      Loading db.json
      Done

      Resources
      http://localhost:1337/users
      http://localhost:1337/tweets

      Home
      http://localhost:1337

      `} />

      <p>
        The output above tells us that the API server is available
        at <a href="http://localhost:1337" target="_blank">http://localhost:1337</a> and that we can obtain the list
        of <strong>users</strong> from <code>/users</code> and the list
        of <strong>tweets</strong> from <code>/tweets</code>.
      </p>

      <h2>
        Next Steps
      </h2>
      <p>
        Next we're going to <Link to="../step-3/">familiarize ourselves with the application</Link>.
      </p>
    </Template>
  )
};
