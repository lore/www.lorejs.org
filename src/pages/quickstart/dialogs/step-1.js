import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/dialogs/final.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 1: Add Create Button
      </h1>

      <p>
        In this step we're going to add a button to our application that will launch a dialog when the user clicks
        on it.
      </p>

      <QuickstartBranch branch="dialogs.1" />

      <h3>
        Add Create Button
      </h3>
      <p>
        Run this command to generate our <code>CreateButton</code> component:
      </p>

      <Markdown type="sh" text={`
      lore generate component CreateButton
      `}/>

      <p>
        Then modify the component to look like this:
      </p>

      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        import React from 'react';
        import createReactClass from 'create-react-class';
        import PropTypes from 'prop-types';

        export default createReactClass({
          displayName: 'CreateButton',

          onClick() {
            console.log('Create tweet!');
          },

          render() {
            return (
              <button
                type="button"
                className="btn btn-primary btn-lg create-button"
                onClick={this.onClick}>
                +
              </button>
            );
          }

        });
        `}/>
        <CodeTab syntax="ES6" text={`
        import React from 'react';
        import PropTypes from 'prop-types';

        class CreateButton extends React.Component {

          constructor(props) {
            super(props);
            this.onClick = this.onClick.bind(this);
          }

          onClick() {
            console.log('Create tweet!');
          }

          render () {
            return (
              <button
                type="button"
                className="btn btn-primary btn-lg create-button"
                onClick={this.onClick}>
                +
              </button>
            );
          }

        }

        export default CreateButton;
        `}/>
        <CodeTab syntax="ESNext" text={`
        import React from 'react';
        import PropTypes from 'prop-types';

        class CreateButton extends React.Component {

          constructor(props) {
            super(props);
            this.onClick = this.onClick.bind(this);
          }

          onClick() {
            console.log('Create tweet!');
          }

          render () {
            return (
              <button
                type="button"
                className="btn btn-primary btn-lg create-button"
                onClick={this.onClick}>
                +
              </button>
            );
          }

        }

        export default CreateButton;
        `}/>
      </CodeTabs>

      <p>
        Eventually, we'll have this component launch a dialog when the user clicks on it, but for now we'll just
        have it write a log to the console to say the button was clicked.
      </p>

      <h3>
        Add Button to Header
      </h3>
      <p>
        Next open the <code>Header</code> component. Then import the <code>CreateButton</code> component and insert
        it into the <code>render()</code> method like this:
      </p>

      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        // src/components/Header.js
        import React from 'react';
        import createReactClass from 'create-react-class';
        import PropTypes from 'prop-types';
        import { Link } from 'react-router';
        import CreateButton from './CreateButton';

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
                  <CreateButton/>
                </div>
              </nav>
            );
          }

        });
        `}/>
        <CodeTab syntax="ES6" text={`
        // src/components/Header.js
        import React from 'react';
        import PropTypes from 'prop-types';
        import { Link } from 'react-router';
        import CreateButton from './CreateButton';

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
                  <CreateButton/>
                </div>
              </nav>
            );
          }

        }

        export default Header;
        `}/>
        <CodeTab syntax="ESNext" text={`
        // src/components/Header.js
        import React from 'react';
        import PropTypes from 'prop-types';
        import { Link } from 'react-router';
        import CreateButton from './CreateButton';

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
                  <CreateButton/>
                </div>
              </nav>
            );
          }

        }

        export default Header;
        `}/>
      </CodeTabs>

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
        src/components/CreateButton.js
      </h3>

      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        import React from 'react';
        import createReactClass from 'create-react-class';
        import PropTypes from 'prop-types';

        export default createReactClass({
          displayName: 'CreateButton',

          onClick() {
            console.log('Create tweet!');
          },

          render() {
            return (
              <button
                type="button"
                className="btn btn-primary btn-lg create-button"
                onClick={this.onClick}>
                +
              </button>
            );
          }

        });
        `}/>
        <CodeTab syntax="ES6" text={`
        import React from 'react';
        import PropTypes from 'prop-types';

        class CreateButton extends React.Component {

          constructor(props) {
            super(props);
            this.onClick = this.onClick.bind(this);
          }

          onClick() {
            console.log('Create tweet!');
          }

          render () {
            return (
              <button
                type="button"
                className="btn btn-primary btn-lg create-button"
                onClick={this.onClick}>
                +
              </button>
            );
          }

        }

        export default CreateButton;
        `}/>
        <CodeTab syntax="ESNext" text={`
        import React from 'react';
        import PropTypes from 'prop-types';

        class CreateButton extends React.Component {

          constructor(props) {
            super(props);
            this.onClick = this.onClick.bind(this);
          }

          onClick() {
            console.log('Create tweet!');
          }

          render () {
            return (
              <button
                type="button"
                className="btn btn-primary btn-lg create-button"
                onClick={this.onClick}>
                +
              </button>
            );
          }

        }

        export default CreateButton;
        `}/>
      </CodeTabs>

      <h3>
        src/components/Header.js
      </h3>

      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        import React from 'react';
        import createReactClass from 'create-react-class';
        import PropTypes from 'prop-types';
        import { Link } from 'react-router';
        import CreateButton from './CreateButton';

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
                  <CreateButton/>
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
        import CreateButton from './CreateButton';

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
                  <CreateButton/>
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
        import CreateButton from './CreateButton';

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
                  <CreateButton/>
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
        Next we're going to <Link to="/quickstart/dialogs/step-2/">learn how to mount dialogs</Link>.
      </p>
    </Template>
  )
};
