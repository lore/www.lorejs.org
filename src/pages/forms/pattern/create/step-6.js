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
        6. Create SchemaForm
      </h1>
      <p>
        In this step we'll abstract the section of our code that constructs a form with the schema into it's own
        component called SchemaForm.
      </p>

      <FormsPatternTutorialBranch branch="create.6" />

      <h3>
        What's the problem?
      </h3>
      <p>
        To illustrate the problem, take a look at the core code for our form, show below:
      </p>
      <Markdown text={`
      // src/dialogs/tweet/create/index.js
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
            {schema.fields(form)(
              [
                schema.field(form)(
                  fieldMap['text'](form, {
                    label: 'Message',
                    placeholder: "What's happening?"
                  }, 'text')
                ),
                schema.field(form)(
                  fieldMap['select'](form, {
                    label: 'User',
                    options: function(getState) {
                      return getState('user.find');
                    },
                    optionLabel: 'nickname'
                  }, 'userId')
                ),
              ]
            )}
            {schema.actions(form)(
              [
                schema.action(form)(
                  actionMap['default'](form, {
                    label: 'Cancel',
                    onClick: form.callbacks.dismiss
                  }, 'cancel')
                ),
                schema.action(form)(
                  actionMap['primary'](form, {
                    label: 'Create',
                    disabled: form.hasError,
                    onClick: form.callbacks.onSubmit
                  }, 'submit')
                ),
              ]
            )}
          </PropBarrier>
        )}
      </Form>
      `}/>
      <p>
        This code a little harder to read that React components, and doesn't really resemble React code at all
        anymore. Additionally, someone might still copy/paste this code when generating a new form, and it really
        doesn't change - it will be the same pattern in each form.
      </p>

      <h3>
        How do we solve this?
      </h3>
      <p>
        To address these issues, we're going to create a new component called <code>SchemaForm</code> that understands
        how to generate a form, when provided with a schema and a description of what fields need to be created.
      </p>

      <h3>
        Create SchemaForm
      </h3>
      <p>
        Create a file called <code>SchemaForm.js</code> located at <code>src/dialogs/_forms/SchemaForm.js</code> and
        paste in this code:
      </p>
      <Markdown text={`
      // src/dialogs/_forms/SchemaForm.js
      import React from 'react';
      import createReactClass from 'create-react-class';
      import PropTypes from 'prop-types';
      import _ from 'lodash';
      import { Form, PropBarrier } from 'lore-react-forms';

      export default createReactClass({
        displayName: 'SchemaForm',

        render() {
          const {
            data,
            validators,
            onChange,
            callbacks,
            schema,
            fieldMap,
            actionMap,
            fields,
            actions
          } = this.props;

          return (
            <Form
              data={data}
              validators={validators}
              onChange={onChange}
              callbacks={callbacks}
            >
              {(form) => (
                <PropBarrier>
                  {schema.fields(form)(
                    fields.map(function(field) {
                      const props = _.isFunction(field.props) ? field.props(form) : field.props;
                      return schema.field(form)(
                        fieldMap[field.type](form, props, field.key)
                      );
                    })
                  )}
                  {schema.actions(form)(
                    actions.map(function(action) {
                      const props = _.isFunction(action.props) ? action.props(form) : action.props;
                      return schema.action(form)(
                        actionMap[action.type](form, props, action.key)
                      );
                    })
                  )}
                </PropBarrier>
              )}
            </Form>
          );
        }

      });
      `}/>

      <h3>
        Refactor Form to use SchemaForm
      </h3>
      <p>
        With this component in place, we can now refactor our form to use it, and simply need to provide an object
        that can map between a name and the proper field or action.
      </p>
      <p>
        Update the <code>render()</code> function of your dialog look like this:
      </p>
      <Markdown text={`
      // src/dialogs/tweet/create/index.js
      import SchemaForm from '../../_forms/SchemaForm';
      ...
      render() {
        const { data } = this.state;
        const validators = this.getValidators(data);
        const { schema, fieldMap, actionMap } = lore.config.dialogs;

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
              <SchemaForm
                data={data}
                validators={validators}
                onChange={this.onChange}
                schema={schema}
                fieldMap={fieldMap}
                actionMap={actionMap}
                callbacks={{
                  onSubmit: this.onSubmit,
                  dismiss: this.dismiss
                }}
                fields={[
                  {
                    key: 'text',
                    type: 'text',
                    props: {
                      label: 'Message',
                      placeholder: "What's happening?"
                    }
                  },
                  {
                    key: 'userId',
                    type: 'select',
                    props: {
                      label: 'User',
                      options: function(getState) {
                        return getState('user.find');
                      },
                      optionLabel: 'nickname'
                    }
                  }
                ]}
                actions={[
                  {
                    key: 'cancel',
                    type: 'default',
                    props: (form) => {
                      return {
                        label: 'Cancel',
                        onClick: form.callbacks.dismiss
                      };
                    }
                  },
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
      ...
      `}/>

      <h3>
        Review
      </h3>
      <p>
        At this point we've reduced our dialog from ~210 lines of code to ~140, and created an interface for building
        forms that allows us to <em>describe</em> only the things that are unique to that form.
      </p>
      <p>
        Additionally, the way we've constructed this interface means that we also have a single location in our
        application that defines structure and behavior of the schema, fields, and actions, which means any changes
        we make will be automatically applied to all forms in our application that are constructed using this
        approach.
      </p>
      <p>
        However, we can still go a little farther. In the next step we'll take the final step in our pattern
        construction journey, and convert this entire file into a blueprint we can re-use.
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
        src/dialogs/_forms/SchemaForm.js
      </h3>
      <Markdown text={`
      import React from 'react';
      import createReactClass from 'create-react-class';
      import PropTypes from 'prop-types';
      import _ from 'lodash';
      import { Form, PropBarrier } from 'lore-react-forms';

      export default createReactClass({
        displayName: 'SchemaForm',

        render() {
          const {
            data,
            validators,
            onChange,
            callbacks,
            schema,
            fieldMap,
            actionMap,
            fields,
            actions
          } = this.props;

          return (
            <Form
              data={data}
              validators={validators}
              onChange={onChange}
              callbacks={callbacks}
            >
              {(form) => (
                <PropBarrier>
                  {schema.fields(form)(
                    fields.map(function(field) {
                      const props = _.isFunction(field.props) ? field.props(form) : field.props;
                      return schema.field(form)(
                        fieldMap[field.type](form, props, field.key)
                      );
                    })
                  )}
                  {schema.actions(form)(
                    actions.map(function(action) {
                      const props = _.isFunction(action.props) ? action.props(form) : action.props;
                      return schema.action(form)(
                        actionMap[action.type](form, props, action.key)
                      );
                    })
                  )}
                </PropBarrier>
              )}
            </Form>
          );
        }

      });
      `}/>

      <h3>
        src/dialogs/tweet/create/index.js
      </h3>
      <Markdown text={`
      import React from 'react';
      import createReactClass from 'create-react-class';
      import PropTypes from 'prop-types';
      import _ from 'lodash';
      import SchemaForm from '../../_forms/SchemaForm';

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
          const { schema, fieldMap, actionMap } = lore.config.dialogs;

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
                <SchemaForm
                  data={data}
                  validators={validators}
                  onChange={this.onChange}
                  schema={schema}
                  fieldMap={fieldMap}
                  actionMap={actionMap}
                  callbacks={{
                    onSubmit: this.onSubmit,
                    dismiss: this.dismiss
                  }}
                  fields={[
                    {
                      key: 'text',
                      type: 'text',
                      props: {
                        label: 'Message',
                        placeholder: "What's happening?"
                      }
                    },
                    {
                      key: 'userId',
                      type: 'select',
                      props: {
                        label: 'User',
                        options: function(getState) {
                          return getState('user.find');
                        },
                        optionLabel: 'nickname'
                      }
                    }
                  ]}
                  actions={[
                    {
                      key: 'cancel',
                      type: 'default',
                      props: (form) => {
                        return {
                          label: 'Cancel',
                          onClick: form.callbacks.dismiss
                        };
                      }
                    },
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

      <h2>
        Next Steps
      </h2>
      <p>
        Next we're going to <Link to="../step-7/">create a blueprint to remove the last of our boilerplate</Link>.
      </p>
    </Template>
  )
};
