import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
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

      <Markdown type="jsx" text={`
      import React, { useState } from 'react';
      import PropTypes from 'prop-types';
      import _ from 'lodash';
      import InfiniteScrollingList from './InfiniteScrollingList';
      import Tweet from './Tweet';
      import moment from 'moment';
      import PayloadStates from '../constants/PayloadStates';
      
      export default function UserTweets(props) {
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
      `}/>

      <p>
        Then update the <code>InfiniteScrollingList</code> props to include the changes below:
      </p>
      <Markdown text={`
      // src/components/UserTweets.js
      export default function UserTweets(props) {
        const { match } = props;
        ...
        <InfiniteScrollingList
          select={(getState) => {
            return getState('tweet.find', {
              where: {
                where: {
                  createdAt: {
                    '<=': timestamp
                  },
                  user: Number(match.params.userId)
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
                const isByUser = tweet.data.user === Number(match.params.userId);
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
        ...
      }
      `}/>

      <p>
        Here we've extracted <code>match</code> from <code>props</code>, which is automatically provided
        by <code>React Router</code>, so that we can get the <code>userId</code> provided in the URL.
      </p>
      <p>
        For the <code>selectOther()</code> callback, we've added an <code>isByUser</code> variable, to detect whether
        the tweet is by the user with the <code>userId</code>. This will mean that only tweets created by the current
        user will show up on this page.
      </p>
      <p>
        For the <code>select()</code> callback, we did something similar, and added the <code>user</code> to the query
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
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/auth/callback" component={AuthCallback} />
      
          <AuthenticatedRoute exact path="/" component={Feed} />
          <AuthenticatedRoute exact path="/users/:userId" component={UserTweets} />
          <Route component={NotFoundPage} />
        </Switch>
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
      <Markdown type="jsx" text={`
      import React, { useState } from 'react';
      import PropTypes from 'prop-types';
      import _ from 'lodash';
      import InfiniteScrollingList from './InfiniteScrollingList';
      import Tweet from './Tweet';
      import moment from 'moment';
      import PayloadStates from '../constants/PayloadStates';
      
      export default function UserTweets(props) {
        const { match } = props;
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
                      },
                      user: Number(match.params.userId)
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
                    const isByUser = tweet.data.user === Number(match.params.userId);
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

      <h3>
        routes.js
      </h3>
      <Markdown text={`
      import React from 'react';
      import { Switch, Route, Redirect } from 'react-router-dom';
      
      /**
       * The AuthenticatedRoute provides an easy way to redirect the user
       * to a login experience if we don't know who they are.
       */
      
      import AuthenticatedRoute from './src/routes/AuthenticatedRoute';
      
      /**
       * Routes are used to declare your view hierarchy
       * See: https://reacttraining.com/react-router/web/guides/quick-start
       */
      
      import NotFoundPage from './src/components/NotFound';
      import Feed from './src/components/Feed';
      import Login from './src/components/Login';
      import Logout from './src/components/Logout';
      import AuthCallback from './src/components/AuthCallback';
      import UserTweets from './src/components/UserTweets';
      
      export default (
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/auth/callback" component={AuthCallback} />
      
          <AuthenticatedRoute exact path="/" component={Feed} />
          <AuthenticatedRoute exact path="/users/:userId" component={UserTweets} />
          <Route component={NotFoundPage} />
        </Switch>
      );
      `}/>

      <h2>
        Next Steps
      </h2>

      <p>
        In the next section we'll <Link to="/quickstart/websockets/overview/">we'll add support for WebSockets</Link>.
      </p>
    </Template>
  )
};
