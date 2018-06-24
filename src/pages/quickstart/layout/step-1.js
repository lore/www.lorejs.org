import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/layout/step-1.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 1: Add Bootstrap
      </h1>

      <p>
        In this step we're going to add <a href="https://getbootstrap.com/docs/3.3/">Bootstrap 3</a>, which we'll
        be using to style the application.
      </p>

      <QuickstartBranch branch="layout.1" />

      <h3>
        Install Bootstrap
      </h3>

      <p>
        To use Bootstrap, we first need to add the necessary CSS and JavaScript files.
      </p>
      <p>
        Open the <code>index.html</code> file at the root of your project and add the following stylesheet at
        the bottom of the <code>{`<head>`}</code> element.
      </p>

      <Markdown type="html" text={`
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
      `}/>

      <p>
        Then add these scripts at the bottom of the <code>{`<body>`}</code> tag.
      </p>

      <Markdown type="html" text={`
      <script src="https://code.jquery.com/jquery-2.2.1.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
      `}/>

      <h3>
        Change Page Title
      </h3>

      <p>
        Next, locate the <code>{`<title>`}</code> tag in the <code>{`<head>`}</code> and change it from <code>New Lore
        App</code> to <code>Lore Quickstart</code>, so that we have a more meaningful title displayed in the
        browser tab.
      </p>

      <Markdown type="html" text={`
      <title>Lore Quickstart</title>
      `}/>

      <h3>
        Visual Check-in
      </h3>

      <p>
        If everything went well, your application should now look like this.
      </p>

      <img className="drop-shadow" src={image} />

      <h2>
        Code Changes
      </h2>

      <p>
        Below is a list of files modified during this step.
      </p>

      <h3>
        index.html
      </h3>

      <Markdown text={`
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Lore Quickstart</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
        </head>
        <body>
          <div id="loading-screen">
            <div class="logo breathe"></div>
          </div>
          <div id="root"></div>
          <div id="dialog"></div>

          <script src="https://code.jquery.com/jquery-2.2.1.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
        </body>
      </html>
      `}/>

      <h2>
        Next Steps
      </h2>
      <p>
        Next we're going to <Link to="../step-2/">add some custom styles</Link>.
      </p>
    </Template>
  )
};
