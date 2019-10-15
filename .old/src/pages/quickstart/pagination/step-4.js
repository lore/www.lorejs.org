import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
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

      <Markdown type="jsx" text={`
      // src/components/Feed.js
      import React, { useState, useEffect } from 'react';
      ...
      
      export default function Feed(props) {
        const { location } = props;
      
        const _tweets = useConnect('tweet.find', {
          pagination: {
            sort: 'createdAt DESC',
            page: parse(location.search).page || '1'
          }
        });
      
        const [tweets, setTweets] = useState(_tweets);
        const [nextTweets, setNextTweets] = useState(_tweets);
        const [isFetching, setIsFetching] = useState(_tweets.state === PayloadStates.FETCHING);
      
        // check if we're fetching the next page of tweets
        const isFetchingNextTweets = nextTweets.state === PayloadStates.FETCHING;
      
        useEffect(() => {
          const nextTweets = _tweets;
      
          if (nextTweets.state === PayloadStates.FETCHING) {
            setNextTweets(nextTweets);
            setIsFetching(true);
          } else {
            setTweets(nextTweets);
            setNextTweets(nextTweets);
            setIsFetching(false);
          }
        });
        
        ...
      }
      `}/>

      <p>
        In the code above, we're import <code>useState</code> and <code>useEffect</code> from React, and then
        creating some state variables to store the current page of tweets, the next page of tweets, and a boolean
        value that tracks whether the next page is being fetched. The <code>useEffect</code> Hook is being used
        to replace the current page of tweets with the next page once it's done being fetched.
      </p>
      <p>
        Next update the code that gets rendered to look like this:
      </p>

      <Markdown type="jsx" text={`
      // src/components/Feed.js
      ...
      
      export default function Feed(props) {
        ...
      
        return (
          <div className="feed">
            ...
            <ul className={\`media-list tweets \${isFetchingNextTweets ? 'transition' : ''}\`}>
              ...
            </ul>
            ...
          </div>
        );
      }
      `}/>

      <p>
        Here we're adding a <code>transition</code> class to the <code>media-list</code> while the next page is
        being fetched, which will fade out the current page to provide a visual cue to the user.
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

      <Markdown type="jsx" text={`
      import React, { useState, useEffect } from 'react';
      import PropTypes from 'prop-types';
      import Tweet from './Tweet';
      import { useConnect } from '@lore/connect';
      import PayloadStates from '../constants/PayloadStates';
      import { parse, stringify } from 'query-string';
      import { Link } from 'react-router-dom';
      
      export default function Feed(props) {
        const { location } = props;
      
        const _tweets = useConnect('tweet.find', {
          pagination: {
            sort: 'createdAt DESC',
            page: parse(location.search).page || '1'
          }
        });
      
        const [tweets, setTweets] = useState(_tweets);
        const [nextTweets, setNextTweets] = useState(_tweets);
        const [isFetching, setIsFetching] = useState(_tweets.state === PayloadStates.FETCHING);
      
        // check if we're fetching the next page of tweets
        const isFetchingNextTweets = nextTweets.state === PayloadStates.FETCHING;
      
        useEffect(() => {
          const nextTweets = _tweets;
      
          if (nextTweets.state === PayloadStates.FETCHING) {
            setNextTweets(nextTweets);
            setIsFetching(true);
          } else {
            setTweets(nextTweets);
            setNextTweets(nextTweets);
            setIsFetching(false);
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
            <ul className={\`media-list tweets \${isFetchingNextTweets ? 'transition' : ''}\`}>
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
        In the next section we're going to <Link to="/quickstart/infinite-scrolling/overview/">replace our pagination links with infinite scrolling behavior</Link>.
      </p>
    </Template>
  )
};
