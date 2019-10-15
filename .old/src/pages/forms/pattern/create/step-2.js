import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/forms/PatternConstruction';
import Markdown from '../../../../components/Markdown';
import CodeTabs from '../../../../components/CodeTabs';
import CodeTab from '../../../../components/CodeTab';
import FormsPatternTutorialBranch from '../../../../components/FormsPatternTutorialBranch';
import image from '../../../../assets/images/forms/tutorial/create-tweet-dialog.png';

export default (props) => {
  return (
    <Template>
      <h1>
        2. Refactor Form
      </h1>
      <p>
        In this step we'll make small change to refactor our form, and eliminate
        the <code>getErrors()</code> and <code>hasError()</code> callbacks from our form.
      </p>

      <FormsPatternTutorialBranch branch="create.2" />

      <h3>
        What's the problem?
      </h3>
      <p>
        Take a look at the code below, which reflects the essence of the form, where we have a body that renders
        some fields, and a footer that renders some actions:
      </p>
      <Markdown text={`
      ...
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

      render() {
        const { data } = this.state;
        const validators = this.getValidators(data);
        const errors = this.getErrors(validators, data);
        const hasError = this.hasError(errors);

        return (
          <div className="modal-dialog">
            <div className="modal-content">
              ...
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12">
                    <Field name="text" data={data} errors={errors} onChange={this.onChange}>
                      ...
                    </Field>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <Field name="userId" data={data} errors={errors} onChange={this.onChange}>
                      ...
                    </Field>
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
      ...
      `}/>
      <p>
        Once concern with this code is the very generic nature of the functions below:
      </p>
      <ul>
        <li>
          <code>getErrors()</code> which calculates errors for each fields based on what the user has entered
        </li>
        <li>
          <code>hasError()</code> which is a convenience function to generate a simple boolean as to whether the
          form has any errors
        </li>
      </ul>
      <p>
        The reason we don't like these functions is because every form will need them, and they're unlikely to
        ever change.
      </p>

      <h3>
        How do we solve this?
      </h3>
      <p>
        One approach to solving this problem might be to convert them into utility functions, and simply import
        them into all the forms that use them. This would certainly reduce the problem, and eliminate ~20 lines of
        code.
      </p>
      <p>
        But we're going to use an alternate approach, and import a <code>Form</code> component from
        the <code>lore-react-forms</code> package. This component will eliminate the need to define those functions
        at all, and also provide some added benefits that we'll see unfold in later steps.
      </p>
      <blockquote>
        <p>
          You can learn more about the <code>Form</code> component <Link to="/forms/components/form/">here</Link>.
        </p>
      </blockquote>

      <h3>
        Import Form
      </h3>
      <p>
        Start by importing <code>Form</code> from <code>lore-react-forms</code>.
      </p>
      <Markdown text={`
      // src/dialogs/tweet/create/index.js
      import { Field, Form, PropBarrier } from 'lore-react-forms';
      ...
      `}/>
      <p>
        Then refactor the form code to look like this:
      </p>
      <Markdown text={`
      render() {
        const { data } = this.state;
        const validators = this.getValidators(data);

        return (
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                ...
              </div>
              <Form
                data={data}
                validators={validators}
                onChange={this.onChange}
                callbacks={{
                  onSubmit: this.onSubmit,
                  dismiss: this.dismiss
                }}
              >
                {(form) => (
                  <PropBarrier>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-12">
                          <Field name="text" data={form.data} errors={form.errors} onChange={form.onChange}>
                            ...
                          </Field>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <Field name="userId" data={form.data} errors={form.errors} onChange={form.onChange}>
                            ...
                          </Field>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <div className="row">
                        <div className="col-md-12">
                          <button
                            type="button"
                            className="btn btn-default"
                            onClick={form.callbacks.dismiss}
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary"
                            disabled={form.hasError}
                            onClick={form.callbacks.onSubmit}
                          >
                            Create
                          </button>
                        </div>
                      </div>
                    </div>
                  </PropBarrier>
                )}
              </Form>
            </div>
          </div>
        );
      }
      `}/>

      <h3>
        Review
      </h3>
      <p>
        This wasn't a big change, but it does provide a few benefits.
      </p>
      <p>
        For starters, we no longer need to calculate <code>errors</code> or <code>hasError</code> as
        the <code>Form</code> component does it for us, and makes those values available
        via <code>form.errors</code> and <code>form.hasError</code>. This means you can now delete
        the <code>getErrors()</code> and <code>hasError()</code> callbacks.
      </p>
      <p>
        This also means some of the values passed to <code>Field</code> are now obtained from <code>form</code>, such
        as:
      </p>
      <ul>
        <li>
          <code>data</code> becomes <code>form.data</code>
        </li>
        <li>
          <code>errors</code> becomes <code>form.errors</code>
        </li>
        <li>
          <code>this.onChange</code> becomes <code>form.onChange</code>
        </li>
        <li>
          <code>this.dismiss</code> becomes <code>form.callbacks.dismiss</code>
        </li>
        <li>
          <code>this.onSubmit</code> becomes <code>form.callbacks.onSubmit</code>
        </li>
      </ul>

      <h3>
        Visual Check-in
      </h3>
      <p>
        If everything went well, clicking the create button will still launch a dialog that you can use to create a
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
        src/dialogs/tweet/create/index.js
      </h3>
      <Markdown text={`
      import React from 'react';
      import createReactClass from 'create-react-class';
      import PropTypes from 'prop-types';
      import _ from 'lodash';
      import { Connect } from 'lore-hook-connect';
      import { Form, Field, PropBarrier } from 'lore-react-forms';

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

        render() {
          const { data } = this.state;
          const validators = this.getValidators(data);

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
                <Form
                  data={data}
                  validators={validators}
                  onChange={this.onChange}
                  callbacks={{
                    onSubmit: this.onSubmit,
                    dismiss: this.dismiss
                  }}
                >
                  {(form) => (
                    <PropBarrier>
                      <div className="modal-body">
                        <div className="row">
                          <div className="col-md-12">
                            <Field name="text" data={form.data} errors={form.errors} onChange={form.onChange}>
                              {(field) => {
                                return (
                                  <div className={\`form-group \$\{field.touched && field.error ? 'has-error' : ''\}\`}>
                                    <label>
                                      Message
                                    </label>
                                    <textarea
                                      className="form-control"
                                      rows="3"
                                      value={field.value}
                                      placeholder="What's happening?"
                                      onChange={(event) => {
                                        field.onChange(event, event.target.value)
                                      }}
                                      onBlur={field.onBlur}
                                    />
                                    {field.touched && field.error ? (
                                      <span className="help-block">
                                        {field.error}
                                      </span>
                                    ) : null}
                                  </div>
                                )
                              }}
                            </Field>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <Field name="userId" data={form.data} errors={form.errors} onChange={form.onChange}>
                              {(field) => {
                                return (
                                  <div className={\`form-group \$\{field.touched && field.error ? 'has-error' : ''\}\`}>
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
                                            value={field.value}
                                            onChange={(event) => {
                                              const value = event.target.value;
                                              field.onBlur();
                                              field.onChange(event, value ? Number(value) : undefined)
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
                                    {field.touched && field.error ? (
                                      <span className="help-block">
                                        {field.error}
                                      </span>
                                    ) : null}
                                  </div>
                                );
                              }}
                            </Field>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <div className="row">
                          <div className="col-md-12">
                            <button
                              type="button"
                              className="btn btn-default"
                              onClick={form.callbacks.dismiss}
                            >
                              Cancel
                            </button>
                            <button
                              type="button"
                              className="btn btn-primary"
                              disabled={form.hasError}
                              onClick={form.callbacks.onSubmit}
                            >
                              Create
                            </button>
                          </div>
                        </div>
                      </div>
                    </PropBarrier>
                  )}
                </Form>
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
        Next we're going to <Link to="../step-3/">convert the fields to functions</Link>.
      </p>
    </Template>
  )
};
