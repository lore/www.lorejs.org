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
        Step 3: Display Optimistic Tweets
      </h1>

      <p>
        In this step we'll update our strategy for displaying new tweets so that they appear immediately.
      </p>

      <QuickstartBranch branch="optimistic.3" />

      <h3>
        What's the problem?
      </h3>
      <p>
        While new tweets now show up at the top of the Feed, they only show up after the server confirms they
        exist. This means there's a delay between when a tweet is created and when it appears in the Feed.
      </p>
      <p>
        While that's not necessarily a bad experience, it's not the one we want for this application.
      </p>

      <h3>
        How do we solve this?
      </h3>
      <p>
        We can solve this by using Lore's built-in support for optimistic updates to get tweets to appear immediately.
      </p>

      <h3>
        Display Optimistic Tweets
      </h3>
      <p>
        To start, open the <code>Feed</code> component and update the <code>selectOther()</code> callback to
        look like this:
      </p>

      <Markdown type="jsx" text={`
      // src/components/Feed.js
      render() {
        ...
        return (
          <div className="feed">
            ...
            <InfiniteScrollingList
              ...
              selectOther={(getState) => {
                return getState('tweet.all', {
                  where: function(tweet) {
                    const isOptimistic = !tweet.id;
                    const isNew = moment(tweet.data.createdAt).diff(timestamp) > 0;
                    return isOptimistic || isNew;
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

      <p>
        In the code above, we've updated our <code>where()</code> filter to now include tweets that don't yet
        exist, and we did this by checking whether the <code>tweet</code> has an <code>id</code>.
      </p>
      <p>
        Since the API server is responsible for assigning an <code>id</code> to resources, then we know that any
        tweets we have that <em>don't</em> have an <code>id</code> are <strong>optimistic</strong>; they represent
        data that is currently <em>in the process of being created</em>.
      </p>

      <p>
        If you now refresh the browser and try to create a new tweet, the application will crash, and if you check
        the console, you'll see both a warning and an error:
      </p>
      <Markdown type="jsx" text={`
      Warning: Each child in an array or iterator should have a unique "key" prop.
      ...
      Uncaught Error: Invalid call to 'getState('user.byId')'. Missing required attribute 'id'.
      `}/>

      <p>
        We'll fix the warning now, and solve the error in the next step.
      </p>

      <h3>
        Why the Warning Happens
      </h3>
      <p>
        The warning is happening because up until now, we've been using the <code>id</code> of our models as the key
        when rendering a list, which you can see in this code from the <code>Feed</code> component:
      </p>

      <Markdown type="jsx" text={`
      // src/components/Feed.js
      <InfiniteScrollingList
        ...
        row={(tweet) => {
          return (
            <Tweet key={tweet.id} tweet={tweet} />
          );
        }}
      />
      `}/>

      <p>
        The problem is that optimistic data <em>doesn't have an id</em>, which means we're
        providing <code>undefined</code> as a value for the key. And React doesn't like that, so it issues a warning.
      </p>

      <h3>
        Update Key to Support Optimistic Data
      </h3>
      <p>
        To solve this, we need to provide an alternate key, and we can do that by using the <code>cid</code> for
        the model.
      </p>
      <blockquote>
        <p>
          The <code>cid</code> property stands for "client id", and it exists for the sole purpose of supporting
          optimistic updates. Every model in Lore is assigned one, and the value is unique to that model. While there
          may be times a model won't have an <code>id</code>, it will <em>always</em> have a <code>cid</code>.
        </p>
        <p>
          You can read more about the <code>cid</code> property <Link to="/models/">here</Link>.
        </p>
      </blockquote>
      <p>
        Update the key to look like this:
      </p>
      <Markdown type="jsx" text={`
      <InfiniteScrollingList
        ...
        row={(tweet) => {
          return (
            <Tweet key={tweet.id || tweet.cid} tweet={tweet} />
          );
        }}
      />
      `}/>

      <p>
        With that change in place, the warning should go away. In the next step we'll solve the error, and restore
        functionality to the application.
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
      import React from 'react';
      import createReactClass from 'create-react-class';
      import PropTypes from 'prop-types';
      import _ from 'lodash';
      import moment from 'moment';
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
                    <Tweet key={tweet.id || tweet.cid} tweet={tweet} />
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
                      const isOptimistic = !tweet.id;
                      const isNew = moment(tweet.data.createdAt).diff(timestamp) > 0;
                      return isOptimistic || isNew;
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

      });
      `}/>

      <h2>
        Next Steps
      </h2>

      <p>
        In the next section we'll <Link to="/quickstart/optimistic/step-4/">fix the error and restore functionality to the
        application</Link>.
      </p>
    </Template>
  )
};
