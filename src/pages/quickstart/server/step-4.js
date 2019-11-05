import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Code from '../../../components/Code';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/server/step-4.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 4: Add Unauthorized Experience
      </h1>

      <p>
        In this step we're going to add an experience to show when the user is unauthorized.

      </p>

      <QuickstartBranch branch="server.4" />

      <h3>
        Why is the API call failing?
      </h3>
      <p>
        Our API call to <code>/user</code> is returning a 401 because we're using a real API now, and the server
        can't identify who the current user is without having access to the user's token.
      </p>

      <p>
        This API is expecting all network requests to protected endpoints to contain
        an <code>Authorization</code> header with a value of <code>Bearer [token]</code>.
      </p>

      <p>
        The call to <code>/tweets</code> is succeeding because that endpoint is public - anyone can view it.
      </p>

      <h3>
        Display an Unauthorized Experience
      </h3>
      <p>
        The fact that our application is rendering a broken experience isn't ideal. The reason this is
        happening is because the render logic for the <code>Master</code> component currently looks like this:
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

      <p>
        This component only has two states that it checks for:
      </p>

      <ul>
        <li>
          If the current user is being fetched, continue displaying the loading experience.
        </li>
        <li>
          If the current user is NOT being fetched, render the application.
        </li>
      </ul>

      <p>
        To fix this issue we're going to add a third condition, which will be:
      </p>

      <ul>
        <li>If there's an error fetching the current user, display an unauthorized experience.</li>
      </ul>

      <p>
        To add this experience, update the render method to look like this:
      </p>

      <Code type="jsx" text={`
      // src/components/Master.js
      ...
      export default function Master(props) {
        const user = useConnect('currentUser');
      
        if (user.state === PayloadStates.FETCHING) {
          return null;
        }
      
        if (user.state === PayloadStates.ERROR_FETCHING) {
          return (
            <div>
              <RemoveLoadingScreen />
              <h1 className="full-page-text">
                Unauthorized
              </h1>
            </div>
          );
        }
      
        return (
          <UserContext.Provider value={user}>
            <RemoveLoadingScreen />
            {props.children}
          </UserContext.Provider>
        );
      }
      `}/>

      <p>
        With that change in place, the application will now display <strong>"Unauthorized"</strong> when there's
        an error fetching the current user.
      </p>

      <blockquote>
        <p>
          The error response from the server is actually stored in <code>tweet.error</code>, which we could choose
          to display instead of the hardcoded message. But for this specific error, the server doesn't return any
          information in the body, so that's not an option we can use here.
        </p>
      </blockquote>

      <h3>
        Visual Check-in
      </h3>

      <p>
        If everything went well, your application should look like this.
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
      
        if (user.state === PayloadStates.ERROR_FETCHING) {
          return (
            <div>
              <RemoveLoadingScreen />
              <h1 className="full-page-text">
                Unauthorized
              </h1>
            </div>
          );
        }
      
        return (
          <UserContext.Provider value={user}>
            <RemoveLoadingScreen />
            {props.children}
          </UserContext.Provider>
        );
      }
      `}/>

      <h2>
        Next Steps
      </h2>

      <p>
        Next we're going to <Link to="/quickstart/server/step-5/">add an Authorization header to our network requests</Link>.
      </p>

    </Template>
  )
};
