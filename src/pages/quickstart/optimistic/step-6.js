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
        Update the <code>render()</code> method of the <code>Feed</code> component to look like this:
      </p>

      <Markdown text={`
      // src/components/Feed.js
      import PayloadStates from '../constants/PayloadStates';
      ...
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
      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        import React from 'react';
        import createReactClass from 'create-react-class';
        import PropTypes from 'prop-types';
        import moment from 'moment';
        import PayloadStates from '../constants/PayloadStates';
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

        });
        `}/>
        <CodeTab syntax="ES6" text={`
        import React from 'react';
        import PropTypes from 'prop-types';
        import moment from 'moment';
        import PayloadStates from '../constants/PayloadStates';
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

        }

        export default Feed;
        `}/>
        <CodeTab syntax="ESNext" text={`
        import React from 'react';
        import PropTypes from 'prop-types';
        import moment from 'moment';
        import PayloadStates from '../constants/PayloadStates';
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

        }

        export default Feed;
        `}/>
      </CodeTabs>

      <h2>
        Next Steps
      </h2>

      <p>
        In the next section we'll learn how to <Link to="../../normalization/overview/">normalize an API response
        to reduce the number of network requests</Link>.
      </p>
    </Template>
  )
};
