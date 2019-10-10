import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/authentication/step-1.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 6: Add Logout Page
      </h1>

      <p>
        In this step we're going to add a logout experience.
      </p>

      <QuickstartBranch branch="authentication.6" />

      <h3>
        Create the Logout Component
      </h3>
      <p>
        While we don't have a "logout page" in a visual sense, we still have behavior that we want executed when
        the user logs out, such as removing their user token and redirecting them to the login page.
      </p>
      <p>
        We're going to store this behavior in a component so that we can have it execute when the user navigates to
        the <code>/logout</code> route.
      </p>

      <p>
        Start by creating a <code>Logout</code> component:
      </p>

      <Markdown type="sh" text={`
      lore generate component Logout
      `}/>

      <p>
        Then update the <code>Logout</code> component to look like this:
      </p>

      <Markdown type="jsx" text={`
      import React, { useEffect } from 'react';
      import PropTypes from 'prop-types';
      import auth from '../utils/auth';
      import ShowLoadingScreen from './ShowLoadingScreen';
      
      Logout.propTypes = {
        history: PropTypes.object.isRequired
      };
      
      export default function Logout(props) {
        const { history } = props;
      
        useEffect(() => {
          auth.deleteToken();
          history.push('/');
        }, []);
      
        return (
          <ShowLoadingScreen />
        );
      };
      `}/>

      <h3>
        Add the /logout route
      </h3>
      <p>
        Next import the <code>Logout</code> component into <code>routes.js</code> and update the routes to
        look like this:
      </p>

      <Markdown text={`
      // routes.js
      ...
      import Logout from './src/components/Logout';

      export default (
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/auth/callback" component={AuthCallback} />

          ...
        </Switch>
      );
      `}/>

      <h3>
        Convert Logout Button to Link
      </h3>
      <p>
        Finally, we need to make it so that when the user clicks the <code>Logout</code> button in
        the <code>Profile</code> component they are redirected to the <code>/logout</code> route, which will
        delete their user token and redirect them to the login page.
      </p>

      <p>
        Locate the Logout button in your <code>Profile</code> component:
      </p>

      <Markdown text={`
      // src/components/Profile.js
      <button className="btn btn-primary">
        Log out
      </button>
      `}/>

      <p>
        Convert this button to a React Router <code>Link</code> and have it point to <code>/logout</code>:
      </p>

      <Markdown text={`
      // src/components/Profile.js
      import { Link } from 'react-router-dom';
      ...
        render() {
          ...
            <Link className="btn btn-primary" to="/logout">
              Log out
            </Link>
          ...
        }
      ...
      `}/>

      <p>
        With this change in place, clicking the Logout button will redirect you to <code>/logout</code>, and once
        you log in, you'll be redirected to the main application.
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
        src/components/Logout.js
      </h3>

      <Markdown type="jsx" text={`
      import React, { useEffect } from 'react';
      import PropTypes from 'prop-types';
      import auth from '../utils/auth';
      import ShowLoadingScreen from './ShowLoadingScreen';
      
      Logout.propTypes = {
        history: PropTypes.object.isRequired
      };
      
      export default function Logout(props) {
        const { history } = props;
      
        useEffect(() => {
          auth.deleteToken();
          history.push('/');
        }, []);
      
        return (
          <ShowLoadingScreen />
        );
      };
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
      import Logout from './src/components/Logout';
      import AuthCallback from './src/components/AuthCallback';
      
      export default (
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/auth/callback" component={AuthCallback} />
      
          <AuthenticatedRoute exact path="/" component={Feed} />
          <Route component={NotFoundPage} />
        </Switch>
      );
      `}/>

      <h3>
        src/components/Profile.js
      </h3>

      <Markdown type="jsx" text={`
      import React from 'react';
      import PropTypes from 'prop-types';
      import { Link } from 'react-router-dom';
      
      Profile.propTypes = {
        user: PropTypes.object.isRequired
      };
      
      Profile.defaultProps = {
        user: {
          id: 1,
          data: {
            nickname: 'ayla',
            avatar: 'https://cloud.githubusercontent.com/assets/2637399/19027069/a356e82a-88e1-11e6-87d8-e3e74f55c069.png'
          }
        }
      };
      
      export default function Profile(props) {
        const { user } = props;
      
        return (
          <div className="card profile">
            <div className="card-block">
              <img
                className="img-circle avatar"
                src={user.data.avatar} />
              <h4 className="card-title">
                Hi {user.data.nickname}!
              </h4>
              <div className="card-text">
                <p>You have permission to perform the following:</p>
                <ul className="permissions">
                  <li>Create Tweets</li>
                  <li>Edit your own tweets</li>
                  <li>Delete your own tweets</li>
                </ul>
              </div>
              <Link className="btn btn-primary" to="/logout">
                Log out
              </Link>
            </div>
          </div>
        );
      }
      `}/>

      <h2>
        Next Steps
      </h2>

      <p>
        Next we're going to <Link to="/quickstart/authentication/step-7/">add an endpoint to the mock API that we can use to retrieve
        the current user</Link>.
      </p>
    </Template>
  );
};
