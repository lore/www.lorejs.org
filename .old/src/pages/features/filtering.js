import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Features';
import Markdown from '../../components/Markdown';
import CodeTabs from '../../components/CodeTabs';
import CodeTab from '../../components/CodeTab';
import QuickstartBranch from '../../components/QuickstartBranch';
import Video from '../../components/Video';

export default (props) => {
  return (
    <Template>
      <h1>
        Filtering
      </h1>
      <p>
        Useful for viewing a subset of data that matches a specific criteria.
      </p>

      <h3>
        Visualization
      </h3>
      <p>
        This video demonstrates what filtering looks like. Screenshots are from the <em>Simply Social</em> prototype
        that <a href="https://www.invisionapp.com/">Invision</a> provides you when you sign up for an account.
      </p>

      <Video videoId="2Q8sH_pxYoo" />

      <h3>
        Usage
      </h3>
      <p>
        Let's say you have an API with a <code>/posts</code> endpoint, and you want to retrieve a list of Posts created by the Author
        whose id is <code>123</code>. To do that, pass a <code>where</code> clause to the <code>connect</code> call like this:
      </p>

      <Markdown text={`
      @connect(function(getState, props) {
        return {
          posts: getState('post.find', {
            where: {
              authorId: '123'
            }
          })
        };
      })
      `}/>

      <p>
        Assuming your API server is located at <code>http://api.example.com</code>, this call will get transformed into the following
        network request:
      </p>

      <Markdown text={`
      http://api.example.com/posts?authorId=123
      `}/>

      <p>
        Lore's default behavior is to convert the <code>where</code> clause into a query string. So if you passed in a second property
        to the <code>where</code> clause, like this:
      </p>

      <Markdown text={`
      where: {
        authorId: '123',
        title: 'Bacon'
      }
      `}/>

      <p>
        It would get converted into this network request:
      </p>

      <Markdown text={`
      http://api.example.com/posts?authorId=123&title=Bacon
      `}/>

      <p>
        Since it will take time for the network request to complete, let's focus on the component next. The component is going
        to receive a prop named <code>posts</code> containing the result of our request for data.
      </p>

      <Markdown text={`
      @connect(function(getState, props) {
        return {
          posts: getState('post.find', {
            where: {
              authorId: '123'
            }
          })
        };
      })
      class Component extends React.Component {

        static propTypes = {
          posts: React.PropTypes.object.isRequired
        };

        render() {
          var posts = this.props.posts;

          // todo: render the posts
        }
      };
      `}/>

      <p>
        Since our network request was just sent out, we won't have any data yet. So <code>posts</code> will look like this:
      </p>

      <Markdown text={`
      posts = {
        state: 'FETCHING',
        data: [],
        query: { where: { authorId: '123' } }
      }
      `}/>

      <p>
        We don't have any data to render yet, but the <code>query</code> field is a stringified JSON that tells us what data we asked for,
        and the <code>state</code> field tells us that data is being fetched. So let's render a loading message while we're waiting for the
        data to return from the API server.
      </p>

      <Markdown text={`
      @connect(function(getState, props) {
        return {
          posts: getState('post.find', {
            where: {
              authorId: props.params.authorId
            }
          })
        };
      })
      class Component extends React.Component {

        static propTypes = {
          posts: React.PropTypes.object.isRequired
        };

        render() {
          var posts = this.props.posts;

          if (posts.state === PayloadStates.FETCHING) {
            return (
              <div>Loading posts...</div>
            );
          }

          // todo: render posts
        }
      };
      `}/>

      <p>
        After a time our network request will come back, the Redux store will be updated, and our component will be rerendered.
        But this time we'll actually have data, so our <code>posts</code> will look like this:
      </p>

      <Markdown text={`
      posts = {
        state: 'RESOLVED',
        data: [
          {
            id: '1',
            cid: 'c1',
            state: 'RESOLVED',
            data: {
              title: 'Bacon is yummy',
              authorId: '123'
            }
          },
          {
            id: '2',
            cid: 'c1',
            state: 'RESOLVED',
            data: {
              title: 'An ode to Bacon',
              authorId: '123'
            }
          }
        ],
        query: { where: { authorId: '123' } }
      }
      `}/>

      <p>
        The <code>state</code> value of <code>RESOLVED</code> let's you know that nothing is happening; the request has been resolved. And now, our
        <code>data</code> property contains an array of <code>Posts</code>. So let's render that array to display the lists of posts by that author:
      </p>

      <Markdown text={`
      connect(function(getState, props) {
          return {
            posts: getState('post.find', {
              where: {
                authorId: props.params.authorId
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
              <ul>
                {posts.data.map((post) => {
                  return (
                    <li key={post.id || post.cid}>
                      {post.data.title}
                    </li>
                  );
                })}
              </ul>
            );
          }
        })
      );
      `}/>

      <h3>
        Example Code
      </h3>
      <p>
        Example code showing how to filter data.
      </p>

      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        connect(function(getState, props) {
            return {
              posts: getState('post.find', {
                where: {
                  authorId: props.params.authorId
                }
              })
            };
          })(
          createReactClass({

            propTypes: {
              posts: React.PropTypes.object.isRequired
            },

            renderPost: function(post) {
              return (
                <li key={post.id || post.cid}>
                  {post.data.title}
                </li>
              );
            },

            render: function() {
              var posts = this.props.posts;

              if (posts.state === PayloadStates.FETCHING) {
                return (
                  <div>Loading posts...</div>
                );
              }

              return (
                <ul>
                  {posts.data.map(this.renderPost)}
                </ul>
              );
            }
          })
        );
        `}/>
        <CodeTab syntax="ES6" text={`
        class Component extends React.Component {

          constructor(props) {
            super(props);
            this.renderPost = this.renderPost.bind(this);
          }

          renderPost(post) {
            return (
              <li key={post.id || post.cid}>
                {post.data.title}
              </li>
            );
          }

          render() {
            var posts = this.props.posts;

            if (posts.state === PayloadStates.FETCHING) {
              return (
                <div>Loading posts...</div>
              );
            }

            return (
              <ul>
                {posts.data.map(this.renderPost)}
              </ul>
            );
          }
        };

        Component.PropTypes = {
          posts: React.PropTypes.object.isRequired
        };

        export default connect(function(getState, props) {
          return {
            posts: getState('post.find', {
              where: {
                authorId: props.params.authorId
              }
            })
          };
        })(Component);
        `}/>
        <CodeTab syntax="ESNext" text={`
        @connect(function(getState, props) {
          return {
            posts: getState('post.find', {
              where: {
                authorId: props.params.authorId
              }
            })
          };
        })
        class Component extends React.Component {

          static propTypes = {
            posts: React.PropTypes.object.isRequired
          };

          constructor(props) {
            super(props);
            this.renderPost = this.renderPost.bind(this);
          }

          renderPost(post) {
            return (
              <li key={post.id || post.cid}>
                {post.data.title}
              </li>
            );
          }

          render() {
            var posts = this.props.posts;

            if (posts.state === PayloadStates.FETCHING) {
              return (
                <div>Loading posts...</div>
              );
            }

            return (
              <ul>
                {posts.data.map(this.renderPost)}
              </ul>
            );
          }
        };
        `}/>
      </CodeTabs>
    </Template>
  )
};
