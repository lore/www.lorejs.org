import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';
import doubleBackdropImage from '../../../assets/images/quickstart/dialogs/double-backdrop.png';
import image from '../../../assets/images/quickstart/dialogs/step-3.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 4: Simplify the Dialog
      </h1>

      <p>
        In this step we're going to introduce a version of <code>lore-hook-dialog</code> that is tailored for
        mounting, showing, and dismissing Bootstrap dialogs.
      </p>

      <QuickstartBranch branch="dialogs.4" />

      <h3>
        What's the problem?
      </h3>
      <p>
        The dialog we just created is responsible for showing and dismissing itself. But in a real application, you
        may have dozens of dialogs for creating, updating and deleting content. And if your application uses a
        UI library like Bootstrap, each of those dialogs will likely have the <strong>exact same code for
        doing so</strong>.
      </p>
      <p>
        So in this step, we're just going to embrace that, and we're going to introduce a version
        of <code>lore-hook-dialog</code> that has been customized to understand how to show and dismiss
        Bootstrap dialogs. This package is called <code>lore-hook-dialog-bootstrap</code>.
      </p>

      <h3>
        Add Bootstrap-specific Dialog Hook
      </h3>
      <p>
        Run this command to install the package:
      </p>

      <Markdown type="sh" text={`
      npm install lore-hook-dialog-bootstrap --save
      `}/>

      <p>
        Next open <code>index.js</code> and replace the <code>lore-hook-dialog</code> hook
        with <code>lore-hook-dialog-bootstrap</code> like this:
      </p>

      <Markdown text={`
      // index.js
      ...
      import dialog from 'lore-hook-dialog-bootstrap';
      ...

      lore.summon({
        hooks: {
          ...
          dialog,
          ...
        }
      });
      `}/>

      <p>
        With that change in place, the application will still work, but you'll notice that now when you launch the
        dialog, it now has a super dark backdrop that it didn't before.
      </p>

      <img className="drop-shadow" src={doubleBackdropImage} />

      <h3>
        Why does this happen?
      </h3>
      <p>
        This is happening because we're now creating <strong>two</strong> backdrops. Previously, our dialog needed to
        include code for showing and hiding itself, and it's this code (shown below) that also generates the
        backdrop:
      </p>

      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        // src/components/CreateTweetDialog.js
        import React from 'react';
        import createReactClass from 'create-react-class';
        import PropTypes from 'prop-types';
        import _ from 'lodash';

        export default createReactClass({
          displayName: 'CreateTweetDialog',

          componentDidMount() {
            this.show();
          },

          show() {
            const modal = this.refs.modal;
            $(modal).modal('show');
          },

          dismiss() {
            const modal = this.refs.modal;
            $(modal).modal('hide');
          },

          render() {
            const { data } = this.state;

            return (
              <div ref="modal" className="modal fade">
                {/* ...your dialog renders here... */}
              </div>
            );
          }

        });
        `}/>
        <CodeTab syntax="ES6" text={`
        // src/components/CreateTweetDialog.js
        import React from 'react';
        import PropTypes from 'prop-types';
        import _ from 'lodash';

        class CreateTweetDialog extends React.Component {

          constructor(props) {
            super(props);

            // bind custom methods
            this.show = this.show.bind(this);
            this.dismiss = this.dismiss.bind(this);
          }

          componentDidMount() {
            this.show();
          }

          show() {
            const modal = this.refs.modal;
            $(modal).modal('show');
          }

          dismiss() {
            const modal = this.refs.modal;
            $(modal).modal('hide');
          }

          render() {
            const { data } = this.state;

            return (
              <div ref="modal" className="modal fade">
                {/* ...your dialog renders here... */}
              </div>
            );
          }

        }
        `}/>
        <CodeTab syntax="ESNext" text={`
        // src/components/CreateTweetDialog.js
        import React from 'react';
        import PropTypes from 'prop-types';
        import _ from 'lodash';

        class CreateTweetDialog extends React.Component {

          constructor(props) {
            super(props);

            // bind custom methods
            this.show = this.show.bind(this);
            this.dismiss = this.dismiss.bind(this);
          }

          componentDidMount() {
            this.show();
          }

          show() {
            const modal = this.refs.modal;
            $(modal).modal('show');
          }

          dismiss() {
            const modal = this.refs.modal;
            $(modal).modal('hide');
          }

          render() {
            const { data } = this.state;

            return (
              <div ref="modal" className="modal fade">
                {/* ...your dialog renders here... */}
              </div>
            );
          }

        }
        `}/>
      </CodeTabs>

      <p>
        Since the new <code>lore.dialog.show()</code> method automatically wraps each dialog with this code for us,
        we can now remove this boilerplate from <em>our</em> dialog.
      </p>

      <h3>
        Remove Boilerplate from Dialog
      </h3>

      <p>
        Open the <code>CreateTweetDialog</code> and update it to look like this:
      </p>

      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        // src/components/CreateTweetDialog.js
        import React from 'react';
        import createReactClass from 'create-react-class';
        import PropTypes from 'prop-types';
        import _ from 'lodash';

        export default createReactClass({
          displayName: 'CreateTweetDialog',

          propTypes: {
            onCancel: PropTypes.func
          },

          getInitialState() {
            return {
              data: {
                text: ''
              }
            };
          },

          request(data) {
            lore.actions.tweet.create(data);
          },

          onSubmit() {
            const { data } = this.state;
            this.request(data);
            this.dismiss();
          },

          dismiss() {
            this.props.onCancel();
          },

          onChange(name, value) {
            const nextData = _.merge({}, this.state.data);
            nextData[name] = value;
            this.setState({
              data: nextData
            });
          },

          render() {
            const { data } = this.state;

            return (
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" onClick={this.dismiss}>
                      <span>&times;</span>
                    </button>
                    <h4 className="modal-title">
                      Create Tweet
                    </h4>
                  </div>
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Message</label>
                          <textarea
                            className="form-control"
                            rows="3"
                            value={data.text}
                            placeholder="What's happening?"
                            onChange={(event) => {
                              this.onChange('text', event.target.value)
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <div className="row">
                      <div className="col-md-12">
                        <button
                          type="button"
                          className="btn btn-default"
                          onClick={this.dismiss}
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary"
                          disabled={!data.text}
                          onClick={this.onSubmit}
                        >
                          Create
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }

        });
        `}/>
        <CodeTab syntax="ES6" text={`
        // src/components/CreateTweetDialog.js
        import React from 'react';
        import PropTypes from 'prop-types';
        import _ from 'lodash';

        class CreateTweetDialog extends React.Component {

          constructor(props) {
            super(props);

            // set initial state
            this.state = {
              data: {
                text: ''
              }
            };

            // bind custom methods
            this.request = this.request.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
            this.onChange = this.onChange.bind(this);
          }

          request(data) {
            lore.actions.tweet.create(data);
          }

          onSubmit() {
            const { data } = this.state;
            this.request(data);
            this.dismiss();
          }

          onChange(name, value) {
            const nextData = _.merge({}, this.state.data);
            nextData[name] = value;
            this.setState({
              data: nextData
            });
          }

          render() {
            const { data } = this.state;

            return (
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" onClick={this.dismiss}>
                      <span>&times;</span>
                    </button>
                    <h4 className="modal-title">
                      Create Tweet
                    </h4>
                  </div>
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Message</label>
                          <textarea
                            className="form-control"
                            rows="3"
                            value={data.text}
                            placeholder="What's happening?"
                            onChange={(event) => {
                              this.onChange('text', event.target.value)
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <div className="row">
                      <div className="col-md-12">
                        <button
                          type="button"
                          className="btn btn-default"
                          onClick={this.dismiss}
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary"
                          disabled={!data.text}
                          onClick={this.onSubmit}
                        >
                          Create
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }

        }

        CreateTweetDialog.propTypes = {
          title: PropTypes.node,
          description: PropTypes.node
        };

        export default CreateTweetDialog;
        `}/>
        <CodeTab syntax="ESNext" text={`
        // src/components/CreateTweetDialog.js
        import React from 'react';
        import PropTypes from 'prop-types';
        import _ from 'lodash';

        class CreateTweetDialog extends React.Component {

          static propTypes = {
            title: PropTypes.node,
            description: PropTypes.node
          };

          constructor(props) {
            super(props);

            // set initial state
            this.state = {
              data: {
                text: ''
              }
            };

            // bind custom methods
            this.request = this.request.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
            this.onChange = this.onChange.bind(this);
          }

          request(data) {
            lore.actions.tweet.create(data);
          }

          onSubmit() {
            const { data } = this.state;
            this.request(data);
            this.dismiss();
          }

          onChange(name, value) {
            const nextData = _.merge({}, this.state.data);
            nextData[name] = value;
            this.setState({
              data: nextData
            });
          }

          render() {
            const { data } = this.state;

            return (
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" onClick={this.dismiss}>
                      <span>&times;</span>
                    </button>
                    <h4 className="modal-title">
                      Create Tweet
                    </h4>
                  </div>
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Message</label>
                          <textarea
                            className="form-control"
                            rows="3"
                            value={data.text}
                            placeholder="What's happening?"
                            onChange={(event) => {
                              this.onChange('text', event.target.value)
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <div className="row">
                      <div className="col-md-12">
                        <button
                          type="button"
                          className="btn btn-default"
                          onClick={this.dismiss}
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary"
                          disabled={!data.text}
                          onClick={this.onSubmit}
                        >
                          Create
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }

        }

        export default CreateTweetDialog;
        `}/>
      </CodeTabs>

      <p>
        With that change in place, if you launch your dialog again, it will look and behave like we expect, and
        will once again have only a single backdrop.
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
        index.js
      </h3>
      <Markdown text={`
      /**
       * This file kicks off the build process for the application.  It also attaches
       * the Lore singleton to the window, so you can access it from the command line
       * in case you need to play with it or want to manually kick off actions or check
       * the reducer state (through \`lore.actions.xyz\`, \`lore.reducers.xyz\`,
       * \`lore.models.xyz\`, etc.)
       */

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
      import models from 'lore-hook-models';
      import react from 'lore-hook-react';
      import reducers from 'lore-hook-reducers';
      import redux from 'lore-hook-redux';
      import router from 'lore-hook-router';

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
          models,
          react,
          reducers,
          redux: _.extend(redux, {
            dependencies: ['reducers', 'auth']
          }),
          router
        }
      });
      `}/>

      <h3>
        src/components/CreateTweetDialog.js
      </h3>
      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        // src/components/CreateTweetDialog.js
        import React from 'react';
        import createReactClass from 'create-react-class';
        import PropTypes from 'prop-types';
        import _ from 'lodash';

        export default createReactClass({
          displayName: 'CreateTweetDialog',

          propTypes: {
            onCancel: PropTypes.func
          },

          getInitialState() {
            return {
              data: {
                text: ''
              }
            };
          },

          request(data) {
            lore.actions.tweet.create(data);
          },

          onSubmit() {
            const { data } = this.state;
            this.request(data);
            this.dismiss();
          },

          dismiss() {
            this.props.onCancel();
          },

          onChange(name, value) {
            const nextData = _.merge({}, this.state.data);
            nextData[name] = value;
            this.setState({
              data: nextData
            });
          },

          render() {
            const { data } = this.state;

            return (
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" onClick={this.dismiss}>
                      <span>&times;</span>
                    </button>
                    <h4 className="modal-title">
                      Create Tweet
                    </h4>
                  </div>
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Message</label>
                          <textarea
                            className="form-control"
                            rows="3"
                            value={data.text}
                            placeholder="What's happening?"
                            onChange={(event) => {
                              this.onChange('text', event.target.value)
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <div className="row">
                      <div className="col-md-12">
                        <button
                          type="button"
                          className="btn btn-default"
                          onClick={this.dismiss}
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary"
                          disabled={!data.text}
                          onClick={this.onSubmit}
                        >
                          Create
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }

        });
        `}/>
        <CodeTab syntax="ES6" text={`
        // src/components/CreateTweetDialog.js
        import React from 'react';
        import PropTypes from 'prop-types';
        import _ from 'lodash';

        class CreateTweetDialog extends React.Component {

          constructor(props) {
            super(props);

            // set initial state
            this.state = {
              data: {
                text: ''
              }
            };

            // bind custom methods
            this.request = this.request.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
            this.onChange = this.onChange.bind(this);
          }

          request(data) {
            lore.actions.tweet.create(data);
          }

          onSubmit() {
            const { data } = this.state;
            this.request(data);
            this.dismiss();
          }

          onChange(name, value) {
            const nextData = _.merge({}, this.state.data);
            nextData[name] = value;
            this.setState({
              data: nextData
            });
          }

          render() {
            const { data } = this.state;

            return (
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" onClick={this.dismiss}>
                      <span>&times;</span>
                    </button>
                    <h4 className="modal-title">
                      Create Tweet
                    </h4>
                  </div>
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Message</label>
                          <textarea
                            className="form-control"
                            rows="3"
                            value={data.text}
                            placeholder="What's happening?"
                            onChange={(event) => {
                              this.onChange('text', event.target.value)
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <div className="row">
                      <div className="col-md-12">
                        <button
                          type="button"
                          className="btn btn-default"
                          onClick={this.dismiss}
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary"
                          disabled={!data.text}
                          onClick={this.onSubmit}
                        >
                          Create
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }

        }

        CreateTweetDialog.propTypes = {
          title: PropTypes.node,
          description: PropTypes.node
        };

        export default CreateTweetDialog;
        `}/>
        <CodeTab syntax="ESNext" text={`
        // src/components/CreateTweetDialog.js
        import React from 'react';
        import PropTypes from 'prop-types';
        import _ from 'lodash';

        class CreateTweetDialog extends React.Component {

          static propTypes = {
            title: PropTypes.node,
            description: PropTypes.node
          };

          constructor(props) {
            super(props);

            // set initial state
            this.state = {
              data: {
                text: ''
              }
            };

            // bind custom methods
            this.request = this.request.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
            this.onChange = this.onChange.bind(this);
          }

          request(data) {
            lore.actions.tweet.create(data);
          }

          onSubmit() {
            const { data } = this.state;
            this.request(data);
            this.dismiss();
          }

          onChange(name, value) {
            const nextData = _.merge({}, this.state.data);
            nextData[name] = value;
            this.setState({
              data: nextData
            });
          }

          render() {
            const { data } = this.state;

            return (
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" onClick={this.dismiss}>
                      <span>&times;</span>
                    </button>
                    <h4 className="modal-title">
                      Create Tweet
                    </h4>
                  </div>
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Message</label>
                          <textarea
                            className="form-control"
                            rows="3"
                            value={data.text}
                            placeholder="What's happening?"
                            onChange={(event) => {
                              this.onChange('text', event.target.value)
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <div className="row">
                      <div className="col-md-12">
                        <button
                          type="button"
                          className="btn btn-default"
                          onClick={this.dismiss}
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary"
                          disabled={!data.text}
                          onClick={this.onSubmit}
                        >
                          Create
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }

        }

        export default CreateTweetDialog;
        `}/>
      </CodeTabs>

      <h2>
        Next Steps
      </h2>

      <p>
        Next we're going <Link to="/quickstart/dialogs/step-5/">finish adding the create dialog</Link>.
      </p>
    </Template>
  )
};
