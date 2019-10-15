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
        5. Create Schema
      </h1>
      <p>
        In this step we're going to repeat the process of converting code into functions, but this time we're going
        to create functions for the primary parts of our form, the things that are likely to stay the same across
        the majority of forms in our application.
      </p>

      <FormsPatternTutorialBranch branch="create.5" />

      <h3>
        What's the problem?
      </h3>
      <p>
        To illustrate the issue, take a look at the code below, which reflects the core of current form:
      </p>
      <Markdown text={`
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
                  {textField(form, {
                    label: 'Message',
                    placeholder: "What's happening?"
                  }, 'text')}
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  {selectField(form, {
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
                  {defaultAction(form, {
                    label: 'Cancel',
                    onClick: form.callbacks.dismiss
                  })}
                  {primaryAction(form, {
                    label: 'Create',
                    disabled: form.hasError,
                    onClick: form.callbacks.onSubmit
                  })}
                </div>
              </div>
            </div>
          </PropBarrier>
        )}
      </Form>
      `}/>
      <p>
        While our form is pretty compact at this point, at only ~50 lines of code, the pattern we're building up is
        all about <em>aggressive</em> removal of boilerplate, and there's still some boilerplate here we want to
        strip out.
      </p>
      <p>
        The code that's left now represents the basic structure of our form, captured below:
      </p>
      <ul>
        <li>
          The <code>modal-body</code> which is where the store the <code>fields</code>
        </li>
        <li>
          The <code>row</code> and <code>col-md-12</code> wrapper around each <code>field</code>
        </li>
        <li>
          The <code>modal-footer</code>, <code>row</code>, and <code>col-md-12</code> wrapper around
          the <code>actions</code>
        </li>
        <li>
          The absence of any wrapper code around each <code>action</code>.
        </li>
      </ul>
      <p>
        In this step, we want to remove that boilerplate.
      </p>

      <h3>
        How do we solve this?
      </h3>
      <p>
        To solve this, we're going to create a <code>schema</code> that conatins a series of functions able to
        generate the basic parts of our form; the sections for the <code>fields</code>, <code>actions</code>, and the
        wrapper code around each individual <code>field</code> and <code>action</code>.
      </p>

      <h3>
        Add Schema to Dialogs Config
      </h3>
      <p>
        To start, open the <code>dialogs.js</code> config and add a new field called <code>schema</code> that
        looks like this:
      </p>
      <Markdown text={`
      // config/dialogs.js
      ...
        schema: {
          action: function(form) {
            return (action) => {
              return action;
            }
          },
          actions: function(form) {
            return (actions) => {
              return (
                <div className="modal-footer">
                  <div className="row">
                    <div className="col-md-12">
                      {actions.map(function (action, index) {
                        return React.cloneElement(action, { key: index })
                      })}
                    </div>
                  </div>
                </div>
              );
            }
          },
          field: function(form) {
            return (field) => {
              return (
                <div className="row">
                  <div className="col-md-12">
                    {field}
                  </div>
                </div>
              );
            }
          },
          fields: function(form) {
            return (fields) => {
              return (
                <div className="modal-body">
                  {fields.map(function(field, index) {
                    return React.cloneElement(field, { key: index })
                  })}
                </div>
              );
            };
          }
        },
      ...
      `}/>

      <h3>
        Refactor Form to Schema Functions
      </h3>
      <p>
        With our <code>schema</code> created, let's use it in our form to replace the remaining structural
        boilerplate. Update the <code>render()</code> function to look like this:
      </p>
      <Markdown text={`
      // src/dialogs/tweet/create/index.js
      render() {
        const { data } = this.state;
        const validators = this.getValidators(data);
        const { schema, fieldMap, actionMap } = lore.config.dialogs;

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
                    {schema.fields(form)(
                      [
                        schema.field(form)(
                          fieldMap['text'](form, {
                            label: 'Message',
                            placeholder: "What's happening?"
                          }, 'text')
                        ),
                        schema.field(form)(
                          fieldMap['select'](form, {
                            label: 'User',
                            options: function(getState) {
                              return getState('user.find');
                            },
                            optionLabel: 'nickname'
                          }, 'userId')
                        ),
                      ]
                    )}
                    {schema.actions(form)(
                      [
                        schema.action(form)(
                          actionMap['default'](form, {
                            label: 'Cancel',
                            onClick: form.callbacks.dismiss
                          }, 'cancel')
                        ),
                        schema.action(form)(
                          actionMap['primary'](form, {
                            label: 'Create',
                            disabled: form.hasError,
                            onClick: form.callbacks.onSubmit
                          }, 'submit')
                        ),
                      ]
                    )}
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
        With these changes in place, we no longer have any structural boilerplate associated with our form. The
        downside is that this code is a little harder to read that React components, and doesn't really resemble React
        code at all anymore. We'll address both of those issues in the next step.
      </p>

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
        config/dialogs.js
      </h3>
      <Markdown text={`
      import React from 'react';
      import _ from 'lodash';
      import { Connect } from 'lore-hook-connect';
      import { Field } from 'lore-react-forms';

      export default {

        schema: {
          action: function(form) {
            return (action) => {
              return action;
            }
          },
          actions: function(form) {
            return (actions) => {
              return (
                <div className="modal-footer">
                  <div className="row">
                    <div className="col-md-12">
                      {actions.map(function (action, index) {
                        return React.cloneElement(action, { key: index })
                      })}
                    </div>
                  </div>
                </div>
              );
            }
          },
          field: function(form) {
            return (field) => {
              return (
                <div className="row">
                  <div className="col-md-12">
                    {field}
                  </div>
                </div>
              );
            }
          },
          fields: function(form) {
            return (fields) => {
              return (
                <div className="modal-body">
                  {fields.map(function(field, index) {
                    return React.cloneElement(field, { key: index })
                  })}
                </div>
              );
            };
          }
        },

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
        },

        actionMap: {
          default: function(form, props, key) {
            const {
              label,
              ...other
            } = props;

            return (
              <button
                key={key}
                type="button"
                className="btn btn-default"
                {...other}
              >
                {label}
              </button>
            );
          },

          primary: function(form, props, key) {
            const {
              label,
              ...other
            } = props;

            return (
              <button
                key={key}
                type="button"
                className="btn btn-primary"
                {...other}
              >
                {label}
              </button>
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
          const { schema, fieldMap, actionMap } = lore.config.dialogs;

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
                      {schema.fields(form)(
                        [
                          schema.field(form)(
                            fieldMap['text'](form, {
                              label: 'Message',
                              placeholder: "What's happening?"
                            }, 'text')
                          ),
                          schema.field(form)(
                            fieldMap['select'](form, {
                              label: 'User',
                              options: function(getState) {
                                return getState('user.find');
                              },
                              optionLabel: 'nickname'
                            }, 'userId')
                          ),
                        ]
                      )}
                      {schema.actions(form)(
                        [
                          schema.action(form)(
                            actionMap['default'](form, {
                              label: 'Cancel',
                              onClick: form.callbacks.dismiss
                            }, 'cancel')
                          ),
                          schema.action(form)(
                            actionMap['primary'](form, {
                              label: 'Create',
                              disabled: form.hasError,
                              onClick: form.callbacks.onSubmit
                            }, 'submit')
                          ),
                        ]
                      )}
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
        Next we're going to <Link to="../step-6/">move our schema code into a SchemaForm component</Link>.
      </p>
    </Template>
  )
};
