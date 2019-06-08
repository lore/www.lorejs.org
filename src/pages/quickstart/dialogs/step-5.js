import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import QuickstartBranch from '../../../components/QuickstartBranch';
import missingFieldsImage from '../../../assets/images/quickstart/dialogs/step-5a.png';
import image from '../../../assets/images/quickstart/dialogs/step-5.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 5: Generate Dialog via Hook
      </h1>

      <p>
        In this step we're going to introduce another hook called <code>lore-hook-dialogs-bootstrap</code> that
        will generate all of our dialogs for us.
      </p>

      <QuickstartBranch branch="dialogs.5" />

      <h3>
        Why create a hook for this?
      </h3>
      <p>
        While the dialog we created is now a little simpler, since it no longer needs to include the code to show
        and dismiss itself, we can still do a lot better.
      </p>
      <p>
        As mentioned previously, in a real application, you may have dozens of dialogs for creating, updating and
        deleting content. And these dialogs are often all <strong>incredibly similar</strong>, which creates a huge
        amount of boilerplate.
      </p>
      <p>
        Many applications have (or at least strive for) a sense of visual consistency; there's a certain design
        aesthetic that governs the way the application looks, and components conform to it.
      </p>
      <p>
        When applied to dialogs, it means things like the header and footer will often look like same, and even the
        fields and buttons will be identical. A text field in one dialog will look like a text field in another. A
        dropdown in one will look like a dropdown in another. Wizards will have the same types of steps. Errors
        will be displayed similarly.
      </p>
      <p>
        When taken to an extreme, it means that it's possible to create blueprints for your dialogs, similar to
        the way Lore creates blueprints for actions and reducers, and using those blueprints allows you to switch
        from a process of <strong>creating dialogs</strong> to a process of <strong>describing dialogs</strong>.
      </p>
      <p>
        The blueprints Lore uses for actions and reducers are possible because even though all REST APIs are
        different, they're also all similar. And dialogs (and forms in general) exist in a similar space.
      </p>

      <h3>
        Disclaimer
      </h3>
      <p>
        It's worth saying that this next part may feel <strong>a whole lot like magic</strong>, especially since very
        little about how it works will be explained. But what's important is this:
      </p>
      <p>
        More than anything else, Lore is a proof of concept intended to document patterns in application
        development that seem applicable (and beneficial) to the majority of applications.
      </p>
      <p>
        What follows in the rest of the this section, as we use <code>lore-hook-dialogs-bootstrap</code> to
        automatically generate dialogs, <strong>is an example of what's possible</strong> using those patterns.
      </p>
      <p>
        While the dialogs created by the hook are fairly flexible, and the hook itself was created for (and
        is being used in) a production application, the visual appearance and behavior of forms within an application
        changes <em>frequently</em> as it evolves, and it would be unrealistic to expect this library to solve the
        unique visual needs of your application.
      </p>
      <p>
        This library is meant to be <em>demonstrative</em>. It's meant to say: "If you created blueprints for
        your own dialogs, this is possible. If you like this development flow, if this idea appeals to you,
        perhaps consider learning how it's done, and creating a version of this for your own application".
      </p>

      <h3>
        Install the Hook
      </h3>
      <p>
        With that out of the way, let's get started. Run the following command to install the package:
      </p>

      <Markdown type="sh" text={`
      npm install lore-hook-dialogs-bootstrap --save
      `}/>

      <p>
        Then open <code>index.js</code> and add the hook like this:
      </p>

      <Markdown text={`
      // index.js
      ...
      import dialog from 'lore-hook-dialog-bootstrap';
      import dialogs from 'lore-hook-dialogs-bootstrap';
      ...

      lore.summon({
        hooks: {
          ...
          dialog,
          dialogs,
          ...
        }
      });
      `}/>

      <h3>
        Use the Hook
      </h3>
      <p>
        Next update the <code>CreateButton</code> to have the hook generate the dialog for us, instead of using
        the custom dialog we created ourselves previously.
      </p>

      <Markdown text={`
      // src/components/CreateButton.js
      onClick() {
        lore.dialog.show(function() {
          return lore.dialogs.tweet.create({
            blueprint: 'optimistic',
            request: function(data) {
              return lore.actions.tweet.create(data).payload;
            }
          });
        });
      }
      `}/>

      <p>
        The call to <code>lore.dialogs.tweet.create</code> generates (and returns) a dialog for creating tweets, and
        is one type of dialog offered by the hook; the others, which we'll see later,
        are <code>update</code> and <code>destroy</code>.
      </p>
      <p>
        We're also telling the hook what kind of <strong>behavior</strong> we want the dialog to have, which is what
        the <code>blueprint</code> represents. The <code>optimistic</code> blueprint will exactly mirror what we
        created ourselves (the dialog will be dismissed as soon as the action is invoked).
      </p>
      <blockquote>
        <p>
          The other types of blueprints (which we won't cover in this Quickstart)
          are <code>overlay</code> and <code>wizard</code>, which are actually designed to <strong>wait for server
          confirmation before closing</strong>, and will display errors to the user if there were any issues
          creating the resource (which in this case is our tweet).
        </p>
      </blockquote>

      <h3>
        Try it Out
      </h3>
      <p>
        With change done, let's try it out. Click the "create tweet" button, you'll see that a dialog launches,
        but it doesn't have any fields.
      </p>

      <img className="drop-shadow" src={missingFieldsImage} />

      <p>
        This is because we haven't described <strong>what data we need the dialog to collect</strong>, only that it
        exists for the purpose of creating tweets.
      </p>

      <h3>
        Add Fields to the Dialog
      </h3>
      <p>
        To fix this, open the <code>tweet</code> model and add this code:
      </p>

      <Markdown text={`
      // src/models/tweet.js
      export default {

        dialogs: {
          create: {
            data: {
              text: ''
            },
            validators: {
              text: [function(value) {
                if (!value) {
                  return 'This field is required';
                }
              }]
            },
            fields: [
              {
                key: 'text',
                type: 'text',
                props: {
                  label: 'Message',
                  placeholder: "What's happening?"
                }
              }
            ]
          }
        }

      }
      `}/>

      <p>
        In order for the dialog to display fields, it needs to know what those fields should be, and one place it
        looks for them is in the <code>dialogs</code> property of the associated <code>model</code>.
      </p>

      <blockquote>
        You can also configure the dialog directly, by passing it a set of arguments. But since this Quickstart
        is about Lore, and not patterns for building forms, we'll reserve any further discussion about this
        library for the documentation, or for a separate (future) tutorial focused on forms themselves.
      </blockquote>

      <p>
        Here we're telling the dialog three things:
      </p>
      <ul>
        <li>
          <p>
            The <code>data</code> property describes the initial data for the dialog. In this case, our dialog
            only has one field, which is <code>text</code>, and we want the initial value for that field set to an
            empty string.
          </p>
        </li>
        <li>
          <p>
            The <code>validators</code> property provides a set of functions that determine whether the data entered
            by the user is valid or not, and the form can't be submitted until all data is valid. In this case,
            we're saying the <code>text</code> field is <strong>required</strong>.
          </p>
        </li>
        <li>
          <p>
            The <code>fields</code> property is an object describing the fields we need displayed. In this case,
            we have a single field (<code>text</code>) which is of type "text" (a multiline textarea), and it
            should have the label <em>"Message"</em> with the placeholder text of <em>"What's happening?"</em>.
          </p>
        </li>
      </ul>

      <p>
        With those changes in place, try it out again, and this time you should see fully functioning form. You can
        even submit it, and if you refresh the browser, you'll see the tweet you created.
      </p>

      <blockquote>
        <p>
          In addition to the <code>optimistic</code> blueprint (which closes as soon as the dialog is submitted),
          the hook also supports an <code>overlay</code> blueprint (which will wait until the resource is saved
          before closing) as well as a <code>wizard</code> blueprint (which will provide a confirmation screen
          after the resource is saved).
        </p>
        <p>
          If you'd like a better understanding of how these dialogs are generated, and what the underlying patterns
          are that are used to create the blueprints, check out the <Link to="/forms/pattern/">Lore Forms Pattern
          Tutorial</Link>.
        </p>
      </blockquote>

      <h3>
        Visual Check-in
      </h3>

      <p>
        If everything went well, your application should now look like this.
      </p>

      <img className="drop-shadow" src={image} />

      <h2>
        Code Changes
      </h2>

      <p>
        Below is a list of files modified during this step.
      </p>

      <h3>
        index.js
      </h3>
      <Markdown text={`
      /**
       * This file kicks off the build process for the application.  It also attaches
       * the Lore singleton to the window, so you can access it from the command line
       * in case you need to play with it or want to manually kick off actions or check
       * the reducer state (through \`lore.actions.xyz\`, \`lore.reducers.xyz\`,
       * \`lore.models.xyz\`, etc.)
       */

      import lore from 'lore';
      import _ from 'lodash';

      // Import the styles for the loading screen. We're doing that here to make
      // sure they get loaded regardless of the entry point for the application.
      import './assets/css/loading-screen.css';

      // Allows you to access your lore app globally as well as from within
      // the console. Remove this line if you don't want to be able to do that.
      window.lore = lore;

      // Hooks
      import auth from 'lore-hook-auth';
      import actions from 'lore-hook-actions';
      import bindActions from 'lore-hook-bind-actions';
      import collections from 'lore-hook-collections';
      import connections from 'lore-hook-connections';
      import connect from 'lore-hook-connect';
      import dialog from 'lore-hook-dialog-bootstrap';
      import dialogs from 'lore-hook-dialogs-bootstrap';
      import models from 'lore-hook-models';
      import react from 'lore-hook-react';
      import reducers from 'lore-hook-reducers';
      import redux from 'lore-hook-redux';
      import router from 'lore-hook-router';

      // Summon the app!
      lore.summon({
        hooks: {
          auth,
          actions,
          bindActions,
          collections,
          connections,
          connect,
          dialog,
          dialogs,
          models,
          react,
          reducers,
          redux: _.extend(redux, {
            dependencies: ['reducers', 'auth']
          }),
          router
        }
      });
      `}/>

      <h3>
        src/components/CreateButton.js
      </h3>
      <Markdown type="jsx" text={`
      import React from 'react';
      import createReactClass from 'create-react-class';
      import PropTypes from 'prop-types';

      export default createReactClass({
        displayName: 'CreateButton',

        onClick() {
          lore.dialog.show(function() {
            return lore.dialogs.tweet.create({
              blueprint: 'optimistic',
              request: function(data) {
                return lore.actions.tweet.create(data).payload;
              }
            });
          });
        },

        render() {
          return (
            <button
              type="button"
              className="btn btn-primary btn-lg create-button"
              onClick={this.onClick}>
              +
            </button>
          );
        }

      });
      `}/>

      <h3>
        src/models/tweet.js
      </h3>
      <Markdown text={`
      export default {

        dialogs: {
          create: {
            data: {
              text: ''
            },
            validators: {
              text: [function(value) {
                if (!value) {
                  return 'This field is required';
                }
              }]
            },
            fields: [
              {
                key: 'text',
                type: 'text',
                props: {
                  label: 'Message',
                  placeholder: "What's happening?"
                }
              }
            ]
          }
        }

      }
      `}/>

      <h2>
        Next Steps
      </h2>

      <p>
        Next we're going to <Link to="/quickstart/dialogs/step-6/">create a way to edit tweets</Link>.
      </p>

    </Template>
  )
};
