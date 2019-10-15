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
        SchemaForm
      </h1>
      <p>
        This component is intended to provide a way to convert your component-based forms to config-based
        forms. In applications with lots of forms, you sometimes need to make changes to a class name, or to the
        behavior of a specific type of form field.
      </p>
      <p>
        When every form in your application is specified as a series of components, it can be difficult to track
        down what you need to change and where. The purpose of moving towards a config-based setup for forms is:
      </p>
      <ul>
        <li>
          Decouples how a form looks from what it needs to do. You basically switch to a model
          of <em>describing</em> your forms, and code elsewhere (through the configuration values) determine how that
          form gets built, and how it behaves.
        </li>
        <li>
          One advantage is that you can add new fields to forms, like help text or description, and have it be
          available in all forms. Or you can fix a bug/make an improvement in the behavior of a autocomplete
          or select component and have it automatically cascade to any form that uses it.
        </li>
      </ul>
      <h3>
        Changes...
      </h3>
      <ul>
        <li>
          Not a huge reduction in lines of code,
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
      import { Form, Field, PropBarrier } from 'lore-react-forms';

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

      <h3>
        After...
      </h3>
      <Markdown text={`
      import React from 'react';
      import createReactClass from 'create-react-class';
      import PropTypes from 'prop-types';
      import _ from 'lodash';
      import textField from '../../_fields/text';
      import primaryAction from '../../_actions/primary';
      import actionSchema from '../../_schemas/action';
      import actionsSchema from '../../_schemas/actions';
      import fieldSchema from '../../_schemas/field';
      import fieldsSchema from '../../_schemas/fields';
      import SchemaForm from '../../_forms/SchemaForm';

      const config = {
        schema: {
          action: actionSchema,
          actions: actionsSchema,
          field: fieldSchema,
          fields: fieldsSchema
        },
        fieldMap: {
          text: textField
        },
        actionMap: {
          primary: primaryAction
        }
      };

      export default createReactClass({
        displayName: 'SchemaFormExample',

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
                <SchemaForm
                  data={data}
                  validators={validators}
                  onChange={this.onChange}
                  callbacks={{
                    onSubmit: this.onSubmit
                  }}
                  schema={config.schema}
                  fieldMap={config.fieldMap}
                  actionMap={config.actionMap}
                  fields={[
                    {
                      key: 'text',
                      type: 'text',
                      props: {
                        label: 'Message',
                        placeholder: "What's happening?"
                      }
                    }
                  ]}
                  actions={[
                    {
                      key: 'submit',
                      type: 'primary',
                      props: (form) => {
                        return {
                          label: 'Create',
                          disabled: form.hasError,
                          onClick: form.callbacks.onSubmit
                        };
                      }
                    }
                  ]}
                />
              </div>
            </div>
          );
        }

      });
      `}/>
    </Template>
  )
};
