import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/forms/PatternConstruction';
import Markdown from '../../../../components/Markdown';
import CodeTabs from '../../../../components/CodeTabs';
import CodeTab from '../../../../components/CodeTab';
import FormsPatternTutorialBranch from '../../../../components/FormsPatternTutorialBranch';
import image from '../../../../assets/images/forms/tutorial/delete-tweet-dialog.png';

export default (props) => {
  return (
    <Template>
      <h1>
        1. Refactor Delete Dialog
      </h1>
      <p>
        In this step we'll be refactoring the UpdateTweetDialog to leverage the blueprint we just created.
      </p>

      <FormsPatternTutorialBranch branch="destroy.1" />

      <h3>
        Dialog Comparison
      </h3>
      <p>
        If you compare the delete dialog to the original update dialog, you'll find that once again, very little
        is different. In fact, the only code that's different is reflected below:
      </p>
      <Markdown text={`
      ...
      propTypes: {
        tweet: PropTypes.object.isRequired
      },

      getInitialState() {
        return {
          data: {}
        };
      },

      request(data) {
        const { tweet } = this.props;
        lore.actions.tweet.update(tweet, data);
      },

      getValidators: function(data) {
        return {};
      },

      render() {
        ...
        return (
          <div className="modal-dialog">
              ...
                <h4 className="modal-title">
                  Delete Tweet
                </h4>
              ...
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12">
                    <p>
                      Are you sure you want to delete this?
                    </p>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                ...
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={hasError}
                  onClick={this.onSubmit}
                >
                  Delete
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
        In this case, the delete dialog is intended to <em>delete a tweet</em>, and so it requires a prop which
        is the tweet that should be updated.
      </p>
      <p>
        The biggest difference is that instead of fields for user input, this form prompts the user with a
        confirmation question, to double check that they mean to delete the tweet. Once they confirm, and
        the form is submitted, the <code>request()</code> method uses the <code>delete</code> action instead of
        the <code>update</code> action.
      </p>
      <p>
        Also, because the form has no user input fields, the <code>getInitialState()</code> does not need to
        set an initial state for the form, and there is no need to specify an validators.
      </p>
      <p>
        Additionally, (looking at the <code>render()</code> method) the title of the form is "Delete Tweet" instead
        of "Update Tweet", and the <code>onSubmit</code> button says "Delete" instead of "Update".
      </p>
      <p>
        Other than that, the forms are identical.
      </p>

      <h3>
        Add Custom Field Type
      </h3>
      <p>
        Currently, we can solve all of those requirements <em>except</em> for inserting custom text into a
        form. So how do we solve that?
      </p>
      <p>
        One way is to think of custom text like the confirmation question as a type of field, but one that allows
        you to render whatever you want, instead of predetermined "thing", like we do with
        the <code>text</code> and <code>select</code> fields. And luckily, our current setup will allow us to do
        that.
      </p>
      <p>
        To demonstrate how to do this, open <code>config/dialogs.js</code>. Then find the section that defines
        the <code>fieldMap</code>, and add a new field type called <code>custom</code> that looks like this:
      </p>
      <Markdown text={`
      // config/dialogs.js
      ...
      fieldMap: {
        ...
        custom: function(form, props, name) {
          return (
            <Field key={name} name={name} data={form.data} errors={form.errors} onChange={form.onChange}>
              {(field) => {
                return props.render(field, props);
              }}
            </Field>
          );
        }
      }
      ...
      `}/>
      <p>
        With that change in place, we can now specify insert <code>custom</code> fields into forms, as long as
        we provide a <code>render()</code> method as a prop to that field type, we can render whatever we want.
      </p>

      <h3>
        Refactor Delete Dialog
      </h3>
      <p>
        To see how to use the new field type we just created, open the delete dialog located
        at <code>src/dialogs/tweet/destroy/index.js</code> and replace the contents with the code shown below:
      </p>
      <Markdown text={`
      import React from 'react';
      import createReactClass from 'create-react-class';
      import PropTypes from 'prop-types';
      import OptimisticBlueprint from '../../_blueprints/Optimistic';

      export default createReactClass({
        displayName: 'DeleteTweetDialog',

        propTypes: {
          onCancel: PropTypes.func,
          tweet: PropTypes.object.isRequired
        },

        getInitialState() {
          return {
            data: {}
          };
        },

        request(data) {
          const { tweet } = this.props;
          lore.actions.tweet.destroy(tweet);
        },

        render() {
          const { data } = this.state;
          const { schema, fieldMap, actionMap } = lore.config.dialogs;

          return (
            <OptimisticBlueprint
              title="Delete Tweet"
              onCancel={this.props.onCancel}
              data={data}
              schema={schema}
              fieldMap={fieldMap}
              actionMap={actionMap}
              request={this.request}
              validators={function(data) {
                return {};
              }}
              fields={[
                {
                  key: 'confirmation',
                  type: 'custom',
                  props: {
                    render: (form) => {
                      return (
                        <p>
                          Are you sure you want to delete this?
                        </p>
                      );
                    }
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
                      label: 'Delete',
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
        Here we've specified one field, of type <code>custom</code>, and then provided a <code>render()</code> method
        via the props we want passed to that component during creation. In this case, the fucntion we defined for
        the <code>custom</code> field type looks for that function, and then renders what ever it returns.
      </p>

      <h3>
        Visual Check-in
      </h3>
      <p>
        If everything went well, clicking the delete link will still launch a dialog that you can use to delete an
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
        src/dialogs/tweet/destroy/index.js
      </h3>
      <Markdown text={`
      import React from 'react';
      import createReactClass from 'create-react-class';
      import PropTypes from 'prop-types';
      import OptimisticBlueprint from '../../_blueprints/Optimistic';

      export default createReactClass({
        displayName: 'DeleteTweetDialog',

        propTypes: {
          onCancel: PropTypes.func,
          tweet: PropTypes.object.isRequired
        },

        getInitialState() {
          return {
            data: {}
          };
        },

        request(data) {
          const { tweet } = this.props;
          lore.actions.tweet.destroy(tweet);
        },

        render() {
          const { data } = this.state;
          const { schema, fieldMap, actionMap } = lore.config.dialogs;

          return (
            <OptimisticBlueprint
              title="Delete Tweet"
              onCancel={this.props.onCancel}
              data={data}
              schema={schema}
              fieldMap={fieldMap}
              actionMap={actionMap}
              request={this.request}
              validators={function(data) {
                return {};
              }}
              fields={[
                {
                  key: 'confirmation',
                  type: 'custom',
                  props: {
                    render: (form) => {
                      return (
                        <p>
                          Are you sure you want to delete this?
                        </p>
                      );
                    }
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
                      label: 'Delete',
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
        This step concludes the tutorial. Next we're going to <Link to="../../next-steps/">discuss next steps</Link>.
      </p>
    </Template>
  )
};
