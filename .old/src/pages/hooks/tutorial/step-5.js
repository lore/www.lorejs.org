import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/HookTutorial';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 5: Integrate Hook
      </h1>

      <p>
        In this step we're going to integrate the hook into our application.
      </p>

      <blockquote>
        <p>
          You can view the finished code for this step by checking out the <code>step-5</code> branch.
        </p>
      </blockquote>

      <h3>
        Invoke the Hook
      </h3>
      <p>
        With our hook finished, we can now use it in our application. To do that, open up the <code>Feed</code> component and add a
        <code>componentDidMount</code> method that invokes the hook like this:
      </p>

      <Markdown text={`
      componentDidMount() {
        const { tweets } = this.props;
        lore.polling.tweet.find(tweets.query.where);
      }
      `}/>

      <p>
        That's it! This method will now get invoked when the <code>Feed</code> component mounts, and will refetch the list of tweets
        every 2 seconds.
      </p>


      <h3>
        Check In
      </h3>
      <p>
        With our hook now integrated, open up two browser tabs so we can see this the hook in action. As you create and edit
        tweets, you'll notice the data syncs across the browsers as they update their stores with the data from the server.
      </p>

      <h2>
        Code Changes
      </h2>

      <p>
        Below is a list of files modified during this step.
      </p>

      <h3>
        src/components/Feed.js
      </h3>

      <Markdown text={`
      import React from 'react';
      import createReactClass from 'create-react-class';
      import PropTypes from 'prop-types';
      import { connect } from 'lore-hook-connect';
      import moment from 'moment';
      import PayloadStates from '../constants/PayloadStates';
      import Tweet from './Tweet';

      export default connect(function(getState, props) {
        return {
          tweets: getState('tweet.findAll', {
            sortBy: function(model) {
              return -moment(model.data.createdAt).unix();
            },
            exclude: function(tweet) {
              return tweet.state === PayloadStates.DELETED;
            }
          })
        };
      })(
      createReactClass({
        displayName: 'Feed',

        propTypes: {
          tweets: PropTypes.object.isRequired
        },

        componentDidMount() {
          const { tweets } = this.props;
          lore.polling.tweet.find(tweets.query.where);
        },

        renderTweet(tweet) {
          return (
            <Tweet key={tweet.id || tweet.cid} tweet={tweet} />
          );
        },

        render() {
          const { tweets } = this.props;

          if (tweets.state === PayloadStates.FETCHING) {
            return (
              <div className="feed">
                <h2 className="title">
                  Feed
                </h2>
                <div className="loader"/>
              </div>
            );
          }

          return (
            <div className="feed">
              <h2 className="title">
                Feed
              </h2>
              <ul className="media-list tweets">
                {tweets.data.map(this.renderTweet)}
              </ul>
            </div>
          );
        }

      })
      );
      `}/>


      <h2>
        Next Steps
      </h2>
      <p>
        In the next step we're going to <Link to="../step-6/">talk about publishing your hook</Link>.
      </p>
    </Template>
  )
};
