import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
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

      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        import React from 'react';
        import createReactClass from 'create-react-class';
        import PropTypes from 'prop-types';
        import Auth0 from 'auth0-js';
        import ShowLoadingScreen from './ShowLoadingScreen';

        export default createReactClass({
          displayName: 'Login',

          componentDidMount() {
            const auth0 = new Auth0.WebAuth(lore.config.auth0);
            auth0.authorize();
          },

          render() {
            return (
              <ShowLoadingScreen/>
            );
          }

        });
        `}/>
        <CodeTab syntax="ES6" text={`
        import React from 'react';
        import PropTypes from 'prop-types';
        import Auth0 from 'auth0-js';
        import ShowLoadingScreen from './ShowLoadingScreen';

        class Login extends React.Component {

          componentDidMount() {
            const auth0 = new Auth0.WebAuth(lore.config.auth0);
            auth0.authorize();
          }

          render() {
            return (
              <ShowLoadingScreen/>
            );
          }

        }

        export default Login;
        `}/>
        <CodeTab syntax="ESNext" text={`
        import React from 'react';
        import PropTypes from 'prop-types';
        import Auth0 from 'auth0-js';
        import ShowLoadingScreen from './ShowLoadingScreen';

        class Login extends React.Component {

          componentDidMount() {
            const auth0 = new Auth0.WebAuth(lore.config.auth0);
            auth0.authorize();
          }

          render() {
            return (
              <ShowLoadingScreen/>
            );
          }

        }

        export default Login;
        `}/>
      </CodeTabs>

      <p>
        When this component is mounted, we extract the <code>auth0</code> config object
        from <code>lore.config.auth0</code> and pass it to the <code>Auth0.WebAuth()</code> constructor, which will
        automatically redirect the user to Auth0 when we call <code>auth0.authorize()</code>.
      </p>

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
        <Route>
          <Route path="/login" component={Login} />

          <Route component={UserIsAuthenticated(Master)}>
            <Route path="/" component={Layout}>
              <IndexRoute component={Feed} />
            </Route>
          </Route>
        </Route>
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
        After you login, you'll be taken back to the application, where you'll see the loading screen, but
        it will never go away. If you look at the developer console, you'll see an error that looks like this:
      </p>

      <Markdown text={`
      Warning: [react-router]
      Location "/auth/callback ... did not match any routes
      `}/>

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


      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        import React from 'react';
        import createReactClass from 'create-react-class';
        import PropTypes from 'prop-types';
        import Auth0 from 'auth0-js';
        import ShowLoadingScreen from './ShowLoadingScreen';

        export default createReactClass({
          displayName: 'Login',

          componentDidMount() {
            const auth0 = new Auth0.WebAuth(lore.config.auth0);
            auth0.authorize();
          },

          render() {
            return (
              <ShowLoadingScreen/>
            );
          }

        });
        `}/>
        <CodeTab syntax="ES6" text={`
        import React from 'react';
        import PropTypes from 'prop-types';
        import Auth0 from 'auth0-js';
        import ShowLoadingScreen from './ShowLoadingScreen';

        class Login extends React.Component {

          componentDidMount() {
            const auth0 = new Auth0.WebAuth(lore.config.auth0);
            auth0.authorize();
          }

          render() {
            return (
              <ShowLoadingScreen/>
            );
          }

        }

        export default Login;
        `}/>
        <CodeTab syntax="ESNext" text={`
        import React from 'react';
        import PropTypes from 'prop-types';
        import Auth0 from 'auth0-js';
        import ShowLoadingScreen from './ShowLoadingScreen';

        class Login extends React.Component {

          componentDidMount() {
            const auth0 = new Auth0.WebAuth(lore.config.auth0);
            auth0.authorize();
          }

          render() {
            return (
              <ShowLoadingScreen/>
            );
          }

        }

        export default Login;
        `}/>
      </CodeTabs>

      <h3>
        routes.js
      </h3>

      <Markdown text={`
      import React from 'react';
      import { Route, IndexRoute, Redirect } from 'react-router';

      /**
       * Wrapping the Master component with this decorator provides an easy way
       * to redirect the user to a login experience if we don't know who they are.
       */
      import UserIsAuthenticated from './src/decorators/UserIsAuthenticated';

      /**
       * Routes are used to declare your view hierarchy
       * See: https://github.com/ReactTraining/react-router/blob/v3/docs/API.md
       */
      import Master from './src/components/Master';
      import Layout from './src/components/Layout';
      import Feed from './src/components/Feed';
      import Login from './src/components/Login';

      export default (
        <Route>
          <Route path="/login" component={Login} />

          <Route component={UserIsAuthenticated(Master)}>
            <Route path="/" component={Layout}>
              <IndexRoute component={Feed} />
            </Route>
          </Route>
        </Route>
      );
      `}/>

      <h3>
        Next Steps
      </h3>

      <p>
        Next we're going to <Link to="/quickstart/authentication/step-4/">redirect the user to login page</Link> if they aren't logged in.
      </p>

    </Template>
  )
};
