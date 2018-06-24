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
        Step 3: Add Pagination Links
      </h1>

      <p>
        In this step we'll add pagination links to our Feed.
      </p>

      <QuickstartBranch branch="pagination.3" />

      <h3>
        Add Pagination Links
      </h3>
      <p>
        Now that we're fetching data based on the URL in the browser, we need to add a list of pagination links the
        user can click to navigate between the pages of tweets.
      </p>
      <p>
        To do that, update the <code>render()</code> method of your <code>Feed</code> component to look like this:
      </p>

      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        // src/components/Feed.js
        ...
        import { Link } from 'react-router';

        ...
        createReactClass({
          ...

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
            const { tweets } = this.props;
            const currentPage = tweets.query.pagination.page;
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
                <ul className="media-list tweets">
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
        ...
        `}/>
        <CodeTab syntax="ES6" text={`
        // src/components/Feed.js
        ...
        import { Link } from 'react-router';

        ...
        class Feed extends React.Component {

          ...

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
            const { tweets } = this.props;
            const currentPage = tweets.query.pagination.page;
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
                <ul className="media-list tweets">
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
        `}/>
        <CodeTab syntax="ESNext" text={`
        // src/components/Feed.js
        ...
        import { Link } from 'react-router';

        ...
        class Feed extends React.Component {

          ...

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
            const { tweets } = this.props;
            const currentPage = tweets.query.pagination.page;
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
                <ul className="media-list tweets">
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
        `}/>
      </CodeTabs>

      <p>
        With this change in place, you should now see pagination links displayed below the tweets, and clicking on
        the links will allow you to navigate through each page of tweets.
      </p>

      <blockquote>
        <p>
          If you look at the network requests, you'll notice requests only go out for pages you haven't clicked on.
          If you navigate back to a page you'll already viewed, the data loads immediately, without issuing a
          network request.
        </p>
        <p>
          Lore's default behavior is to cache data for any API call it's already made.
        </p>
      </blockquote>

      <p>
        However, while this does accomplish our goal, it's not a great user experience, since the entire list
        resets each time you navigate. In the next step, we'll improve the experience.
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
            const { tweets } = this.props;
            const currentPage = tweets.query.pagination.page;
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
                <ul className="media-list tweets">
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
            const { tweets } = this.props;
            const currentPage = tweets.query.pagination.page;
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
                <ul className="media-list tweets">
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
            const { tweets } = this.props;
            const currentPage = tweets.query.pagination.page;
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
                <ul className="media-list tweets">
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
        Next step we're going to <Link to="../step-4/">improve the user experience for pagination</Link>.
      </p>
    </Template>
  )
};
