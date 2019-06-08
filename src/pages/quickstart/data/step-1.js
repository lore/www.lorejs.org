import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/data/step-1.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 1: Add Mock Data to Feed
      </h1>

      <p>
        In this step we'll be adding some mock data to our feed.
      </p>

      <blockquote>
        <p>
          The practice of using fake data to populate components while you're building out your application can
          be quite helpful for supporting rapid development. Sometimes, it will also be necessary, as the API to
          support your application may not exist when you start building it.
        </p>
      </blockquote>

      <QuickstartBranch branch="data.1" />

      <h3>
        Declare Tweets as a Prop
      </h3>
      <p>
        First, open your <code>Feed</code> component and declare that it is going to require
        a <code>prop</code> called <code>tweets</code>:
      </p>

      <Markdown type="jsx" text={`
      // src/components/Feed.js
      export default createReactClass({
        displayName: 'Feed',

        propTypes: {
          tweets: PropTypes.object.isRequired
        },
        ...
      })
      `}/>

      <h3>
        Create Mock Tweets
      </h3>
      <p>
        Next, add a <code>getDefaultProps()</code> method to your <code>Feed</code> component and use it to
        populate <code>tweets</code> with mock data:
      </p>

      <Markdown type="jsx" text={`
      // src/components/Feed.js
      const Feed = createReactClass({
        ...
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
        ...
      })
      `}/>

      <blockquote>
        <p>
          <code>getDefaultProps()</code> is a great method to use for mock data, since it will only populate
          the <code>tweets</code> prop if no data is passed in. So if you use this method for your mock data, it
          will automatically be replaced with real data once it's provided, which is pretty convenient.
        </p>
      </blockquote>

      <p>
        In the function above, we're declaring a single tweet, with the text <em>"Nothing can beat science!"</em> and
        adding it to an array of tweets. In both cases the state has been set to <code>RESOLVED</code> to indicate
        that nothing is happening to the data.
      </p>

      <blockquote>
        <p>
          When adding mock data to real applications, it's not necessary to include all these fields - only the
          ones the component will actually need. For this example, the following data set is perfectly sufficient,
          and has been collapsed into a single data structure:
        </p>
      <Markdown text={`
      // src/components/Feed.js
      ...
        getDefaultProps() {
          return {
            tweets: {
              data: [
                {
                  id: 1,
                  data: {
                    userId: 1,
                    text: 'Nothing can beat science!',
                    createdAt: '2018-04-24T05:10:49.382Z'
                  }
                }
              ]
            }
          };
        },
      ...
      `}/>
      </blockquote>

      <h3>
        Render the Tweets
      </h3>
      <p>
        Now that we have some mock data created, let's display it on screen. First, add
        a <code>renderTweet()</code> method to your <code>Feed</code> that looks like this:
      </p>

      <Markdown type="jsx" text={`
      // src/components/Feed.js
      ...
        renderTweet(tweet) {
          return (
            <li key={tweet.id}>
              {tweet.data.text}
            </li>
          );
        },
      ...
      `}/>

      <p>
        Then update the <code>render()</code> method so that it iterates through each of the <code>tweets</code> and
        renders them using the <code>renderTweet()</code> method:
      </p>

      <Markdown type="jsx" text={`
      // src/components/Feed.js
      ...
        render() {
          const { tweets } = this.props;

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
        With this code in place, you should now see the text of your mock tweet displayed to the screen.
      </p>

      <blockquote>
        <p>
          As a reminder, anytime you render a list of items in React, you need to add a <code>key</code> property
          that contains a unique id that no other item in that list will share. In this example, we're using
          the <code>id</code> of our tweet, which is a perfect solution for many situations.
        </p>
        <p>
          The only time you won't be able to use the <code>id</code> as the <code>key</code> is when you're
          rendering data optimistically, before it's been assigned an <code>id</code> by the server. We'll cover
          that scenario later in the Quickstart.
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
        src/components/Feed.js
      </h3>

      <Markdown type="jsx" text={`
      import React from 'react';
      import createReactClass from 'create-react-class';
      import PropTypes from 'prop-types';

      export default createReactClass({
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
            <li key={tweet.id}>
              {tweet.data.text}
            </li>
          );
        },

        render() {
          const { tweets } = this.props;

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

      });
      `}/>

      <h2>
        Next Steps
      </h2>

      <p>
        Next we're going to <Link to="/quickstart/data/step-2/">create our Tweet component</Link>.
      </p>
    </Template>
  )
};
