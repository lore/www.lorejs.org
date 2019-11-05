import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Code from '../../../components/Code';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/authorization/final.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 2: Display New Tweets
      </h1>

      <p>
        In this step we'll display new tweets at the top of the Feed.
      </p>

      <QuickstartBranch branch="optimistic.2" />

      <h3>
        What's the problem?
      </h3>
      <p>
        Currently, when we create new tweets, we have to refresh the page before they appear, which is not a
        very good user experience. A better experience would be to have new tweets automatically show up at the
        top of the Feed.
      </p>

      <h3>
        Why does this happen?
      </h3>
      <p>
        This happens because the application doesn't know what to do with the new tweets you create, since that
        answer is determined based on the experience you're creating.
      </p>
      <p>
        For this type of experience, we want new tweets to appear at the top of the page, otherwise the application
        will feel "out of date" very quickly. But for other applications, it might not be as straight forward.
      </p>
      <p>
        For example, should new tweets show up at all? If yes, where should they show up? At the top of the list?
        The bottom of the list? Should ALL new tweets show up, or just some? And if you DO want them to show up,
        should they show up immediately, or wait until the server confirms they'be been created?
      </p>
      <p>
        Because of that uncertainty, Lore doesn't make any assumptions about what to do with "new data", and only
        gives you exactly what you ask for. And in this case, all we asked for was first page of tweets.
      </p>
      <p>
        But it DOES give you some tools to easily describe the answers to those questions, and we'll be leveraging
        those tools in this step to shape the experience into what we want.
      </p>

      <h3>
        Chose the Location for New Tweets
      </h3>
      <p>
        The <code>InfiniteScrollingList</code> component we created earlier actually has a section that allows
        you to put "other" data at the top of the list. The relevant section of the <code>render()</code> method
        is shown below:
      </p>
      <Code type="jsx" text={`
      // src/components/InfiniteScrollingList.js
      export default function InfiniteScrollingList(props) {
        ...
        return (
          <div>
            <ul className="media-list tweets">
              {other ? other.data.map(row) : null}
              // ...
            </ul>
            // ...
          </div>
        );
        ...
      }
      `}/>

      <h3>
        Display New Tweets
      </h3>
      <p>
        To get tweets to appear here, we simply need to provide the "other" data to the list. Open
        the <code>Feed</code> component and provide a <code>selectOther</code> method to
        the <code>InfiniteScrollingList</code> that looks like this:
      </p>

      <Code type="jsx" text={`
      // src/components/Feed.js
      import moment from 'moment';
      ...
      <InfiniteScrollingList
        ...
        selectOther={(getState) => {
          return getState('tweet.all', {
            where: function(tweet) {
              const isReal = tweet.id;
              const isNew = moment(tweet.data.createdAt).diff(timestamp) > 0;
              return isReal && isNew;
            },
            sortBy: function(model) {
              return -moment(model.data.createdAt).unix();
            }
          });
        }}
      />
      ...
      `}/>
      <p>
        Here we've provided a <code>selectOther()</code> prop to the <code>InfiniteScrollingList</code>, which
        allows us to return an array of data that we want to be displayed at the top of the list.
      </p>
      <p>
        To do this, we're introducing a new <code>getState()</code> mapping called <code>tweet.all</code>, which
        allows you to search through all tweets in the store, and extract a subset. To narrow down the results,
        there are two properties you can provide; <code>where()</code> and <code>sortBy()</code>.
      </p>
      <p>
        The <code>where()</code> method is where we specify our matching criteria. In this case, we want any tweets
        created AFTER the timestamp we're using to freeze the pagination data, as well as any tweets that don't
        yet have an id (which means the user just created them, and the server has not yet confirmed).
      </p>
      <p>
        The <code>sortBy()</code> method allows us to express how we want those tweets to be ordered, and in this
        case, we want the newest tweets on top.
      </p>

      <h3>
        Try it Out
      </h3>
      <p>
        With that change in place, new tweets will show up at the top of the <code>Feed</code> shortly after
        you create them. You'll notice however that there's a short delay between the time you create a tweet
        and when it actually shows up in the list.
      </p>
      <p>
        In the next step, we'll learn why this happens and to remove it.
      </p>

      <h3>
        Visual Check-in
      </h3>
      <p>
        If everything went well, your application should now look like this (exactly the same).
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
      import React, { useState } from 'react';
      import PropTypes from 'prop-types';
      import _ from 'lodash';
      import InfiniteScrollingList from './InfiniteScrollingList';
      import Tweet from './Tweet';
      import moment from 'moment';
      
      export default function Feed(props) {
        const [timestamp] = useState(new Date().toISOString());
      
        return (
          <div className="feed">
            <h2 className="title">
              Feed
            </h2>
            <InfiniteScrollingList
              select={(getState) => {
                return getState('tweet.find', {
                  where: {
                    where: {
                      createdAt: {
                        '<=': timestamp
                      }
                    }
                  },
                  pagination: {
                    sort: 'createdAt DESC',
                    page: 1
                  }
                });
              }}
              row={(tweet) => {
                return (
                  <Tweet key={tweet.id} tweet={tweet} />
                );
              }}
              refresh={(page, getState) => {
                return getState('tweet.find', page.query);
              }}
              selectNextPage={(lastPage, getState) => {
                const lastPageNumber = lastPage.query.pagination.page;
      
                return getState('tweet.find', _.defaultsDeep({
                  pagination: {
                    page: lastPageNumber + 1
                  }
                }, lastPage.query));
              }}
              selectOther={(getState) => {
                return getState('tweet.all', {
                  where: function(tweet) {
                    const isReal = tweet.id;
                    const isNew = moment(tweet.data.createdAt).diff(timestamp) > 0;
                    return isReal && isNew;
                  },
                  sortBy: function(model) {
                    return -moment(model.data.createdAt).unix();
                  }
                });
              }}
            />
          </div>
        );
      }
      `}/>

      <h2>
        Next Steps
      </h2>

      <p>
        In the next section we'll <Link to="/quickstart/optimistic/step-3/">remove the delay between creating a tweet and when it
        appears in the Feed</Link>.
      </p>
    </Template>
  )
};
