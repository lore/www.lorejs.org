import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Code from '../../../components/Code';
import QuickstartBranch from '../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 2: Parse the Collection
      </h1>

      <p>
        In this step we’ll begin restoring functionality to our application.
      </p>

      <QuickstartBranch branch="server.2" />

      <h3>
        Why is the application broken?
      </h3>
      <p>
        Our application is broken because the API response from the mock API is different than the response from
        the real API.
      </p>
      <p>
        The mock API server had a response for <code>/tweets</code> that looked like this:
      </p>

      <Code text={`
      [
        {...tweet...},
        {...tweet...}
      ]
      `}/>

      <p>
        But the response from the real API looks like this:
      </p>

      <Code text={`
      {
        data: [
          {...tweet...},
          {...tweet...}
        ],
        meta: {
          paginate: {
            currentPage: 1,
            nextPage: 2,
            prevPage: null,
            totalPages: 11,
            totalCount: 51,
            perPage: 5
          }
        }
      }
      `}/>

      <p>
        The reason for the change is a positive one, as we now have clear metadata that we can use for
        pagination, but it still breaks our application.
      </p>
      <p>
        Not to worry though; Lore is designed to be able to adapt to these kinds of breaking API changes, it just
        needs a little help from you to understand how.
      </p>

      <h3>
        Parse the Collection Response
      </h3>
      <p>
        To fix the application, open <code>config/collections.js</code>.
      </p>

      <blockquote>
        <p>
          Collections in Lore are the abstraction tier responsible for communicating with API endpoints
          like <code>/tweets</code> that return array of resources.
        </p>
        <p>
          You can learn more about <code>collections</code> <Link to="/collections/">here</Link>.
        </p>
      </blockquote>

      <p>
        Within the <code>default</code> key (representing the default API) you'll see of properties with a
        commented out function called <code>parse()</code> that looks like this:
      </p>

      <Code text={`
      {
        default: {
          properties: {
            // parse: function(response) {
            //   return response;
            // }
          }
        }
      }
      `}/>

      <blockquote>
        <p>
          Like the other config files, this method is commented out because it reflects the default behavior of
          the framework.
        </p>
      </blockquote>
      <p>
        When the <code>/tweets</code> endpoint returns data, that data is passed to the <code>parse()</code> method
        as the <code>response</code> argument, and this method is expected to return an array of resources.
      </p>
      <p>
        The default behavior is to return whatever data was provided, and when we were using our mock API, that
        wasn't a problem, because the original API response <em>was</em> an array of tweets.
      </p>
      <p>
        But now the array we want is embedded inside the <code>data</code> property of the server response, so we
        need to override this function to have it return that part of the response.
      </p>
      <p>
        To do that, modify the <code>parse()</code> method to look like this:
      </p>

      <Code text={`
      {
        default: {
          properties: {
            parse: function(response) {
              return response.data;
            }
          }
        }
      }
      `}/>

      <h3>
        Visual Check-in
      </h3>

      <p>
        If you refresh the browser, you'll see the application is still broken, but now we have a different error
        in the console:
      </p>

      <Code type="sh" text={`
      Invalid call to \`getState('user.byId')\`. Missing required attribute 'id'.
      `}/>

      <p>
        We'll fix this error in the next step.
      </p>

      <h2>
        Code Changes
      </h2>

      <p>
        Below is a list of files modified during this step.
      </p>

      <h3>
        config/connections.js
      </h3>

      <Code type="jsx" text={`
      import { getConfig } from '@lore/connections';
      
      export default getConfig({
        default: {
          properties: {
            parse: function(response) {
              return response.data;
            }
          }
        }
      })
      `}/>

      <h2>
        Next Steps
      </h2>

      <p>
        Next we're going to <Link to="/quickstart/server/step-3/">continue restoring functionality to the application</Link>.
      </p>
    </Template>
  )
};
