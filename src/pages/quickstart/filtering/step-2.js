import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/filtering/step-2.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 2: Display User Tweets
      </h1>

      <p>
        In this step we'll finish our support for filtering and add a component to view the user's tweets.
      </p>

      <QuickstartBranch branch="filtering.2" />


      <h3>
        Add User Tweets Component
      </h3>
      <p>
        First we need a component to display the user's tweets. The behavior of this component is identical to the
        Feed, with one exception; we only want to display tweets the <em>current user created</em>. So start off
        by copying the <code>Feed</code> component and renaming it <code>UserTweets</code>.
      </p>

      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        import React from 'react';
        import createReactClass from 'create-react-class';
        import PropTypes from 'prop-types';
        import _ from 'lodash';
        import moment from 'moment';
        import PayloadStates from '../constants/PayloadStates';
        import InfiniteScrollingList from './InfiniteScrollingList';
        import Tweet from './Tweet';

        export default createReactClass({
          displayName: 'UserTweets',

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
                        page: 1,
                        populate: 'user'
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
                        page: 1,
                        populate: 'user'
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
                        page: 1,
                        populate: 'user'
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

      <p>
        Then update the <code>render()</code> method to include the changes below:
      </p>
      <Markdown text={`
      // src/components/UserTweets.js
      render() {
        const { params } = this.props;
        const { timestamp } = this.state;

        return (
          <div className="feed">
            // ...
            <InfiniteScrollingList
              select={(getState) => {
                return getState('tweet.find', {
                  where: {
                    where: {
                      createdAt: {
                        '<=': timestamp
                      },
                      user: Number(params.userId)
                    }
                  },
                  pagination: {
                    sort: 'createdAt DESC',
                    page: 1,
                    populate: 'user'
                  },
                  exclude: function(tweet) {
                    return tweet.state === PayloadStates.DELETED;
                  }
                });
              }}
              ...
              selectOther={(getState) => {
                return getState('tweet.all', {
                  where: function(tweet) {
                    const isOptimistic = !tweet.id;
                    const isNew = moment(tweet.data.createdAt).diff(timestamp) > 0;
                    const isByUser = tweet.data.user === Number(params.userId);
                    return (isOptimistic || isNew) && isByUser;
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
        Here we've extracted <code>params</code> from <code>props</code>, which is automatically provided
        by <code>react-router</code>, so that we can get the <code>userId</code> provided in the URL.
      </p>
      <p>
        For the <code>selectOther()</code> callback, we've added an <code>isByUser</code> variable, to detect whether
        the tweet is by the user with the <code>userId</code>. This will mean that only tweets created by the current
        user will show up on this page.
      </p>
      <p>
        For the <code>select()</code> callback, we did something similar, added the <code>user</code> to the query
        parameters, so that the API will only return tweets created by that user. That means the Feed on the "My
        Tweets" page will consist only of tweets created by a single user.
      </p>

      <h3>
        Update Routes
      </h3>
      <p>
        Next, open <code>routes.js</code> and import the <code>UserTweets</code> component. Then register a new
        route for <code>/users/:userId</code> that will display that component.
      </p>

      <Markdown text={`
      // routes.js
      ...
      import UserTweets from './src/components/UserTweets';

      export default (
        <Route>
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/auth/callback" component={AuthCallback} />

          <Route component={UserIsAuthenticated(Master)}>
            <Route path="/" component={Layout}>
              <IndexRoute component={Feed} />
              <Route path="users/:userId" component={UserTweets} />
            </Route>
          </Route>
        </Route>
      );
      `}/>

      <p>
        With that change in place, refresh the browser and you'll now be able to view all the tweets or just the
        tweets created by the current user.
      </p>

      <h3>
        Visual Check-in
      </h3>

      <p>
        If everything went well, your application should now look like this when you select "My Tweets":
      </p>

      <img className="drop-shadow" src={image} />


      <h2>
        Code Changes
      </h2>

      <p>
        Below is a list of files modified during this step.
      </p>

      <h3>
        src/components/UserTweets.js
      </h3>
      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        import React from 'react';
        import createReactClass from 'create-react-class';
        import PropTypes from 'prop-types';
        import _ from 'lodash';
        import moment from 'moment';
        import PayloadStates from '../constants/PayloadStates';
        import InfiniteScrollingList from './InfiniteScrollingList';
        import Tweet from './Tweet';

        export default createReactClass({
          displayName: 'UserTweets',

          getInitialState() {
            return {
              timestamp: new Date().toISOString()
            };
          },

          render() {
            const { params } = this.props;
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
                          },
                          user: Number(params.userId)
                        }
                      },
                      pagination: {
                        sort: 'createdAt DESC',
                        page: 1,
                        populate: 'user'
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
                        const isByUser = tweet.data.user === Number(params.userId);
                        return (isOptimistic || isNew) && isByUser;
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
        import _ from 'lodash';
        import moment from 'moment';
        import PayloadStates from '../constants/PayloadStates';
        import InfiniteScrollingList from './InfiniteScrollingList';
        import Tweet from './Tweet';

        class UserTweets extends React.Component {

          constructor(props) {
            super(props);
            this.state = {
              timestamp: new Date().toISOString()
            };
          }

          render() {
            const { params } = this.props;
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
                          },
                          user: Number(params.userId)
                        }
                      },
                      pagination: {
                        sort: 'createdAt DESC',
                        page: 1,
                        populate: 'user'
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
                        const isByUser = tweet.data.user === Number(params.userId);
                        return (isOptimistic || isNew) && isByUser;
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

        export default UserTweets;
        `}/>
        <CodeTab syntax="ESNext" text={`
        import React from 'react';
        import PropTypes from 'prop-types';
        import _ from 'lodash';
        import moment from 'moment';
        import PayloadStates from '../constants/PayloadStates';
        import InfiniteScrollingList from './InfiniteScrollingList';
        import Tweet from './Tweet';

        class UserTweets extends React.Component {

          constructor(props) {
            super(props);
            this.state = {
              timestamp: new Date().toISOString()
            };
          }

          render() {
            const { params } = this.props;
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
                          },
                          user: Number(params.userId)
                        }
                      },
                      pagination: {
                        sort: 'createdAt DESC',
                        page: 1,
                        populate: 'user'
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
                        const isByUser = tweet.data.user === Number(params.userId);
                        return (isOptimistic || isNew) && isByUser;
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

        export default UserTweets;
        `}/>
      </CodeTabs>

      <h3>
        routes.js
      </h3>
      <Markdown text={`
      import React from 'react';
      import { Route, IndexRoute, Redirect } from 'react-router';

      /**
       * Wrapping the Master component with this decorator provides an easy way
       * to redirect the user to a login experience if we don't know who they are.
       */
      import UserIsAuthenticated from './src/decorators/UserIsAuthenticated';

      /**
       * Routes are used to declare your view hierarchy
       * See: https://github.com/ReactTraining/react-router/blob/v3/docs/API.md
       */
      import Master from './src/components/Master';
      import Layout from './src/components/Layout';
      import Feed from './src/components/Feed';
      import Login from './src/components/Login';
      import AuthCallback from './src/components/AuthCallback';
      import Logout from './src/components/Logout';
      import UserTweets from './src/components/UserTweets';

      export default (
        <Route>
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/auth/callback" component={AuthCallback} />

          <Route component={UserIsAuthenticated(Master)}>
            <Route path="/" component={Layout}>
              <IndexRoute component={Feed} />
              <Route path="users/:userId" component={UserTweets} />
            </Route>
          </Route>
        </Route>
      );
      `}/>

      <h2>
        Next Steps
      </h2>

      <p>
        In the next section we'll <Link to="../../websockets/overview/">we'll add support for WebSockets</Link>.
      </p>
    </Template>
  )
};
