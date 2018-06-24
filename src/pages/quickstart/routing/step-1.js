import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/layout/final.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 1: Convert Header Title to Link
      </h1>

      <p>
        In this step we'll use <code>react-router</code> to convert the title in the header to a clickable link
        that will always take the user back to the homepage. We won't make use of the functionality in this
        Quickstart, but it's a good practice to follow.
      </p>

      <QuickstartBranch branch="routing.1" />

      <h3>
        Update the Header
      </h3>
      <p>
        Open the <code>Header</code> component and find this line:
      </p>

      <Markdown text={`
      // src/components/Header.js
      <div className="navbar-brand">
        Lore Quickstart
      </div>
      `} />

      <p>
        Next, import the <code>Link</code> tag from <code>react-router</code> and update the code to look like this:
      </p>
      <Markdown text={`
      // src/components/Header.js
      import { Link } from 'react-router';
      ...
      <Link className="navbar-brand" to="/">
        Lore Quickstart
      </Link>
      `}/>

      <p>
        In the code above, we've converted the <code>div</code> tag into a clickable link, and set
        the <code>to</code> property to the root URL (<code>/</code>). Now whenever you click the link, you'll be
        taken back to the homepage.
      </p>

      <h3>
        Visual Check-in
      </h3>
      <p>
        If everything went well, your application will look the same visually, but now the title in the header will
        be a clickable link that takes you back to the homepage.
      </p>

      <img className="drop-shadow" src={image} />

      <h2>
        Code Changes
      </h2>
      <p>
        Below is a list of files modified during this step.
      </p>

      <h3>
        src/components/Header.js
      </h3>

      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        import React from 'react';
        import createReactClass from 'create-react-class';
        import PropTypes from 'prop-types';
        import { Link } from 'react-router';

        export default createReactClass({
          displayName: 'Header',

          render() {
            return (
              <nav className="navbar navbar-default navbar-static-top header">
                <div className="container">
                  <div className="navbar-header">
                    <Link className="navbar-brand" to="/">
                      Lore Quickstart
                    </Link>
                  </div>
                </div>
              </nav>
            );
          }
        });
        `}/>
        <CodeTab syntax="ES6" text={`
        import React from 'react';
        import PropTypes from 'prop-types';
        import { Link } from 'react-router';

        class Header extends React.Component {

          render() {
            return (
              <nav className="navbar navbar-default navbar-static-top header">
                <div className="container">
                  <div className="navbar-header">
                    <Link className="navbar-brand" to="/">
                      Lore Quickstart
                    </Link>
                  </div>
                </div>
              </nav>
            );
          }

        }

        export default Header;
        `}/>
        <CodeTab syntax="ESNext" text={`
        import React from 'react';
        import PropTypes from 'prop-types';
        import { Link } from 'react-router';

        class Header extends React.Component {

          render() {
            return (
              <nav className="navbar navbar-default navbar-static-top header">
                <div className="container">
                  <div className="navbar-header">
                    <Link className="navbar-brand" to="/">
                      Lore Quickstart
                    </Link>
                  </div>
                </div>
              </nav>
            );
          }

        }

        export default Header;
        `}/>
      </CodeTabs>

      <h2>
        Next Steps
      </h2>
      <p>
        Next we're going to create a <code>Feed</code> component for displaying tweets and <Link to="../step-2/">add
        it to the routes</Link>.
      </p>
    </Template>
  )
};
