import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/dialogs/step-7.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 7: Add Delete Link
      </h1>

      <p>
        In this step we're going to add a "delete" link to tweets that, when clicked, will launch a dialog to delete
        the tweet.
      </p>

      <QuickstartBranch branch="dialogs.7" />

      <h3>
        The Destroy Action
      </h3>
      <p>
        The dialog we'll create in this step will allow us to delete a tweet, and we'll be invoking
        the <code>destroy</code> action to do that. Assuming you have a <code>tweet</code> you want to delete,
        you invoke the action like this:
      </p>
      <Markdown type="jsx" text={`
      lore.actions.tweet.destroy(tweet)
      `}/>
      <p>
        The argument is the <code>tweet</code> you want to destroy.
      </p>
      <p>
        If we assume the <code>id</code> of this tweet is <code>1</code>, then invoking this action will send a
        DELETE request to <code>http://localhost:1337/tweets/1</code>.
      </p>
      <blockquote>
        <p>
          You can learn more about the <code>destroy</code> action <Link to="/actions/destroy/">here</Link>.
        </p>
      </blockquote>

      <h3>
        Create Delete Link
      </h3>
      <p>
        Run this command to create a component for our delete link:
      </p>

      <Markdown type="sh" text={`
      lore generate component DeleteLink
      `}/>

      <p>
        Then update the component to look like this:
      </p>

      <Markdown type="jsx" text={`
      import React from 'react';
      import createReactClass from 'create-react-class';
      import PropTypes from 'prop-types';

      export default createReactClass({
        displayName: 'DeleteLink',

        propTypes: {
          tweet: PropTypes.object.isRequired
        },

        onClick() {
          const { tweet } = this.props;

          lore.dialog.show(function() {
            return lore.dialogs.tweet.destroy(tweet, {
              blueprint: 'optimistic',
              request: function(data) {
                return lore.actions.tweet.destroy(tweet).payload;
              }
            });
          });
        },

        render() {
          return (
            <a className="link" onClick={this.onClick}>
              delete
            </a>
          );
        }

      });
      `}/>

      <p>
        In the code above, we're rendering a link with an <code>onClick</code> callback. When clicked, we'll
        show a confirmation dialog, and then invoke the <code>destroy</code> action when the request is confirmed.
      </p>

      <h3>
        Add a Delete Link to the Tweet
      </h3>
      <p>
        Next we want to add the delete link to each tweet. Open the <code>Tweet</code> component and update
        the <code>render()</code> method to look like this:
      </p>
      <Markdown text={`
      // src/components/Tweet.js
      ...
      import DeleteLink from './DeleteLink';
      ...
        render() {
          ...
          return (
            <li className="list-group-item tweet">
              <div className="image-container">
                <img
                  className="img-circle avatar"
                  src={user.data.avatar} />
              </div>
              <div className="content-container">
                <h4 className="list-group-item-heading title">
                  {user.data.nickname}
                </h4>
                <h4 className="list-group-item-heading timestamp">
                  {'- ' + timestamp}
                </h4>
                <p className="list-group-item-text text">
                  {tweet.data.text}
                </p>
                <div className="tweet-actions">
                  <EditLink tweet={tweet} />
                  <DeleteLink tweet={tweet} />
                </div>
              </div>
            </li>
          );
        }
      ...
      `}/>

      <p>
        With this change in place, refresh the browser and you should see a <em>"delete"</em> link on each of the
        tweets.
      </p>
      <p>
        If you click this link, you'll be asked to confirm that you want to delete the tweet. Once you confirm, if
        you look at the network requests, you'll see a DELETE request is sent to the API to delete the tweet.
      </p>

      <blockquote>
        <p>
          The <code>state</code> of the tweet is also changed to <code>DELETING</code>, so if this were a real
          application, we could add an if statement to detect when data was being changed and modify our UI to
          communicate that to the user.
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
        src/components/DeleteLink.js
      </h3>

      <Markdown type="jsx" text={`
      import React from 'react';
      import createReactClass from 'create-react-class';
      import PropTypes from 'prop-types';

      export default createReactClass({
        displayName: 'DeleteLink',

        propTypes: {
          tweet: PropTypes.object.isRequired
        },

        onClick() {
          const { tweet } = this.props;

          lore.dialog.show(function() {
            return lore.dialogs.tweet.destroy(tweet, {
              blueprint: 'optimistic',
              request: function(data) {
                return lore.actions.tweet.destroy(tweet).payload;
              }
            });
          });
        },

        render() {
          return (
            <a className="link" onClick={this.onClick}>
              delete
            </a>
          );
        }

      });
      `}/>

      <h3>
        src/components/Tweet.js
      </h3>

      <Markdown type="jsx" text={`
      import React from 'react';
      import createReactClass from 'create-react-class';
      import PropTypes from 'prop-types';
      import moment from 'moment';
      import { connect } from 'lore-hook-connect';
      import EditLink from './EditLink';
      import DeleteLink from './DeleteLink';

      export default connect(function(getState, props) {
        const { tweet } = props;

        return {
          user: getState('user.byId', {
            id: tweet.data.user
          })
        };
      })(
      createReactClass({
        displayName: 'Tweet',

        propTypes: {
          tweet: PropTypes.object.isRequired,
          user: PropTypes.object.isRequired
        },

        render() {
          const { tweet, user } = this.props;
          const timestamp = moment(tweet.data.createdAt).fromNow().split(' ago')[0];

          return (
            <li className="list-group-item tweet">
              <div className="image-container">
                <img
                  className="img-circle avatar"
                  src={user.data.avatar} />
              </div>
              <div className="content-container">
                <h4 className="list-group-item-heading title">
                  {user.data.nickname}
                </h4>
                <h4 className="list-group-item-heading timestamp">
                  {'- ' + timestamp}
                </h4>
                <p className="list-group-item-text text">
                  {tweet.data.text}
                </p>
                <div className="tweet-actions">
                  <EditLink tweet={tweet} />
                  <DeleteLink tweet={tweet} />
                </div>
              </div>
            </li>
          );
        }

      })
      );
      `}/>

      <h2>
        Next Steps
      </h2>
      <p>
        In the next section we'll be <Link to="/quickstart/authorization/overview/">hiding the edit and delete
        links</Link> to reflect the application's user permissions.
      </p>
    </Template>
  )
};
