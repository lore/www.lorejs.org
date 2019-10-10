import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import QuickstartBranch from '../../../components/QuickstartBranch';
import loginImage from '../../../assets/images/quickstart/authentication/login.png';
import authorizeImage from '../../../assets/images/quickstart/authentication/authorize.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 3: Add Login Page
      </h1>

      <p>
        In this step we're going to display a login experience.
      </p>

      <QuickstartBranch branch="authentication.3" />

      <h3>
        Create the Login Page
      </h3>
      <p>
        First, create a <code>Login</code> component that we can use to initiate the login experience:
      </p>

      <Markdown type="sh" text={`
      lore generate component Login
      `}/>

      <p>
        This component will be responsible for redirecting the user to the Auth0 website to login. Update
        your <code>Login</code> component to look like this:
      </p>

      <Markdown type="jsx" text={`
      import React, { useEffect } from 'react';
      import Auth0 from 'auth0-js';
      import { useConfig } from '@lore/config';
      
      export default function Login(props) {
        const config = useConfig();
      
        useEffect(() => {
          const auth0 = new Auth0.WebAuth(config.auth0);
          auth0.authorize();
        }, []);
      
        return null;
      }
      `}/>

      <p>
        When this component is mounted, we extract the <code>auth0</code> object from the <code>config</code> and
        pass it to the <code>Auth0.WebAuth()</code> constructor, which will automatically redirect the user to
        Auth0 when we call <code>auth0.authorize()</code>.
      </p>
      <blockquote>
        <p>
          Before the <code>useConfig()</code> Hook can provide the config, it first needs to know what the config
          object is. We do that within <code>index.js</code> by providing the value of the config to
          the <code>ConfigContext</code> Provider, as shown in the code snippet below:
        </p>
      <Markdown type="jsx" text={`
      ...
      const config = getConfig(environment);
      ...
      import { ConfigContext } from '@lore/config';
      ...
      ReactDOM.render((
        <ConfigContext.Provider value={config}>
          ...
        </ConfigContext.Provider>
      ), document.getElementById(domElementId));
      `}/>
      </blockquote>

      <h3>
        Create the Login Route
      </h3>
      <p>
        Now that our <code>Login</code> component exists, let's create the corresponding route to display it.
        Open <code>routes.js</code>, import your <code>Login</code> component, and update the routes to look like
        this:
      </p>

      <Markdown type="jsx" text={`
      ...
      import Login from './src/components/Login';
      
      export default (
        <Switch>
          <Route exact path="/login" component={Login} />
      
          <AuthenticatedRoute exact path="/" component={Feed} />
          <Route component={NotFoundPage} />
        </Switch>
      );
      `}/>

      <h3>
        Log in as one of the Characters
      </h3>
      <p>
        With the routing done, let's test out our <code>Login</code> component. Navigate to <code>/login</code> and
        you should see a login dialog displayed on screen. While you can't create a new account, you <em>can</em> login
        as any of the characters below:
      </p>

      <ul>
        <li>ayla</li>
        <li>crono</li>
        <li>frog</li>
        <li>lucca</li>
        <li>magus</li>
        <li>marle</li>
        <li>robo</li>
      </ul>

      <p>
        The email format is <code>{"{name}@example.com"}</code>, and the password for all of them
        is <code>password</code>. So if you wanted to login as <code>marle</code>, you would
        enter <code>marle@example.com</code> for the email and <code>password</code> for the password.
      </p>

      <h3>
        Authorize App Screen
      </h3>
      <p>
        If you see a screen like the one below, that asks you to authorize the application, click the green
        checkbox to proceed.
      </p>
      <p>
        In a real production application, you wouldn't see this screen, but Auth0 does not allow the consent
        dialog to be skipped <a href="https://auth0.com/docs/api-auth/user-consent#skipping-consent-for-first-party-clients">when
        an application is redirecting to localhost</a>.
      </p>
      <img className="drop-shadow" src={authorizeImage} />

      <h3>
        Redirect Error after Login
      </h3>

      <p>
        After you login, you'll be taken back to the application, where you'll see the <code>404 NOT FOUND</code> page,
        provided by the <code>NotFound</code> component.
      </p>
      <p>
        This occurs because Auth0 tried to redirect us back to <code>http://localhost:3000/auth/callback</code>,
        but that route doesn't exist yet. We'll create it soon, but for now, navigate back to the homepage
        at <code>http://localhost:3000</code>.
      </p>


      <h3>
        Visual Check-in
      </h3>

      <p>
        If everything went well, your application should now look like this when you navigate to
        the <code>/login</code> route:
      </p>

      <img className="drop-shadow" src={loginImage} />

      <h2>
        Code Changes
      </h2>

      <p>
        Below is a list of files modified during this step.
      </p>

      <h3>
        src/components/Login.js
      </h3>
      <Markdown type="jsx" text={`
      import React, { useEffect } from 'react';
      import Auth0 from 'auth0-js';
      import { useConfig } from '@lore/config';
      
      export default function Login(props) {
        const config = useConfig();
      
        useEffect(() => {
          const auth0 = new Auth0.WebAuth(config.auth0);
          auth0.authorize();
        }, []);
      
        return null;
      }
      `}/>

      <h3>
        routes.js
      </h3>

      <Markdown text={`
      import React from 'react';
      import { Switch, Route, Redirect } from 'react-router-dom';
      
      /**
       * The AuthenticatedRoute provides an easy way to redirect the user
       * to a login experience if we don't know who they are.
       */
      
      import AuthenticatedRoute from './src/routes/AuthenticatedRoute';
      
      /**
       * Routes are used to declare your view hierarchy
       * See: https://reacttraining.com/react-router/web/guides/quick-start
       */
      
      import NotFoundPage from './src/components/NotFound';
      import Feed from './src/components/Feed';
      import Login from './src/components/Login';
      
      export default (
        <Switch>
          <Route exact path="/login" component={Login} />
      
          <AuthenticatedRoute exact path="/" component={Feed} />
          <Route component={NotFoundPage} />
        </Switch>
      );
      `}/>

      <h3>
        Next Steps
      </h3>

      <p>
        Next we're going to <Link to="/quickstart/authentication/step-4/">redirect the user to login page</Link> if
        they aren't logged in.
      </p>

    </Template>
  )
};
