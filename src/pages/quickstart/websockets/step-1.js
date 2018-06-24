import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/filtering/final.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 1: Add WebSocket Support
      </h1>

      <p>
        In this step we'll update our application to include support for WebSockets, so we can automatically
        display changes made by users without having to refresh the page.
      </p>

      <QuickstartBranch branch="websockets.1" />

      <h2>
        Add the WebSockets Hook
      </h2>
      <p>
        First install the <code>lore-hook-websockets-sails</code> hook:
      </p>

      <Markdown text={`
      npm install lore-hook-websockets-sails sails.io.js@~0.13.8 socket.io-client@^1.4.8 --save
      `}/>

      <p>
        Then register the hook in your <code>index.js</code> file:
      </p>

      <Markdown text={`
      // index.js
      ...
      import websockets from 'lore-hook-websockets-sails';

      lore.summon({
        hooks: {
          // ...
          router,
          websockets
        }
      });
      `}/>


      <h2>
        Add the WebSockets Config File
      </h2>
      <p>
        Next add the config file that controls the hook:
      </p>

      <Markdown text={`
      // config/websockets.js
      export default {
        serverUrl: 'http://localhost:1337'
      };
      `}/>

      <p>
        While the hook exposes more config options, the only one we need for this example is the location
        of the socket.io server, which runs on the same port as the Sails API.
      </p>

      <h2>
        Subscribe to Data
      </h2>
      <p>
        Next, initialize the hook by subscribing to data for <code>tweets</code> in the <code>Master</code> component
        when the application mounts, and unsubscribe to the data when the application unmounts:
      </p>
      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        // src/components/Master.js
        componentDidMount() {
          lore.websockets.tweet.connect();
          lore.websockets.tweet.subscribe();
        },

        componentWillUnmount() {
          lore.websockets.tweet.unsubscribe();
        },
        `}/>
        <CodeTab syntax="ES6" text={`
        // src/components/Master.js
        componentDidMount() {
          lore.websockets.tweet.connect();
          lore.websockets.tweet.subscribe();
        }

        componentWillUnmount() {
          lore.websockets.tweet.unsubscribe();
        }
        `}/>
        <CodeTab syntax="ESNext" text={`
        // src/components/Master.js
        componentDidMount() {
          lore.websockets.tweet.connect();
          lore.websockets.tweet.subscribe();
        }

        componentWillUnmount() {
          lore.websockets.tweet.unsubscribe();
        }
        `}/>
      </CodeTabs>

      <p>
        That's it! With that change in place, the application will start listening for new data when it mounts,
        and tweets created by other users will immediately show up at the top of the feed, just like tweets you
        create yourself.
      </p>
      <p>
        However, there's also a new bug, where the tweets you create yourself end up with a duplicate tweet
        that's faded out. We'll fix that in the next step.
      </p>

      <h3>
        Visual Check-in
      </h3>

      <p>
        If everything went well, your application should now look like this (the same as before) but now you can
        have multiple browser tabs open and the changes will synchronize across them.
      </p>

      <img className="drop-shadow" src={image} />


      <h2>
        Code Changes
      </h2>

      <p>
        Below is a list of files modified during this step.
      </p>

      <h3>
        config/websockets.js
      </h3>
      <Markdown text={`
      export default {
        serverUrl: 'http://localhost:1337'
      };
      `}/>

      <h3>
        index.js
      </h3>
      <Markdown text={`
      /**
       * This file kicks off the build process for the application.  It also attaches
       * the Lore singleton to the window, so you can access it from the command line
       * in case you need to play with it or want to manually kick off actions or check
       * the reducer state (through \`lore.actions.xyz\`, \`lore.reducers.xyz\`,
       * \`lore.models.xyz\`, etc.)
       **/

      import lore from 'lore';
      import _ from 'lodash';

      // Import the styles for the loading screen. We're doing that here to make
      // sure they get loaded regardless of the entry point for the application.
      import './assets/css/loading-screen.css';

      // Allows you to access your lore app globally as well as from within
      // the console. Remove this line if you don't want to be able to do that.
      window.lore = lore;

      // Hooks
      import auth from 'lore-hook-auth';
      import actions from 'lore-hook-actions';
      import bindActions from 'lore-hook-bind-actions';
      import collections from 'lore-hook-collections';
      import connections from 'lore-hook-connections';
      import connect from 'lore-hook-connect';
      import dialog from 'lore-hook-dialog-bootstrap';
      import dialogs from 'lore-hook-dialogs-bootstrap';
      import models from 'lore-hook-models';
      import react from 'lore-hook-react';
      import reducers from 'lore-hook-reducers';
      import redux from 'lore-hook-redux';
      import router from 'lore-hook-router';
      import websockets from 'lore-hook-websockets-sails';

      // Summon the app!
      lore.summon({
        hooks: {
          auth,
          actions,
          bindActions,
          collections,
          connections,
          connect,
          dialog,
          dialogs,
          models,
          react,
          reducers,
          redux: _.extend(redux, {
            dependencies: ['reducers', 'auth']
          }),
          router,
          websockets
        }
      });
      `}/>

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

          componentDidMount() {
            lore.websockets.tweet.connect();
            lore.websockets.tweet.subscribe();
          },

          componentWillUnmount() {
            lore.websockets.tweet.unsubscribe();
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

          componentDidMount() {
            lore.websockets.tweet.connect();
            lore.websockets.tweet.subscribe();
          }

          componentWillUnmount() {
            lore.websockets.tweet.unsubscribe();
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

          componentDidMount() {
            lore.websockets.tweet.connect();
            lore.websockets.tweet.subscribe();
          }

          componentWillUnmount() {
            lore.websockets.tweet.unsubscribe();
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
        In the next step we'll learn how to <Link to="../step-2/">fix the create bug</Link>.
      </p>
    </Template>
  )
};
