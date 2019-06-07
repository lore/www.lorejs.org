import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/optimistic/transition.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 5: Show Optimistic Visual Cues
      </h1>

      <p>
        In this step we'll add an opacity effect to tweets to reflect when they're being created, updated or deleted.
      </p>

      <QuickstartBranch branch="optimistic.5" />

      <h3>
        What's the problem?
      </h3>
      <p>
        While it's great that we can now show tweets in the Feed immediately, there's currently no visual cue to
        distinguish between an optimistic tweet and a real tweet, and we're also exposing functionality like the
        "edit" and "delete" actions that can't be performed until the tweet has a real <cide>id</cide>.
      </p>

      <h3>
        How do we solve this?
      </h3>
      <p>
        To improve the experience, we're going to visually fade the tweet when it's being created, updated or
        deleted, and we're not going to show the <code>edit</code> or <code>delete</code> links until we have
        confirmation that the tweet actually exists.
      </p>

      <h3>
        Add Visual Cue for Optimistic Changes
      </h3>
      <p>
        Update the <code>render()</code> method of the <code>Tweet</code> component to look like this:
      </p>

      <Markdown text={`
      // src/components/Tweet.js
      import PayloadStates from '../constants/PayloadStates';
      ...
      render() {
        const { tweet, user } = this.props;
        const timestamp = moment(tweet.data.createdAt).fromNow().split(' ago')[0];
        const isOptimistic = (
          tweet.state === PayloadStates.CREATING ||
          tweet.state === PayloadStates.UPDATING ||
          tweet.state === PayloadStates.DELETING
        );

        return (
          <li className={"list-group-item tweet" + (isOptimistic ? " transition" : "")}>
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
              <IsOwner tweet={tweet}>
                <div className="tweet-actions">
                  <EditLink tweet={tweet} />
                  <DeleteLink tweet={tweet} />
                </div>
              </IsOwner>
            </div>
          </li>
        );
      }
      `}/>
      <p>
        In the code above, we're examining the <code>state</code> of the tweet, and if it's in the process of being
        created, updated, or deleted, then we're going to apply the <code>transition</code> class, which will fade
        the tweet and the hide the actions.
      </p>

      <h3>
        Visual Check-in
      </h3>

      <p>
        If everything went well, your application should now look like this when tweets are being created, updated,
        or deleted:
      </p>

      <img className="drop-shadow" src={image} />

      <h2>
        Code Changes
      </h2>

      <p>
        Below is a list of files modified during this step.
      </p>

      <h3>
        src/components/Tweet.js
      </h3>

      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        import React from 'react';
        import createReactClass from 'create-react-class';
        import PropTypes from 'prop-types';
        import moment from 'moment';
        import { connect } from 'lore-hook-connect';
        import PayloadStates from '../constants/PayloadStates';
        import EditLink from './EditLink';
        import DeleteLink from './DeleteLink';
        import IsOwner from './IsOwner';

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
            const isOptimistic = (
              tweet.state === PayloadStates.CREATING ||
              tweet.state === PayloadStates.UPDATING ||
              tweet.state === PayloadStates.DELETING
            );

            return (
              <li className={"list-group-item tweet" + (isOptimistic ? " transition" : "")}>
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
                  <IsOwner tweet={tweet}>
                    <div className="tweet-actions">
                      <EditLink tweet={tweet} />
                      <DeleteLink tweet={tweet} />
                    </div>
                  </IsOwner>
                </div>
              </li>
            );
          }

        })
        );
        `}/>
        <CodeTab syntax="ES6" text={`
        import React from 'react';
        import PropTypes from 'prop-types';
        import moment from 'moment';
        import { connect } from 'lore-hook-connect';
        import PayloadStates from '../constants/PayloadStates';
        import EditLink from './EditLink';
        import DeleteLink from './DeleteLink';
        import IsOwner from './IsOwner';

        class Tweet extends React.Component {

          render() {
            const { tweet, user } = this.props;
            const timestamp = moment(tweet.data.createdAt).fromNow().split(' ago')[0];
            const isOptimistic = (
              tweet.state === PayloadStates.CREATING ||
              tweet.state === PayloadStates.UPDATING ||
              tweet.state === PayloadStates.DELETING
            );

            return (
              <li className={"list-group-item tweet" + (isOptimistic ? " transition" : "")}>
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
                  <IsOwner tweet={tweet}>
                    <div className="tweet-actions">
                      <EditLink tweet={tweet} />
                      <DeleteLink tweet={tweet} />
                    </div>
                  </IsOwner>
                </div>
              </li>
            );
          }

        }

        Tweet.propTypes = {
          tweet: PropTypes.object.isRequired,
          user: PropTypes.object.isRequired
        };

        export default connect(function(getState, props) {
          const tweet = props.tweet;

          return {
            user: getState('user.byId', {
              id: tweet.data.user
            })
          };
        })(Tweet);
        `}/>
        <CodeTab syntax="ESNext" text={`
        import React from 'react';
        import PropTypes from 'prop-types';
        import moment from 'moment';
        import { connect } from 'lore-hook-connect';
        import PayloadStates from '../constants/PayloadStates';
        import EditLink from './EditLink';
        import DeleteLink from './DeleteLink';
        import IsOwner from './IsOwner';

        @connect(function(getState, props) {
          const tweet = props.tweet;

          return {
            user: getState('user.byId', {
              id: tweet.data.user
            })
          };
        })
        class Tweet extends React.Component {

          static propTypes = {
            tweet: PropTypes.object.isRequired,
            user: PropTypes.object.isRequired
          };

          render() {
            const { tweet, user } = this.props;
            const timestamp = moment(tweet.data.createdAt).fromNow().split(' ago')[0];
            const isOptimistic = (
              tweet.state === PayloadStates.CREATING ||
              tweet.state === PayloadStates.UPDATING ||
              tweet.state === PayloadStates.DELETING
            );

            return (
              <li className={"list-group-item tweet" + (isOptimistic ? " transition" : "")}>
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
                  <IsOwner tweet={tweet}>
                    <div className="tweet-actions">
                      <EditLink tweet={tweet} />
                      <DeleteLink tweet={tweet} />
                    </div>
                  </IsOwner>
                </div>
              </li>
            );
          }

        }

        export default Tweet;
        `}/>
      </CodeTabs>

      <h2>
        Next Steps
      </h2>

      <p>
        In the next section we'll <Link to="/quickstart/optimistic/step-6/">hide tweets that have been deleted</Link>.
      </p>
    </Template>
  )
};
