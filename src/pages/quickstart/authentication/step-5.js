import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/authentication/step-1.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 5: Add Callback Route
      </h1>

      <p>
        In this step we're going to add the redirect route that Auth0 needs so that we can save the token and
        log the user in.
      </p>

      <QuickstartBranch branch="authentication.5" />

      <h3>
        Auth0 Callback
      </h3>
      <p>
        When Auth0 redirects you to the URL <code>https://localhost:300/auth/callback</code>, it also includes a
        number of important query parameters in the URL that look like this:
      </p>
      <Markdown text={`
        access_token=...&expires_in=...&token_type=...&state=...&id_token=...
      `}/>

      <p>
        Among those query parameters is one called <code>id_token</code>, which contains
        a <a href="https://jwt.io/introduction/" target="_blank">JWT token</a> we need. So let's build a component
        to extract that token and save it.
      </p>

      <h3>
        Create the AuthCallback Component
      </h3>
      <p>
        To do that, create a component called <code>AuthCallback</code>:
      </p>

      <Markdown type="sh" text={`
      lore generate component AuthCallback
      `}/>

      <p>
        Then update the file to look like this:
      </p>

      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        import React from 'react';
        import createReactClass from 'create-react-class';
        import PropTypes from 'prop-types';
        import Auth0 from 'auth0-js';
        import ShowLoadingScreen from './ShowLoadingScreen';
        import auth from '../utils/auth';

        export default createReactClass({
          displayName: 'AuthCallback',

          propTypes: {
            router: PropTypes.object.isRequired
          },

          componentDidMount() {
            const { router } = this.props;
            const auth0 = new Auth0.WebAuth(lore.config.auth0);

            auth0.parseHash((err, authResult) => {
              if (authResult && authResult.accessToken && authResult.idToken) {
                auth.saveToken(authResult.idToken);
                router.push('/');
              } else if (err) {
                console.log(err);
                alert('An error occurred. See the console for more information.');
              }
            });
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
        import auth from '../utils/auth';

        class AuthCallback extends React.Component {

          componentDidMount() {
            const { router } = this.props;
            const auth0 = new Auth0.WebAuth(lore.config.auth0);

            auth0.parseHash((err, authResult) => {
              if (authResult && authResult.accessToken && authResult.idToken) {
                auth.saveToken(authResult.idToken);
                router.push('/');
              } else if (err) {
                console.log(err);
                alert('An error occurred. See the console for more information.');
              }
            });
          }

          render() {
            return (
              <ShowLoadingScreen/>
            );
          }

        }

        AuthCallback.propTypes = {
          router: PropTypes.object.isRequired
        };

        export default AuthCallback;
        `}/>
        <CodeTab syntax="ESNext" text={`
        import React from 'react';
        import PropTypes from 'prop-types';
        import Auth0 from 'auth0-js';
        import ShowLoadingScreen from './ShowLoadingScreen';
        import auth from '../utils/auth';

        class AuthCallback extends React.Component {

          static propTypes = {
            router: PropTypes.object.isRequired
          };

          componentDidMount() {
            const { router } = this.props;
            const auth0 = new Auth0.WebAuth(lore.config.auth0);

            auth0.parseHash((err, authResult) => {
              if (authResult && authResult.accessToken && authResult.idToken) {
                auth.saveToken(authResult.idToken);
                router.push('/');
              } else if (err) {
                console.log(err);
                alert('An error occurred. See the console for more information.');
              }
            });
          }

          render() {
            return (
              <ShowLoadingScreen/>
            );
          }

        }

        export default AuthCallback;
        `}/>
      </CodeTabs>

      <p>
        When this component gets mounted, we're going to once again create the <code>Auth0.WebAuth()</code> object
        and provide it with our <code>auth0</code> config at <code>lore.config.auth0</code>.
      </p>
      <p>
        Then we're going to call <code>auth0.parseHash()</code>, which will extract the query parameters we need
        from the URL, and provide them through an object called <code>authResult</code>.
      </p>
      <p>
        Then, if all the query parameters that we need exist, we'll save the <code>idToken</code> to localStorage
        using our <code>auth.saveToken()</code> helper, and redirect the user to the root route at <code>/</code>.
      </p>

      <h3>
        Create the /auth/callback route
      </h3>
      <p>
        Now that the component exists, let's create the corresponding route to display it.
      </p>
      <p>
        Import your <code>AuthCallback</code> component into <code>routes.js</code> and update the routes to
        look like this:
      </p>

      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        // routes.js
        ...
        import AuthCallback from './src/components/AuthCallback';

        export default (
          <Route>
            <Route path="/login" component={Login} />
            <Route path="/auth/callback" component={AuthCallback} />

            <Route component={UserIsAuthenticated(Master)}>
              <Route path="/" component={Layout}>
                <IndexRoute component={Feed} />
              </Route>
            </Route>
          </Route>
        );
        `}/>
        <CodeTab syntax="ES6" text={`
        // routes.js
        ...
        import AuthCallback from './src/components/AuthCallback';

        export default (
          <Route>
            <Route path="/login" component={Login} />
            <Route path="/auth/callback" component={AuthCallback} />

            <Route component={UserIsAuthenticated(Master)}>
              <Route path="/" component={Layout}>
                <IndexRoute component={Feed} />
              </Route>
            </Route>
          </Route>
        )
        `}/>
        <CodeTab syntax="ESNext" text={`
        // routes.js
        ...
        import AuthCallback from './src/components/AuthCallback';

        export default (
          <Route>
            <Route path="/login" component={Login} />
            <Route path="/auth/callback" component={AuthCallback} />

            <Route component={UserIsAuthenticated(Master)}>
              <Route path="/" component={Layout}>
                <IndexRoute component={Feed} />
              </Route>
            </Route>
          </Route>
        )
        `}/>
      </CodeTabs>

      <p>
        Once that's done, refresh the browser and navigate to <code>/login</code>. This time, once you log in, Auth0
        will redirect you to the <code>/auth/callback</code> route, which will store the token we need, and redirect
        you back to the home route.
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
        src/components/AuthCallback.js
      </h3>
      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        import React from 'react';
        import createReactClass from 'create-react-class';
        import PropTypes from 'prop-types';
        import Auth0 from 'auth0-js';
        import ShowLoadingScreen from './ShowLoadingScreen';
        import auth from '../utils/auth';

        export default createReactClass({
          displayName: 'AuthCallback',

          propTypes: {
            router: PropTypes.object.isRequired
          },

          componentDidMount() {
            const { router } = this.props;
            const auth0 = new Auth0.WebAuth(lore.config.auth0);

            auth0.parseHash((err, authResult) => {
              if (authResult && authResult.accessToken && authResult.idToken) {
                auth.saveToken(authResult.idToken);
                router.push('/');
              } else if (err) {
                console.log(err);
                alert('An error occurred. See the console for more information.');
              }
            });
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
        import auth from '../utils/auth';

        class AuthCallback extends React.Component {

          componentDidMount() {
            const { router } = this.props;
            const auth0 = new Auth0.WebAuth(lore.config.auth0);

            auth0.parseHash((err, authResult) => {
              if (authResult && authResult.accessToken && authResult.idToken) {
                auth.saveToken(authResult.idToken);
                router.push('/');
              } else if (err) {
                console.log(err);
                alert('An error occurred. See the console for more information.');
              }
            });
          }

          render() {
            return (
              <ShowLoadingScreen/>
            );
          }

        }

        AuthCallback.propTypes = {
          router: PropTypes.object.isRequired
        };

        export default AuthCallback;
        `}/>
        <CodeTab syntax="ESNext" text={`
        import React from 'react';
        import PropTypes from 'prop-types';
        import Auth0 from 'auth0-js';
        import ShowLoadingScreen from './ShowLoadingScreen';
        import auth from '../utils/auth';

        class AuthCallback extends React.Component {

          static propTypes = {
            router: PropTypes.object.isRequired
          };

          componentDidMount() {
            const { router } = this.props;
            const auth0 = new Auth0.WebAuth(lore.config.auth0);

            auth0.parseHash((err, authResult) => {
              if (authResult && authResult.accessToken && authResult.idToken) {
                auth.saveToken(authResult.idToken);
                router.push('/');
              } else if (err) {
                console.log(err);
                alert('An error occurred. See the console for more information.');
              }
            });
          }

          render() {
            return (
              <ShowLoadingScreen/>
            );
          }

        }

        export default AuthCallback;
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
      import AuthCallback from './src/components/AuthCallback';

      export default (
        <Route>
          <Route path="/login" component={Login} />
          <Route path="/auth/callback" component={AuthCallback} />

          <Route component={UserIsAuthenticated(Master)}>
            <Route path="/" component={Layout}>
              <IndexRoute component={Feed} />
            </Route>
          </Route>
        </Route>
      );
      `}/>

      <h2>
        Next Steps
      </h2>

      <p>
        Next we're going to <Link to="/quickstart/authentication/step-6/">add a logout route</Link>.
      </p>

    </Template>
  )
};
