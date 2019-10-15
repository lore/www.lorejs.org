import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/authentication/login.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 4: Redirect to Login
      </h1>

      <p>
        In this step we're going to redirect the user to the <code>/login</code> route if they aren't authenticated.
      </p>

      <QuickstartBranch branch="authentication.4" />

      <h3>
        Local Storage & User Tokens
      </h3>
      <p>
        While our API does not currently require the user be authenticated, we will be replacing it with a real API
        later that will. That API is going to require users to be authenticated before they can create, update or
        delete tweets.
      </p>
      <p>
        In order to authenticate the user, we will need to send an authentication token in the header of every
        API request, and the token we'll be sending will be provided to us by Auth0 after the user logs in.
      </p>
      <p>
        Also, in order to prevent asking the user to log in every time they refresh the page (or navigate away
        from the site), we'll be storing this token in the
        browser's <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage">localStorage</a>, and
        only redirect the user to the login page if they have no token.
      </p>

      <h3>
        Auth Utility
      </h3>
      <p>
        If you look inside <code>src/utils</code> you'll find a file called <code>auth.js</code>. This file contains
        some helper methods for saving and retrieving a user token from localStorage.
      </p>
      <p>
        For example, when the application loads, we're going to check if a <code>userToken</code> exists in
        localStorage by calling <code>auth.hasToken()</code>, and once we have a token, we'll be able to save it
        to <code>localStorage</code> by calling <code>auth.saveToken(token)</code>.
      </p>

      <blockquote>
        <p>
          You can read more about this file <Link to="/anatomy/src/utils/auth/">here</Link>.
        </p>
      </blockquote>

      <h3>
        Redirect the User
      </h3>
      <p>
        Open <code>routes.js</code> and find the route that renders the <code>Feed</code> component. It should
        look like this:
      </p>

      <Markdown text={`
      // routes.js
      <AuthenticatedRoute exact path="/" component={Feed} />
      `}/>

      <p>
        The <code>AuthenticatedRoute</code> is a custom version of the standard <code>Route</code> designed to only
        show the provided component if the user is authenticated (logged in). If the user is not authenticated, it
        has the ability to redirect them to a login page. Current this isn't happening because the blocking behavior
        is disabled. Let's fix that.
      </p>
      <p>
        If you open <code>src/routes/AuthenticatedRoute.js</code> you'll see the code for that Route looks like this:
      </p>

      <Markdown type="jsx" text={`
      // src/routes/AuthenticatedRoute.js
      import UserIsAuthenticated from '../decorators/UserIsAuthenticated';
      import Master from '../components/Master';
      import Layout from '../components/Layout';
      
      export default ({ component: Component, render, ...rest }) => {
        return (
          <Route {...rest} render={(props) => {
            return (
              <UserIsAuthenticated>
                <Master {...props}>
                  <Layout {...props}>
                    {Component ? (
                      <Component {...props} />
                    ) : render ? render(props) : null}
                  </Layout>
                </Master>
              </UserIsAuthenticated>
            );
          }} />)
        ;
      };
      `}/>

      <p>
        This component is a little complicated, but essentially it's a wrapper around whatever component you provide.
        Part of that wrapper code is the <code>UserIsAuthenticated</code> component, which checks if the user is
        authenticated, and if they are, renders the <code>Master</code> and <code>Layout</code> components, followed
        by whatever component you provide yourself.
      </p>

      <p>
        To enable the authentication check, open <code>UserIsAuthenticated</code>, located
        at <code>src/decorators/UserIsAuthenticated.js</code>, which looks like this:
      </p>

      <Markdown type="jsx" text={`
      // src/decorators/UserIsAuthenticated.js
      import React, { useState, useEffect } from 'react';
      import { withRouter } from 'react-router-dom';
      import PropTypes from 'prop-types';
      
      export default withRouter(function UserIsAuthenticated(props) {
        const { history, children } = props;
      
        const [authenticated, setAuthenticated] = useState(true);
      
        useEffect(() => {
          if (!authenticated) {
            // history.push('/login');
          }
        }, []);
      
        if (authenticated) {
          return children;
        }
      
        return null;
      });
      `}/>

      <p>
        When this component is rendered, a value is assigned to the <code>authenticated</code> variable. If
        that value is <code>true</code>, whatever component this wraps is rendered. If the value is <code>false</code>,
        nothing will be rendered, and once this component is mounted, you can redirect the user somewhere else.
      </p>

      <blockquote>
        <p>
          You can read more about this file <Link to="/anatomy/src/decorators/user-is-authenticated/">here</Link>.
        </p>
      </blockquote>

      <p>
        Since <code>authenticated</code> is currently hard-coded to <code>true</code>, the application never
        redirects the user to <code>/login</code>. To get the behavior we want, update the code to look like this:
      </p>

      <Markdown type="jsx" text={`
      // src/decorators/UserIsAuthenticated.js
      ...
      import auth from '../utils/auth';
      
      export default withRouter(function UserIsAuthenticated(props) {
        ...
      
        const [authenticated, setAuthenticated] = useState(auth.hasToken());
      
        useEffect(() => {
          if (!authenticated) {
            history.push('/login');
          }
        }, []);
      
        ...
      });
      `}/>

      <p>
        In the code above, we made three changes. First, we imported <code>src/utils/auth.js</code>. Second we
        updated the value of <code>authenticated</code> to be based on whether an authentication token exists
        in localStorage. And third, if the user is not authenticated (meaning no token exists) then once this
        component is mounted, we redirect the user to the <code>/login</code> route.
      </p>

      <p>
        If you now try to navigate to the root route at <code>https://localhost:3000</code>, the application will
        redirect you to <code>/login</code>.
      </p>

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
        src/decorators/UserIsAuthenticated.js
      </h3>

      <Markdown type="jsx" text={`
      import React, { useState, useEffect } from 'react';
      import { withRouter } from 'react-router-dom';
      import PropTypes from 'prop-types';
      import auth from '../utils/auth';
      
      export default withRouter(function UserIsAuthenticated(props) {
        const { history, children } = props;
      
        const [authenticated, setAuthenticated] = useState(auth.hasToken());
      
        useEffect(() => {
          if (!authenticated) {
            history.push('/login');
          }
        }, []);
      
        if (authenticated) {
          return children;
        }
      
        return null;
      });
      `}/>

      <h2>
        Next Steps
      </h2>

      <p>
        Next we're going to <Link to="/quickstart/authentication/step-5/">add a callback route and save the token</Link>.
      </p>
    </Template>
  );
};
