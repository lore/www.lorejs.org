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
        7. Create Blueprint
      </h1>
      <p>
        At this point we've converted our form into a format that allows us to describe what we want instead
        of explicitly constructing it.
      </p>
      <p>
        In this next step we'll take the final step in our pattern construction journey, and convert our entire
        dialog into a blueprint that we can re-use.
      </p>

      <FormsPatternTutorialBranch branch="create.7" />

      <h3>
        What's the problem?
      </h3>
      <p>
        To illustrate the issue, take a look at the code surrounding our form, show below:
      </p>
      <Markdown text={`
      import React from 'react';
      import createReactClass from 'create-react-class';
      import PropTypes from 'prop-types';
      import _ from 'lodash';
      import SchemaForm from '../_forms/SchemaForm';

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
                <SchemaForm ... />
              </div>
            </div>
          );
        }

      });
      `}/>
      <p>
        This is the code that represents the <strong>dialog structure and behavior</strong>, the thing the form
        we just refactored is nested inside of.
      </p>
      <p>
        And similar to our form, most of this behavior is not unique. In fact, it's quite common for dialogs in
        an application to have a similar structure, appearance, and behavior.
      </p>

      <h3>
        How do we solve this?
      </h3>
      <p>
        To address this issue, we're going to create a <code>blueprint</code> for this type of dialog, specifically
        an <strong>optimistic create dialog</strong>. After we do this, we'll able to use this code to create any
        kind of resource in our application.
      </p>

      <blockquote>
        <p>
          The type of dialog we're using in this example is fairly simply, so the benefits of creating a blueprint
          for a dialog are not well represented, primarily because this dialog is very simple and gets dismissed as
          soon as the user submits it.
        </p>
        <p>
          But if you imagine that instead of closing the dialog immediately, we decide we want to display a loading
          experience, and only close dialog after the request succeeds (or display an error to the user if it fails)
          then the dialog logic gets <em>much</em> more complex, and contains a whole lot more boilerplate.
        </p>
        <p>
          This approach of creating blueprints for dialogs provides more benefit as the dialog behavior becomes more
          complex (e.g. wizards, error handling, loading experiences, etc).
        </p>
      </blockquote>

      <h3>
        Create Blueprint
      </h3>
      <p>
        Create a new file called <code>Optimistic.js</code> located
        at <code>src/dialogs/_blueprints/create/Optimistic.js</code>, and paste in this code:
      </p>
      <Markdown text={`
      // src/dialogs/_blueprints/Optimistic.js
      import React from 'react';
      import createReactClass from 'create-react-class';
      import PropTypes from 'prop-types';
      import _ from 'lodash';
      import SchemaForm from '../../_forms/SchemaForm';

      export default createReactClass({
        displayName: 'Optimistic',

        propTypes: {
          onCancel: PropTypes.func
        },

        getInitialState: function() {
          const { data } = this.props;

          return {
            data: data
          };
        },

        request(data) {
          const { request } = this.props;
          return request(data);
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
          const { validators } = this.props;
          return validators(data);
        },

        render() {
          const {
            title,
            schema,
            fieldMap,
            actionMap,
            fields,
            actions
          } = this.props;
          const { data } = this.state;
          const validators = this.getValidators(data);

          return (
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" onClick={this.dismiss}>
                    <span>&times;</span>
                  </button>
                  <h4 className="modal-title">
                    {title}
                  </h4>
                </div>
                <SchemaForm
                  schema={schema}
                  fieldMap={fieldMap}
                  actionMap={actionMap}
                  data={data}
                  validators={validators}
                  onChange={this.onChange}
                  callbacks={{
                    onSubmit: this.onSubmit,
                    dismiss: this.dismiss
                  }}
                  fields={fields}
                  actions={actions}
                />
              </div>
            </div>
          );
        }

      });
      `}/>

      <h3>
        Refactor Dialog to use Blueprint
      </h3>
      <p>
        Next, update your dialog to use this blueprint. Replace the contents of the file with the code below:
      </p>
      <Markdown text={`
      // src/dialogs/tweet/create/index.js
      import React from 'react';
      import createReactClass from 'create-react-class';
      import PropTypes from 'prop-types';
      import _ from 'lodash';
      import OptimisticBlueprint from '../../_blueprints/Optimistic';

      export default createReactClass({
        displayName: 'CreateTweetDialog',

        propTypes: {
          onCancel: PropTypes.func
        },

        request(data) {
          lore.actions.tweet.create(_.defaults({
            createdAt: new Date().toISOString()
          }, data));
        },

        render() {
          const { schema, fieldMap, actionMap } = lore.config.dialogs;

          return (
            <OptimisticBlueprint
              title="Create Tweet"
              onCancel={this.props.onCancel}
              schema={schema}
              fieldMap={fieldMap}
              actionMap={actionMap}
              request={this.request}
              data={{
                text: '',
                userId: undefined
              }}
              validators={function(data) {
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
          );
        }

      });
      `}/>

      <h3>
        Review
      </h3>
      <p>
        At this point, we have reduced our dialog from ~210 lines of code to ~100, and created a way of describing
        out dialog that contains practically zero boilerplate.
      </p>
      <p>
        The code we have now only describes the fields and actions that exist, the initial data, how the fields
        should be validated, and what should happen once the form is submitted.
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
        src/dialogs/_blueprints/Optimistic.js
      </h3>
      <Markdown text={`
      import React from 'react';
      import createReactClass from 'create-react-class';
      import PropTypes from 'prop-types';
      import _ from 'lodash';
      import SchemaForm from '../_forms/SchemaForm';

      export default createReactClass({
        displayName: 'Optimistic',

        propTypes: {
          onCancel: PropTypes.func
        },

        getInitialState: function() {
          const { data } = this.props;

          return {
            data: data
          };
        },

        request(data) {
          const { request } = this.props;
          return request(data);
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
          const { validators } = this.props;
          return validators(data);
        },

        render() {
          const {
            title,
            schema,
            fieldMap,
            actionMap,
            fields,
            actions
          } = this.props;
          const { data } = this.state;
          const validators = this.getValidators(data);

          return (
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" onClick={this.dismiss}>
                    <span>&times;</span>
                  </button>
                  <h4 className="modal-title">
                    {title}
                  </h4>
                </div>
                <SchemaForm
                  schema={schema}
                  fieldMap={fieldMap}
                  actionMap={actionMap}
                  data={data}
                  validators={validators}
                  onChange={this.onChange}
                  callbacks={{
                    onSubmit: this.onSubmit,
                    dismiss: this.dismiss
                  }}
                  fields={fields}
                  actions={actions}
                />
              </div>
            </div>
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
      import OptimisticBlueprint from '../../_blueprints/Optimistic';

      export default createReactClass({
        displayName: 'CreateTweetDialog',

        propTypes: {
          onCancel: PropTypes.func
        },

        request(data) {
          lore.actions.tweet.create(_.defaults({
            createdAt: new Date().toISOString()
          }, data));
        },

        render() {
          const { schema, fieldMap, actionMap } = lore.config.dialogs;

          return (
            <OptimisticBlueprint
              title="Create Tweet"
              onCancel={this.props.onCancel}
              schema={schema}
              fieldMap={fieldMap}
              actionMap={actionMap}
              request={this.request}
              data={{
                text: '',
                userId: undefined
              }}
              validators={function(data) {
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
          );
        }

      });
      `}/>

      <h2>
        Next Steps
      </h2>
      <p>
        Next we're going to <Link to="../../update/step-1/">refactor the update dialog</Link>.
      </p>
    </Template>
  )
};
