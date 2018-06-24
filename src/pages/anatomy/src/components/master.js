import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/Anatomy';
import Markdown from '../../../../components/Markdown';
import CodeTabs from '../../../../components/CodeTabs';
import CodeTab from '../../../../components/CodeTab';

export default (props) => {
  return (
    <Template>
      <h1>
        /src/components/Master.js
      </h1>
      <p>
        This component serves as the root of your application, and should typically be the only
        component subscribed to the store.
      </p>
      <p>
        It is also a good place to fetch the current user. Once you have configured <code>models/currentUser</code> to
        fetch the current user (by pointing it to the correct API endpoint) uncomment the commented out code below
        in order to fetch the user, display a loading experience while they're being fetched, and store the user in
        the applications context so that components can retrieve it without having to pass it down through props or
        extract it from the Redux store directly.
      </p>
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
            // user: getState('currentUser')
          };
        }, { subscribe: true })(
        createReactClass({
          displayName: 'Master',

          // propTypes: {
          //   user: PropTypes.object.isRequired
          // },

          // childContextTypes: {
          //   user: PropTypes.object
          // },

          // getChildContext() {
          //   return {
          //     user: this.props.user
          //   };
          // },

          componentDidMount() {
            // If you want to play with the router through the browser's dev console then
            // uncomment out this line. React Router automatically provides 'router'
            // to any components that are "routes" (such as Master and Layout), so this
            // is a good location to attach it to the global lore object.

            // lore.router = this.props.router;
          },

          render() {
            // const { user } = this.props;

            // if (user.state === PayloadStates.FETCHING) {
            //   return null;
            // }

            return (
              <div>
                <RemoveLoadingScreen/>
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

          // getChildContext() {
          //   return {
          //     user: this.props.user
          //   };
          // }

          componentDidMount() {
            // If you want to play with the router through the browser's dev console then
            // uncomment out this line. React Router automatically provides 'router'
            // to any components that are "routes" (such as Master and Layout), so this
            // is a good location to attach it to the global lore object.

            // lore.router = this.props.router;
          }

          render() {
            // const { user } = this.props;

            // if (user.state === PayloadStates.FETCHING) {
            //   return null;
            // }

            return (
              <div>
                <RemoveLoadingScreen />
                {React.cloneElement(this.props.children)}
              </div>
            );
          }

        }

        // Master.propTypes = {
        //   user: PropTypes.object.isRequired
        // };

        // Master.childContextTypes = {
        //   user: PropTypes.object
        // };

        export default connect(function(getState, props) {
          return {
            // user: getState('currentUser')
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
            // user: getState('currentUser')
          };
        }, { subscribe: true })
        class Master extends React.Component {

          // static propTypes = {
          //   user: PropTypes.object.isRequired
          // };

          // static childContextTypes = {
          //   user: PropTypes.object
          // };

          // getChildContext() {
          //   return {
          //     user: this.props.user
          //   };
          // }

          componentDidMount() {
            // If you want to play with the router through the browser's dev console then
            // uncomment out this line. React Router automatically provides 'router'
            // to any components that are "routes" (such as Master and Layout), so this
            // is a good location to attach it to the global lore object.

            // lore.router = this.props.router;
          }

          render() {
            // const { user } = this.props;

            // if (user.state === PayloadStates.FETCHING) {
            //   return null;
            // }

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
    </Template>
  );
};
