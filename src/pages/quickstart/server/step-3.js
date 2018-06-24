import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/server/step-3.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 3: Parse the Model
      </h1>

      <p>
        In this step we’ll continue restoring the functionality to the application.
      </p>

      <QuickstartBranch branch="server.3" />

      <h3>
        Why is the application still broken?
      </h3>
      <p>
        The error we're seeing now looks like this:
      </p>

      <Markdown type="sh" text={`
      Invalid call to \`getState('user.byId')\`. Missing required attribute 'id'.
      `}/>

      <p>
        This error stems from another parsing problem. In our original mock API, the response for a single tweet
        looked like this:
      </p>

      <Markdown text={`
      {
        id: 1,
        userId: 1,
        text: "Ayla fight while alive! Win and live. Lose and die.",
        createdAt: "2018-04-24T04:03:25.546Z"
      }
      `}/>

      <p>
        But in our current API, the response looks like this:
      </p>

      <Markdown text={`
      {
        id: 1,
        user: 1,
        text: "Ayla fight while alive! Win and live. Lose and die.",
        createdAt: "2018-04-24T04:03:25.546Z"
      }
      `}/>

      <p>
        The difference is that our <code>userId</code> property has been renamed to <code>user</code>, and this is
        generating an error in the <code>connect</code> call of our <code>Tweet</code> component, show below:
      </p>

      <Markdown type="jsx" text={`
      // src/components/Tweet.js
      connect(function(getState, props) {
        const { tweet } = props;

        return {
          user: getState('user.byId', {
            id: tweet.data.userId
          })
        };
      })
      `}/>

      <p>
        Since <code>userId</code> doesn't exist in the new API response, this code is passing <code>undefined</code> as
        the value of the <code>id</code>.
      </p>

      <h3>
        Parse the Model Response
      </h3>
      <p>
        To fix this, we <em>could</em> simply replace <code>userId</code> with <code>user</code> in the code above,
        and that would certainly be the better long-term solution. But since this Quickstart is intended to showcase
        key features in Lore, we're going to use an alternative approach, and instead add the
        missing <code>userId</code> field to all tweets.
      </p>
      <p>
        Models and Collections in Lore both have a <code>parse()</code> method. The <code>parse()</code> method on
        Models is responsible for parsing a single resource and producing the final set of attributes that will
        be used by the components in your application. We're going to use this method to add the missing field.
      </p>
      <p>
        Open <code>src/models/tweet.js</code> and look for the commented out <code>parse()</code> method that looks
        like this:
      </p>

      <Markdown text={`
      // src/models/tweet.js
      export default {
        ...
        properties: {
          // parse: function(response, options) {
          //  return response;
          // }
        }
        ...
      }
      `}/>

      <p>
        Modify that method to look like this:
      </p>

      <Markdown type="jsx" text={`
      // src/models/tweet.js
      export default {
        ...
        properties: {
          parse: function(response, options) {
            response.userId = response.user;
            return response;
          }
        }
        ...
      }
      `}/>

      <p>
        Now whenever a <code>tweet</code> resource comes back from the server, this method will copy
        the <code>user</code> attribute to <code>userId</code>, making both available.
      </p>

      <blockquote>
        <p>
          While <code>config/connections.js</code> <em>does</em> contain a parse method for <code>models</code>,
          that method will affect <em>all</em> models in the application, which isn't what we want, since this
          issue only affects the <code>tweet</code> models.
        </p>
        <p>
          It's also worth mentioning that this approach of overriding <code>parse()</code> to resolve breaking API
          changes is only suitable for <em>consuming</em> data, since you're effectively transforming the server
          response.
        </p>
        <p>
          If you edit that data, and want to save your changes, then you'll need to transform it back to the format
          the server expects before sending it. In that case, you should use the <code>sync()</code> method, which
          you can learn more about <Link to="/models/">here</Link>.
        </p>
      </blockquote>

      <p>
        If you refresh the browser, you'll notice the Feed displays correctly again, but our profile picture isn't
        being displayed. This is because the application doesn't actually know who the user is. If you open the
        network tab in the browser developer tools, you'll see that the call to <code>/user</code> returns
        a <code>401 Unauthorized</code>.
      </p>
      <p>
        We'll fix that issue in the next step.
      </p>

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
        src/models/tweet.js
      </h3>

      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        export default {

          properties: {

            parse: function(response, options) {
              response.userId = response.user;
              return response;
            }

          }

        };
        `}/>
        <CodeTab syntax="ES6" text={`
        export default {

          properties: {

            parse: function(response, options) {
              response.userId = response.user;
              return response;
            }

          }

        }
        `}/>
        <CodeTab syntax="ESNext" text={`
        export default {

          properties: {

            parse: function(response, options) {
              response.userId = response.user;
              return response;
            }

          }

        }
        `}/>
      </CodeTabs>

      <h2>
        Next Steps
      </h2>

      <p>
        Next we're going to add an experience to <Link to="../step-4/">show when the user is unauthorized</Link>.
      </p>
    </Template>
  )
};
