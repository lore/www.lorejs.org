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
        Overview
      </h1>
      <p>
        Creating your own hooks for Lore is a great way to expand or modify the functionality provided by the
        framework, and this tutorial will teach you how to do that.
      </p>
      <p>
        To illustrate the process we're going to be using the application below, which displays a list of tweets. In
        this tutorial, we're going to implement a custom hook that provide basic polling behavior (repeatedly making
        an API call on a given interval) so that we can keep the data in sync across multiple browser tabs as we
        create and edit tweets.
      </p>

      <img className="drop-shadow" src={image} />

      <h2>
        Next Steps
      </h2>
      <p>
        Ready? Let's <Link to="./setup/">get started</Link>!
      </p>
    </Template>
  )
};
