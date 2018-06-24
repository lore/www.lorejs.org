import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/dialogs/step-3.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 3: Add Create Tweet Dialog
      </h1>

      <p>
        In this step we're going create a dialog that we can use to create tweets.
      </p>

      <QuickstartBranch branch="dialogs.3" />

      <h3>
        Add Create Tweet Dialog
      </h3>
      <p>
        Run this command to generate the component we'll use for the dialog:
      </p>

      <Markdown type="sh" text={`
      lore generate component CreateTweetDialog
      `}/>

      <p>
        Then open the file and update it to look like this:
      </p>
      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        import React from 'react';
        import createReactClass from 'create-react-class';
        import PropTypes from 'prop-types';
        import _ from 'lodash';

        export default createReactClass({
          displayName: 'CreateTweetDialog',

          propTypes: {
            title: PropTypes.node,
            description: PropTypes.node
          },

          getInitialState() {
            return {
              data: {
                text: ''
              }
            };
          },

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

          request(data) {
            console.log(data);
          },

          onSubmit() {
            const { data } = this.state;
            this.request(data);
            this.dismiss();
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
              <div ref="modal" className="modal fade">
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
              </div>
            );
          }

        });
        `}/>
        <CodeTab syntax="ES6" text={`
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
            this.show = this.show.bind(this);
            this.dismiss = this.dismiss.bind(this);
            this.request = this.request.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
            this.onChange = this.onChange.bind(this);
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

          request(data) {
            console.log(data);
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
              <div ref="modal" className="modal fade">
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
            this.show = this.show.bind(this);
            this.dismiss = this.dismiss.bind(this);
            this.request = this.request.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
            this.onChange = this.onChange.bind(this);
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

          request(data) {
            console.log(data);
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
              <div ref="modal" className="modal fade">
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
              </div>
            );
          }

        }

        export default CreateTweetDialog;
        `}/>
      </CodeTabs>

      <p>
        This code will give us a Bootstrap dialog we can use to create tweets. When launched, it will fade into
        view, and allow us to enter the text for the tweet and submit it.
      </p>
      <blockquote>
        <p>
          You can learn more about Bootstrap dialogs (called Modals) in
          the <a href="https://getbootstrap.com/docs/3.3/javascript/#modals">modal documentation</a> on the
          Bootstrap website.
        </p>
      </blockquote>
      <p>
        The important parts to call out here are the <code>onSubmit()</code> and <code>request()</code> methods
        shown below:
      </p>

      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        // src/components/CreateTweetDialog.js
        request(data) {
          console.log(data);
        },

        onSubmit() {
          const { data } = this.state;
          this.request(data);
          this.dismiss();
        },
        `}/>
        <CodeTab syntax="ES6" text={`
        // src/components/CreateTweetDialog.js
        request(data) {
          console.log(data);
        }

        onSubmit() {
          const { data } = this.state;
          this.request(data);
          this.dismiss();
        }
        `}/>
        <CodeTab syntax="ESNext" text={`
        // src/components/CreateTweetDialog.js
        request(data) {
          console.log(data);
        }

        onSubmit() {
          const { data } = this.state;
          this.request(data);
          this.dismiss();
        }
        `}/>
      </CodeTabs>

      <p>
        Once the user submits the dialog, the <code>request()</code> method will be invoked and make the API
        request to send the data to the server. But for now, we're simply going to log the data to the console, and
        then dismiss the dialog.
      </p>

      <h3>
        Show the Dialog
      </h3>
      <p>
        Next, open the <code>CreateButton</code> component and import this dialog. Then update
        the <code>onClick()</code> method so that it shows the dialog instead of the text "Dialog Placeholder":
      </p>

      <Markdown text={`
      // src/components/CreateButton.js
      ...
      import CreateTweetDialog from './CreateTweetDialog';
      ...
        onClick() {
          lore.dialog.show(function() {
            return (
              <CreateTweetDialog />
            );
          });
        }
      ...
      `}/>

      <p>
        Now when you click the button to create a dialog, a real dialog appears, and you can even fill it and
        submit the form, causing the data to be logged to the console.
      </p>

      <h3>
        The Create Action
      </h3>
      <p>
        Now we can launch a dialog and get the user input, but we aren't sending that input to the API yet. To do
        that we'll need to invoke the <code>create</code> action, which is done like this:
      </p>
      <Markdown type="jsx" text={`
      lore.actions.tweet.create({
        text: 'My tweet'
      })
      `}/>
      <p>
        The argument you provide is an object with the attributes you want the tweet created with. In this example,
        we're creating a tweet and setting the <code>text</code> of the tweet to <em>"My tweet"</em>.
      </p>
      <p>
        Invoking this action will send a POST request to <code>http://localhost:1337/tweets</code> and include our
        attributes in the body of the request.
      </p>
      <blockquote>
        <p>
          You can learn more about the <code>create</code> action <Link to="/actions/create/">here</Link>.
        </p>
      </blockquote>


      <h3>
        Save the Tweet
      </h3>
      <p>
        Let's finish the dialog by replacing the logging behavior with a real API call. Update
        the <code>request()</code> method of the <code>CreateTweetDialog</code> to look like this:
      </p>

      <Markdown text={`
      // src/components/CreateTweetDialog.js
      request(data) {
        lore.actions.tweet.create(data);
      },
      `}/>

      <p>
        Now when you submit a tweet, the action will send the data to the API. Try it out!
      </p>
      <blockquote>
        <p>
          It's important to point out that the tweets you create <strong>will not appear on the page</strong> until
          you refresh the browser. We'll learn how to change that behavior later in the Quickstart, so that the new
          tweets appear in the Feed immediately.
        </p>
      </blockquote>

      <h3>
        Visual Check-in
      </h3>

      <p>
        If everything went well, your application should now look like this when you click
        the "create tweet" button:
      </p>

      <img className="drop-shadow" src={image} />

      <h2>
        Code Changes
      </h2>

      <p>
        Below is a list of files modified during this step.
      </p>

      <h3>
        src/components/CreateTweetDialog.js
      </h3>
      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        import React from 'react';
        import createReactClass from 'create-react-class';
        import PropTypes from 'prop-types';
        import _ from 'lodash';

        export default createReactClass({
          displayName: 'CreateTweetDialog',

          propTypes: {
            title: PropTypes.node,
            description: PropTypes.node
          },

          getInitialState() {
            return {
              data: {
                text: ''
              }
            };
          },

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

          request(data) {
            lore.actions.tweet.create(data);
          },

          onSubmit() {
            const { data } = this.state;
            this.request(data);
            this.dismiss();
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
              <div ref="modal" className="modal fade">
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
              </div>
            );
          }

        });
        `}/>
        <CodeTab syntax="ES6" text={`
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
            this.show = this.show.bind(this);
            this.dismiss = this.dismiss.bind(this);
            this.request = this.request.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
            this.onChange = this.onChange.bind(this);
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
              <div ref="modal" className="modal fade">
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
            this.show = this.show.bind(this);
            this.dismiss = this.dismiss.bind(this);
            this.request = this.request.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
            this.onChange = this.onChange.bind(this);
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
              <div ref="modal" className="modal fade">
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
              </div>
            );
          }

        }

        export default CreateTweetDialog;
        `}/>
      </CodeTabs>

      <h3>
        src/components/CreateButton.js
      </h3>
      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        import React from 'react';
        import createReactClass from 'create-react-class';
        import PropTypes from 'prop-types';
        import CreateTweetDialog from './CreateTweetDialog';

        export default createReactClass({
          displayName: 'CreateButton',

          onClick() {
            lore.dialog.show(function() {
              return (
                <CreateTweetDialog />
              );
            });
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
        import CreateTweetDialog from './CreateTweetDialog';

        class CreateButton extends React.Component {

          constructor(props) {
            super(props);
            this.onClick = this.onClick.bind(this);
          }

          onClick() {
            lore.dialog.show(function() {
              return (
                <CreateTweetDialog />
              );
            });
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
        import CreateTweetDialog from './CreateTweetDialog';

        class CreateButton extends React.Component {

          constructor(props) {
            super(props);
            this.onClick = this.onClick.bind(this);
          }

          onClick() {
            lore.dialog.show(function() {
              return (
                <CreateTweetDialog />
              );
            });
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

      <h2>
        Next Steps
      </h2>

      <p>
        Next we're going <Link to="../step-4/">finish adding the create dialog</Link>.
      </p>
    </Template>
  )
};
