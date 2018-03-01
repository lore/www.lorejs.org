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
        3. Create a Reusable Template
      </h1>

      <p>
        In the previous example, we didn't actually save any code, or really simplify anything. We just
        converted each field into a object with a <strong>render</strong> method. But in reality, all fields
        of a specific type (like a text field, or a checkbox) with an application look the same.
      </p>
      <p>
        To reflect this, we're going to create a new component called a <strong>TemplateForm</strong> that
        takes a series of config object. One that describes how to render form elements of a specific type,
        such as a text field, and another that knows how to render actions. Then, we'll simply pass a config
        object that describes what fields and actions we want to render.
      </p>
      <p>
        To reflect this, we're going to create a new component called a <strong>TemplateForm</strong> that
        takes a series of config object. One that describes how to render form elements of a specific type,
        such as a text field, and another that knows how to render actions. Then, we'll simply pass a config
        object that describes what fields and actions we want to render.
      </p>
      <p>
        This essentially decouples <strong>what</strong> you want to render from <strong>how</strong> you
        want it to be render. Instead of <strong>creating</strong> the form, you're
        now <strong>describing</strong> the form.
      </p>

      <h3>Our Form</h3>
      <Markdown text={`
      import React from 'react';
      import PropTypes from 'prop-types';
      import createReactClass from 'create-react-class';
      import { RaisedButton } from 'material-ui';
      import { Form, FormSection, PropBarrier } from 'lore-react-forms';
      import { TextField } from 'lore-react-forms-material-ui';
      import validators from '../../utils/validators';
      import TemplateForm from '../_common/TemplateForm';

      export default createReactClass({
        displayName: 'CreateCard.template',

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
            <TemplateForm
              data={data}
              validators={validators}
              onChange={this.onChange}
              fieldMap={{
                text: (form, props) => {
                  return (
                    <FormSection className="row">
                      <FormSection className="col-md-12">
                        <TextField
                          {...props}
                        />
                      </FormSection>
                    </FormSection>
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

      <h3>Template Form</h3>
      <Markdown text={`
      import React from 'react';
      import PropTypes from 'prop-types';
      import createReactClass from 'create-react-class';
      import { Form, FormSection, PropBarrier } from 'lore-react-forms';

      export default createReactClass({
        displayName: 'TemplateForm',

        propTypes: {
          data: PropTypes.object.isRequired,
          validators: PropTypes.object.isRequired,
          onChange: PropTypes.func.isRequired,
          fieldMap: PropTypes.object.isRequired,
          actionMap: PropTypes.object.isRequired,
          config: PropTypes.object.isRequired
        },

        render: function() {
          const {
            data,
            validators,
            onChange,
            fieldMap,
            actionMap,
            config: {
              fields,
              actions
            }
          } = this.props;

          return (
            <Form
              data={data}
              validators={validators}
              onChange={onChange}>
              {(form) => {
                return (
                  <FormSection>
                    <FormSection className="mui-card-text">
                      {fields.map(function(field, index) {
                        const mappedField = fieldMap[field.type];
                        return React.cloneElement(mappedField(form, field.props(form)), {
                          key: index
                        });
                      })}
                    </FormSection>
                    <FormSection className="mui-card-actions">
                      <PropBarrier>
                        {actions.map(function(action, index) {
                          const mappedAction = actionMap[action.type];
                          return React.cloneElement(mappedAction(form, action.props(form)), {
                            key: index
                          });
                        })}
                      </PropBarrier>
                    </FormSection>
                  </FormSection>
                );
              }}
            </Form>
          );
        }

      });
      `} />
    </Template>
  )
};
