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
        2. Move Common Code into Config
      </h1>

      <p>
        Forms within an application are often quite similar. They have a set of <strong>fields</strong> and
        a set of <strong>actions</strong>. So let's start by breaking our previous form up into one that
        takes an array of fields and an array of actions. We'll create a special component that understands
        how to render this configuration called <strong>ConfigForm</strong>.
      </p>

      <img src="http://via.placeholder.com/350x150" />

      <h3>ConfigForm</h3>
      <Markdown text={`
      import React from 'react';
      import PropTypes from 'prop-types';
      import createReactClass from 'create-react-class';
      import { Form, FormSection, PropBarrier } from 'lore-react-forms';

      export default createReactClass({
        displayName: 'ConfigForm',

        propTypes: {
          data: PropTypes.object.isRequired,
          validators: PropTypes.object.isRequired,
          onChange: PropTypes.func.isRequired,
          config: PropTypes.object.isRequired
        },

        render: function() {
          const {
            data,
            validators,
            onChange,
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
                        return React.cloneElement(field.render(form), {
                          key: index
                        });
                      })}
                    </FormSection>
                    <FormSection className="mui-card-actions">
                      <PropBarrier>
                        {actions.map(function(action, index) {
                          return React.cloneElement(action.render(form), {
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
      `}/>

      <h3>Our Form</h3>
      <Markdown text={`
      import React from 'react';
      import PropTypes from 'prop-types';
      import createReactClass from 'create-react-class';
      import { RaisedButton } from 'material-ui';
      import { Form, FormSection, PropBarrier } from 'lore-react-forms';
      import { TextField } from 'lore-react-forms-material-ui';
      import validators from '../../utils/validators';
      import ConfigForm from '../_common/ConfigForm';

      export default createReactClass({
        displayName: 'CreateCard.config',

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
            <ConfigForm
              data={data}
              validators={validators}
              onChange={this.onChange}
              config={{
                fields: [
                  {
                    render: (form) => {
                      return (
                        <FormSection className="row">
                          <FormSection className="col-md-12">
                            <TextField
                              name="quote"
                              props={{
                                floatingLabelText: "Quote",
                                style: { width: '100%' },
                                multiLine: true
                              }}
                            />
                          </FormSection>
                        </FormSection>
                      );
                    }
                  },
                  {
                    render: (form) => {
                      return (
                        <FormSection className="row">
                          <FormSection className="col-md-12">
                            <TextField
                              name="author"
                              props={{
                                floatingLabelText: "Author",
                                style: { width: '100%' }
                              }}
                            />
                          </FormSection>
                        </FormSection>
                      );
                    }
                  }
                ],
                actions: [
                  {
                    render: (form) => {
                      return (
                        <RaisedButton
                          label="Save"
                          primary={true}
                          onTouchTap={this.onSubmit}
                        />
                      );
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
