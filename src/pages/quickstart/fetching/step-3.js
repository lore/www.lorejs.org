import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/fetching/step-3.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 3: Connect Feed Component
      </h1>

      <p>
        In this step we're going to learn about the <code>connect</code> decorator, and use it to allow our Tweet
        component to declare what data it needs.
      </p>

      <QuickstartBranch branch="fetching.3" />

      <h3>
        The Connect Decorator
      </h3>
      <p>
        Lore provides a decorator (also known as a Higher Order Component) that allows components to declare
        what data they need, and the framework will automatically retrieve it from the API if it doesn't exist
        in the local store.
      </p>

      <p>
        That decorator is called <code>connect</code> and the syntax for using it looks like this:
      </p>

      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        connect(function(getState, props) {
          return {
            tweets: getState('tweet.find')
          };
        })(createReactClass({...}));
        `}/>
        <CodeTab syntax="ES6" text={`
        class MyComponent extends React.Component {...}

        connect(function(getState, props) {
          return {
            tweets: getState('tweet.find')
          };
        })(MyComponent);
        `}/>
        <CodeTab syntax="ESNext" text={`
        @connect(function(getState, props) {
          return {
            tweets: getState('tweet.find')
          };
        })
        class MyComponent extends React.Component {...}
        `}/>
      </CodeTabs>

      <blockquote>
        <p>
          You can learn more about <code>connect</code> <Link to="/connect/">here</Link>.
        </p>
      </blockquote>

      <p>
        The first parameter, <code>getState</code>, is a function that will retrieve a piece of state from
        the local store, or invoke the appropriate action to retrieve that data if it hasn't been fetched yet.
      </p>
      <p>
        The string you provide to <code>getState()</code> is referred to as a "blueprint", and describes what you
        want the function to do. The first part, <code>tweet</code>, is the resource you want to fetch, and the
        second part, <code>find</code>, is the name of the blueprint.
      </p>
      <p>
        In this example we're providing <code>tweet.find</code>, and since we aren't passing in any
        query parameters or pagination information, this request translates to <em>"make a call to the /tweets
        endpoint of the API and give me whatever comes back"</em>.
      </p>
      <blockquote>
        <p>
          You can learn more about the <code>find</code> blueprint <Link to="/connect/find/">here</Link>.
        </p>
      </blockquote>
      <p>
        The data returned will then be passed to the <code>Feed</code> component through a prop
        named <code>tweets</code>, since that's what we named the key.
      </p>

      <h3>
        Connect the Feed Component
      </h3>
      <p>
        To use <code>connect</code>, you first need to import it from the <code>lore-hook-connect</code> package,
        which is already included in your project (we'll introduce hooks later in this tutorial).
      </p>
      <p>
        Open your <code>Feed</code> component and wrap it with the <code>connect</code> decorator like this:
      </p>

      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        // src/components/Feed.js
        ...
        import { connect } from 'lore-hook-connect';

        export default connect(function(getState, props) {
          return {
            tweets: getState('tweet.find')
          };
        })(
        createReactClass({
          ...
        })
        );
        `}/>
        <CodeTab syntax="ES6" text={`
        // src/components/Feed.js
        ...
        import { connect } from 'lore-hook-connect';

        class Feed extends React.Component {
          ...
        };

        export default connect(function(getState, props) {
          return {
            tweets: getState('tweet.find')
          };
        })(Feed);
        `}/>
        <CodeTab syntax="ESNext" text={`
        // src/components/Feed.js
        ...
        import { connect } from 'lore-hook-connect';

        @connect(function(getState, props) {
          return {
            tweets: getState('tweet.find')
          };
        })
        class Feed extends React.Component {
          ...
        };

        export default Feed;
          `}/>
      </CodeTabs>

      <p>
        Once you've wrapped the <code>Feed</code> component, reload the page, and you'll notice the mock data has
        been replaced by real data from the API.
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
        src/components/Feed.js
      </h3>

      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        import React from 'react';
        import createReactClass from 'create-react-class';
        import PropTypes from 'prop-types';
        import { connect } from 'lore-hook-connect';
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
        <CodeTab syntax="ES6" text={`
        import React from 'react';
        import PropTypes from 'prop-types';
        import { connect } from 'lore-hook-connect';
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

        export default connect(function(getState, props) {
          return {
            tweets: getState('tweet.find')
          };
        })(Feed);
        `}/>
        <CodeTab syntax="ESNext" text={`
        import React from 'react';
        import PropTypes from 'prop-types';
        import { connect } from 'lore-hook-connect';
        import Tweet from './Tweet';

        @connect(function(getState, props) {
          return {
            tweets: getState('tweet.find')
          };
        })
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
        Next we're going to <Link to="/quickstart/fetching/step-4/">display a loading experience while the tweets are being fetched</Link>.
      </p>
    </Template>
  )
};
