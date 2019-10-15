import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/forms/PatternConstruction';
import Markdown from '../../../../components/Markdown';
import CodeTabs from '../../../../components/CodeTabs';
import CodeTab from '../../../../components/CodeTab';
import QuickstartBranch from '../../../../components/QuickstartBranch';
import image from '../../../../assets/images/forms/tutorial/create-tweet-dialog.png';

export default (props) => {
  return (
    <Template>
      <h1>
        1. Add Create Dialog
      </h1>
      <p>
        In this step we'll be added a dialog that we can use to create new tweets. This dialog will allow you
        to enter the text for a tweet, as well as specify the user who said it.
      </p>

      <h3>
        Add Dialog
      </h3>
      <p>
        To start, create a new file called <code>index.js</code> located
        at <code>src/dialogs/tweet/create/index.js</code>. Paste the code below into this file.
      </p>
      <Markdown text={`
      import React from 'react';
      import createReactClass from 'create-react-class';
      import PropTypes from 'prop-types';
      import _ from 'lodash';
      import { Connect } from 'lore-hook-connect';

      export default createReactClass({
        displayName: 'CreateTweetDialog',

        propTypes: {
          onCancel: PropTypes.func
        },

        getInitialState() {
          return {
            data: {
              text: '',
              userId: undefined
            },
            touched: {
              text: false,
              userId: false
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

        getValidators: function(data) {
          return {
            text: [function(value) {
              if (!value) {
                return 'This field is required';
              }
            }],
            userId: [function(value) {
              if (value === undefined) {
                return 'This field is required'
              }
            }]
          };
        },

        getErrors: function(validatorDictionary, data) {
          return _.mapValues(data, function(value, key) {
            const validators = validatorDictionary[key];
            let error = null;
            if (validators) {
              validators.forEach(function(validator) {
                error = error || validator(value);
              });
            }
            return error;
          });
        },

        hasError: function(errors) {
          const errorCount = _.reduce(errors, function(result, value, key) {
            if (value) {
              return result + 1;
            }

            return result;
          }, 0);

          return errorCount > 0;
        },

        onBlur: function(field) {
          const touched = this.state.touched;
          touched[field] = true;
          this.setState({
            touched: touched
          });
        },

        render() {
          const { data, touched } = this.state;
          const validators = this.getValidators(data);
          const errors = this.getErrors(validators, data);
          const hasError = this.hasError(errors);

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
                      <div className={\`form-group \$\{touched['text'] && errors['text'] ? 'has-error' : ''\}\`}>
                        <label>
                          Message
                        </label>
                        <textarea
                          className="form-control"
                          rows="3"
                          value={data.text}
                          placeholder="What's happening?"
                          onChange={(event) => {
                            this.onChange('text', event.target.value)
                          }}
                          onBlur={() => {
                            this.onBlur('text');
                          }}
                        />
                        {touched['text'] && errors['text'] ? (
                          <span className="help-block">
                            {errors['text']}
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className={\`form-group \$\{touched['userId'] && errors['userId'] ? 'has-error' : ''\}\`}>
                        <label>
                          User
                        </label>
                        <Connect callback={(getState, props) => {
                          return {
                            options: getState('user.find')
                          };
                        }}>
                          {(connect) => {
                            return (
                              <select
                                className="form-control"
                                value={data.userId}
                                onChange={(event) => {
                                  const value = event.target.value;
                                  this.onBlur('userId');
                                  this.onChange('userId', value ? Number(value) : undefined)
                                }}
                              >
                                {[<option key="" value=""/>].concat(connect.options.data.map((datum) => {
                                  return (
                                    <option key={datum.id} value={datum.id}>
                                      {datum.data.nickname}
                                    </option>
                                  );
                                }))}
                              </select>
                            )
                          }}
                        </Connect>
                        {touched['userId'] && errors['userId'] ? (
                          <span className="help-block">
                            {errors['userId']}
                          </span>
                        ) : null}
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
                        disabled={hasError}
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

      <h3>
        Review Dialog
      </h3>
      <p>
        Let's take a minute to review the form we just added, since we'll be making a series of modifications to
        simplify it over the next several steps.
      </p>
      <p>
        Overall, the form is pretty typical. It has <strong>two fields</strong>; a text field for capturing the
        message, and a dropdown field for specifying which user said it. The form also has <strong>two
        actions</strong>; a cancel button which will dismiss the dialog, and a submit button which will trigger an
        API call to the create the tweet. Additionally, there is also some basic <strong>validation</strong> that
        marks both fields as required, and the submit button will only be enabled once the form is valid.
      </p>
      <p>
        To provide the functionality just described, the form also defines several internal functions, described
        below:
      </p>
      <ul>
        <li>
          <code>getInitialState()</code> which stores the initial values for the form
        </li>
        <li>
          <code>request()</code> which triggers the API call to create the tweet
        </li>
        <li>
          <code>onSubmit()</code> which invokes the API request and dismisses the dialog
        </li>
        <li>
          <code>dismiss()</code> which dismisses the dialog
        </li>
        <li>
          <code>onChange()</code> which updates the state of the form as the user makes changes
        </li>
        <li>
          <code>getValidators()</code> which stores the validation logic for the form
        </li>
        <li>
          <code>getErrors()</code> which calculates errors for each fields based on what the user has entered
        </li>
        <li>
          <code>hasError()</code> which is a convenience function to generate a simple boolean as to whether the
          form has any errors
        </li>
        <li>
          <code>onBlur()</code> which is a callback used to keep track of which fields the user has interacted with
        </li>
      </ul>

      <h3>
        The Goal
      </h3>
      <p>
        All-in-all, this form is pretty basic, and comes in at 210 lines long. The length isn't really a problem, but
        it's a little concerning how much of the code doesn't provide unique value. There's a lot of boilerplate
        that would need to exist in every form, and that can lead to unintentional bugs developed by creating new
        forms by copy/pasting older forms, and also creating a situation where changes to one form (such as the design
        or behavior) need to then be made to <strong>all</strong> forms.
      </p>
      <p>
        Over the next several steps, we're going to be aggressively "trimming the boilerplate", and attempting to
        reduce the form to only the code that is essential and unique to that specific form.
      </p>

      <h3>
        Launch Create Dialog
      </h3>
      <p>
        Next, open the <code>CreateButton</code> component located at <code>src/components/CreateButton.js</code> and
        modify the <code>onClick()</code> callback to look like this:
      </p>
      <Markdown text={`
      ...
      import CreateTweetDialog from '../dialogs/tweet/create';
      ...
        onClick() {
          lore.dialog.show(function() {
            return (
              <CreateTweetDialog />
            );
          })
        },
      ...
      `}/>

      <h3>
        Visual Check-in
      </h3>
      <p>
        If everything went well, clicking the create button will now launch a dialog that you can use to create a
        new tweet.
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
      <Markdown text={`
      import React from 'react';
      import createReactClass from 'create-react-class';
      import PropTypes from 'prop-types';
      import CreateTweetDialog from '../dialogs/tweet/create/index.8';

      export default createReactClass({
        displayName: 'CreateButton',

        onClick() {
          lore.dialog.show(function() {
            return (
              <CreateTweetDialog />
            );
          })
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

      <h3>
        src/dialogs/tweet/create/index.js
      </h3>
      <Markdown text={`
      import React from 'react';
      import createReactClass from 'create-react-class';
      import PropTypes from 'prop-types';
      import _ from 'lodash';
      import { Connect } from 'lore-hook-connect';

      export default createReactClass({
        displayName: 'CreateTweetDialog',

        propTypes: {
          onCancel: PropTypes.func
        },

        getInitialState() {
          return {
            data: {
              text: '',
              userId: undefined
            },
            touched: {
              text: false,
              userId: false
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

        getValidators: function(data) {
          return {
            text: [function(value) {
              if (!value) {
                return 'This field is required';
              }
            }],
            userId: [function(value) {
              if (value === undefined) {
                return 'This field is required'
              }
            }]
          };
        },

        getErrors: function(validatorDictionary, data) {
          return _.mapValues(data, function(value, key) {
            const validators = validatorDictionary[key];
            let error = null;
            if (validators) {
              validators.forEach(function(validator) {
                error = error || validator(value);
              });
            }
            return error;
          });
        },

        hasError: function(errors) {
          const errorCount = _.reduce(errors, function(result, value, key) {
            if (value) {
              return result + 1;
            }

            return result;
          }, 0);

          return errorCount > 0;
        },

        onBlur: function(field) {
          const touched = this.state.touched;
          touched[field] = true;
          this.setState({
            touched: touched
          });
        },

        render() {
          const { data, touched } = this.state;
          const validators = this.getValidators(data);
          const errors = this.getErrors(validators, data);
          const hasError = this.hasError(errors);

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
                      <div className={\`form-group \$\{touched['text'] && errors['text'] ? 'has-error' : ''\}\`}>
                        <label>
                          Message
                        </label>
                        <textarea
                          className="form-control"
                          rows="3"
                          value={data.text}
                          placeholder="What's happening?"
                          onChange={(event) => {
                            this.onChange('text', event.target.value)
                          }}
                          onBlur={() => {
                            this.onBlur('text');
                          }}
                        />
                        {touched['text'] && errors['text'] ? (
                          <span className="help-block">
                            {errors['text']}
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className={\`form-group \$\{touched['userId'] && errors['userId'] ? 'has-error' : ''\}\`}>
                        <label>
                          User
                        </label>
                        <Connect callback={(getState, props) => {
                          return {
                            options: getState('user.find')
                          };
                        }}>
                          {(connect) => {
                            return (
                              <select
                                className="form-control"
                                value={data.userId}
                                onChange={(event) => {
                                  const value = event.target.value;
                                  this.onBlur('userId');
                                  this.onChange('userId', value ? Number(value) : undefined)
                                }}
                              >
                                {[<option key="" value=""/>].concat(connect.options.data.map((datum) => {
                                  return (
                                    <option key={datum.id} value={datum.id}>
                                      {datum.data.nickname}
                                    </option>
                                  );
                                }))}
                              </select>
                            )
                          }}
                        </Connect>
                        {touched['userId'] && errors['userId'] ? (
                          <span className="help-block">
                            {errors['userId']}
                          </span>
                        ) : null}
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
                        disabled={hasError}
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

      <h2>
        Next Steps
      </h2>
      <p>
        Next we're going to <Link to="../step-1/">simplify the fields</Link>.
      </p>
    </Template>
  )
};
