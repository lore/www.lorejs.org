import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Features';
import Code from '../../components/Code';
import CodeTabs from '../../components/CodeTabs';
import CodeTab from '../../components/CodeTab';
import QuickstartBranch from '../../components/QuickstartBranch';
import Video from '../../components/Video';

export default (props) => {
  return (
    <Template>
      <h1>
        Infinite Scrolling
      </h1>
      <p>
        Mobile friendly style of pagination that aggregates fetched data into a single scrollable list.
      </p>

      <h3>
        Visualization
      </h3>
      <p>
        This video demonstrates what infinite scrolling looks like. Screenshots are from
        the <em>Simply Social</em> prototype that <a href="https://www.invisionapp.com/">Invision</a> provides you
        when you sign up for an account.
      </p>

      <Video videoId="sPry_VqVT6c" />

      <h3>
        Usage
      </h3>
      <p>
        Infinite Scrolling is a variation on traditional pagination, with two key differences:
      </p>

      <ol>
        <li>
          Instead of <em>replacing</em> the data, we <em>append</em> to the data, so the number of results displayed on screen is always
          increasing.
        </li>
        <li>
          Instead of asking the user <em>which</em> page of data they'd like to view, we always show them the first page, and then
          load each progressively page in order. So we load page 1, then page 2, then page 3, etc.
        </li>
      </ol>

      <p>
        Despite those differences, the infrastructure to support Infinite Scrolling is identical to Pagination, since the way
        data is requested from the API and ultimately cached in the Redux store is the same. The difference lies only in the
        <em>visual experience</em>, making Infinite Scrolling a <em>View</em> concern; something that is managed in the <em>Component</em>.
      </p>

      <p>
        Because of that, it's important that you first understand how Pagination works before tackling Infinite Scrolling, as
        we'll be piggy-backing on that example.
      </p>

      <p>
        Let's start from the part where we are displaying the first page of <code>posts</code>:
      </p>

      <Code text={`
      connect(function(getState, props) {
          return {
            posts: getState('post.find', {
              pagination: {
                page: 1
              }
            })
          };
        })(
        createReactClass({

          propTypes: {
            posts: React.PropTypes.object.isRequired
          },

          render: function() {
            var posts = this.props.posts;

            if (posts.state === PayloadStates.FETCHING) {
              return (
                <div>Loading posts...</div>
              );
            }

            return (
              <div>
                <ul>
                  {posts.data.map((post) => {
                    return (
                      <li key={post.id || post.cid}>
                        {post.data.title}
                      </li>
                    );
                  })}
                </ul>
                { /* todo: render load more button */}
              </div>
            );
          }
        })
      );
      `}/>

      <p>
        Now that we're displaying our first page of data, we need to add a button the user can click to load the next page:
      </p>

      <Code text={`
      connect(function(getState, props) {
          return {
            posts: getState('post.find', {
              pagination: {
                page: 1
              }
            })
          };
        })(
        createReactClass({

          propTypes: {
            posts: React.PropTypes.object.isRequired
          },

          onLoadMore: function() {
            lore.actions.post.find({}, {
              page: 2
            });
          },

          render: function() {
            var posts = this.props.posts;

            if (posts.state === PayloadStates.FETCHING) {
              return (
                <div>Loading posts...</div>
              );
            }

            return (
              <div>
                <ul>
                  {posts.data.map((post) => {
                    return (
                      <li key={post.id || post.cid}>
                        {post.data.title}
                      </li>
                    );
                  })}
                </ul>
                <button onClick={this.onLoadMore}>
                  Load More
                </button>
              </div>
            );
          }
        })
      );
      `}/>

      <p>
        When the user clicks the <code>Load More</code> button, we're going to invoke the <code>post.find</code> action and fetch the second page of
        posts. Note that while this <em>will</em> make a network request and retrieve the second page, and the component <em>will</em> rerender,
        we're not rendering the new data yet.
      </p>

      <p>
        To do that, we first need to create an array in this components state to store all our pages of post data. We'll do that
        in the <code>getInitialState</code> method, and we'll populate it with the first page:
      </p>

      <Code text={`
      connect(function(getState, props) {
          return {
            posts: getState('post.find', {
              pagination: {
                page: 1
              }
            })
          };
        })(
        createReactClass({

          propTypes: {
            posts: React.PropTypes.object.isRequired
          },

          getInitialState: function() {
            return {
              pages: [
                this.props.posts
              ]
            };
          },

          onLoadMore: function() {
            lore.actions.post.find({}, {
              page: 2
            });
          },

          render: function() {
            var posts = this.props.posts;

            if (posts.state === PayloadStates.FETCHING) {
              return (
                <div>Loading posts...</div>
              );
            }

            return (
              <div>
                <ul>
                  {posts.data.map((post) => {
                    return (
                      <li key={post.id || post.cid}>
                        {post.data.title}
                      </li>
                    );
                  })}
                </ul>
                <button onClick={this.onLoadMore}>
                  Load More
                </button>
              </div>
            );
          }
        })
      );
      `}/>

      <p>
        Next we're going to update our <code>render</code> method so that it iterates through each page of posts and combine them into a
        single array of list items for display:
      </p>

      <Code text={`
      connect(function(getState, props) {
          return {
            posts: getState('post.find', {
              pagination: {
                page: 1
              }
            })
          };
        })(
        createReactClass({

          propTypes: {
            posts: React.PropTypes.object.isRequired
          },

          getInitialState: function() {
            return {
              pages: [
                this.props.posts
              ]
            };
          },

          onLoadMore: function() {
            lore.actions.post.find({}, {
              page: 2
            });
          },

          render: function() {
            var pages = this.state.pages;
            var firstPage = pages[0];

            if (firstPage.state === PayloadStates.FETCHING) {
              return (
                <div>Loading posts...</div>
              );
            }

            var allPosts = _.flatten(pages.map(function(posts) {
              return posts.data.map((post) => {
                return (
                  <li key={post.id || post.cid}>
                    {post.data.title}
                  </li>
                );
              });
            }));

            return (
              <div>
                <ul>
                  {allPosts}
                </ul>
                <button onClick={this.onLoadMore}>
                  Load More
                </button>
              </div>
            );
          }
        })
      );
      `}/>

      <p>
        The <code>_.flatten()</code> method is used to transform an array-of-arrays into a single array. In this example, if takes the mapped
        array of list items arrays like <code>[[<li/>], [<li/>]]</code> and flattens them into a single array of list items like <code>[<li/>, <li/>]</code>.
      </p>

      <p>
        So now we're rendering all pages of data, but have a subtle problem; we're not updating the data in that array when
        the store changes, which means our application will always say "Loading posts..." because we never update the first
        page once the data comes back to reflect that the request is <code>RESOLVED</code>. To fix that, we're going to use the <code>componentWillReceiveProps</code>
        method to update the <code>pages</code> array everytime the component rerenders. We'll do this by looking up each page of data
        in the Redux store and recreating the <code>pages</code> array using the most up-to-date data.
      </p>

      <Code text={`
      connect(function(getState, props) {
          return {
            posts: getState('post.find', {
              pagination: {
                page: 1
              }
            })
          };
        })(
        createReactClass({

          propTypes: {
            posts: React.PropTypes.object.isRequired
          },

          contextTypes: {
            store: React.PropTypes.object.isRequired
          },

          getInitialState: function() {
            return {
              pages: [
                this.props.posts
              ]
            };
          },

          componentWillReceiveProps: function(nextProps) {
            var storeState = this.context.store.getState();
            var pages = this.state.pages;

            var nextPages = pages.map(function(posts) {
              var query = JSON.stringify(posts.query);
              return storeState.post.find[query];
            });

            this.setState({
              pages: nextPages
            });
          },

          onLoadMore: function() {
            lore.actions.post.find({}, {
              page: 2
            });
          },

          render: function() {
            var pages = this.state.pages;
            var firstPage = pages[0];

            if (firstPage.state === PayloadStates.FETCHING) {
              return (
                <div>Loading posts...</div>
              );
            }

            var allPosts = _.flatten(pages.map(function(posts) {
              return posts.data.map((post) => {
                return (
                  <li key={post.id || post.cid}>
                    {post.data.title}
                  </li>
                );
              });
            }));

            return (
              <div>
                <ul>
                  {allPosts}
                </ul>
                <button onClick={this.onLoadMore}>
                  Load More
                </button>
              </div>
            );
          }
        })
      );
      `}/>

      <p>
        With that change in place, our component will rerender whenever the store updates, and our <code>pages</code> array will always
        contain the most up-to-date information, which means our component will always display an accurate representation of the
        data. But we still have a problem; while we <em>are</em> fetching the second page of data, because we never add it to our
        <code>pages</code> array, it will never show up in the UI. So let's fix that.
      </p>

      <p>
        To address the issue, we're going to need to modify the <code>onLoadMore</code> method so that it pushes the second page into the
        <code>pages</code> array:
      </p>

      <Code text={`
      connect(function(getState, props) {
          return {
            posts: getState('post.find', {
              pagination: {
                page: 1
              }
            })
          };
        })(
        createReactClass({

          propTypes: {
            posts: React.PropTypes.object.isRequired
          },

          contextTypes: {
            store: React.PropTypes.object.isRequired
          },

          getInitialState: function() {
            return {
              pages: [
                this.props.posts
              ]
            };
          },

          componentWillReceiveProps: function(nextProps) {
            var storeState = this.context.store.getState();
            var pages = this.state.pages;

            var nextPages = pages.map(function(posts) {
              var query = JSON.stringify(posts.query);
              return storeState.post.find[query];
            });

            this.setState({
              pages: nextPages
            });
          },

          onLoadMore: function() {
            var pages = this.state.pages;

            var action = lore.actions.post.find({}, {
              page: 2
            });

            var posts = action.payload;
            pages.push(posts);

            this.setState({
              pages: pages
            });
          },

          render: function() {
            var pages = this.state.pages;
            var firstPage = pages[0];

            if (firstPage.state === PayloadStates.FETCHING) {
              return (
                <div>Loading posts...</div>
              );
            }

            var allPosts = _.flatten(pages.map(function(posts) {
              return posts.data.map((post) => {
                return (
                  <li key={post.id || post.cid}>
                    {post.data.title}
                  </li>
                );
              });
            }));

            return (
              <div>
                <ul>
                  {allPosts}
                </ul>
                <button onClick={this.onLoadMore}>
                  Load More
                </button>
              </div>
            );
          }
        })
      );
      `}/>

      <p>
        Whenever you invoke a built-in action in Lore (an action provided by the framework) it always returns the action it
        dispatched to the Redux store. In this case, we're extracting the <code>payload</code> from the action so that we have a copy of
        the data that represents the section page of requests. That data will look like this:
      </p>

      <Code text={`
      posts = {
        state: 'FETCHING',
        data: [],
        query: { pagination: { page: 2 } }
      }
      `}/>

      <p>
        Because our <code>pages</code> array now contains a second page of posts, and that <code>posts</code> data has a <code>state</code> of <code>FETCHING</code> and
        a <code>query</code> property describing the second page, our component will have all the information it needs to know that we
        <em>are</em> fetching the second page. So we could improve the experience by disabling the <code>Load More</code> button while a new
        page is being fetched.
      </p>

      <p>
        We won't do that here, but for a working example that does (including an example of error handling) see the
        <a href="https://github.com/lore/lore/tree/master/examples/infinite-scrolling">infinite-scrolling example</a> on GitHub.
      </p>


    </Template>
  )
};
