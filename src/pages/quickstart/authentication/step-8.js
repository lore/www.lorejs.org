import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Code from '../../../components/Code';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/authentication/final.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 8: Save User in Context
      </h1>

      <p>
        In this step we're going to save the current user to context, so that any component in the application can
        easily retrieve it.
      </p>

      <QuickstartBranch branch="authentication.8" />

      <h3>
        The Master Component
      </h3>
      <p>
        Inside the <code>src/components</code> folder is a component named <code>Master</code>. This component is
        intended to serve as a wrapper around your application, and has two main functions:
      </p>

      <ol>
        <li>Fetch any data that needs to be retrieved before the application is rendered</li>
        <li>Remove the loading screen once the application is ready to display to the user</li>
      </ol>

      <p>
        In this step, we'll be focusing on the first function, and fetching the current user before we
        render the main application.
      </p>
      <blockquote>
        <p>
          You can learn more about
          the <code>Master</code> component <Link to="/anatomy/src/components/master/">here</Link>.
        </p>
      </blockquote>

      <h3>
        Fetch the Current User in Master
      </h3>
      <p>
        Let's start by using the <code>useConnect</code> Hook to fetch the current user when the application
        loads, and allowing the loading experience to continue to render until we have it. Update
        the <code>Master</code> component to look like this:
      </p>

      <Code type="jsx" text={`
      // src/components/Master.js
      ...
      
      export default function Master(props) {
        const user = useConnect('currentUser');
      
        if (user.state === PayloadStates.FETCHING) {
          return null;
        }
      
        return (
          ...
        );
      }
      `}/>

      <h3>
        Save the User in Context
      </h3>
      <p>
        Next we're going to save the current user to <a href="https://reactjs.org/docs/context.html">context</a>, so
        that any component that needs it can retrieve it. Update the <code>Master</code> component to provide
        the user to <code>UserContext.Provider</code> like this:
      </p>

      <Code type="jsx" text={`
      // src/components/Master.js
      ...
      
      export default function Master(props) {
        const user = useConnect('currentUser');
      
        if (user.state === PayloadStates.FETCHING) {
          return null;
        }
      
        return (
          <UserContext.Provider value={user}>
            <RemoveLoadingScreen />
            {props.children}
          </UserContext.Provider>
        );
      }
      `}/>

      <h3>
        Update Profile to Use Context
      </h3>
      <p>
        Next, open the <code>Profile</code> component and modify it to retrieve the current user
        from <code>context</code> instead of <code>props</code>. Since we provided the user
        to <code>UserContext</code> previously, we can now obtain the user from <code>useUser</code> Hook provided
        by <code>@lore/auth</code> this like:
      </p>

      <Code type="jsx" text={`
      // src/components/Profile.js
      ...
      import { useUser } from '@lore/auth';
      
      export default function Profile(props) {
        const user = useUser();
      
        return (
          ...
        );
      }
      `}/>

      <blockquote>
        <p>
          At this point, we no longer need the <code>defaultProps</code> property, so feel free to delete it.
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
        src/components/Master.js
      </h3>

      <Code type="jsx" text={`
      import React from 'react';
      import PropTypes from 'prop-types';
      import { useConnect } from '@lore/connect';
      import { UserContext } from '@lore/auth';
      import PayloadStates from '../constants/PayloadStates';
      import RemoveLoadingScreen from '../components/RemoveLoadingScreen';
      
      export default function Master(props) {
        const user = useConnect('currentUser');
      
        if (user.state === PayloadStates.FETCHING) {
          return null;
        }
      
        return (
          <UserContext.Provider value={user}>
            <RemoveLoadingScreen />
            {props.children}
          </UserContext.Provider>
        );
      }
      `}/>

      <h3>
        src/components/Profile.js
      </h3>

      <Code type="jsx" text={`
      import React from 'react';
      import PropTypes from 'prop-types';
      import { Link } from 'react-router-dom';
      import { useUser } from '@lore/auth';
      
      export default function Profile(props) {
        const user = useUser();
      
        return (
          <div className="card profile">
            <div className="card-block">
              <img
                className="img-circle avatar"
                src={user.data.avatar} />
              <h4 className="card-title">
                Hi {user.data.nickname}!
              </h4>
              <div className="card-text">
                <p>You have permission to perform the following:</p>
                <ul className="permissions">
                  <li>Create Tweets</li>
                  <li>Edit your own tweets</li>
                  <li>Delete your own tweets</li>
                </ul>
              </div>
              <Link className="btn btn-primary" to="/logout">
                Log out
              </Link>
            </div>
          </div>
        );
      }
      `}/>

      <h2>
        Next Steps
      </h2>

      <p>
        In the next section we're going to <Link to="/quickstart/server/overview/">replace the mock server with a real
        server</Link>.
      </p>
    </Template>
  )
};
