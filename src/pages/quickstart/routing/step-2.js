import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/routing/final.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 2: Add Feed to Routes
      </h1>

      <p>
        In this step we're going to create a <code>Feed</code> component to display the tweets, and add it to the
        routes for our application.
      </p>

      <QuickstartBranch branch="routing.2" />

      <h3>
        Create the Feed Component
      </h3>
      <p>
        Run this CLI command to generate the <code>Feed</code> component:
      </p>

      <Markdown type="sh" text={`
      lore generate component Feed
      `}/>

      <p>
        Then update the code to look like this:
      </p>

      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        import React from 'react';
        import createReactClass from 'create-react-class';
        import PropTypes from 'prop-types';

        export default createReactClass({
          displayName: 'Feed',

          render() {
            return (
              <div className="feed">
                <h2 className="title">
                  Feed
                </h2>
                <ul className="media-list tweets">
                  {/* Tweets */}
                </ul>
              </div>
            );
          }

        });
        `}/>
        <CodeTab syntax="ES6" text={`
        import React from 'react';
        import PropTypes from 'prop-types';

        class Feed extends React.Component {

          render() {
            return (
              <div className="feed">
                <h2 className="title">
                  Feed
                </h2>
                <ul className="media-list tweets">
                  {/* Tweets */}
                </ul>
              </div>
            );
          }

        }

        export default Feed;
        `}/>
        <CodeTab syntax="ESNext" text={`
        import React from 'react';
        import PropTypes from 'prop-types';

        class Feed extends React.Component {

          render() {
            return (
              <div className="feed">
                <h2 className="title">
                  Feed
                </h2>
                <ul className="media-list tweets">
                  {/* Tweets */}
                </ul>
              </div>
            );
          }

        }

        export default Feed;
        `}/>
      </CodeTabs>

      <h3>
        Routes.js
      </h3>
      <p>
        Next open the <code>routes.js</code> file at the root of your project. It should look like this:
      </p>
      <Markdown type="jsx" text={`
      import React from 'react';
      import { Route, IndexRoute, Redirect } from 'react-router';

      import UserIsAuthenticated from './src/decorators/UserIsAuthenticated';
      import Master from './src/components/Master';
      import Layout from './src/components/Layout';

      export default (
        <Route component={UserIsAuthenticated(Master)}>
          <Route path="/" component={Layout} />
        </Route>
      );
      `}/>
      <p>
        This file declares the route hierarchy for your application, which is a set of instructions that determine
        what gets rendered based on the URL in the browser. If you've used <code>react-router</code> before,
        this file should look familiar.
      </p>
      <p>
        Lore makes no modifications to these routes or to the behavior of <code>react-router</code>, so all of
        React Router's documentaion and examples will be directly applicable to your project.
      </p>

      <blockquote>
        <p>
          You can learn more about this file <Link to="/anatomy/routes/">here</Link>.
        </p>
      </blockquote>

      <h3>
        Add Feed to Routes.js
      </h3>
      <p>
        Import the <code>Feed</code> component into <code>routes.js</code> and update the code to look like this:
      </p>

      <Markdown type="jsx" text={`
      // routes.js
      ...
      import Feed from './src/components/Feed';

      export default (
        <Route component={UserIsAuthenticated(Master)}>
          <Route path="/" component={Layout}>
            <IndexRoute component={Feed} />
          </Route>
        </Route>
      )
      `}/>
      <p>
        Here we've added an <code>IndexRoute</code> inside the root route and configured it to render
        the <code>Feed</code>. This configuration gives us the flexibility to change what should be displayed on
        the homepage later, while also declaring that the default view should be the Feed.
      </p>

      <h3>
        Render Route Children in Layout
      </h3>
      <p>
        If you refresh the application right now, you'll notice the <code>Feed</code> component isn't being
        displayed, and that's because we haven't told the <code>Layout</code> where to render it yet.
      </p>

      <p>
        To fix this, open the <code>Layout</code> component and find the code in the <code>render()</code> method
        that looks like this:
      </p>

      <Markdown text={`
      // src/components/Layout.js
      <div className="col-md-offset-3 col-md-6">
        {/* Feed goes here */}
      </div>
      `} />

      <p>
        Modify that code to look like this:
      </p>

      <Markdown text={`
      // src/components/Layout.js
      <div className="col-md-offset-3 col-md-6">
        {React.cloneElement(this.props.children)}
      </div>
      `} />

      <p>
        When we added the <code>Feed</code> component to <code>routes.js</code>, we listed it as
        a <strong>child</strong> of the <code>Layout</code>. The code we just pasted says <em>"clone my children and
        render them here"</em>, which means the <code>Layout</code> will be inserted into that <code>div</code> tag.
      </p>
      <p>
        With this change in place, refresh the application and you should now see <strong>"Feed"</strong> displayed
        in the middle of the page.
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
        src/components/Feed.js
      </h3>

      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        import React from 'react';
        import createReactClass from 'create-react-class';
        import PropTypes from 'prop-types';

        export default createReactClass({
          displayName: 'Feed',

          render() {
            return (
              <div className="feed">
                <h2 className="title">
                  Feed
                </h2>
                <ul className="media-list tweets">
                  {/* Tweets */}
                </ul>
              </div>
            );
          }

        });
        `}/>
        <CodeTab syntax="ES6" text={`
        import React from 'react';
        import PropTypes from 'prop-types';

        class Feed extends React.Component {

          render() {
            return (
              <div className="feed">
                <h2 className="title">
                  Feed
                </h2>
                <ul className="media-list tweets">
                  {/* Tweets */}
                </ul>
              </div>
            );
          }

        }

        export default Feed;
        `}/>
        <CodeTab syntax="ESNext" text={`
        import React from 'react';
        import PropTypes from 'prop-types';

        class Feed extends React.Component {

          render() {
            return (
              <div className="feed">
                <h2 className="title">
                  Feed
                </h2>
                <ul className="media-list tweets">
                  {/* Tweets */}
                </ul>
              </div>
            );
          }

        }

        export default Feed;
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

      export default (
        <Route component={UserIsAuthenticated(Master)}>
          <Route path="/" component={Layout}>
            <IndexRoute component={Feed} />
          </Route>
        </Route>
      );
      `}/>


      <h3>
        src/components/Layout.js
      </h3>

      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        /**
         * This component is intended to reflect the high level structure of your application,
         * and render any components that are common across all views, such as the header or
         * top-level navigation. All other components should be rendered by route handlers.
         **/

        import React from 'react';
        import createReactClass from 'create-react-class';
        import PropTypes from 'prop-types';
        import Header from './Header';

        export default createReactClass({
          displayName: 'Layout',

          render() {
            return (
              <div>
                <Header />
                <div className="container">
                  <div className="row">
                    <div className="col-md-offset-3 col-md-6">
                      {React.cloneElement(this.props.children)}
                    </div>
                  </div>
                </div>
              </div>
            );
          }

        });
        `}/>
        <CodeTab syntax="ES6" text={`
        /**
         * This component is intended to reflect the high level structure of your application,
         * and render any components that are common across all views, such as the header or
         * top-level navigation. All other components should be rendered by route handlers.
         **/

        import React from 'react';
        import PropTypes from 'prop-types';
        import Header from './Header';

        class Layout extends React.Component {

          render() {
            return (
              <div>
                <Header />
                <div className="container">
                  <div className="row">
                    <div className="col-md-offset-3 col-md-6">
                      {React.cloneElement(this.props.children)}
                    </div>
                  </div>
                </div>
              </div>
            );
          }

        };

        export default Layout;
        `}/>
        <CodeTab syntax="ESNext" text={`
        /**
         * This component is intended to reflect the high level structure of your application,
         * and render any components that are common across all views, such as the header or
         * top-level navigation. All other components should be rendered by route handlers.
         **/

        import React from 'react';
        import PropTypes from 'prop-types';
        import Header from './Header';

        class Layout extends React.Component {

          render() {
            return (
              <div>
                <Header />
                <div className="container">
                  <div className="row">
                    <div className="col-md-offset-3 col-md-6">
                      {React.cloneElement(this.props.children)}
                    </div>
                  </div>
                </div>
              </div>
            );
          }

        };

        export default Layout;
        `}/>
      </CodeTabs>

      <h2>
        Next Steps
      </h2>

      <p>
        Next we're going to learn about the data structure Lore uses and <Link to="../../data/overview/">add some mock data to our application </Link>.
      </p>
    </Template>
  )
};
