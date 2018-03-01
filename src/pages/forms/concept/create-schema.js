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
        4. Create a Configuration Schema
      </h1>

      <p>
        Our previous example required each field to have information about how any field should be render,
        for example by being wrapped in a <strong>row</strong> and <strong>col-md-12</strong> class. This
        time, we're going out that code into a <strong>schema</strong> that describes how the different
        sections of a form should be rendered (fields, field, actions, action).
      </p>
      <p>
        This allows us to have a single location where we can modify the common appearance of
        forms, <strong>AND</strong> we can re-use sections of the schema without having to rewrite the
        whole thing (for example, we could create a custom <strong>actions</strong> schema that includes
        footer information, but keep everything else the same for that form.
      </p>

      <Markdown text={`
      import React from 'react';
      import PropTypes from 'prop-types';
      import createReactClass from 'create-react-class';
      import { RaisedButton } from 'material-ui';
      import { Form, FormSection, PropBarrier } from 'lore-react-forms';
      import { TextField } from 'lore-react-forms-material-ui';
      import validators from '../../utils/validators';
      import SchemaForm from '../_common/SchemaForm';

      export default createReactClass({
        displayName: 'CreateCard.schema',

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
          this.props.onSubmit(this.state);
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
            <SchemaForm
              data={data}
              validators={validators}
              onChange={this.onChange}
              schema={{
                fields: (form) => {
                  return (fields) => {
                    return (
                      <FormSection className="mui-card-text">
                        {fields}
                      </FormSection>
                    );
                  };
                },
                field: (form) => {
                  return (field) => {
                    return (
                      <FormSection className="row">
                        <FormSection className="col-md-12">
                          {field}
                        </FormSection>
                      </FormSection>
                    );
                  }
                },
                actions: (form) => {
                  return (actions) => {
                    return (
                      <FormSection className="mui-card-actions">
                        <PropBarrier>
                          {actions}
                        </PropBarrier>
                      </FormSection>
                    );
                  };
                },
                action: (form) => {
                  return (action) => {
                    return (
                      action
                    );
                  }
                }
              }}
              fieldMap={{
                text: (form, props) => {
                  return (
                    <TextField
                      {...props}
                    />
                  );
                }
              }}
              actionMap={{
                raised: (form, props) => {
                  return (
                    <RaisedButton
                      {...props}
                    />
                  )
                }
              }}
              config={{
                fields: [
                  {
                    type: 'text',
                    props: (form) => {
                      return {
                        floatingLabelText: "Quote",
                        style: { width: '100%' },
                        name: "quote",
                        multiLine: true
                      };
                    }
                  },
                  {
                    type: 'text',
                    props: (form) => {
                      return {
                        floatingLabelText: "Author",
                        style: { width: '100%' },
                        name: "author"
                      };
                    }
                  }
                ],
                actions: [
                  {
                    type: 'raised',
                    props: (form) => {
                      return {
                        label: "Save",
                        primary: true,
                        onTouchTap: this.onSubmit
                      }
                    }
                  }
                ]
              }}
            />
          );
        }

      });
      `}/>
    </Template>
  )
};
