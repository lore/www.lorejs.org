import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/server/final.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Server Swap: Overview
      </h1>

      <p>
        In this section we'll replace our mock API server with a real one built
        on <a href="http://sailsjs.com/">Sails.js</a>. Doing this will introduce some breaking API changes, so
        we'll also learn how to resolve those issues.
      </p>

      <blockquote>
        <p>
          To provide a more realistic experience going forward, the API server we'll be setting up <strong>has a
          500ms delay</strong> built-in to all requests.
        </p>
        <p>
          This will make it easier for us to see loading experiences in the application, and later, once we
          start creating data, to see the delay between the time we create that data and when the server confirms
          its creation.
        </p>
      </blockquote>

      <p>
        At the end of this section your application will look like this:
      </p>

      <img className="drop-shadow" src={image} />

      <h2>
        Next Steps
      </h2>

      <p>
        Ready? Let's <Link to="../step-1/">get started</Link>!
      </p>
    </Template>
  )
};
