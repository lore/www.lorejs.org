import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/authorization/final.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 6: Hide Deleted Tweets
      </h1>

      <p>
        In this step we'll hide tweets that have been deleted.
      </p>

      <QuickstartBranch branch="optimistic.6" />

      <h3>
        What's the problem?
      </h3>
      <p>
        Deleted tweets are still visible in the application, even though they don't exist on the server.
      </p>

      <h3>
        How do we solve this?
      </h3>
      <p>
        Filter them out of the data displayed in the Feed.
      </p>

      <h3>
        Exclude Deleted Tweets from Feed
      </h3>
      <p>
        Open the <code>Feed</code> component and update the <code>InfiniteScrollingList</code> to look like this:
      </p>

      <Markdown text={`
      // src/components/Feed.js
      import PayloadStates from '../constants/PayloadStates';
      ...
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
            },
            exclude: function(tweet) {
              return tweet.state === PayloadStates.DELETED;
            }
          });
        }}
        row={(tweet) => {
          return (
            <Tweet key={tweet.id || tweet.cid} tweet={tweet} />
          );
        }}
        refresh={(page, getState) => {
          return getState('tweet.find', _.defaultsDeep({
            exclude: function(tweet) {
              return tweet.state === PayloadStates.DELETED;
            }
          }, page.query));
        }}
        selectNextPage={(lastPage, getState) => {
          const lastPageNumber = lastPage.query.pagination.page;

          return getState('tweet.find', _.defaultsDeep({
            pagination: {
              page: lastPageNumber + 1
            },
            exclude: function(tweet) {
              return tweet.state === PayloadStates.DELETED;
            }
          }, lastPage.query));
        }}
        selectOther={(getState) => {
          return getState('tweet.all', {
            where: function(tweet) {
              const isOptimistic = !tweet.id;
              const isNew = moment(tweet.data.createdAt).diff(timestamp) > 0;
              return isOptimistic || isNew;
            },
            sortBy: function(model) {
              return -moment(model.data.createdAt).unix();
            },
            exclude: function(tweet) {
              return tweet.state === PayloadStates.DELETED;
            }
          });
        }}
      />
      ...
      `}/>
      <p>
        In the code above, we've added several <code>exclude()</code> functions to tell <code>getState()</code> what
        data we do NOT want included.
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
      <Markdown type="jsx" text={`
      import React, { useState } from 'react';
      import PropTypes from 'prop-types';
      import _ from 'lodash';
      import InfiniteScrollingList from './InfiniteScrollingList';
      import Tweet from './Tweet';
      import moment from 'moment';
      import PayloadStates from '../constants/PayloadStates';
      
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
                  },
                  exclude: function(tweet) {
                    return tweet.state === PayloadStates.DELETED;
                  }
                });
              }}
              row={(tweet) => {
                return (
                  <Tweet key={tweet.id || tweet.cid} tweet={tweet} />
                );
              }}
              refresh={(page, getState) => {
                return getState('tweet.find', _.defaultsDeep({
                  exclude: function(tweet) {
                    return tweet.state === PayloadStates.DELETED;
                  }
                }, page.query));
              }}
              selectNextPage={(lastPage, getState) => {
                const lastPageNumber = lastPage.query.pagination.page;
      
                return getState('tweet.find', _.defaultsDeep({
                  pagination: {
                    page: lastPageNumber + 1
                  },
                  exclude: function(tweet) {
                    return tweet.state === PayloadStates.DELETED;
                  }
                }, lastPage.query));
              }}
              selectOther={(getState) => {
                return getState('tweet.all', {
                  where: function(tweet) {
                    const isOptimistic = !tweet.id;
                    const isNew = moment(tweet.data.createdAt).diff(timestamp) > 0;
                    return isOptimistic || isNew;
                  },
                  sortBy: function(model) {
                    return -moment(model.data.createdAt).unix();
                  },
                  exclude: function(tweet) {
                    return tweet.state === PayloadStates.DELETED;
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
        In the next section we'll learn how to <Link to="/quickstart/normalization/overview/">normalize an API response
        to reduce the number of network requests</Link>.
      </p>
    </Template>
  )
};
