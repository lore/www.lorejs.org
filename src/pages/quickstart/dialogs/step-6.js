import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/dialogs/step-6.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 6: Add Edit Dialog
      </h1>

      <p>
        In this step we're going to add an "edit" link to tweets that, when clicked, will launch a dialog to edit
        the text.
      </p>

      <QuickstartBranch branch="dialogs.6" />

      <h3>
        The Update Action
      </h3>
      <p>
        The dialog we'll create in this step will allow us to edit a tweet, and we'll be invoking
        the <code>update</code> action when it's time to send our changes to the API. Assuming you have
        a <code>tweet</code> you want to change, you invoke the action like this:
      </p>
      <Markdown type="jsx" text={`
      lore.actions.tweet.update(tweet, {
        text: 'Different text'
      })
      `}/>
      <p>
        The first argument is the <code>tweet</code> you want to update, and the second argument is the set of
        attributes you want to change. In this example, we're changing the <code>text</code> of the tweet from
        whatever it current is to <em>"Different text"</em>.
      </p>
      <p>
        If we assume the <code>id</code> of this tweet is <code>1</code>, then invoking this action will send
        a <code>PUT</code> request to <code>http://localhost:1337/tweets/1</code> and include our new properties in
        the body of the request.
      </p>
      <blockquote>
        <p>
          You can learn more about the <code>update</code> action <Link to="/actions/update/">here</Link>.
        </p>
      </blockquote>

      <h3>
        Create Edit Link
      </h3>
      <p>
        Run this command to create a component for our edit link:
      </p>

      <Markdown type="sh" text={`
      lore generate component EditLink
      `}/>

      <p>
        Then update the component to look like this:
      </p>

      <Markdown type="jsx" text={`
      import React from 'react';
      import createReactClass from 'create-react-class';
      import PropTypes from 'prop-types';

      export default createReactClass({
        displayName: 'EditLink',

        propTypes: {
          tweet: PropTypes.object.isRequired
        },

        onClick() {
          const { tweet } = this.props;

          lore.dialog.show(function() {
            return lore.dialogs.tweet.update(tweet, {
              blueprint: 'optimistic',
              request: function(data) {
                return lore.actions.tweet.update(tweet, data).payload;
              }
            });
          });
        },

        render() {
          return (
            <a className="link" onClick={this.onClick}>
              edit
            </a>
          );
        }

      });
      `}/>

      <p>
        In the code above, we're rendering a link with an <code>onClick</code> callback. When clicked, we'll
        show the dialog, and then invoke the <code>update</code> action when the data is submitted.
      </p>
      <p>
        Unlike the create dialog, the update dialog requires you to provide the <code>tweet</code> you want to update
        as the first argument. This is required in order to populate the dialog with the current data.
      </p>

      <h3>
        Add an Edit Link to the Tweet
      </h3>
      <p>
        Next we want to add the edit link to each tweet. Open the <code>Tweet</code> component and update
        the <code>render()</code> method to look like this:
      </p>

      <Markdown text={`
      // src/components/Tweet.js
      ...
      import EditLink from './EditLink';

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
                </div>
              </div>
            </li>
          );
        }
      ...
      `}/>

      <p>
        With this change in place, refresh the browser and you should see an <em>"edit"</em> link on each of the
        tweets.
      </p>

      <h3>
        Describe the Update Fields
      </h3>
      <p>
        If you click the "edit" link, you'll notice the dialog that opens says "No fields have been provided".
        Similar to the create dialog, we need to describe the fields that should be displayed.
      </p>
      <p>
        To fix this, open the <code>tweet</code> model and update the code to look like this:
      </p>

      <Markdown text={`
      // src/models/tweet.js
      const fields = {
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
      };

      export default {
        dialogs: {
          create: fields,
          update: fields
        }
      }
      `}/>

      <p>
        In the code above, we're extracting the "create" fields into a variable called <code>fields</code> that we
        can reuse, and then using it to describe the "update" fields as well.
      </p>

      <h3>
        Try it Out
      </h3>
      <p>
        With this change in place, refresh the browser and click one of the <em>"edit"</em> links.
      </p>
      <p>
        A dialog will appear allowing you to change the text. Once you submit the form, if you look at the network
        requests, you'll see a PUT request is sent to the API to update the tweet.
      </p>

      <blockquote>
        <p>
          The <code>state</code> of the tweet is also changed to <code>UPDATING</code>, so if this were a real
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
        src/components/EditLink.js
      </h3>

      <Markdown type="jsx" text={`
      import React from 'react';
      import createReactClass from 'create-react-class';
      import PropTypes from 'prop-types';

      export default createReactClass({
        displayName: 'EditLink',

        propTypes: {
          tweet: PropTypes.object.isRequired
        },

        onClick() {
          const { tweet } = this.props;

          lore.dialog.show(function() {
            return lore.dialogs.tweet.update(tweet, {
              blueprint: 'optimistic',
              request: function(data) {
                return lore.actions.tweet.update(tweet, data).payload;
              }
            });
          });
        },

        render() {
          return (
            <a className="link" onClick={this.onClick}>
              edit
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
                </div>
              </div>
            </li>
          );
        }

      })
      );
      `}/>

      <h3>
        src/models/tweet.js
      </h3>
      <Markdown text={`
      const fields = {
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
      };

      export default {
        dialogs: {
          create: fields,
          update: fields
        }
      }
      `}/>

      <h2>
        Next Steps
      </h2>

      <p>
        Next we're going to <Link to="/quickstart/dialogs/step-7/">create a way to delete tweets</Link>.
      </p>

    </Template>
  )
};
