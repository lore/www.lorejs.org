import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/authorization/final.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 1: Freeze Pagination Data
      </h1>

      <p>
        In this step we'll add a timestamp to our pagination requests, to "freeze" the data for the list, and solve an
        error that occurs when we fetch a new page right after creating a tweet.
      </p>

      <QuickstartBranch branch="optimistic.1" />

      <h3>
        What's the problem?
      </h3>
      <p>
        Currently, if you create a tweet and refresh the page, the application works fine. And if you load
        more tweets, the application works fine.
      </p>
      <p>
        But if you create a tweet and <em>THEN</em> load more tweets, you'll see this warning in the console:
      </p>

      <Markdown text={`
      Warning: flattenChildren(...): Encountered two children with the same key
      `}/>

      <p>
        This warning occurs because React is trying to render the same tweet twice. You'll also notice that only
        4 new tweets show instead of the 5 we expect (which is the size of each page).
      </p>

      <h3>
        Why does this happen?
      </h3>

      <p>
        To illustrate why this happens, let's pretend we have an API with 10 tweets, shown below:
      </p>

      <Markdown text={`
      --- API page 1 ----
      'tweet 10'
      'tweet 9'
      'tweet 8'
      'tweet 7'
      'tweet 6'
      --- API page 2 ----
      'tweet 5'
      'tweet 4'
      'tweet 3'
      'tweet 2'
      'tweet 1'
      `}/>

      <p>
        In this example, we're breaking the tweets up into two pages, with 5 tweets per page. We're also ordering
        the tweets chronologically, where tweet 10 is the newest tweet and tweet 1 is the oldest tweet.
      </p>
      <p>
        Now let's say we fetch the first page of tweets to display to the user, so that our Feed on the client side
        looks like this:
      </p>
      <Markdown text={`
      --- Client page 1 ----
      'tweet 10'
      'tweet 9'
      'tweet 8'
      'tweet 7'
      'tweet 6'
      `}/>

      <p>
        If you now create a new tweet, shown here as <code>tweet 11</code>, then the API response would now look
        like this:
      </p>

      <Markdown text={`
      --- API page 1 ----
      'tweet 11'
      'tweet 10'
      'tweet 9'
      'tweet 8'
      'tweet 7'
      --- API page 2 ----
      'tweet 6'
      'tweet 5'
      'tweet 4'
      'tweet 3'
      'tweet 2'
      --- API page 3 ----
      'tweet 1'
      `}/>

      <p>
        Because the API is ordering tweets by their <code>createdAt</code> date, then it always puts the newest
        tweets on page 1, and the other tweets are pushed down the list. And in this case, tweet 6, which used to
        be on page 1, is now on page 2.
      </p>
      <p>
        If you now load more tweets on the client side, you'll get the current page 2 from the API, and your list
        will look like this:
      </p>

      <Markdown text={`
      --- Client page 1 ----
      'tweet 10'
      'tweet 9'
      'tweet 8'
      'tweet 7'
      'tweet 6'
      --- Client page 2 ----
      'tweet 6'
      'tweet 5'
      'tweet 4'
      'tweet 3'
      'tweet 2'
      `}/>

      <p>
        In this case, we now have <code>tweet 6</code> showing up twice; once on page 1, where it used to be, and
        now again on page 2, where it currently is.
      </p>
      <p>
        But since we're using the <code>id</code> of a tweet as the React <code>key</code> when rendering the list,
        we now have two tweets being rendered with the same <code>key</code>, and React throws a warning.
      </p>

      <h3>
        How do we fix this?
      </h3>
      <p>
        To solve this problem, we need a way to "freeze" the data in the API, so that the tweets on each page stay
        the same regardless of whether or not new tweets are created.
      </p>
      <p>
        To do this, we're going to add a timestamp to our API request, so that our requests are relative to a specific
        point in time.
      </p>

      <h3>
        Add Timestamp to Feed
      </h3>
      <p>
        Open your <code>Feed</code> component and add initial state that includes a timestamp of when that
        component was mounted.
      </p>

      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        // src/components/Feed.js
        ...
        getInitialState() {
          return {
            timestamp: new Date().toISOString()
          };
        },
        ...
        `}/>
        <CodeTab syntax="ES6" text={`
        // src/components/Feed.js
        ...
        constructor(props) {
          super(props);
          this.state = {
            timestamp: new Date().toISOString()
          };
        }
        ...
        `}/>
        <CodeTab syntax="ESNext" text={`
        // src/components/Feed.js
        ...
        constructor(props) {
          super(props);
          this.state = {
            timestamp: new Date().toISOString()
          };
        }
        ...
        `}/>
      </CodeTabs>

      <h3>
        Fetching Tweets Relative to Timestamp
      </h3>
      <p>
        Now that we have the timestamp, we need to update our network requests to say "only give me tweets
        created BEFORE this timestamp".
      </p>
      <p>
        To do that, the Sails API accepts a <code>where</code> object as a query parameter, that allows us to make
        some pretty specific requests. For example, to fetch all tweets created before a certain date, we can pass
        this object as a query parameter:
      </p>

      <Markdown text={`
      where: {
        createdAt: {
          '<=': timestamp
        }
      }
      `}/>

      <p>
        As a network request, it looks like this:
      </p>

      <Markdown text={`
      GET http://localhost:1337/tweets?where={createdAt: {"<=": "2017-05-14T15:28:05-07:00"}}
      `}/>

      <h3>
        Freeze the Pagination Data
      </h3>

      <p>
        To leverage this ability, open your <code>Feed</code> component and modify the <code>render()</code> method
        to look like this:
      </p>

      <Markdown type="jsx" text={`
      // src/components/Feed.js
      render() {
        const { timestamp } = this.state;

        return (
          <div className="feed">
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
                  }
                });
              }}
              ...
            />
          </div>
        );
      }
      `}/>
      <p>
        Here we're modifying the <code>select()</code> callback by adding a <code>where</code> property to
        the <code>getState()</code> call, and providing the object we want sent to the API.
      </p>

      <h3>
        Visual Check-in
      </h3>

      <p>
        If everything went well, your application should now look like this (the same as before) but you should no
        longer see an error in the console when you paginate after creating a tweet.
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
        import _ from 'lodash';
        import InfiniteScrollingList from './InfiniteScrollingList';
        import Tweet from './Tweet';

        export default createReactClass({
          displayName: 'Feed',

          getInitialState() {
            return {
              timestamp: new Date().toISOString()
            };
          },

          render() {
            const { timestamp } = this.state;

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
                />
              </div>
            );
          }

        });
        `}/>
        <CodeTab syntax="ES6" text={`
        import React from 'react';
        import PropTypes from 'prop-types';
        import _ from 'lodash';
        import InfiniteScrollingList from './InfiniteScrollingList';
        import Tweet from './Tweet';

        class Feed extends React.Component {

          constructor(props) {
            super(props);
            this.state = {
              timestamp: new Date().toISOString()
            };
          }

          render() {
            const { timestamp } = this.state;

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
                />
              </div>
            );
          }

        }

        export default Feed;
        `}/>
        <CodeTab syntax="ESNext" text={`
        import React from 'react';
        import PropTypes from 'prop-types';
        import _ from 'lodash';
        import InfiniteScrollingList from './InfiniteScrollingList';
        import Tweet from './Tweet';

        class Feed extends React.Component {

          constructor(props) {
            super(props);
            this.state = {
              timestamp: new Date().toISOString()
            };
          }

          render() {
            const { timestamp } = this.state;

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
                />
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
        In the next section we'll learn how to <Link to="../step-2/">display new tweets at the top of the Feed</Link>.
      </p>
    </Template>
  )
};
