import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Code from '../../../components/Code';
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
        To do that, update the <code>Feed</code> component to look like this:
      </p>

      <Code type="jsx" text={`
      // src/components/Feed.js
      import React from 'react';
      import PropTypes from 'prop-types';
      import Tweet from './Tweet';
      import { useConnect } from '@lore/connect';
      import PayloadStates from '../constants/PayloadStates';
      import { parse, stringify } from 'query-string';
      import { Link } from 'react-router-dom';
      
      export default function Feed(props) {
        const { location } = props;
      
        const tweets = useConnect('tweet.find', {
          pagination: {
            sort: 'createdAt DESC',
            page: parse(location.search).page || '1'
          }
        });
      
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
      
        const currentPage = tweets.query.pagination.page;
        const paginationLinks = [];
      
        function renderPaginationLink(page, currentPage) {
          return (
            <li key={page} className={currentPage === String(page) ? 'active' : ''}>
              <Link to={{ pathname: '/', search: stringify({ page: page }) }}>
                {page}
              </Link>
            </li>
          );
        }
      
        // calculate the number of pagination links from our metadata, then
        // generate an array of pagination links
        const numberOfPages = Math.ceil(tweets.meta.totalCount / tweets.meta.perPage);
        for (let pageNumber = 1; pageNumber <= numberOfPages; pageNumber++) {
          paginationLinks.push(renderPaginationLink(pageNumber, currentPage));
        }
      
        return (
          <div className="feed">
            <h2 className="title">
              Feed
            </h2>
            <ul className="media-list tweets">
              {tweets.data.map((tweet) => {
                return (
                  <Tweet key={tweet.id} tweet={tweet} />
                );
              })}
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
        With this change in place, you should now see pagination links displayed below the tweets, and clicking on
        the links will allow you to navigate through each page of tweets. You'll also notice that each link updates
        the <code>page</code> query parameter in the URL, which in turn causes the application to rerender, and the
        Feed then fetches the tweets for the new page.
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

      <Code type="jsx" text={`
      import React from 'react';
      import PropTypes from 'prop-types';
      import Tweet from './Tweet';
      import { useConnect } from '@lore/connect';
      import PayloadStates from '../constants/PayloadStates';
      import { parse, stringify } from 'query-string';
      import { Link } from 'react-router-dom';
      
      export default function Feed(props) {
        const { location } = props;
      
        const tweets = useConnect('tweet.find', {
          pagination: {
            sort: 'createdAt DESC',
            page: parse(location.search).page || '1'
          }
        });
      
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
      
        const currentPage = tweets.query.pagination.page;
        const paginationLinks = [];
      
        function renderPaginationLink(page, currentPage) {
          return (
            <li key={page} className={currentPage === String(page) ? 'active' : ''}>
              <Link to={{ pathname: '/', search: stringify({ page: page }) }}>
                {page}
              </Link>
            </li>
          );
        }
      
        // calculate the number of pagination links from our metadata, then
        // generate an array of pagination links
        const numberOfPages = Math.ceil(tweets.meta.totalCount / tweets.meta.perPage);
        for (let pageNumber = 1; pageNumber <= numberOfPages; pageNumber++) {
          paginationLinks.push(renderPaginationLink(pageNumber, currentPage));
        }
      
        return (
          <div className="feed">
            <h2 className="title">
              Feed
            </h2>
            <ul className="media-list tweets">
              {tweets.data.map((tweet) => {
                return (
                  <Tweet key={tweet.id} tweet={tweet} />
                );
              })}
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

      <h2>
        Next Steps
      </h2>

      <p>
        Next step we're going to <Link to="/quickstart/pagination/step-4/">improve the user experience for pagination</Link>.
      </p>
    </Template>
  )
};
