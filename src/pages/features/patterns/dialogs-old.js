import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Features';
import Code from '../../../components/Code';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        Dialogs
      </h1>
      <p>
        Useful for launching a user experience outside the UI of the main application. You can think of dialogs as
        mini-apps that you launch to perform a task, and may reuse in multiple places in the application.
      </p>
      <p>
        Lore itself doesn't provide a built-in solution for dialogs per se, but
      </p>

      <h2>
        Usage
      </h2>
      <p>
        The first thing we need before we launch a dialog is a place to mount it. If you take a look at
        the <code>index.html</code> file at the root of your project, you'll notice two tags in the body; one with
        an <code>id</code> of <code>root</code> and one with an <code>id</code> of <code>dialog</code>:
      </p>

      <Code type="html" text={`
      <body>
        <div id="root"></div>
        <div id="dialog"></div>
      </body>
      `}/>

      <p>
        The <code>root</code> tag is where the main application is mounted. The <code>dialog</code> tag is where dialogs get mounted.
      </p>

      <blockquote>
        <p>
          Lore intentionally mounts dialogs outside of the main application for two reasons:
        </p>
        <ol>
          <li>
            Mounting a dialog <em>within</em> a component makes it susceptible to the CSS cascade, which means the styling of the
            dialog could be affected by the component that launches it (where it's placed in the DOM).
          </li>
          <li>
            Mounting a dialog <em>within</em> a component also allows components higher in the DOM to cancel event bubbling, which
            could lead to typing and click events not behaving as expected in the dialog.
          </li>
        </ol>
      </blockquote>

      <br/>

      <h4>
        Mounting a Dialog
      </h4>
      <p>
        Now that we have a place to put our dialogs, let's mount one. Lore includes hook called <code>dialog</code> that provides a
        utility for launching dialogs at <code>lore.dialog.show()</code>, but in reality this hook just mounts a component to the
        <code>dialog</code> tag and gives it access to the Redux <code>store</code> and the <code>router</code> from React Router. To mount a component you
        invoke it like this:
      </p>

      <Code text={`
      var Dialog = createReactClass({
        render: function() {
          return (
            <div>
              Dialog Placeholder
            </div>
          );
        }
      });

      createReactClass({
        onLaunchDialog: function() {
          lore.dialog.show(function() {
            return (
              <Dialog />
            );
          });
        },

        render: function() {
          return (
            <button onClick={this.onLaunchDialog}>
              Launch Dialog
            </button>
          );
        }
      })
      `}/>

      <p>
        Calling <code>lore.dialog.show()</code> as above will modify the DOM to look like this (injecting our component into the
        <code>dialog</code> tag):
      </p>

      <Code type="html" text={`
      <body>
        <div id="root"></div>
        <div id="dialog">
          <div>
            Dialog Placeholder
          </div>
        </div>
      </body>
      `}/>

      <p>
        At first glance this may not seem that useful, but some important callouts may help highlight the value:
      </p>

      <ol>
        <li>
          The utility makes sure to unmount the previous component, so even when launching the same dialog back-to-back,
          the state will always be reset and input fields will never contain data from the previous experience.
        </li>
        <li>
          By making sure the Redux <code>store</code> exists in context, the dialogs (or any dialogs steps) will be
          able to make use of <code>connect()</code> to request data, fire actions, and get notified when the store
          updates.
        </li>
      </ol>

      <br/>

      <h4>
        Creating a Dialog
      </h4>
      <p>
        Creating dialogs themselves is actually outside the scope of this utility, as there are too many interfaces and
        animations to predict. So instead, this utility simply mounts and configures the dialog, and then expects the
        dialog itself to insert itself into the UI. For example, if we were creating a Bootstrap dialog, we would change
        our <code>Dialog</code> component above to look like this:
      </p>

      <Code text={`
      import React from 'react';
      import PropTypes from 'prop-types';
      import createReactClass from 'create-react-class';
      import ReactDOM from 'react-dom';

      const Dialog = createReactClass({

        propTypes: {
          onSubmit: PropTypes.func.isRequired
        },

        componentDidMount: function() {
          this.show();
        },

        show: function() {
          var node = ReactDOM.findDOMNode(this);
          $(node).modal('show');
        },

        dismiss: function() {
          var node = ReactDOM.findDOMNode(this);
          $(node).modal('hide');
        },

        onSubmit: function() {
          this.dismiss();
          this.props.onSubmit(this.state);
        }

        render: function() {
          return (
            <div className="modal fade">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">
                      <span>&times;</span>
                    </button>
                    <h4 className="modal-title">
                      My Dialog
                    </h4>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="form-group">
                        <label className="control-label">
                          Input Field
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button className="btn btn-default" data-dismiss="modal">
                      Cancel
                    </button>
                    <button className="btn btn-primary" onClick={this.onSubmit}>
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      });
      `}/>

      <p>
        While the <code>lore.dialog.show</code> utility will mount this component to the <code>dialog</code> tag, it <em>won't</em> automatically launch
        it and trigger the "fade in" animation. That responsibility is left to the component. To address it, this component
        calls <code>this.show()</code> when the component is mounted to the DOM, which will find the DOM element for this dialog and
        call <code>modal('show')</code> to trigger the opening animation. Similarly, if the user submits the dialog, the component will
        call <code>modal('hide')</code> to close the dialog.
      </p>

      <br/>

      <h4>
        Acting on Dialog Data
      </h4>
      <p>
        The last step we need to account for is what to do with the <em>data</em> the dialog generates. For that this component has
        declared that it requires a <code>onSubmit</code> function through is props, and it will pass it's state data to that function
        when the user submits it. Invoking this specific dialog would then look like this:
      </p>

      <Code text={`
      import Dialog from '../dialogs/ExampleDialog';

      createReactClass({
        onLaunchDialog: function() {
          function onSubmit(data) {
            lore.actions.post.create(data);
          }

          lore.dialog.show(function() {
            return (
              <Dialog onSubmit={onSubmit} />
            );
          });
        },

        render: function() {
          return (
            <button onClick={this.onLaunchDialog}>
              Launch Dialog
            </button>
          );
        }
      })
      `}/>

      <p>
        Now when the dialog is submitted, the data will be passed to the <code>post.create</code> action and a new post will be created.
      </p>

      <h2>
        Auto-Generated Dialogs
      </h2>
      <p>
        Dialogs, especially early in application development, have a lot of boilerplate associated with them. And creating
        them, especially if we just need a way to create, edit and delete data as move the application forward, can slow
        down development of more important areas of the application.
      </p>

      <p>
        To help address that, there are two hooks you can install that provide examples of how to auto-generate dialogs if you
        provide some additional information about fields and types to your models. One hook demonstrates this for Bootstrap
        dialogs and the second hook demonstrates this for Material UI dialogs.
      </p>

      <p>
        If you'd like to try them out or see how they work, please see
        the <a href="https://github.com/lore/lore/tree/master/examples/dialogs-bootstrap">Bootstrap Dialog example</a> or
        the <a href="https://github.com/lore/lore/tree/master/examples/dialogs-material-ui">Material UI Dialog example</a>.
      </p>

    </Template>
  )
};
