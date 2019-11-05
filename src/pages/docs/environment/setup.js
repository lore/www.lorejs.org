import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Documentation';
import Markdown from '../../../components/Markdown';
import Video from '../../../components/Video';
import Code from '../../../components/Code';
import image from '../../../assets/images/quickstart/setup/final.png';

export default (props) => {
  return (
    <Template
      title="Setup"
      subtitle="Install and configure @lore/environment."
    >
      <h2>
        1. Install @lore/environment via npm
      </h2>
      <p>
        Add @lore/environment to your package.json.
      </p>
      <Code text={`
      npm install --save @lore/environment
      `}/>

      <h2>
        2. Create getEnvironment() function
      </h2>
      <p>
        Create a folder called <code>.lore</code> at the root of your project and create
        a file inside called <code>environment.js</code>. Paste in the following code:
      </p>

      <h3>
        .lore/environment.js
      </h3>
      <Code text={`
      /**
       * Returns the environment the application should be configured
       * for (production, development, test, etc.)
       *
       * @param {String} environment
       * @returns {string} The environment mode
       */
      
      export function getEnvironment(environment = '') {
        return environment || process.env.LORE_ENV || 'development';
      }
      `}/>

      <p>
        This code gives us a function called <code>getEnvironment</code> that will return a string declaring
        the current environment with the following behaviors:
      </p>

      <ul className="list-decimal pl-8">
        <li className="mb-2">
          If invoked with a value, like <code>getEnvironment('staging')</code>, it will return that value,
          which allows us to set the environment in code. This can be helpful for debugging, or for
          forcing code to behave in a specific way regardless of the real environment it's running in.
        </li>
        <li className="mb-2">
          If no value is provided, it allows us to set the environment via an environment variable
          called <code>LORE_ENV</code>. This allows us to create <code>npm</code> scripts that we can
          run from our development machines to build the application for other environments and remotely
          deploy to them.
        </li>
        <li className="mb-2">
          If no value is provided, the environment will default to <code>development</code>.
        </li>
      </ul>

    </Template>
  )
};
