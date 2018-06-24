import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/routing/final.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Routing: Overview
      </h1>
      <p>
        In this section we'll learn about routing, which is a way to control what gets rendered based on the URL
        the user navigates to.
      </p>
      <p>
        To do that, we'll be using <a href="https://github.com/ReactTraining/react-router">react-router</a>,
        which is one of the core libraries that Lore is built on, and is included by default in all projects.
      </p>
      <blockquote>
        <p>
          You can learn more about Lore's use of React Router <Link to="/react-router/">here</Link>.
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
