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
        Field
      </h1>
      <p>
        Component to...
      </p>

      <h3>
        Changes...
      </h3>
      <p>
        Doesn't reduce lines of code by much, by removes some boilerplate that could to easy copy/paste errors,
        and risk of typos leading to bad code (e.g. "errors['text'] vs field.error).
      </p>
      <ul>
        <li>
          import Field from lore-react-forms
        </li>
        <li>
          Remove touched from state, along with onBlur callback
        </li>
        <li>
          Can reference field.error instead of
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

      export default createReactClass({
        displayName: 'FieldExample',

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

          return (
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
      import { Field } from 'lore-react-forms';

      export default createReactClass({
        displayName: 'FieldExample',

        getInitialState() {
          return {
            data: {
              text: ''
            }
          };
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

        render() {
          const { data } = this.state;
          const validators = this.getValidators(data);
          const errors = this.getErrors(validators, data);

          return (
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
          );
        }

      });
      `}/>
    </Template>
  )
};
