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
        5. Move Common Values into Application Config
      </h1>

      <p>
        The <strong>schema</strong>, <strong>fieldMap</strong>, and <strong>actionMap</strong> we created
        previously will be re-used across all our forms, so we're going to move them into our application
        config under <strong>config/forms</strong>. This reduces are form to <strong>just</strong> the
        config object we created, and our <strong>TemplateForm</strong> component that understands how to
        construct a form from our various config objects.
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
        displayName: 'CreateCard.hook',

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
              callbacks={{
                onSubmit: this.onSubmit
              }}
              schema={lore.config.forms.schemas.default}
              fieldMap={lore.config.forms.fieldMap}
              actionMap={lore.config.forms.actionMap}
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
                        onTouchTap: form.callbacks.onSubmit
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
