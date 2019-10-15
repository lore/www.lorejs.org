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
        3. Convert Fields to Functions
      </h1>
      <p>
        In this step we'll be converting our form fields into functions.
      </p>

      <FormsPatternTutorialBranch branch="create.3" />

      <h3>
        What's the problem?
      </h3>
      <p>
        To illustrate the issue, take a look at the text field for the form, show below:
      </p>
      <Markdown text={`
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
      `}/>
      <p>
        Most of this form field will be identical across all forms in the application, which includes the classes
        applied, where the error message appears, even the callback functions
        like <code>onChange</code> and <code>onBlur()</code>.
      </p>
      <p>
        In fact, there is very little that's unique about this specific text field aside from
        the field <strong>name</strong>, the <strong>label</strong> and the <strong>placeholder</strong> text.
      </p>

      <h3>
        How do we solve this?
      </h3>
      <p>
        To solve this, we're going to convert out form fields into functions, and only provide the information that
        is truly unique to that field.
      </p>
      <p>
        We're also going to store these functions in our application configuration,
        under <code>config/dialogs.js</code>.
      </p>

      <h3>
        Create Config for Dialogs
      </h3>
      <p>
        Start by creating a new config file called <code>dialogs.js</code> located at <code>config/dialogs.js</code>,
        and paste the code below into that file:
      </p>
      <Markdown text={`
      import React from 'react';
      import _ from 'lodash';
      import { Connect } from 'lore-hook-connect';
      import { Field } from 'lore-react-forms';

      export default {

        fieldMap: {
          text: function(form, props, name) {
            const {
              label,
              placeholder
            } = props;

            return (
              <Field key={name} name={name} data={form.data} errors={form.errors} onChange={form.onChange}>
                {(field) => {
                  return (
                    <div key={name} className={\`form-group \$\{field.touched && field.error ? 'has-error' : ''\}\`}>
                      <label>
                        {label}
                      </label>
                      <textarea
                        className="form-control"
                        rows="3"
                        value={field.value}
                        placeholder={placeholder}
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
            );
          },

          select: function(form, props, name) {
            const {
              options,
              label,
              optionLabel
            } = props;

            return (
              <Field key={name} name={name} data={form.data} errors={form.errors} onChange={form.onChange}>
                {(field) => {
                  return (
                    <div className={\`form-group \$\{field.touched && field.error ? 'has-error' : ''\}\`}>
                      <label>
                        {label}
                      </label>
                      <Connect callback={(getState, props) => {
                        return {
                          options: _.isFunction(options) ? options(getState, props) : options
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
                                    {_.isFunction(optionLabel) ? optionLabel(datum) : datum.data[optionLabel]}
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
            );
          }
        }

      }
      `}/>
      <p>
        The code above defines a <code>fieldMap</code>, which is an map that, when given a name
        like <code>text</code> or <code>select</code> will return a function that can generate that type of field.
      </p>
      <p>
        Each function has an identical signature. The first argument is the <code>form</code>, the second is
        the <code>props</code> unique to that field (like label and placeholder text) and the third is
        the <code>name</code> of the field.
      </p>

      <h3>
        Why functions?
      </h3>
      <p>
        You could argue that instead of creating a function, we could just create a component, and you'd be right.
        But as you'll see in later steps, the ultimate goal is to actually create an interface that allows us
        to <em>describe</em> what kind of form we need, instead of constructing it ourselves. And for that, we need
        to use functions instead of components.
      </p>

      <h3>
        Refactor Fields to Functions
      </h3>
      <p>
        With our <code>fieldMap</code> created, let's use it in our form to replace our current fields. Update
        the <code>render()</code> function to look like this:
      </p>
      <Markdown text={`
      // src/dialogs/tweet/create/index.js
      render() {
        const { data } = this.state;
        const validators = this.getValidators(data);
        const { fieldMap } = lore.config.dialogs;

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
                          {fieldMap['text'](form, {
                            label: 'Message',
                            placeholder: "What's happening?"
                          }, 'text')}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          {fieldMap['select'](form, {
                            label: 'User',
                            options: function(getState) {
                              return getState('user.find');
                            },
                            optionLabel: 'nickname'
                          }, 'userId')}
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      ...
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
        With these changes in place, we've removed ~60 lines of code from our form, and created an interface that
        makes is much more obvious what is unique about each field.
      </p>

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
        config/dialogs.js
      </h3>
      <Markdown text={`
      import React from 'react';
      import _ from 'lodash';
      import { Connect } from 'lore-hook-connect';
      import { Field } from 'lore-react-forms';

      export default {

        fieldMap: {
          text: function(form, props, name) {
            const {
              label,
              placeholder
            } = props;

            return (
              <Field key={name} name={name} data={form.data} errors={form.errors} onChange={form.onChange}>
                {(field) => {
                  return (
                    <div key={name} className={\`form-group \$\{field.touched && field.error ? 'has-error' : ''\}\`}>
                      <label>
                        {label}
                      </label>
                      <textarea
                        className="form-control"
                        rows="3"
                        value={field.value}
                        placeholder={placeholder}
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
            );
          },

          select: function(form, props, name) {
            const {
              options,
              label,
              optionLabel
            } = props;

            return (
              <Field key={name} name={name} data={form.data} errors={form.errors} onChange={form.onChange}>
                {(field) => {
                  return (
                    <div className={\`form-group \$\{field.touched && field.error ? 'has-error' : ''\}\`}>
                      <label>
                        {label}
                      </label>
                      <Connect callback={(getState, props) => {
                        return {
                          options: _.isFunction(options) ? options(getState, props) : options
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
                                    {_.isFunction(optionLabel) ? optionLabel(datum) : datum.data[optionLabel]}
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
            );
          }
        }

      }
      `}/>

      <h3>
        src/dialogs/tweet/create/index.js
      </h3>
      <Markdown text={`
      import React from 'react';
      import createReactClass from 'create-react-class';
      import PropTypes from 'prop-types';
      import _ from 'lodash';
      import { Form, PropBarrier } from 'lore-react-forms';

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
          const { fieldMap } = lore.config.dialogs;

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
                            {fieldMap['text'](form, {
                              label: 'Message',
                              placeholder: "What's happening?"
                            }, 'text')}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            {fieldMap['select'](form, {
                              label: 'User',
                              options: function(getState) {
                              return getState('user.find');
                            },
                              optionLabel: 'nickname'
                            }, 'userId')}
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
        Next we're going to <Link to="../step-4/">convert the actions to functions</Link>.
      </p>
    </Template>
  )
};
