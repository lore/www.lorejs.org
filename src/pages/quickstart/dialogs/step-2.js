import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Code from '../../../components/Code';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/dialogs/step-2.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 2: Mounting Dialogs
      </h1>

      <p>
        In this step we're going to learn how to mount dialogs.
      </p>

      <QuickstartBranch branch="dialogs.2" />

      <h3>
        Reintroduction to Lore
      </h3>
      <p>
        We've seen Lore do a lot of things up to this point, including mounting the application, setting up routing,
        generating reducers and actions, and orchestrating data fetching for components. But what we haven't talked
        about is <em>how it does that</em>, because truthfully, the framework itself doesn't have <em>any</em> of that
        functionality built into it.
      </p>
      <p>
        Lore itself isn't a framework so much as a series of libraries that were designed to complement each other,
        along with a default project structure that allows all those libraries to come preconfigured. It's the
        combination that makes Lore appear like a framework, but the libraries themselves are largely capable of
        operating independently.
      </p>
      <p>
        The <code>index.js</code> file at the root of your project is where most of that configuration happens, such
        as generating the project configuration, creating the actions and reducers for Redux, setting up the store,
        and initializing React Router. If there are aspects of the project behavior you want to change (such as
        replacing React Router), that's a good place to start looking.
      </p>

      <blockquote>
        <p>
          The <code>.lore</code> folder at the root of your project contains the more advanced initialization
          logic, some of which you've already seen in action:
        </p>
        <ul>
          <li>
            The <code>.lore/config.js</code> script constructs the project configuration based on the environment
          </li>
          <li>
            The <code>.lore/actions.js</code> script converts your models into actions
          </li>
          <li>
            The <code>.lore/reducers.js</code> script creates reducers for each of your models
          </li>
        </ul>
        <p>
          These scripts are also in charge of some of the conventions we've seen, such as looking
          in <code>src/models</code> for the models we should create blueprints for, so if you want to change
          any of the conventions, that's a good place to look.
        </p>
      </blockquote>

      <h3>
        The Dialog Hook
      </h3>
      <p>
        In this section we're going to be mounting dialogs, and we'll be using a Hook
        called <code>useDialog</code> from the <code>@lore/dialogs</code> package to do that.
      </p>
      <p>
        To understand what this Hook does, open the <code>index.html</code> at the root of your project, and find
        the element in the body with an id of <code>dialog</code>:
      </p>

      <Code type="html" text={`
      <body>
        <div id="loading-screen">
          ...
        </div>
        <div id="root">
          ...
        </div>
        <div id="dialog"></div>
        ...
      </body>
      `}/>

      <p>
        After Lore builds your application, it mounts it to the <code>root</code> element. But rendering
        dialogs <em>inside</em> that element can be problematic, as it allows other components in your application
        to unintentionally affect the styling and behavior of your dialogs.
      </p>

      <blockquote>
        <p>
          Examples where this can show up:
        </p>
        <ul>
          <li>
            Classes applies to parent elements affecting the styling of your dialogs
          </li>
          <li>
            Parent components cancelling click events in your dialogs.
          </li>
        </ul>
      </blockquote>

      <p>
        The <code>dialog</code> element is intended to be used as target for mounting dialogs, in order to avoid
        those issues, and the <code>useDialog()</code> Hook provides a helper that renders a React component to
        that element.
      </p>

      <h3>
        Update Create Button
      </h3>
      <p>
        To demonstrate this utility, replace the <code>onClick</code> behavior of
        our <code>CreateButton</code> component with this code:
      </p>

      <Code text={`
      // src/components/CreateButton.js
      ...
      import { useDialog } from '@lore/dialogs';
      
      export default function CreateButton(props) {
        const show = useDialog();
      
        function onClick() {
          show(
            <h1>Dialog Placeholder</h1>
          );
        }
      
        ...
      }
      `}/>

      <p>
        If you refresh the browser and click the button, you should see the text <em>"Dialog Placeholder"</em> appear
        at the bottom of the screen (you may have to scroll down to see it). You can also inspect
        the <code>dialog</code> element to confirm the component was mounted inside of it.
      </p>

      <p>
        In the next section we'll replace this placeholder text with a real dialog.
      </p>

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
        src/components/CreateButton.js
      </h3>

      <Code type="jsx" text={`
      import React from 'react';
      import PropTypes from 'prop-types';
      import { useDialog } from '@lore/dialogs';
      
      export default function CreateButton(props) {
        const show = useDialog();
      
        function onClick() {
          show(
            <h1>Dialog Placeholder</h1>
          );
        }
      
        return (
          <button
            type="button"
            className="btn btn-primary btn-lg create-button"
            onClick={onClick}>
            +
          </button>
        );
      }
      `}/>

      <h2>
        Next Steps
      </h2>
      <p>
        Next we're going to <Link to="/quickstart/dialogs/step-3/">create and mount a dialog</Link>.
      </p>
    </Template>
  )
};
