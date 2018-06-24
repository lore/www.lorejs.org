import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';
import loadingImage from '../../../assets/images/quickstart/infinite-scrolling/step-3a.png';
import image from '../../../assets/images/quickstart/infinite-scrolling/final.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 3: Convert the Feed
      </h1>

      <p>
        In this step we'll convert our Feed component to use Infinite Scrolling.
      </p>

      <QuickstartBranch branch="infinite-scrolling.3" />

      <h3>
        Update the Feed Component
      </h3>
      <p>
        There are a lot of things that need to coordinate to get Infinite Scrolling to behave correctly, so we're
        going to be building our view up slowly, and explain a bit along the way.
      </p>
      <p>
        To start, open the <code>Feed</code> component and modify it to look like this:
      </p>

      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        import React from 'react';
        import createReactClass from 'create-react-class';
        import PropTypes from 'prop-types';
        import InfiniteScrollingList from './InfiniteScrollingList';
        import Tweet from './Tweet';

        export default createReactClass({
          displayName: 'Feed',

          render() {
            return (
              <div className="feed">
                <h2 className="title">
                  Feed
                </h2>
                <InfiniteScrollingList
                  select={(getState) => {
                    return getState('tweet.find', {
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
                />
              </div>
            );
          }

        });
        `}/>
        <CodeTab syntax="ES6" text={`
        import React from 'react';
        import PropTypes from 'prop-types';
        import InfiniteScrollingList from './InfiniteScrollingList';
        import Tweet from './Tweet';

        class Feed extends React.Component {

          render() {
            return (
              <div className="feed">
                <h2 className="title">
                  Feed
                </h2>
                <InfiniteScrollingList
                  select={(getState) => {
                    return getState('tweet.find', {
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
        import InfiniteScrollingList from './InfiniteScrollingList';
        import Tweet from './Tweet';

        class Feed extends React.Component {

          render() {
            return (
              <div className="feed">
                <h2 className="title">
                  Feed
                </h2>
                <InfiniteScrollingList
                  select={(getState) => {
                    return getState('tweet.find', {
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
                />
              </div>
            );
          }

        }

        export default Feed;
        `}/>
      </CodeTabs>

      <p>
        In the code above, we're providing two props to <code>InfiniteScrollingList</code>.
      </p>
      <ul>
        <li>
          <p>
            The first prop is called <code>select</code>, and we're using it to tell the list <em>what data to render</em>.
            It's essentially a version of <code>connect</code>, but exposed as a prop instead of a decorator. In this
            case, we're fetching the first page of tweets, sorted in descending order by their <code>createdAt</code> date.
          </p>
        </li>
        <li>
          <p>
            The second prop is called <code>row</code>, and we're using it to tell the list <em>how to render the
            data</em>. It will be invoked for each tweet in the list, and whatever the function returns is what will be
            rendered for that tweet.
          </p>
        </li>
      </ul>
      <p>
        If you refresh the browser, you'll see the application renders, but it's stuck at a loading screen:
      </p>

      <img className="drop-shadow" src={loadingImage} />

      <h3>
        Why is this happening?
      </h3>
      <p>
        The reason the application is stuck at a loading screen is because the data being rendering is out of
        date. Even though the data has returned from the API, the list is still rendering the <em>original</em> data,
        back when the state was <code>FETCHING</code>.
      </p>
      <p>
        We don't see this issue when using the <code>connect</code> decorator because that data is automatically
        refreshed every time the application re-renders. But that kind of always-up-to-date behavior is only
        possible when we're <strong>explicit</strong> about what data we want.
      </p>
      <p>
        In this case, the only thing we're explicit about is the <em>first</em> page of data, which we
        provide via the <code>select</code> prop. The other pages are all derived, based on
        the <code>page</code> number, and since this component will be managing <strong>many pages of data</strong>,
        we're going to need to give it some help to know how to refresh the data for each of those pages.
      </p>

      <h3>
        Refresh the Data
      </h3>
      <p>
        To fix this, provide a prop to <code>InfiniteScrollingList</code> called <code>refresh</code> that looks
        like this:
      </p>

      <Markdown text={`
      // src/components/Feed.js
      ...
      <InfiniteScrollingList
        select={(getState) => {
          return getState('tweet.find', {
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
      />
      ...
      `}/>

      <p>
        This method will invoked each time the application re-renders, for each page of data the list has. And
        because the <code>query</code> is automatically attached to every collection, we can simply re-use it,
        and fetch the latest version of that page.
      </p>
      <p>
        With that change in place, the application is now rendering the first page of tweets.
      </p>

      <h3>
        Load More Pages
      </h3>
      <p>
        To load more tweets, import <code>lodash</code> and provide another prop
        called <code>selectNextPage</code> that will describe how to fetch the next page of tweets:
      </p>

      <Markdown text={`
      // src/components/Feed.js
      import _ from 'lodash';
      ...
      <InfiniteScrollingList
        select={(getState) => {
          return getState('tweet.find', {
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
      `}/>

      <p>
        This method will be invoked when the user presses the "Load More" button, and will be provided the last page
        of data. We then inspect the <code>query</code> for the <code>lastPage</code> to get the latest page number,
        and then iterate it by one to request the next page of tweets.
      </p>
      <p>
        Refresh the browser, and you should now have a button that says "LoadMore" at the bottom of the tweets.
        Clicking this button will cause the next page to load, and if you continue to click it until there are no
        more pages of data, the button will disappear.
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
        import InfiniteScrollingList from './InfiniteScrollingList';
        import Tweet from './Tweet';

        export default createReactClass({
          displayName: 'Feed',

          render() {
            return (
              <div className="feed">
                <h2 className="title">
                  Feed
                </h2>
                <InfiniteScrollingList
                  select={(getState) => {
                    return getState('tweet.find', {
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
        import InfiniteScrollingList from './InfiniteScrollingList';
        import Tweet from './Tweet';

        class Feed extends React.Component {

          render() {
            return (
              <div className="feed">
                <h2 className="title">
                  Feed
                </h2>
                <InfiniteScrollingList
                  select={(getState) => {
                    return getState('tweet.find', {
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
        import InfiniteScrollingList from './InfiniteScrollingList';
        import Tweet from './Tweet';

        class Feed extends React.Component {

          render() {
            return (
              <div className="feed">
                <h2 className="title">
                  Feed
                </h2>
                <InfiniteScrollingList
                  select={(getState) => {
                    return getState('tweet.find', {
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
        Next we're going to <Link to="../../cleanup/overview/">clean up our code base bit.</Link>.
      </p>
    </Template>
  )
};
