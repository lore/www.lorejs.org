import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/authentication/final.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Authentication: Overview
      </h1>

      <p>
        In this section we'll integrate with a real authentication server, and restrict access to to the
        application until the user logs in.
      </p>
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
