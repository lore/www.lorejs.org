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
        Step 1: Normalize Tweet Response
      </h1>

      <p>
        In this step we'll ask the API to populate the user for each tweet, and then teach the application how to
        normalize it.
      </p>

      <QuickstartBranch branch="normalization.1" />


      <h2>
        Request Nested Data
      </h2>
      <p>
        To start, we need to update our network request to ask the API to populate the <code>user</code>. Open
        the <code>Feed</code> component and modify the <code>select()</code> callback to look like this (adding
        the <code>populate</code> parameter to the pagination properties):
      </p>

      <Markdown text={`
      // src/components/Feed.js
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
      `}/>
      <p>
        If you refresh the page, you'll notice it no longer displays correctly.
      </p>

      <h3>
        Why is it not working?
      </h3>
      <p>
        To understand why the application is broken, open the developer tools and take a look at the network
        requests.
      </p>
      <p>
        If you locate the API call to fetch the first page of tweets, you'll see that it now looks
        like <code>http://localhost:1337/tweets?page=1&populate=user</code>, which is what we wanted, and you can
        confirm the user data is nested in the response.
      </p>
      <p>
        But you'll also see that not only are we still trying to fetch the user, but that the first call to fetch
        a user for a tweet looks like <code>http://localhost:1337/users/%5Bobject%20Object%5D</code> instead
        of <code>http://localhost:1337/users/1</code>.
      </p>
      <p>
        The reason for the strange looking API call is because <code>tweet.data.user</code> used to be a
        number like <code>1</code>, but now it's an object. And since we haven't taught Lore how to process
        nested data, it just passes it along to the component.
      </p>

      <h3>
        Specify Nested Relationships
      </h3>
      <p>
        To fix this issue we need to tell Lore that <code>tweet</code> resources may contain
        nested <code>user</code> data, and that this data should be broken out and converted to
        a <code>user</code> model.
      </p>
      <p>
        To do that open <code>src/models/tweet.js</code> and add another attribute for the <code>user</code> field,
        specifying the <code>type</code> as a <code>model</code> and the associated <code>model</code> to be
        a <code>user</code>:
      </p>
      <Markdown text={`
      export default {

        attributes: {
          user: {
            type: 'model',
            model: 'user'
          }
        },

        ...
      };
      `}/>

      <p>
        With this change in place, refresh the browser you this time the application should load properly and
        you should see only two network requests instead of 6:
      </p>

      <Markdown type="sh" text={`
      [1] XHR finished loading: GET "http://localhost:1337/user"
      [2] XHR finished loading: GET "http://localhost:1337/tweets?page=1&populate=user"
      `}/>

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
        src/models/tweet.js
      </h3>
      <Markdown text={`
      const fields = {
        data: {
          text: ''
        },
        validators: {
          text: [function(value) {
            if (!value) {
              return 'This field is required';
            }
          }]
        },
        fields: [
          {
            key: 'text',
            type: 'text',
            props: {
              label: 'Message',
              placeholder: "What's happening?"
            }
          }
        ]
      };

      export default {

        attributes: {
          user: {
            type: 'model',
            model: 'user'
          }
        },

        dialogs: {
          create: fields,
          update: fields
        }

      }
      `}/>

      <h3>
        src/components/Feed.js
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
        import _ from 'lodash';
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
        import _ from 'lodash';
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

      <h2>
        Next Steps
      </h2>
      <p>
        In the next section we'll add the ability to <Link to="../../filtering/overview/">view all tweets or just
        the ones you created</Link>.
      </p>
    </Template>
  )
};
