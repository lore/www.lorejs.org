import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Code from '../../../components/Code';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/authentication/step-1.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 2: Add Auth0 Config
      </h1>

      <p>
        In this step we're going to configure <a href="https://auth0.com/">Auth0</a>, which we'll be using as
        the authentication service for this Quickstart.
      </p>

      <QuickstartBranch branch="authentication.2" />

      <h3>
        Install Auth0 Package
      </h3>
      <p>
        Run this command to install <code>auth0-js</code>, a library we'll be using to manage the authentication
        flow for our application.
      </p>

      <Code type="sh" text={`
      npm install auth0-js --save
      `}/>

      <h3>
        Add Auth0 Config
      </h3>
      <p>
        Once we integrate Auth0, the user will be redirected to an Auth0 server to login, and then redirected
        back to our application once they do. In order to accomplish this, our application is going to need to
        know a few things first:
      </p>

      <ol>
        <li>The domain where the authentication server is located</li>
        <li>The client ID for the application we want the user to log in to</li>
        <li>The URL the user should be redirected to after they log in</li>
      </ol>

      <p>
        We're going to add these values to the application configuration, but instead of adding them to an existing
        config file, we're going to create a new one just for Auth0.
      </p>
      <p>
        Create a new file in <code>/config</code> called <code>auth0.js</code> and paste in this content:
      </p>

      <Code type="jsx" text={`
      // config/auth0.js
      export default {
        domain: 'lorejs.auth0.com',
        clientID: 'XFcYHKv1NXCVrbtSaf0JZPRLtYj5UZ7E',
        redirectUri: 'http://localhost:3000/auth/callback',
        audience: 'https://lorejs.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: 'openid'
      }
      `}/>

      <p>
        The <code>/config</code> folder in Lore is compiled into a single object, which you confirm by
        inspecting <code>lore.config</code> from the developer console in the browser. This means you can add your
        own files to the <code>/config</code> folder and access their values from <code>lore.config</code>.
      </p>
      <p>
        Since the name of the file we just added was <code>auth0</code>, that means we can now access these values
        from the <code>lore.config.auth0</code> object.
      </p>
      <blockquote>
        In practice, you'll access the config using the <code>useConfig()</code> Hook provided by
        the <code>@lore/config</code> package, which we'll introduce soon.
      </blockquote>

      <h3>
        Visual Check-in
      </h3>

      <p>
        If everything went well, your application should now look like this. Exactly the same : )
      </p>

      <img className="drop-shadow" src={image} />

      <h2>
        Code Changes
      </h2>

      <p>
        Below is a list of files modified during this step.
      </p>

      <h3>
        config/auth0.js
      </h3>

      <Code type="jsx" text={`
      export default {
        domain: 'lorejs.auth0.com',
        clientID: 'XFcYHKv1NXCVrbtSaf0JZPRLtYj5UZ7E',
        redirectUri: 'http://localhost:3000/auth/callback',
        audience: 'https://lorejs.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: 'openid'
      }
      `}/>

      <h3>
        Next Steps
      </h3>

      <p>
        Next we're going to <Link to="/quickstart/authentication/step-3/">add a login experience</Link>.
      </p>

    </Template>
  )
};
