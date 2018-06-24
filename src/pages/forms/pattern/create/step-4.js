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
        4. Convert Actions to Functions
      </h1>
      <p>
        In this step we're going to repeat a similar process as when we converted the form fields to functions,
        but this time we're going to do it for the actions.
      </p>

      <FormsPatternTutorialBranch branch="create.4" />

      <h3>
        Add Actions to Dialogs Config
      </h3>
      <p>
        To start, open the <code>dialogs.js</code> config and add a new field called <code>actionMap</code> that
        looks like this:
      </p>
      <Markdown text={`
      // config/dialogs.js
      ...
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
      ...
      `}/>

      <h3>
        Refactor Actions to Functions
      </h3>
      <p>
        With our <code>actionMap</code> created, let's use it in our form to replace our current actions. Update
        the <code>render()</code> function to look like this:
      </p>
      <Markdown text={`
      // src/dialogs/tweet/create/index.js
      render() {
        const { data } = this.state;
        const validators = this.getValidators(data);
        const { fieldMap, actionMap } = lore.config.dialogs;

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
                      ...
                    </div>
                    <div className="modal-footer">
                      <div className="row">
                        <div className="col-md-12">
                          {actionMap['default'](form, {
                            label: 'Cancel',
                            onClick: form.callbacks.dismiss
                          })}
                          {actionMap['primary'](form, {
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
            </div>
          </div>
        );
      }
      `}/>

      <h3>
        Review
      </h3>
      <p>
        With these changes in place, we haven't really removed an lines of code, but we do now have a consistent
        interface for creation fields and actions.
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
          const { fieldMap, actionMap } = lore.config.dialogs;

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
                            {actionMap['default'](form, {
                              label: 'Cancel',
                              onClick: form.callbacks.dismiss
                            })}
                            {actionMap['primary'](form, {
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
        Next we're going to <Link to="../step-5/">create a schema for defining the sections of our form</Link>.
      </p>
    </Template>
  )
};
