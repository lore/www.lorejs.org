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
        Step 1: Add Pagination Metadata
      </h1>

      <p>
        In this step we'll add pagination information to our collections, so components can tell how many pages of
        data are available.
      </p>

      <QuickstartBranch branch="pagination.1" />

      <h3>
        Pagination Metadata
      </h3>
      <p>
        In order to implement pagination, we need to know some information about the tweets we're viewing, such as:
      </p>

      <ol>
        <li>How many tweets exist</li>
        <li>How many tweets are provided on each page</li>
      </ol>

      <p>
        If we look at the API response from the server, we can see that that information is provided in the response
        as <code>meta.paginate</code>:
      </p>

      <Markdown text={`
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
        What we want to do is make that information available to the application, so we can calculate the
        number of pages to display.
      </p>

      <h3>
        Add Pagination Data to Collections
      </h3>
      <p>
        To do that open up <code>config/connections.js</code> and find the <code>parse()</code> method
        for <code>collections</code>. Update that method to look like this:
      </p>

      <Markdown text={`
      // config/connections.js
      ...
        collections: {
          properties: {
            parse: function(response) {
              this.meta = {
                totalCount: response.meta.paginate.totalCount,
                perPage: response.meta.paginate.perPage
              };
              return response.data;
            }
          }
        }
      ...
      `}/>

      <p>
        Collections in Lore have a special property called <code>meta</code>. It defaults to an empty object, and
        anything you add to it will show up in the <code>meta</code> property of the data structure for collections.
      </p>
      <p>
        By adding <code>totalCount</code> and <code>perPage</code> to <code>meta</code>, we've now made that data
        available to any component that receives a collection.
      </p>

      <h3>
        Visual Check-in
      </h3>

      <p>
        If everything went well, your application should now look like this. Exactly the same :)
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

          collections: {
            properties: {
              parse: function(response) {
                this.meta = {
                  totalCount: response.meta.paginate.totalCount,
                  perPage: response.meta.paginate.perPage
                };
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
        Next step we're going to <Link to="/quickstart/pagination/step-2/">paginate the feed</Link>.
      </p>
    </Template>
  )
};
