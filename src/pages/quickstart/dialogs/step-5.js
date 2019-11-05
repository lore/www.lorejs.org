import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Code from '../../../components/Code';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/dialogs/step-6.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 5: Add Edit Dialog
      </h1>

      <p>
        In this step we're going to add an "edit" link to tweets that, when clicked, will launch a dialog to edit
        the text.
      </p>

      <QuickstartBranch branch="dialogs.5" />

      <h3>
        The Update Action
      </h3>
      <p>
        The dialog we'll create in this step will allow us to edit a tweet, and we'll be invoking
        the <code>update</code> action when it's time to send our changes to the API. Assuming you have
        a <code>tweet</code> you want to change, you invoke the action like this:
      </p>
      <Code type="jsx" text={`
      actions.tweet.update(tweet, {
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
        Create Update Dialog
      </h3>
      <p>
        Create a new dialog in <code>src/dialogs</code> called <code>UpdateTweetDialog</code> and replace the code
        with this:
      </p>
      <Code type="jsx" text={`
      // src/dialogs/UpdateTweetDialog.js
      import React, { useState } from 'react';
      import PropTypes from 'prop-types';
      import _ from 'lodash';
      import { useActions } from '@lore/actions';
      
      UpdateTweetDialog.propTypes = {
        tweet: PropTypes.object.isRequired
      };
      
      export default function UpdateTweetDialog(props) {
        const { dismiss, tweet } = props;
      
        const [data, setData] = useState({
          text: tweet.data.text
        });
      
        const actions = useActions();
      
        function request(data) {
          actions.tweet.update(tweet, data);
        }
      
        function onSubmit() {
          request(data);
          dismiss();
        }
      
        function onChange(name, value) {
          const nextData = _.cloneDeep(data);
          nextData[name] = value;
          setData(nextData);
        }
      
        return (
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" onClick={dismiss}>
                  <span>&times;</span>
                </button>
                <h4 className="modal-title">
                  Update Tweet
                </h4>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Message</label>
                      <textarea
                        className="form-control"
                        rows="3"
                        value={data.text}
                        placeholder="What's happening?"
                        onChange={(event) => {
                          onChange('text', event.target.value)
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="row">
                  <div className="col-md-12">
                    <button
                      type="button"
                      className="btn btn-default"
                      onClick={dismiss}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      disabled={!data.text}
                      onClick={onSubmit}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
      `}/>
      <p>
        Now we have a dialog we can use to edit the text in a tweet, so let's create a way to use it.
      </p>

      <h3>
        Create Edit Link
      </h3>
      <p>
        Run this command to create a component for our edit link:
      </p>

      <Code type="sh" text={`
      lore generate component EditLink
      `}/>

      <p>
        Then update the component to look like this:
      </p>

      <Code type="jsx" text={`
      import React from 'react';
      import PropTypes from 'prop-types';
      import { useDialog } from '@lore/dialogs';
      import UpdateTweetDialog from '../dialogs/UpdateTweetDialog';
      
      EditLink.propTypes = {
        tweet: PropTypes.object.isRequired
      };
      
      export default function EditLink(props) {
        const { tweet } = props;
      
        const show = useDialog();
      
        function onClick() {
          show(
            <UpdateTweetDialog tweet={tweet} />
          );
        }
      
        return (
          <a className="link" onClick={onClick}>
            edit
          </a>
        );
      }
      `}/>

      <p>
        In the code above, we're rendering a link that will show the <code>UpdateTweetDialog</code> when clicked.
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
        the code to look like this:
      </p>

      <Code text={`
      // src/components/Tweet.js
      ...
      import EditLink from './EditLink';
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
      ...
      `}/>

      <h3>
        Try it Out
      </h3>
      <p>
        With this change in place, refresh the browser and you should see an <em>"edit"</em> link on each of the
        tweets.
      </p>
      <p>
        If you click one of the links, a dialog will appear allowing you to change the text. Once you submit
        the form, if you look at the network requests, you'll see a PUT request is sent to the API to update the
        tweet.
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

      <Code type="jsx" text={`
      import React from 'react';
      import PropTypes from 'prop-types';
      import { useDialog } from '@lore/dialogs';
      import UpdateTweetDialog from '../dialogs/UpdateTweetDialog';
      
      EditLink.propTypes = {
        tweet: PropTypes.object.isRequired
      };
      
      export default function EditLink(props) {
        const { tweet } = props;
      
        const show = useDialog();
      
        function onClick() {
          show(
            <UpdateTweetDialog tweet={tweet} />
          );
        }
      
        return (
          <a className="link" onClick={onClick}>
            edit
          </a>
        );
      }
      `}/>

      <h3>
        src/components/Tweet.js
      </h3>
      <Code type="jsx" text={`
      import React from 'react';
      import PropTypes from 'prop-types';
      import moment from 'moment';
      import { useConnect } from '@lore/connect';
      import EditLink from './EditLink';
      
      Tweet.propTypes = {
        tweet: PropTypes.object.isRequired
      };
      
      export default function Tweet(props) {
        const { tweet } = props;
        const timestamp = moment(tweet.data.createdAt).fromNow().split(' ago')[0];
      
        const user = useConnect('user.byId', {
          id: tweet.data.user
        });
      
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
      `}/>

      <h3>
        src/dialogs/UpdateTweetDialog.js
      </h3>
      <Code text={`
      import React, { useState } from 'react';
      import PropTypes from 'prop-types';
      import _ from 'lodash';
      import { useActions } from '@lore/actions';
      
      UpdateTweetDialog.propTypes = {
        tweet: PropTypes.object.isRequired
      };
      
      export default function UpdateTweetDialog(props) {
        const { dismiss, tweet } = props;
      
        const [data, setData] = useState({
          text: tweet.data.text
        });
      
        const actions = useActions();
      
        function request(data) {
          actions.tweet.update(tweet, data);
        }
      
        function onSubmit() {
          request(data);
          dismiss();
        }
      
        function onChange(name, value) {
          const nextData = _.cloneDeep(data);
          nextData[name] = value;
          setData(nextData);
        }
      
        return (
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" onClick={dismiss}>
                  <span>&times;</span>
                </button>
                <h4 className="modal-title">
                  Update Tweet
                </h4>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Message</label>
                      <textarea
                        className="form-control"
                        rows="3"
                        value={data.text}
                        placeholder="What's happening?"
                        onChange={(event) => {
                          onChange('text', event.target.value)
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="row">
                  <div className="col-md-12">
                    <button
                      type="button"
                      className="btn btn-default"
                      onClick={dismiss}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      disabled={!data.text}
                      onClick={onSubmit}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
      `}/>

      <h2>
        Next Steps
      </h2>

      <p>
        Next we're going to <Link to="/quickstart/dialogs/step-6/">create a way to delete tweets</Link>.
      </p>

    </Template>
  )
};
