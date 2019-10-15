import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/forms/Concept';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        0. Form
      </h1>

      <p>
        So what is a form? This seems like a silly question; we've all used them, and have probably built some. But
        I think it's important question to start with. Because in order to be successful in this endeavor, we first
        have to able to separate what's unique within each application, to what's common across all applications.
      </p>

      <p>
        To do that, let's take a look at a form:
      </p>

      <blockquote>
        Picture should include a single form, with a title, some fields, and some buttons.
      </blockquote>

      <img src="http://via.placeholder.com/350x150" />

      <p>
        Most forms have a "common core" of functionality. They're responsible for:
      </p>

      <ul>
        <li>collecting data</li>
        <li>validating whether that data is correct</li>
        <li>generating errors</li>
        <li>detecting changes to form fields.</li>
      </ul>

      <p>
        To reduce the boilerplate, we're going to start off by creating a Form component that contains that
        logic.
      </p>

      <h3>Form Example</h3>
      <Markdown text={`
      import React from 'react';
      import PropTypes from 'prop-types';
      import createReactClass from 'create-react-class';
      import { Form } from 'lore-react-forms';
      import validators from './validators';

      export default createReactClass({
        displayName: 'FormExample',

        propTypes: {
          onSubmit: PropTypes.func.isRequired
        },

        getInitialState: function() {
          return {
            quote: '',
            author: ''
          }
        },

        onSubmit: function() {
          lore.actions.quote.create(this.state);
        },

        onChange: function(name, value) {
          const state = {};
          state[name] = value;
          this.setState(state);
        },

        getValidators: function(data) {
          return {
            author: [validators.isRequired],
            quote: [validators.isRequired]
          }
        },

        render: function() {
          const data = this.state;
          const validators = this.getValidators(data);

          return (
            <Form
              data={data}
              validators={validators}
              onChange={this.onChange}>
              {(form) => (
                /* Your form goes here */
              )}
            </Form>
          );
        }

      });
      `}/>

      <p>
        If you're curious what Form looks like, you can see the underlying code below:
      </p>

      <h3>Form</h3>
      <Markdown text={`
      import React from 'react';
      import createReactClass from 'create-react-class';
      import _ from 'lodash';

      export default createReactClass({
        displayName: 'Form',

        propTypes: {
          data: React.PropTypes.object.isRequired,
          errors: React.PropTypes.object,
          validators: React.PropTypes.object,
          onChange: React.PropTypes.func.isRequired,
          isSaving: React.PropTypes.bool.isRequired
        },

        getDefaultProps: function() {
          return {
            errors: {},
            isSaving: false
          };
        },

        getInitialState: function() {
          return {
            isSaving: this.props.isSaving,
            isModified: false
          };
        },

        componentWillReceiveProps: function(nextProps) {
          const nextIsSaving = nextProps.isSaving;
          const isSaving = this.state.isSaving;

          if (nextIsSaving !== isSaving) {
            this.setState({
              isSaving: nextIsSaving
            });
          }

          if (isSaving === true && nextIsSaving === false) {
            this.setState({
              isModified: false
            });
          }
        },

        onChange: function(name, value) {
          if (!this.state.isModified) {
            this.setState({
              isModified: true
            });
          }

          this.props.onChange(name, value);
        },

        getErrors: function(validatorDictionary, data) {
          if (this.props.getErrors) {
            return this.props.getErrors(validatorDictionary, data);
          }

          // make sure we include errors for validator keys that aren't in data yet
          const _data = _.merge({}, data);
          _.keys(validatorDictionary).map(function(key, index) {
            if (_data[key] === undefined) {
              _data[key] = undefined;
            }
          });

          return _.mapValues(_data, function(value, key) {
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
          if (this.props.hasError) {
            return this.props.hasError(errors);
          }

          const errorCount = _.reduce(errors, function(result, value, key) {
            if (value) {
              return result + 1;
            }

            return result;
          }, 0);
          return errorCount > 0;
        },

        createFields: function(errors, hasError, options) {
          let children = this.props.children;

          if (_.isFunction(children)) {
            children = children(options);
          }

          const handlers = {
            onChange: this.onChange
          };

          return React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              const props = {
                data: this.props.data,
                errors: errors,
                hasError: hasError
                // validators: this.props.validators
              };

              return React.cloneElement(child, _.assign(props, handlers));
            }
          });
        },

        render: function() {
          const data = this.props.data;
          const validators = this.props.validators || {};
          const errors = this.getErrors(validators, data);
          const hasError = this.hasError(errors);
          const parentErrors = this.props.errors;
          const allErrors = _.assign({}, errors, parentErrors);

          const other = _.omit(this.props, ['data', 'validators', 'errors']);

          return (
            <div>
              {this.createFields(allErrors, hasError, _.merge({
                data: data,
                validators: validators,
                errors: errors,
                hasError: hasError,
                parentErrors: parentErrors,
                allErrors: allErrors,
                isModified: this.state.isModified,
                isSaving: this.state.isSaving
              }, other))}
            </div>
          );
        }

      });
      `}/>
    </Template>
  )
};
