import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/data/step-2.png';
import image2a from '../../../assets/images/quickstart/data/step-2a.png';
import image2b from '../../../assets/images/quickstart/data/step-2b.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 2: Create Tweet Component
      </h1>

      <p>
        In this step we're going to create a <code>Tweet</code> component and make our tweets look more attractive.
      </p>

      <QuickstartBranch branch="data.2" />

      <h3>
        Create the Tweet Component
      </h3>
      <p>
        First we need to create the <code>Tweet</code> component. Run this command to have the CLI generate it
        for us:
      </p>

      <Markdown type="sh" text={`
      lore generate component Tweet
      `}/>

      <p>
        Then update the code for that component to look like this:
      </p>

      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        import React from 'react';
        import createReactClass from 'create-react-class';
        import PropTypes from 'prop-types';

        export default createReactClass({
          displayName: 'Tweet',

          propTypes: {
            tweet: PropTypes.object.isRequired
          },

          render() {
            const { tweet } = this.props;

            return (
              <li className="list-group-item tweet">
                <div className="image-container">
                  <img
                    className="img-circle avatar"
                    src={'http://ssl.gstatic.com/images/icons/material/product/1x/avatar_circle_blue_120dp.png'} />
                </div>
                <div className="content-container">
                  <h4 className="list-group-item-heading title">
                    Nickname
                  </h4>
                  <h4 className="list-group-item-heading timestamp">
                    {'- Timestamp'}
                  </h4>
                  <p className="list-group-item-text text">
                    {'This is a quote from Chrono Trigger.'}
                  </p>
                </div>
              </li>
            );
          }

        });
        `}/>
        <CodeTab syntax="ES6" text={`
        import React from 'react';
        import PropTypes from 'prop-types';

        class Tweet extends React.Component {

          render() {
            const { tweet } = this.props;

            return (
              <li className="list-group-item tweet">
                <div className="image-container">
                  <img
                    className="img-circle avatar"
                    src={'http://ssl.gstatic.com/images/icons/material/product/1x/avatar_circle_blue_120dp.png'} />
                </div>
                <div className="content-container">
                  <h4 className="list-group-item-heading title">
                    Nickname
                  </h4>
                  <h4 className="list-group-item-heading timestamp">
                    {'- Timestamp'}
                  </h4>
                  <p className="list-group-item-text text">
                    {'This is a quote from Chrono Trigger.'}
                  </p>
                </div>
              </li>
            );
          }

        }

        Tweet.propTypes = {
          tweet: PropTypes.object.isRequired
        };

        export default Tweet;
        `}/>
        <CodeTab syntax="ESNext" text={`
        import React from 'react';
        import PropTypes from 'prop-types';

        class Tweet extends React.Component {

          static propTypes = {
            tweet: PropTypes.object.isRequired
          };

          render() {
            const { tweet } = this.props;

            return (
              <li className="list-group-item tweet">
                <div className="image-container">
                  <img
                    className="img-circle avatar"
                    src={'http://ssl.gstatic.com/images/icons/material/product/1x/avatar_circle_blue_120dp.png'} />
                </div>
                <div className="content-container">
                  <h4 className="list-group-item-heading title">
                    Nickname
                  </h4>
                  <h4 className="list-group-item-heading timestamp">
                    {'- Timestamp'}
                  </h4>
                  <p className="list-group-item-text text">
                    {'This is a quote from Chrono Trigger.'}
                  </p>
                </div>
              </li>
            );
          }

        }

        export default Tweet;
        `}/>
      </CodeTabs>

      <p>
        Here we've added a <code>propType</code> declaring that this component expects to receive a <code>tweet</code>,
        and then we've updated the <code>render()</code> method to display it.
      </p>

      <h3>
        Use Tweet in Feed
      </h3>
      <p>
        With our <code>Tweet</code> component created, let’s use it in our Feed. Open the <code>Feed</code> component
        and update the <code>renderTweet()</code> method to look like this:
      </p>
      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        // src/components/Feed.js
        import Tweet from './Tweet';
        ...
          renderTweet(tweet) {
            return (
              <Tweet key={tweet.id} tweet={tweet} />
            );
          },
        ...
        `}/>
        <CodeTab syntax="ES6" text={`
        // src/components/Feed.js
        import Tweet from './Tweet';
        ...
          renderTweet(tweet) {
            return (
              <Tweet key={tweet.id} tweet={tweet} />
            );
          }
        ...
        `}/>
        <CodeTab syntax="ESNext" text={`
        // src/components/Feed.js
        import Tweet from './Tweet';
        ...
          renderTweet(tweet) {
            return (
              <Tweet key={tweet.id} tweet={tweet} />
            );
          }
        ...
        `}/>
      </CodeTabs>

      <p>
        Refresh the browser and your app should now look like this:
      </p>

      <img className="drop-shadow" src={image2a} />

      <h3>
        Update Tweet to Use Mock Data
      </h3>
      <p>
        While the <code>Tweet</code> component is now showing up in the <code>Feed</code>, it's currently showing
        some hard-coded data instead of the mock data we created previously. Let's change that.
      </p>
      <p>
        Update the <code>render()</code> method of the <code>Tweet</code> component to look like this:
      </p>

      <Markdown type="jsx" text={`
      // src/components/Tweet.js
      ...
          render() {
            const { tweet } = this.props;

            return (
              <li className="list-group-item tweet">
                <div className="image-container">
                  <img
                    className="img-circle avatar"
                    src={'http://ssl.gstatic.com/images/icons/material/product/1x/avatar_circle_blue_120dp.png'} />
                </div>
                <div className="content-container">
                  <h4 className="list-group-item-heading title">
                    Nickname
                  </h4>
                  <h4 className="list-group-item-heading timestamp">
                    {'- ' + tweet.data.createdAt}
                  </h4>
                  <p className="list-group-item-text text">
                    {tweet.data.text}
                  </p>
                </div>
              </li>
            );
          }
        ...
      `}/>

      <p>
        Refresh the browser and you should now see the mock data being displayed in the Tweet:
      </p>

      <img className="drop-shadow" src={image2b} />

      <h3>
        Fix the Timestamp
      </h3>
      <p>
        That's a little better, but what's up with that ugly timestamp of <code>2018-04-24T05:10:49.382Z</code>? That's not what we want;
        we want a clear statement like <code>3 days</code> to show how old the Tweet is. Luckily we can easily fix that using a library
        called <a href="http://momentjs.com/">moment</a>.
      </p>
      <blockquote>
        <p>
          Moment is a date/time library for Javascript, and it's a great tool for converting timestamps to a
          more human-friendly format.
        </p>
      </blockquote>

      <p>
        Install <code>moment</code> with this command:
      </p>

      <Markdown type="sh" text={`
      npm install moment --save
      `}/>

      <blockquote>
        <p>
          After installing <code>moment</code> you may need to stop and restart the webpack development server in
          order for Webpack to see the new package.
        </p>
      </blockquote>

      <p>
        Once <code>moment</code> is installed, import it into your <code>Tweet</code> component and update
        the <code>render()</code> method to look like this:
      </p>

      <Markdown type="jsx" text={`
      // src/components/Tweet.js
      import moment from 'moment';

      ...
        render() {
          const { tweet } = this.props;
          const timestamp = moment(tweet.data.createdAt).fromNow().split(' ago')[0];

          return (
            <li className="list-group-item tweet">
              <div className="image-container">
                <img
                  className="img-circle avatar"
                  src={'http://ssl.gstatic.com/images/icons/material/product/1x/avatar_circle_blue_120dp.png'} />
              </div>
              <div className="content-container">
                <h4 className="list-group-item-heading title">
                  Nickname
                </h4>
                <h4 className="list-group-item-heading timestamp">
                  {'- ' + timestamp}
                </h4>
                <p className="list-group-item-text text">
                  {tweet.data.text}
                </p>
              </div>
            </li>
          );
        }
      ...
      `}/>

      <p>
        Let's break down the statement <code>moment(tweet.data.createdAt).fromNow().split(' ago')[0]</code> to explain
        what's happening.
      </p>
      <p>
        First, we're calling <code>moment(tweet.data.createdAt)</code> to convert the <code>createdAt</code> date into
        a <code>moment</code> object, which gives us access to utility methods.
      </p>
      <p>
        Then we're appending <code>fromNow()</code> to the end of that statement to convert the timestamp from the
        format <code>2018-04-24T05:10:49.382Z</code> into a human-readable string like <code>3 days ago</code>.
      </p>
      <p>
        And finally, while we could leave it at that, the word <em>"ago"</em> in the phrase <em>"3 days ago"</em> is
        understood from the context. So we're also going to remove it from the final timestamp by splitting the string
        at the <em>" ago"</em> part and only taking the first piece (converting "3 days ago" to simply "3 days").
      </p>

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
        src/components/Tweet.js
      </h3>

      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        import React from 'react';
        import createReactClass from 'create-react-class';
        import PropTypes from 'prop-types';
        import moment from 'moment';

        export default createReactClass({
          displayName: 'Tweet',

          propTypes: {
            tweet: PropTypes.object.isRequired
          },

          render() {
            const { tweet } = this.props;
            const timestamp = moment(tweet.data.createdAt).fromNow().split(' ago')[0];

            return (
              <li className="list-group-item tweet">
                <div className="image-container">
                  <img
                    className="img-circle avatar"
                    src={'http://ssl.gstatic.com/images/icons/material/product/1x/avatar_circle_blue_120dp.png'} />
                </div>
                <div className="content-container">
                  <h4 className="list-group-item-heading title">
                    Nickname
                  </h4>
                  <h4 className="list-group-item-heading timestamp">
                    {'- ' + timestamp}
                  </h4>
                  <p className="list-group-item-text text">
                    {tweet.data.text}
                  </p>
                </div>
              </li>
            );
          }

        });
        `}/>
        <CodeTab syntax="ES6" text={`
        import React from 'react';
        import PropTypes from 'prop-types';
        import moment from 'moment';

        class Tweet extends React.Component {

          render() {
            const { tweet } = this.props;
            const timestamp = moment(tweet.data.createdAt).fromNow().split(' ago')[0];

            return (
              <li className="list-group-item tweet">
                <div className="image-container">
                  <img
                    className="img-circle avatar"
                    src={'http://ssl.gstatic.com/images/icons/material/product/1x/avatar_circle_blue_120dp.png'} />
                </div>
                <div className="content-container">
                  <h4 className="list-group-item-heading title">
                    Nickname
                  </h4>
                  <h4 className="list-group-item-heading timestamp">
                    {'- ' + timestamp}
                  </h4>
                  <p className="list-group-item-text text">
                    {tweet.data.text}
                  </p>
                </div>
              </li>
            );
          }

        }

        Tweet.propTypes = {
          tweet: PropTypes.object.isRequired
        };

        export default Tweet;
        `}/>
        <CodeTab syntax="ESNext" text={`
        import React from 'react';
        import PropTypes from 'prop-types';
        import moment from 'moment';

        class Tweet extends React.Component {

          static propTypes = {
            tweet: PropTypes.object.isRequired
          };

          render() {
            const { tweet } = this.props;
            const timestamp = moment(tweet.data.createdAt).fromNow().split(' ago')[0];

            return (
              <li className="list-group-item tweet">
                <div className="image-container">
                  <img
                    className="img-circle avatar"
                    src={'http://ssl.gstatic.com/images/icons/material/product/1x/avatar_circle_blue_120dp.png'} />
                </div>
                <div className="content-container">
                  <h4 className="list-group-item-heading title">
                    Nickname
                  </h4>
                  <h4 className="list-group-item-heading timestamp">
                    {'- ' + timestamp}
                  </h4>
                  <p className="list-group-item-text text">
                    {tweet.data.text}
                  </p>
                </div>
              </li>
            );
          }

        }

        export default Tweet;
        `}/>
      </CodeTabs>

      <h3>
        src/components/Feed.js
      </h3>

      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        import React from 'react';
        import createReactClass from 'create-react-class';
        import PropTypes from 'prop-types';
        import Tweet from './Tweet';

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
              <Tweet key={tweet.id} tweet={tweet} />
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
        <CodeTab syntax="ES6" text={`
        import React from 'react';
        import PropTypes from 'prop-types';
        import Tweet from './Tweet';

        class Feed extends React.Component {

          renderTweet(tweet) {
            return (
              <Tweet key={tweet.id} tweet={tweet} />
            );
          }

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

        }

        Feed.propTypes = {
          tweets: PropTypes.object.isRequired
        };

        Feed.defaultProps = (function() {
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
        })();

        export default Feed;
        `}/>
        <CodeTab syntax="ESNext" text={`
        import React from 'react';
        import PropTypes from 'prop-types';
        import Tweet from './Tweet';

        class Feed extends React.Component {

          static propTypes = {
            tweets: PropTypes.object.isRequired
          };

          static defaultProps = (function() {
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
          })();

          renderTweet(tweet) {
            return (
              <Tweet key={tweet.id} tweet={tweet} />
            );
          }

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

        }

        export default Feed;
        `}/>
      </CodeTabs>

      <h2>
        Next Steps
      </h2>

      <p>
        Next we're going to add some <Link to="/quickstart/data/step-3/">mock user data to finish the Tweet component</Link>.
      </p>
    </Template>
  )
};
