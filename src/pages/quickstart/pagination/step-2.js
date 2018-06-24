import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/server/final.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 2: Paginate the Tweets
      </h1>

      <p>
        In this step we'll update the <code>Feed</code> component to support pagination.
      </p>

      <QuickstartBranch branch="pagination.2" />

      <h3>
        Paginating the API
      </h3>
      <p>
        The API supports pagination through a query parameter named <code>page</code>.
      </p>
      <p>
        For example, if you navigate to the URL <code>http://localhost:1337/tweets?page=1</code> you will see the
        first page of tweets, and if you navigate to the URL <code>http://localhost:1337/tweets?page=2</code> you
        will see the second page.
      </p>
      <p>
        In this step we'll be modify our API call to include this query parameter so that we can retrieve specific
        pages of data.
      </p>

      <h3>
        Pagination Strategy
      </h3>
      <p>
        To implement pagination on the client-side, we're going to be using a query parameter in the URL in order to
        determine which page of data to display, and we're going to call that query parameter <code>page</code>.
      </p>
      <p>
        For example, navigating to the URL <code>http://localhost:3000/?page=1</code> should display
        the first page of tweets in the Feed, and navigating to the
        URL <code>http://localhost:3000/?page=2</code> should display the second.
      </p>

      <h3>
        Request Paginated Data
      </h3>

      <p>
        Open the <code>Feed</code> component and take a look at the <code>connect</code> decorator, which currently
        looks like this:
      </p>

      <Markdown text={`
      // src/components/Feed.js
      connect(function(getState, props) {
        return {
          tweets: getState('tweet.find')
        };
      })
      `}/>

      <p>
        Since we didn't provide any additional information to <code>getState('tweet.find')</code>, the API call
        that's produced is simply a network request to <code>/tweets</code>. But if we're going to use paginated
        data, we need network calls that look like <code>/tweets?page=1</code>.
      </p>
      <p>
        To do that, update the <code>connect</code> call to look like this:
      </p>

      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        // src/components/Feed.js
        export default connect(function(getState, props) {
          const { location } = props;

          return {
            tweets: getState('tweet.find', {
              pagination: {
                sort: 'createdAt DESC',
                page: location.query.page || '1'
              }
            })
          }
        })(
        createReactClass({
          ...
        })
        )
        `}/>
        <CodeTab syntax="ES6" text={`
        // src/components/Feed.js
        class Feed extends React.Component {
         ...
        }

        export default connect(function(getState, props) {
          const { location } = props;

          return {
            tweets: getState('tweet.find', {
              pagination: {
                sort: 'createdAt DESC',
                page: location.query.page || '1'
              }
            })
          };
        })(Feed);
        `}/>
        <CodeTab syntax="ESNext" text={`
        // src/components/Feed.js
        @connect(function(getState, props) {
          const { location } = props;

          return {
            tweets: getState('tweet.find', {
              pagination: {
                sort: 'createdAt DESC',
                page: location.query.page || '1'
              }
            })
          };
        })
        class Feed extends React.Component {
         ...
        }
        `}/>
      </CodeTabs>

      <p>
        In the code above, we're first extracting <code>location</code> from <code>props</code>, which is provided
        by React Router and contains information like the current URL and any query parameters.
      </p>
      <p>
        Then we're providing an object to <code>getState('tweet.find')</code> in order to be more specific about
        what question we want to ask the API.
      </p>

      <blockquote>
        <p>
          The <code>find</code> part of <code>tweet.find</code> is actually the name of a blueprint that determines
          what options can be provided in the second argument to <code>getState()</code>. The same is true
          of <code>tweet.byId</code>, and it's actually the <code>byId</code> blueprint that requires there to be
          an <code>id</code> provided when using it.
        </p>
        <p>
          You can read more about the available options for
          the <code>find</code> blueprint <Link to="/connect/find/">here</Link>.
        </p>
      </blockquote>

      <p>
        Among the available options for the <code>find</code> blueprint is a <code>pagination</code> property that
        can be used to list query parameters that relate to pagination, such as page number, page size, ordering
        preferences, etc.
      </p>

      <p>
        Within the <code>pagination</code> property we're providing two query parameters that we want sent to the API:
      </p>
      <ul>
        <li>
          <p>
            The first is <code>sort</code>, which controls how the data that's returned will be ordered. In this
            case we wanted the newest tweets to be returned first, so we've specified that we want the API to return
            data in descending order, based on the <code>createdAt</code> date of the tweet.
          </p>
        </li>
        <li>
          <p>
            The second is <code>page</code>, which controls which page of data is returned. This is set set to
            the value of the <code>page</code> query parameter in the URL of the browser if one exists. If not, it
            defaults to the first page.
          </p>
        </li>
      </ul>

      <h3>
        Try it Out
      </h3>
      <p>
        With this change in place, you should now be able to change what tweets are displayed based on the URL
        in the browser.
      </p>
      <p>
        For example, if you navigate to <code>http://localhost:3000/?page=1</code> you should
        see the first page of tweets, and navigating to <code>http://localhost:3000/?page=2</code> should show
        you the second.
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
        import PayloadStates from '../constants/PayloadStates';
        import Tweet from './Tweet';

        export default connect(function(getState, props) {
          const { location } = props;

          return {
            tweets: getState('tweet.find', {
              pagination: {
                sort: 'createdAt DESC',
                page: location.query.page || '1'
              }
            })
          };
        })(
        createReactClass({
          displayName: 'Feed',

          propTypes: {
            tweets: PropTypes.object.isRequired
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
        <CodeTab syntax="ES6" text={`
        import React from 'react';
        import PropTypes from 'prop-types';
        import { connect } from 'lore-hook-connect';
        import PayloadStates from '../constants/PayloadStates';
        import Tweet from './Tweet';

        class Feed extends React.Component {

          renderTweet(tweet) {
            return (
              <Tweet key={tweet.id} tweet={tweet} />
            );
          }

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

        }

        Feed.propTypes = {
          tweets: PropTypes.object.isRequired
        };

        export default connect(function(getState, props) {
          const { location } = props;

          return {
            tweets: getState('tweet.find', {
              pagination: {
                sort: 'createdAt DESC',
                page: location.query.page || '1'
              }
            })
          };
        })(Feed);
        `}/>
        <CodeTab syntax="ESNext" text={`
        import React from 'react';
        import PropTypes from 'prop-types';
        import { connect } from 'lore-hook-connect';
        import PayloadStates from '../constants/PayloadStates';
        import Tweet from './Tweet';

        @connect(function(getState, props) {
          const { location } = props;

          return {
            tweets: getState('tweet.find', {
              pagination: {
                sort: 'createdAt DESC',
                page: location.query.page || '1'
              }
            })
          };
        })
        class Feed extends React.Component {

          static propTypes = {
            tweets: PropTypes.object.isRequired
          };

          renderTweet(tweet) {
            return (
              <Tweet key={tweet.id} tweet={tweet} />
            );
          }

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

        }

        export default Feed;
        `}/>
      </CodeTabs>

      <h2>
        Next Steps
      </h2>

      <p>
        Next step we're going to <Link to="../step-3/">add pagination links</Link>.
      </p>
    </Template>
  )
};
