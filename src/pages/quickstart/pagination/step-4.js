import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/pagination/final.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 4: Improve the User Experience
      </h1>

      <p>
        In this step we're going to improve the user experience for pagination.
      </p>

      <QuickstartBranch branch="pagination.4" />

      <h3>
        Why is this happening?
      </h3>
      <p>
        Each time we click a pagination link, we change the URL in the browser. This change causes the application
        to re-render. When the Feed component re-renders, the <code>connect</code> call retrives the page of data
        associated with the <code>page</code> query parameter in the URL. Since that data hasn't been fetched yet,
        it passes a collection to <code>Feed</code> that has no data, and since <code>Feed</code> is rendering
        whatever it receives as a prop, it renders nothing.
      </p>

      <h3>
        How do we fix this?
      </h3>
      <p>
        To provide a better experience, we need to <strong>hold onto the previous tweets</strong> until the new
        page has been fetched from the API.
      </p>
      <p>
        To do that, we're going to change our rendering strategy so that instead of using the
        Feed's <code>props</code> to determine what gets rendered, we're going to use Feed's <code>state</code>, and
        manage which page to render ourselves.
      </p>

      <h3>
        Update Feed
      </h3>
      <p>
        Start by providing some initial state and a <code>componentWillRecieveProps()</code> method
        to the <code>Feed</code> component that look like this:
      </p>

      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        // src/components/Feed.js
        ...
        getInitialState() {
          const { tweets } = this.props;

          return {
            tweets: tweets,
            nextTweets: tweets
          };
        },

        componentWillReceiveProps(nextProps) {
          const nextTweets = nextProps.tweets;

          if (nextTweets.state === PayloadStates.FETCHING) {
            this.setState({
              nextTweets: nextTweets,
              isFetching: true
            });
          } else {
            this.setState({
              tweets: nextTweets,
              nextTweets: nextTweets,
              isFetching: false
            });
          }
        },
        ...
        `}/>
        <CodeTab syntax="ES6" text={`
        // src/components/Feed.js
        ...
        constructor(props) {
          super(props);
          this.state = {
            tweets: props.tweets,
            nextTweets: props.tweets
          };
        }

        componentWillReceiveProps(nextProps) {
          const nextTweets = nextProps.tweets;

          if (nextTweets.state === PayloadStates.FETCHING) {
            this.setState({
              nextTweets: nextTweets,
              isFetching: true
            });
          } else {
            this.setState({
              tweets: nextTweets,
              nextTweets: nextTweets,
              isFetching: false
            });
          }
        }
        ...
        `}/>
        <CodeTab syntax="ESNext" text={`
        // src/components/Feed.js
        ...
        constructor(props) {
          super(props);
          this.state = {
            tweets: props.tweets,
            nextTweets: props.tweets
          };
        }

        componentWillReceiveProps(nextProps) {
          const nextTweets = nextProps.tweets;

          if (nextTweets.state === PayloadStates.FETCHING) {
            this.setState({
              nextTweets: nextTweets,
              isFetching: true
            });
          } else {
            this.setState({
              tweets: nextTweets,
              nextTweets: nextTweets,
              isFetching: false
            });
          }
        }
        ...
        `}/>
      </CodeTabs>

      <p>
        Then update the <code>render()</code> method to look like this:
      </p>

      <Markdown type="jsx" text={`
      // src/components/Feed.js
      render() {
        const { tweets, nextTweets } = this.state;
        const currentPage = nextTweets.query.pagination.page;
        const paginationLinks = [];

        // check if we're fetching the next page of tweets
        const isFetchingNextTweets = nextTweets.state === PayloadStates.FETCHING;

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

        // calculate the number of pagination links from our metadata, then
        // generate an array of pagination links
        const numberOfPages = Math.ceil(tweets.meta.totalCount / tweets.meta.perPage);
        for (let pageNumber = 1; pageNumber <= numberOfPages; pageNumber++) {
          paginationLinks.push(this.renderPaginationLink(pageNumber, currentPage));
        }

        return (
          <div className="feed">
            <h2 className="title">
              Feed
            </h2>
            <ul className={\`media-list tweets \${isFetchingNextTweets ? 'transition' : ''}\`}>
              {tweets.data.map(this.renderTweet)}
            </ul>
            <nav>
              <ul className="pagination">
                {paginationLinks}
              </ul>
            </nav>
          </div>
        );
      }
      `}/>

      <p>
        In the code above, we've created a <code>state</code> variable called <code>tweets</code>, and updated our
        <code>render()</code> method so that we render the <code>state</code> version of <code>tweets</code> instead
        of what we get from <code>props</code>. Then we've added a <code>componentWillReceiveProps()</code> method
        that will allow us to inspect the incoming data from <code>props</code> and decide whether or not to render it.
      </p>
      <p>
        If the new page <em>is</em> being fetched, then we continue to render the previous page, but add
        the <code>transition</code> class to the rendered list, which will provide a visual cue to the user
        that the new page is being fetched.
      </p>
      <p>
        If the data is <em>not</em> being fetched, then we update our <code>state</code> variable to reflect the
        new page.
      </p>

      <blockquote>
        <p>
          If you'd like to see a more advanced example of pagination, see
          the <Link to="/examples/pagination/">pagination example</Link>.
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

      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        import React from 'react';
        import createReactClass from 'create-react-class';
        import PropTypes from 'prop-types';
        import { connect } from 'lore-hook-connect';
        import { Link } from 'react-router';
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

          getInitialState() {
            const { tweets } = this.props;

            return {
              tweets: tweets,
              nextTweets: tweets
            };
          },

          componentWillReceiveProps(nextProps) {
            const nextTweets = nextProps.tweets;

            if (nextTweets.state === PayloadStates.FETCHING) {
              this.setState({
                nextTweets: nextTweets,
                isFetching: true
              });
            } else {
              this.setState({
                tweets: nextTweets,
                nextTweets: nextTweets,
                isFetching: false
              });
            }
          },

          renderTweet(tweet) {
            return (
              <Tweet key={tweet.id} tweet={tweet} />
            );
          },

          renderPaginationLink(page, currentPage) {
            return (
              <li key={page} className={currentPage === String(page) ? 'active' : ''}>
                <Link to={{ pathname: '/', query: { page: page } }}>
                  {page}
                </Link>
              </li>
            );
          },

          render() {
            const { tweets, nextTweets } = this.state;
            const currentPage = nextTweets.query.pagination.page;
            const paginationLinks = [];

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

            // check if we're fetching the next page of tweets
            const isFetchingNextTweets = nextTweets.state === PayloadStates.FETCHING;

            // calculate the number of pagination links from our metadata, then
            // generate an array of pagination links
            const numberOfPages = Math.ceil(tweets.meta.totalCount / tweets.meta.perPage);
            for (let pageNumber = 1; pageNumber <= numberOfPages; pageNumber++) {
              paginationLinks.push(this.renderPaginationLink(pageNumber, currentPage));
            }

            return (
              <div className="feed">
                <h2 className="title">
                  Feed
                </h2>
                <ul className={\`media-list tweets \${isFetchingNextTweets ? 'transition' : ''}\`}>
                  {tweets.data.map(this.renderTweet)}
                </ul>
                <nav>
                  <ul className="pagination">
                    {paginationLinks}
                  </ul>
                </nav>
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
        import { Link } from 'react-router';
        import PayloadStates from '../constants/PayloadStates';
        import Tweet from './Tweet';

        class Feed extends React.Component {

          constructor(props) {
            super(props);
            this.state = {
              tweets: props.tweets,
              nextTweets: props.tweets
            };
          }

          componentWillReceiveProps(nextProps) {
            const nextTweets = nextProps.tweets;

            if (nextTweets.state === PayloadStates.FETCHING) {
              this.setState({
                nextTweets: nextTweets,
                isFetching: true
              });
            } else {
              this.setState({
                tweets: nextTweets,
                nextTweets: nextTweets,
                isFetching: false
              });
            }
          }

          renderTweet(tweet) {
            return (
              <Tweet key={tweet.id} tweet={tweet} />
            );
          }

          renderPaginationLink(page, currentPage) {
            return (
              <li key={page} className={currentPage === String(page) ? 'active' : ''}>
                <Link to={{ pathname: '/', query: { page: page } }}>
                  {page}
                </Link>
              </li>
            );
          }

          render() {
            const { tweets, nextTweets } = this.state;
            const currentPage = nextTweets.query.pagination.page;
            const paginationLinks = [];

            // check if we're fetching the next page of tweets
            const isFetchingNextTweets = nextTweets.state === PayloadStates.FETCHING;

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

            // calculate the number of pagination links from our metadata, then
            // generate an array of pagination links
            const numberOfPages = Math.ceil(tweets.meta.totalCount / tweets.meta.perPage);
            for (let pageNumber = 1; pageNumber <= numberOfPages; pageNumber++) {
              paginationLinks.push(this.renderPaginationLink(pageNumber, currentPage));
            }

            return (
              <div className="feed">
                <h2 className="title">
                  Feed
                </h2>
                <ul className={\`media-list tweets \$\{isFetchingNextTweets \? 'transition' : ''\}\`}>
                  {tweets.data.map(this.renderTweet)}
                </ul>
                <nav>
                  <ul className="pagination">
                    {paginationLinks}
                  </ul>
                </nav>
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
        import { Link } from 'react-router';
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

          constructor(props) {
            super(props);
            this.state = {
              tweets: props.tweets,
              nextTweets: props.tweets
            };
          }

          componentWillReceiveProps(nextProps) {
            const nextTweets = nextProps.tweets;

            if (nextTweets.state === PayloadStates.FETCHING) {
              this.setState({
                nextTweets: nextTweets,
                isFetching: true
              });
            } else {
              this.setState({
                tweets: nextTweets,
                nextTweets: nextTweets,
                isFetching: false
              });
            }
          }

          renderTweet(tweet) {
            return (
              <Tweet key={tweet.id} tweet={tweet} />
            );
          }

          renderPaginationLink(page, currentPage) {
            return (
              <li key={page} className={currentPage === String(page) ? 'active' : ''}>
                <Link to={{ pathname: '/', query: { page: page } }}>
                  {page}
                </Link>
              </li>
            );
          }

          render() {
            const { tweets, nextTweets } = this.state;
            const currentPage = nextTweets.query.pagination.page;
            const paginationLinks = [];

            // check if we're fetching the next page of tweets
            const isFetchingNextTweets = nextTweets.state === PayloadStates.FETCHING;

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

            // calculate the number of pagination links from our metadata, then
            // generate an array of pagination links
            const numberOfPages = Math.ceil(tweets.meta.totalCount / tweets.meta.perPage);
            for (let pageNumber = 1; pageNumber <= numberOfPages; pageNumber++) {
              paginationLinks.push(this.renderPaginationLink(pageNumber, currentPage));
            }

            return (
              <div className="feed">
                <h2 className="title">
                  Feed
                </h2>
                <ul className={\`media-list tweets \$\{isFetchingNextTweets ? 'transition' : ''\}\`}>
                  {tweets.data.map(this.renderTweet)}
                </ul>
                <nav>
                  <ul className="pagination">
                    {paginationLinks}
                  </ul>
                </nav>
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
        In the next section we're going to <Link to="../../infinite-scrolling/overview/">replace our pagination links with infinite scrolling behavior</Link>.
      </p>
    </Template>
  )
};
