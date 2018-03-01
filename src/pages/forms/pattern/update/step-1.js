import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/forms/PatternConstruction';
import Markdown from '../../../../components/Markdown';
import CodeTabs from '../../../../components/CodeTabs';
import CodeTab from '../../../../components/CodeTab';
import FormsPatternTutorialBranch from '../../../../components/FormsPatternTutorialBranch';
import image from '../../../../assets/images/forms/tutorial/update-tweet-dialog.png';

export default (props) => {
  return (
    <Template>
      <h1>
        1. Refactor Update Dialog
      </h1>
      <p>
        In this step we'll be refactoring the UpdateTweetDialog to leverage the blueprint we just created.
      </p>

      <FormsPatternTutorialBranch branch="update.1" />

      <h3>
        Dialog Comparison
      </h3>
      <p>
        If you compared the original create dialog with the update dialog, very little is different. In fact,
        the only code that's different is reflected below:
      </p>
      <Markdown text={`
      ...
      propTypes: {
        tweet: PropTypes.object.isRequired
      },

      getInitialState() {
        const { tweet } = this.props;

        return {
          data: {
            text: tweet.data.text,
            userId: tweet.data.userId
          }
        };
      },

      request(data) {
        const { tweet } = this.props;
        lore.actions.tweet.update(tweet, data);
      },

      render() {
        ...
        return (
          <div className="modal-dialog">
              ...
                <h4 className="modal-title">
                  Update Tweet
                </h4>
              ...
              <div className="modal-footer">
                ...
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={hasError}
                  onClick={this.onSubmit}
                >
                  Update
                </button>
                ...
              </div>
              ...
          </div>
        );
      }
      ..
      `}/>
      <p>
        In this case, the update dialog is intended to <em>update a tweet</em>, and so it requires a prop which
        is the tweet that should be updated.
      </p>
      <p>
        The <code>getInitialState()</code> method then uses that <code>tweet</code> to set the initial state of
        the form, and when the form is submitted, the <code>request()</code> method uses
        the <code>update</code> action instead of the <code>create</code> action.
      </p>
      <p>
        Additionally, (looking at the <code>render()</code> method) the title of the form is "Update Tweet" instead
        of "Create Tweet", and the <code>onSubmit</code> button says "Update" instead of "Create".
      </p>
      <p>
        Other than that, the forms are identical.
      </p>

      <h3>
        Refactor Update Dialog
      </h3>
      <p>
        Lucky for us, it turns out that none of the differences captured above affect the blueprint, which means we
        can reuse it for the update dialog.
      </p>
      <p>
        Open the update dialog located at <code>src/dialogs/tweet/update/index.js</code> and replace the contents
        with the code shown below:
      </p>
      <Markdown text={`
      import React from 'react';
      import createReactClass from 'create-react-class';
      import PropTypes from 'prop-types';
      import OptimisticBlueprint from '../../_blueprints/Optimistic';

      export default createReactClass({
        displayName: 'UpdateTweetDialog',

        propTypes: {
          onCancel: PropTypes.func,
          tweet: PropTypes.object.isRequired
        },

        getInitialState() {
          const { tweet } = this.props;

          return {
            data: {
              text: tweet.data.text,
              userId: tweet.data.userId
            }
          };
        },

        request(data) {
          const { tweet } = this.props;
          lore.actions.tweet.update(tweet, data);
        },

        render() {
          const { data } = this.state;
          const { schema, fieldMap, actionMap } = lore.config.dialogs;

          return (
            <OptimisticBlueprint
              title="Update Tweet"
              onCancel={this.props.onCancel}
              data={data}
              schema={schema}
              fieldMap={fieldMap}
              actionMap={actionMap}
              request={this.request}
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
                      label: 'Update',
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
      <p>
        While we won't do in this tutorial, if you compare the create and update dialogs at this point, you'll
        notice the <code>validators</code> and <code>fields</code> are identical. And if you wanted, you could
        even move that part of the code into a location both dialogs could share, to further reduce code.
      </p>

      <h3>
        Visual Check-in
      </h3>
      <p>
        If everything went well, clicking the edit link will still launch a dialog that you can use to edit an
        existing tweet.
      </p>

      <img className="drop-shadow" src={image} />

      <h2>
        Code Changes
      </h2>
      <p>
        Below is a list of files modified during this step.
      </p>

      <h3>
        src/dialogs/tweet/update/index.js
      </h3>
      <Markdown text={`
      import React from 'react';
      import createReactClass from 'create-react-class';
      import PropTypes from 'prop-types';
      import OptimisticBlueprint from '../../_blueprints/Optimistic';

      export default createReactClass({
        displayName: 'UpdateTweetDialog',

        propTypes: {
          onCancel: PropTypes.func,
          tweet: PropTypes.object.isRequired
        },

        getInitialState() {
          const { tweet } = this.props;

          return {
            data: {
              text: tweet.data.text,
              userId: tweet.data.userId
            }
          };
        },

        request(data) {
          const { tweet } = this.props;
          lore.actions.tweet.update(tweet, data);
        },

        render() {
          const { data } = this.state;
          const { schema, fieldMap, actionMap } = lore.config.dialogs;

          return (
            <OptimisticBlueprint
              title="Update Tweet"
              onCancel={this.props.onCancel}
              data={data}
              schema={schema}
              fieldMap={fieldMap}
              actionMap={actionMap}
              request={this.request}
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
                      label: 'Update',
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
        Next we're going to <Link to="../../destroy/step-1/">refactor the delete dialog</Link>.
      </p>
    </Template>
  )
};
