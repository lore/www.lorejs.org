import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Publishing';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        Removing Now Support
      </h1>
      <p>
        New Lore projects include support for deploy to <a href="https://zeit.co/now">Now</a>.
      </p>
      <p>
        The intention behind doing that is not to push the service, but to recognize that deploying your application
        is a critical step in application development, and it would feel like a large gap if the documentation for
        the framework didn't at least acknowledge and discuss the process.
      </p>
      <p>
        The reason Now is used to demonstrate that process is because it provides some excellent features for
        deploying static applications, which would make it a great choice (and a pleasant experience) for first-time
        developers.
      </p>
      <p>
        However, if you don't want to deploy your project to Now, you can easily remove that support by following the
        steps below:
      </p>

      <h3>
        1. Delete the .now Folder
      </h3>
      <p>
        At the root of your project is a folder named <code>.now</code> with a single file
        called <code>package.json</code> inside.
      </p>
      <Markdown text={`
      /.now
        |-- package.json
      ...
      `}/>
      <p>
        Delete this folder.
      </p>

      <h3>
        2. Remove Package.json Scripts
      </h3>
      <p>
        Next, open the <code>package.json</code> file, and locate these scripts:
      </p>
      <Markdown text={`
      "scripts": {
        "deploy": "npm run now:copy && now dist",
        "deploy:production": "npm run build:production && npm run deploy",
        "now:copy": "cp .now/package.json dist/package.json",
      },
      `}/>
      <p>
        Delete these scripts.
      </p>

      <h3>
        3. Delete now from devDependencies
      </h3>
      <p>
        Next, locate the <code>now</code> package in the <code>package.json</code> file:
      </p>
      <Markdown text={`
      "devDependencies": {
        "now": "^11.1.4",
      }
      `}/>
      <p>
        Delete this line.
      </p>

      <h3>
        Done!
      </h3>
      <p>
        All traces of Now have now been removed from your project.
      </p>
    </Template>
  )
};
