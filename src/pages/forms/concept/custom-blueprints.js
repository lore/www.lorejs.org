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
        6. Create Custom Blueprint
      </h1>

      <p>
        At this point, we have the ability to create a custom form from a description, but we may need to
        change how that form looks, such adding a header or footer, or even breaking our form up into a
        series of steps like a wizard.
      </p>
      <p>
        To do that, we can simply create a new template and re-use the functionality in previous templates,
        if that behavior is useful.
      </p>
      <p>
        At this point, what we've really demonstrated is a way to create re-usable templates driven where
        the underlying rendering behavior can be overridden. For example, you could keep the same config,
        but swap out the component library, or redesign a template, and know it will sync across all forms
        using it.
      </p>
      <p>
        <strong>Full disclosure</strong>: the real motivation for creating this library was to a) remove
        thought related to building forms, and b) create a solution that would work across multiple
        products and component libraries.
      </p>

      <Markdown text={`
      import React from 'react';
      import PropTypes from 'prop-types';
      import createReactClass from 'create-react-class';
      import { RaisedButton } from 'material-ui';
      import { Form, FormSection, PropBarrier } from 'lore-react-forms';
      import { TextField } from 'lore-react-forms-material-ui';
      import validators from '../../utils/validators';
      import TemplateSchemaForm from '../_common/TemplateSchemaForm';

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
            <TemplateSchemaForm
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
                template: {
                  title: 'Create Quote',
                  subtitle: 'Enter a quote and author and hit save'
                },
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
