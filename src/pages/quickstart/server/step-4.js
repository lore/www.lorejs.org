import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/server/step-4.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 4: Add Unauthorized Experience
      </h1>

      <p>
        In this step we're going to add an experience to show when the user is unauthorized.

      </p>

      <QuickstartBranch branch="server.4" />

      <h3>
        Why is the API call failing?
      </h3>
      <p>
        Our API call to <code>/user</code> is returning a 401 because we're using a real API now, and the server
        can't identify who the current user is without having access to the user's token.
      </p>

      <p>
        This API is expecting all network requests to protected endpoints to contain
        an <code>Authorization</code> header with a value of <code>Bearer [token]</code>.
      </p>

      <p>
        The call to <code>/tweets</code> is succeeding because that endpoint is public - anyone can view it.
      </p>

      <h3>
        Display an Unauthorized Experience
      </h3>
      <p>
        The fact that our application is rendering a broken experience isn't ideal. The reason this is
        happening is because the <code>render()</code> method of the <code>Master</code> component currently
        looks like this:
      </p>

      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        // src/components/Master.js
        export default createReactClass({

          ...

          render() {
            const { user } = this.props;

            if (user.state === PayloadStates.FETCHING) {
              return (
                <div className="loader" />
              );
            }

            return (
              <div>
                <RemoveLoadingScreen />
                {React.cloneElement(this.props.children)}
              </div>
            );
          }

        }
        `}/>
        <CodeTab syntax="ES6" text={`
        // src/components/Master.js
        class Master extends React.Component {

          ...

          render() {
            const { user } = this.props;

            if (user.state === PayloadStates.FETCHING) {
              return (
                <div className="loader" />
              );
            }

            return (
              <div>
                <RemoveLoadingScreen />
                {React.cloneElement(this.props.children)}
              </div>
            );
          }

        }
        `}/>
        <CodeTab syntax="ESNext" text={`
        // src/components/Master.js
        class Master extends React.Component {

          ...

          render() {
            const { user } = this.props;

            if (user.state === PayloadStates.FETCHING) {
              return (
                <div className="loader" />
              );
            }

            return (
              <div>
                <RemoveLoadingScreen />
                {React.cloneElement(this.props.children)}
              </div>
            );
          }

        }
        `}/>
      </CodeTabs>

      <p>
        This component only has two states that it checks for:
      </p>

      <ul>
        <li>
          If the current user is being fetched, display a loading experience.
        </li>
        <li>
          If the current user is NOT being fetched, render the application.
        </li>
      </ul>

      <p>
        To fix this issue we're going to add a third condition, which will be:
      </p>

      <ul>
        <li>If there's an error fetching the current user, display an unauthorized experience.</li>
      </ul>

      <p>
        To add this experience, update the render method to look like this:
      </p>

      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        // src/components/Master.js
        export default createReactClass({

          ...

          render() {
            const { user } = this.props;

            if (user.state === PayloadStates.FETCHING) {
              return (
                <div className="loader" />
              );
            }

            if (user.state === PayloadStates.ERROR_FETCHING) {
              return (
                <div>
                  <RemoveLoadingScreen />
                  <h1 className="full-page-text">
                    Unauthorized
                  </h1>
                </div>
              );
            }

            return (
              <div>
                <RemoveLoadingScreen />
                {React.cloneElement(this.props.children)}
              </div>
            );
          }

        }
        `}/>
        <CodeTab syntax="ES6" text={`
        // src/components/Master.js
        class Master extends React.Component {

          ...

          render() {
            const { user } = this.props;

            if (user.state === PayloadStates.FETCHING) {
              return (
                <div className="loader" />
              );
            }

            if (user.state === PayloadStates.ERROR_FETCHING) {
              return (
                <div>
                  <RemoveLoadingScreen />
                  <h1 className="full-page-text">
                    Unauthorized
                  </h1>
                </div>
              );
            }

            return (
              <div>
                <RemoveLoadingScreen />
                {React.cloneElement(this.props.children)}
              </div>
            );
          }

        }
        `}/>
        <CodeTab syntax="ESNext" text={`
        // src/components/Master.js
        class Master extends React.Component {

          ...

          render() {
            const { user } = this.props;

            if (user.state === PayloadStates.FETCHING) {
              return (
                <div className="loader" />
              );
            }

            if (user.state === PayloadStates.ERROR_FETCHING) {
              return (
                <div>
                  <RemoveLoadingScreen />
                  <h1 className="full-page-text">
                    Unauthorized
                  </h1>
                </div>
              );
            }

            return (
              <div>
                <RemoveLoadingScreen />
                {React.cloneElement(this.props.children)}
              </div>
            );
          }

        }
        `}/>
      </CodeTabs>

      <p>
        With that change in place, the application will now display <strong>"Unauthorized"</strong> when there's
        an error fetching the current user.
      </p>

      <blockquote>
        <p>
          The error response from the server is actually stored in <code>tweet.error</code>, which we could choose
          to display instead of the hardcoded message. But for this specific error, the server doesn't return any
          information in the body, so that's not an option we can use here.
        </p>
      </blockquote>

      <h3>
        Visual Check-in
      </h3>

      <p>
        If everything went well, your application should look like this.
      </p>

      <img className="drop-shadow" src={image} />


      <h2>
        Code Changes
      </h2>

      <p>
        Below is a list of files modified during this step.
      </p>

      <h3>
        src/components/Master.js
      </h3>

      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        import React from 'react';
        import createReactClass from 'create-react-class';
        import PropTypes from 'prop-types';
        import { connect } from 'lore-hook-connect';
        import PayloadStates from '../constants/PayloadStates';
        import RemoveLoadingScreen from './RemoveLoadingScreen';
        import '../../assets/css/main.css';

        export default connect(function(getState, props) {
          return {
            user: getState('currentUser')
          };
        }, { subscribe: true })(
          createReactClass({
            displayName: 'Master',

            propTypes: {
              user: PropTypes.object.isRequired
            },

            childContextTypes: {
              user: PropTypes.object
            },

            getChildContext() {
              return {
                user: this.props.user
              };
            },

            render() {
              const { user } = this.props;

              if (user.state === PayloadStates.FETCHING) {
                return (
                  <div className="loader" />
                );
              }

              if (user.state === PayloadStates.ERROR_FETCHING) {
                return (
                <div>
                  <RemoveLoadingScreen />
                  <h1 className="full-page-text">
                    Unauthorized
                  </h1>
                </div>
                );
              }

              return (
                <div>
                  <RemoveLoadingScreen />
                  {React.cloneElement(this.props.children)}
                </div>
              );
            }
          })
        );
        `}/>
        <CodeTab syntax="ES6" text={`
        import React from 'react';
        import PropTypes from 'prop-types';
        import { connect } from 'lore-hook-connect';
        import PayloadStates from '../constants/PayloadStates';
        import RemoveLoadingScreen from './RemoveLoadingScreen';
        import '../../assets/css/main.css';

        class Master extends React.Component {

          getChildContext() {
            return {
              user: this.props.user
            };
          }

          render() {
            const { user } = this.props;

            if (user.state === PayloadStates.FETCHING) {
              return (
                <div className="loader" />
              );
            }

            if (user.state === PayloadStates.ERROR_FETCHING) {
              return (
                <div>
                  <RemoveLoadingScreen />
                  <h1 className="full-page-text">
                    Unauthorized
                  </h1>
                </div>
              );
            }

            return (
              <div>
                <RemoveLoadingScreen />
                {React.cloneElement(this.props.children)}
              </div>
            );
          }

        }

        Master.propTypes = {
          user: PropTypes.object.isRequired
        };

        Master.childContextTypes = {
          user: PropTypes.object
        };

        export default connect(function(getState, props) {
          return {
            user: getState('currentUser')
          };
        }, { subscribe: true })(Master);
        `}/>
        <CodeTab syntax="ESNext" text={`
        import React from 'react';
        import PropTypes from 'prop-types';
        import { connect } from 'lore-hook-connect';
        import PayloadStates from '../constants/PayloadStates';
        import RemoveLoadingScreen from './RemoveLoadingScreen';
        import '../../assets/css/main.css';

        @connect(function(getState, props) {
          return {
            user: getState('currentUser')
          };
        }, { subscribe: true })
        class Master extends React.Component {

          static propTypes = {
            user: PropTypes.object.isRequired
          };

          static childContextTypes = {
            user: PropTypes.object
          };

          getChildContext() {
            return {
              user: this.props.user
            };
          }

          render() {
            const { user } = this.props;

            if (user.state === PayloadStates.FETCHING) {
              return (
                <div className="loader" />
              );
            }

            if (user.state === PayloadStates.ERROR_FETCHING) {
              return (
                <div>
                  <RemoveLoadingScreen />
                  <h1 className="full-page-text">
                    Unauthorized
                  </h1>
                </div>
              );
            }

            return (
              <div>
                <RemoveLoadingScreen />
                {React.cloneElement(this.props.children)}
              </div>
            );
          }

        }

        export default Master;
        `}/>
      </CodeTabs>

      <h2>
        Next Steps
      </h2>

      <p>
        Next we're going to <Link to="../step-5/">add an Authorization header to our network requests</Link>.
      </p>

    </Template>
  )
};
