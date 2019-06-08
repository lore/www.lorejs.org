import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/server/final.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 5: Add Authorization Header
      </h1>

      <p>
        In this step we'll add an Authorization header to all API calls.
      </p>

      <QuickstartBranch branch="server.5" />

      <h3>
        Add the Authorization Header
      </h3>
      <p>
        Now that we can clearly see when the user is unauthorized, let's add the user's token to the Authorization
        header to authenticate them and learn who they are.
      </p>

      <p>
        Remember the <code>auth</code> utility in <code>utils/auth.js</code> that we used to save the user's
        token to localStorage? We're going to be using that once again to retrieve the user's token and add it
        to the header of all API requests.
      </p>

      <p>
        Open <code>config/connections.js</code> and find the commented out method below
        the <code>apiRoot</code> called <code>headers</code>. It looks like this:
      </p>

      <Markdown text={`
      // config/connections.js
      export default {

        default: {

          apiRoot: 'http://localhost:1337',

          // headers: function() {
          //   return {};
          // },

          ...

        }

      };
      `}/>

      <p>
        Import the <code>auth</code> module into the config and set the <code>Authorization</code> like this:
      </p>

      <Markdown text={`
      // config/connections.js
      import auth from '../src/utils/auth';

      export default {

        default: {

          apiRoot: 'http://localhost:1337',

          headers: function() {
            return {
              Authorization: \`Bearer \${auth.getToken()}\`
            };
          },

          ...
        }

      };
      `}/>

      <p>
        With that change in place, refresh the browser and application should display correctly again.
      </p>

      <h3>
        Login as Different Characters
      </h3>
      <p>
        At this point, not only will the application display correctly again, but because we're now backed
        by a real API, you'll also be able to login as different characters and have the profile reflect
        that. Try it out!
      </p>

      <blockquote>
        <p>
          As a reminder, you can login as any of the characters below:
        </p>
        <ul>
          <li>ayla</li>
          <li>crono</li>
          <li>frog</li>
          <li>lucca</li>
          <li>magus</li>
          <li>marle</li>
          <li>robo</li>
        </ul>
        <p>
          The email format is <code>{"{name}@example.com"}</code>, and the password for all of them
          is <code>password</code>. So if you wanted to login as marle, you would
          enter <code>marle@example.com</code> for the email and <code>password</code> for the password.
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
        config/connections.js
      </h3>
      <Markdown text={`
      import auth from '../src/utils/auth';

      export default {

        default: {

          apiRoot: 'http://localhost:1337',

          headers: function() {
            return {
              Authorization: \`Bearer \${auth.getToken()}\`
            };
          },

          collections: {
            properties: {
              parse: function(response) {
                return response.data;
              }
            }
          }

        }
      };
      `}/>

      <h2>
        Next Steps
      </h2>

      <p>
        In the next section we'll <Link to="/quickstart/pagination/overview/">add support for pagination</Link>.
      </p>

    </Template>
  )
};
