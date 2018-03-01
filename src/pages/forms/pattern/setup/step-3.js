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
        Review the Application
      </h1>
      <p>
        In this step we'll familiarize ourselves with the application we'll be using.
      </p>

      <h3>
        View the Application
      </h3>

      <p>
        Now that the application is built, and the mock server is running, you can view the application by navigating
        to <code>http://localhost:3000</code>. Once you do, you should see this:
      </p>

      <img className="drop-shadow" src={image} />

      <p>
        The application is pretty basic. There's a Feed that displays a list of tweets, and you can create new
        tweets, as well as edit and delete existing tweets.
      </p>
      <p>
        Additionally, when you create a tweet, it will immediately show up at the top of the Feed. There is
        no pagination or infinite scrolling for this application.
      </p>
      <p>
        Feel free to try out the application. Each of the actions you can perform (create, edit, and delete)
        will launch a dialog. The location of the code for each dialog is shown below:
      </p>
      <ul>
        <li>
          The <code>create</code> dialog is located at <code>src/dialogs/tweet/create/index.js</code>
        </li>
        <li>
          The <code>edit</code> dialog is located at <code>src/dialogs/tweet/update/index.js</code>
        </li>
        <li>
          The <code>delete</code> dialog is located at <code>src/dialogs/tweet/destroy/index.js</code>
        </li>
      </ul>
      <p>
        Currently each of the dialogs is very explicit. The code is all vanilla React - there are no libraries or
        abstractions of any kind. So if you're familiar with building forms in React, it will hopefully look
        familiar.
      </p>

      <h3>
        Tutorial Goal
      </h3>
      <p>
        Over the course of this tutorial, we're going to refactor each of those dialogs, starting with the
        create dialog.
      </p>
      <p>
        In the process, we will also gradually build up and explain the pattern that Lore uses for hooks
        like <code>lore-hook-forms-bootstrap</code> and <code>lore-hook-dialogs-bootstrap</code>, the latter of
        which is used in the Quickstart (though at the time there was no explanation of how it worked).
      </p>
      <p>
        Each of Lore's form-related hooks are able to generate some non-trivial forms and dialogs from a
        configuration object, and by the end of this tutorial you will understand how they work, and how to build
        your own version of one, should you choose to.
      </p>

      <h2>
        Next Steps
      </h2>
      <p>
        Next we're going to <Link to="../../create/step-1/">add a create dialog</Link>.
      </p>
    </Template>
  )
};
