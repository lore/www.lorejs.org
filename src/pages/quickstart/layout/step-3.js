import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Code from '../../../components/Code';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/layout/final.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 3: Add the Header
      </h1>

      <p>
        In this step we're going to lay out the application and add a Header at the top of the page.
      </p>

      <QuickstartBranch branch="layout.3" />

      <h3>
        Generate the Header
      </h3>

      <p>
        The Lore CLI includes a number of commands to create various types of project files. One of those commands is
        <code>generate</code>, and we'll be using it to generate the <code>Header</code> component.
      </p>
      <p>
        Run this command from the CLI:
      </p>

      <Code type="sh" text={`
      lore generate component Header
      `}/>

      <blockquote>
        <p>
          You can learn more about the <code>generate
          component</code> command <Link to="/cli/lore-generate-component/">here</Link>.
        </p>
      </blockquote>
      <p>
        This command will generate a component called <code>Header</code> and place it
        at <code>src/components/Header.js</code>. The file will look like this:
      </p>

      <Code type="jsx" text={`
      import React from 'react';
      import PropTypes from 'prop-types';
      
      Header.propTypes = {
        // models: PropTypes.object.isRequired
      };
      
      Header.defaultProps = {};
      
      export default function Header(props) {
        return (
          <div></div>
        );
      }
      `}/>

      <h3>
        Modify the Header
      </h3>

      <p>
        Next, modify the component to look like this:
      </p>

      <Code type="jsx" text={`
      // src/components/Header.js
      ...
      export default function Header(props) {
        return (
          <nav className="navbar navbar-default navbar-static-top header">
            <div className="container">
              <div className="navbar-header">
                <div className="navbar-brand">
                  Lore Quickstart
                </div>
              </div>
            </div>
          </nav>
        );
      }
      `}/>


      <h3>
        Add Header to Layout
      </h3>

      <p>
        Finally, let's render the <code>Header</code> in the browser. Open the <code>Layout</code> component and
        import the <code>Header</code>. Then update the code that gets returned to look like this:
      </p>

      <Code syntax="jsx" text={`
      // src/components/Layout.js
      ...
      import Header from './Header';
      
      export default function Layout(props) {
        return (
          <div>
            <Header />
            <div className="container">
              <div className="row">
                <div className="col-md-offset-3 col-md-6">
                  {/* Feed will go here */}
                </div>
              </div>
            </div>
          </div>
        );
      }
      `}/>


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
        src/components/Header.js
      </h3>

      <Code type="jsx" text={`
      import React from 'react';
      import PropTypes from 'prop-types';
      
      export default function Header(props) {
        return (
          <nav className="navbar navbar-default navbar-static-top header">
            <div className="container">
              <div className="navbar-header">
                <div className="navbar-brand">
                  Lore Quickstart
                </div>
              </div>
            </div>
          </nav>
        );
      }
      `}/>

      <h3>
        src/components/Layout.js
      </h3>

      <Code type="jsx" text={`
      /**
       * This component is intended to reflect the high level structure of your application,
       * and render any components that are common across all views, such as the header or
       * top-level navigation. All other components should be rendered by route handlers.
       */
      
      import React from 'react';
      import PropTypes from 'prop-types';
      import Header from './Header';
      
      export default function Layout(props) {
        return (
          <div>
            <Header />
            <div className="container">
              <div className="row">
                <div className="col-md-offset-3 col-md-6">
                  {/* Feed will go here */}
                </div>
              </div>
            </div>
          </div>
        );
      }
      `}/>

      <h2>
        Next Steps
      </h2>

      <p>
        Next we're going to <Link to="/quickstart/routing/overview/">setup routing</Link>.
      </p>
    </Template>
  );
};
