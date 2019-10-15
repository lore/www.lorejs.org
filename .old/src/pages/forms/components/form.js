import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/forms/Components';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        Form
      </h1>
      <p>
        Component to...
      </p>

      <h3>
        Changes...
      </h3>
      <ul>
        <li>
          Moves getErrors() and hasError() functions into Form, allowing you to simply provide a set of validators
          that will be compared against the form data to check for errors.
        </li>
      </ul>

      <h3>
        Before...
      </h3>
      <Markdown text={`
      import React from 'react';
      import createReactClass from 'create-react-class';
      import PropTypes from 'prop-types';
      import _ from 'lodash';
      import { Field } from 'lore-react-forms';

      export default createReactClass({
        displayName: 'FormExample',

        getInitialState() {
          return {
            data: {
              text: ''
            }
          };
        },

        request(data) {
          // perform some action
        },

        onSubmit() {
          const { data } = this.state;
          this.request(data);
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

        render() {
          const { data } = this.state;
          const validators = this.getValidators(data);
          const errors = this.getErrors(validators, data);
          const hasError = this.hasError(errors);

          return (
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">
                    Create Tweet
                  </h4>
                </div>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-12">
                      <Field name="text" data={data} errors={errors} onChange={this.onChange}>
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
                </div>
                <div className="modal-footer">
                  <div className="row">
                    <div className="col-md-12">
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
        After...
      </h3>
      <Markdown text={`
      import React from 'react';
      import createReactClass from 'create-react-class';
      import PropTypes from 'prop-types';
      import _ from 'lodash';
      import { Form, Field, PropBarrier } from 'lore-react-forms';

      export default createReactClass({
        displayName: 'FormExample',

        getInitialState() {
          return {
            data: {
              text: ''
            },
            touched: {
              text: false
            }
          };
        },

        request(data) {
          // perform some action
        },

        onSubmit() {
          const { data } = this.state;
          this.request(data);
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
                  <h4 className="modal-title">
                    Create Tweet
                  </h4>
                </div>
                <Form
                  data={data}
                  validators={validators}
                  onChange={this.onChange}
                  callbacks={{
                    onSubmit: this.onSubmit
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
                      </div>
                      <div className="modal-footer">
                        <div className="row">
                          <div className="col-md-12">
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
    </Template>
  )
};
