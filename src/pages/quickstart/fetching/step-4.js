import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/fetching/step-4.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 4: Display Loading Experience
      </h1>

      <p>
        In this step we're going to learn how to use the <code>state</code> property in the data structure, and
        display a loading experience while the list of tweets are being fetched.
      </p>

      <QuickstartBranch branch="fetching.4" />

      <h3>
        The Problem
      </h3>
      <p>
        While it may happen too quickly to notice, there is a period of time before the list of tweets is displayed
        when the page simply says "Feed" with nothing underneath.
      </p>
      <p>
        This happens because the application doesn't fetch the tweets until the first time
        the <code>Feed</code> component is rendered, and during that render cycle, the component doesn't have any
        data to render.
      </p>
      <p>
        Showing a blank view is a bad user experience, so let's update our <code>Feed</code> component to display a
        "loader" while the tweets are being fetched.
      </p>

      <h3>
        The State Property
      </h3>
      <p>
        When Lore performs any actions on data (such as fetching, creating, updating or deleting it)
        the <code>state</code> property of that data is updated to reflect the action being performed.
      </p>
      <p>
        For example, the first time our <code>Feed</code> component is rendered, it requests a collection of
        tweets using <code>getState('tweet.find')</code>. Since this data doesn't exist in the local store yet,
        the framework will invoke an action to fetch it.
      </p>
      <p>
        What gets provided to the <code>Feed</code> component at that point is a <code>tweets</code> prop that looks
        like this:
      </p>

      <Markdown type="jsx" text={`
      {
        state: 'FETCHING',
        data: [],
        query: {}
      }
      `}/>

      <p>
        Here the <code>state</code> property of the data has been set to <code>FETCHING</code> in order to notify
        you that the data is being fetched. Once the data returns, the <code>state</code> property will have a value
        of <code>RESOLVED</code> to let you know that the data has been fetched. And if an error occurs while
        fetching the data, the <code>state</code> property would be updated to <code>ERROR_FETCHING</code>.
      </p>
      <p>
        To make it easier to refer to these states, there's a file located
        at <code>src/constants/PayloadStates.js</code> that contains all the states Lore might assign to data. If you
        open it, there will a commented out section that shows the default states used by the framework, which are
        these:
      </p>
      <Markdown text={`
      export default {
        INITIAL_STATE: 'INITIAL_STATE',

        RESOLVED   : 'RESOLVED',
        NOT_FOUND: 'NOT_FOUND',
        DELETED: 'DELETED',

        CREATING: 'CREATING',
        UPDATING: 'UPDATING',
        DELETING: 'DELETING',
        FETCHING: 'FETCHING',

        ERROR_CREATING: 'ERROR_CREATING',
        ERROR_UPDATING: 'ERROR_UPDATING',
        ERROR_DELETING: 'ERROR_DELETING',
        ERROR_FETCHING: 'ERROR_FETCHING'
      };
      `}/>
      <p>
        Let's use this file to create our loading experience.
      </p>
      <blockquote>
        <p>
          You can learn more about this file <Link to="/anatomy/src/constants/payload-states/">here</Link>.
        </p>
      </blockquote>

      <h3>
        Add the Loading Experience
      </h3>
      <p>
        Open the <code>Feed</code> component and import <code>PayloadStates</code>. Then update
        the <code>render()</code> method to display a loading experience when the tweets are being fetched, like this:
      </p>

      <Markdown type="jsx" text={`
      // src/components/Feed.js
      ...
      import PayloadStates from '../constants/PayloadStates';
      ...

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

      ...
      `}/>
      <p>
        Here we've added a check if the <code>tweet.state</code> property is equal
        to <code>PayloadStates.FETCHING</code>, and if it is, then we're rendering our loading experience.
      </p>

      <p>
        Refresh the browser and you <em>might</em> see an animated "loader" flash on the screen right before the
        tweets are rendered. But if you can't see it (and you probably can't) don't worry; later we'll connect to a
        real API server that has an artificial delay, and you'll <em>definitely</em> see it then.
      </p>

      <h3>
        Visual Check-in
      </h3>
      <p>
        If everything went well, your application should now look like this when the Feed is loading:
      </p>

      <img className="drop-shadow" src={image} />

      <h2>
        Code Changes
      </h2>

      <p>
        Below is a list of files modified during this step.
      </p>

      <h3>
        src/components/Feed.js
      </h3>

      <Markdown type="jsx" text={`
      import React from 'react';
      import createReactClass from 'create-react-class';
      import PropTypes from 'prop-types';
      import { connect } from 'lore-hook-connect';
      import PayloadStates from '../constants/PayloadStates';
      import Tweet from './Tweet';

      export default connect(function(getState, props) {
        return {
          tweets: getState('tweet.find')
        };
      })(
      createReactClass({
        displayName: 'Feed',

        propTypes: {
          tweets: PropTypes.object.isRequired
        },

        getDefaultProps() {
          const tweet = {
            id: 1,
            cid: 'c1',
            state: 'RESOLVED',
            data: {
              id: 1,
              userId: 1,
              text: 'Nothing can beat science!',
              createdAt: '2018-04-24T05:10:49.382Z'
            }
          };

          return {
            tweets: {
              state: 'RESOLVED',
              data: [tweet]
            }
          };
        },

        renderTweet(tweet) {
          return (
            <Tweet key={tweet.id} tweet={tweet} />
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
        Next we're going to <Link to="/quickstart/fetching/step-5/">fetch the user for each tweet</Link>.
      </p>
    </Template>
  )
};
