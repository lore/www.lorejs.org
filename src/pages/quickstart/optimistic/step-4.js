import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/authorization/final.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 4: Add Optimistic Values
      </h1>

      <p>
        In this step fix the error and restore functionality to the application.
      </p>

      <QuickstartBranch branch="optimistic.4" />

      <h3>
        What's the problem?
      </h3>
      <p>
        Currently when you create a tweet, this error appears in the console:
      </p>

      <Markdown text={`
      Invalid call to "getState('user.byId')". Missing required attribute "id".
      `}/>

      <h3>
        Why is this happening?
      </h3>
      <p>
        This error is happening because we're trying to render a tweet that doesn't have a <code>user</code> property
        yet. The code throwing the error is the <code>connect</code> decorator in the <code>Tweet</code>, shown
        below:
      </p>

      <Markdown type="jsx" text={`
      export default connect(function(getState, props) {
        const tweet = props.tweet;

        return {
          user: getState('user.byId', {
            id: tweet.data.user
          })
        };
      })
      `}/>

      <p>
        When we create data, the API will set the <code>user</code> property to the user who created it, and
        the <code>createdAt</code> date to the timestamp of when the tweet was saved to the database.
      </p>
      <p>
        But currently, we're rendering this data <em>before those fields are assigned</em>, which
        means <code>tweet.data.user</code> is <code>undefined</code>.
      </p>

      <h3>
        How do we solve this?
      </h3>
      <p>
        There are three ways we can solve this:
      </p>
      <ol>
        <li>
          We could add logic to the <code>Tweet</code> component so that it behaves differently when
          no <code>user</code> field exists, like showing a generic avatar photo.
        </li>
        <li>
          We could create a new component called <code>OptimisticTweet</code>, specifically designed
          for rendering partial data, and show that instead of <code>Tweet</code> when appropriate.
        </li>
        <li>
          Since we know what values the API will assign to the missing properties, we can simply add them, and
          make it so that even optimistic tweets can be fully rendered.
        </li>
      </ol>
      <p>
        We're going to go with the third option, and add the missing fields ourselves.
      </p>

      <h3>
        Add Optimistic Values
      </h3>
      <p>
        Open the <code>CreateButton</code> component, import the user from context, and update
        the <code>onClick()</code> callback to look like this:
      </p>

      <Markdown type="jsx" text={`
        // src/components/CreateButton.js
        import _ from 'lodash';
        ...
        export default createReactClass({
          displayName: 'CreateButton',

          contextTypes: {
            user: PropTypes.object.isRequired
          },

          onClick() {
            const { user } = this.context;

            lore.dialog.show(function() {
              return lore.dialogs.tweet.create({
                blueprint: 'optimistic',
                request: function(data) {
                  return lore.actions.tweet.create(_.defaults({
                    user: user.id,
                    createdAt: new Date().toISOString()
                  }, data)).payload;
                }
              });
            });
          },

          ...

        });
      `}/>

      <p>
        Since we know the tweet is being created by the current user, the first thing we do is get
        the <code>user</code> from context. Then, instead of passing <code>data</code> directly to
        the <code>create</code> action, we're setting the <code>user</code> and <code>createdAt</code> properties
        to what we know they'll be after the API request returns.
      </p>
      <blockquote>
        <p>
          To be clear, we're not actually assigning values to these fields, in the sense of telling the API what
          they should be.
        </p>
        <p>
          While these fields <em>will</em> be included the body of the PUT request, the API will ignore them,
          and set <code>user</code> based on the API token, and <code>createdAt</code> based on the timestamp of
          when the tweet was saved to the database.
        </p>
        <p>
          All we're doing is here providing values that will allow the tweet to be rendered correctly in the interim,
          between the time when the request is sent, and when it comes back from the server with official values.
        </p>
      </blockquote>

      <h3>
        Try it Out
      </h3>
      <p>
        If you now refresh the browser, and create a tweet, you'll notice the application not only works again,
        but that the Tweet immediately appears in the Feed.
      </p>

      <h3>
        Visual Check-in
      </h3>

      <p>
        If everything went well, your application should now look like this (exactly the same).
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

      <Markdown type="jsx" text={`
      import React from 'react';
      import createReactClass from 'create-react-class';
      import PropTypes from 'prop-types';
      import _ from 'lodash';

      export default createReactClass({
        displayName: 'CreateButton',

        contextTypes: {
          user: PropTypes.object.isRequired
        },

        onClick() {
          const { user } = this.context;

          lore.dialog.show(function() {
            return lore.dialogs.tweet.create({
              blueprint: 'optimistic',
              request: function(data) {
                return lore.actions.tweet.create(_.defaults({
                  user: user.id,
                  createdAt: new Date().toISOString()
                }, data)).payload;
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

      <h2>
        Next Steps
      </h2>

      <p>
        In the next section we'll add a <Link to="/quickstart/optimistic/step-5/">visual cue when tweets are being created, updated
        or deleted</Link>.
      </p>
    </Template>
  )
};
