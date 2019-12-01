import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Features';
import Code from '../../../components/Code';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';
import Video from '../../../components/Video';

export default (props) => {
  return (
    <Template>
      <h1>
        Optimistic Updates
      </h1>
      <p>
        Useful for providing the application with a feeling a snappy responsiveness by assuming server calls will
        be successful.
      </p>

      <h2>
        Visualization
      </h2>
      <p>
        This video demonstrates what optimistic updates looks like. Screenshots are from
        the <em>Simply Social</em> prototype that <a href="https://www.invisionapp.com/">Invision</a> provides
        you when you sign up for an account.
      </p>

      <Video videoId="y9SoJJqR_C8" />

      <h2>
        Optimistic Updates: Architecture
      </h2>
      <p>
        Challenge when implementing Optimistic Updates and architectural approach Lore uses to address it.
      </p>

      <h3>
        Challenge
      </h3>
      <p>
        The challenge with incorporating support for optimistic updates is making sure we can merge the optimistic data
        that we <em>assume</em> will be created successfully with the real data once it comes back from the server, and all
        while preventing duplicate data from appearing in the reducers.
      </p>

      <h3>
        Implementation
      </h3>
      <p>
        This video describes how Lore provides support for optimistic updates.
      </p>

      <Video videoId="1NX-reP6yxQ" />

      <h2>
        Usage
      </h2>
      <p>
        While optimistically updating data can provide a good user experience, implementing it can be a little tricky, as
        you are adding data to an application <em>before</em> it exists, and then you need to <em>sync</em> that data with a server response
        when it comes back. If done incorrectly, you can easily end up with duplicate data in your application, and you may
        end up seeing the optimistic data being displayed <em>next</em> to the real data instead of being merged <em>with</em> it.
      </p>

      <p>
        Let's go through an example to illustrate the issue to demonstrate how Lore addresses it.
      </p>

      <p>
        Let's say you have an API with a <code>/posts</code> endpoint, and you want to create a new post. Somewhere in your application
        you'll make a call to the <code>post.create</code> action like this:
      </p>

      <Code text={`
      lore.action.post.create({
        title: 'Cornbread is Yummy'
      })
      `}/>

      <p>
        This will then send a network request to the API server that looks like this:
      </p>

      <Code text={`
      POST http://api.example.com/posts

      {
        title: 'Cornbread is Yummy'
      }
      `}/>

      <p>
        Now while that network request is in flight, the <code>create</code> blueprint is still going to fire action to the Redux store
        describing the data the user just "created". That action will look like this:
      </p>

      <Code text={`
      action = {
        type: 'ADD_POST',
        payload: {
          id: undefined,
          cid: 'c1',
          state: 'CREATING',
          data: {
            title: 'Cornbread is Yummy'
          },
          error: {}
        }
      }
      `}/>

      <p>
        The <code>action.type</code> field tells the reducers that we need to ADD this POST to the Redux store. Once that happens, the
        application will rerender. Now let's say we have a component renders a list of posts:
      </p>

      <Code text={`
      @connect(function(getState, props) {
        return {
          posts: getState('post.find')
        };
      })
      class Component extends React.Component {

        static propTypes = {
          posts: React.PropTypes.object.isRequired
        };

        renderPost: function(post) {
          return (
            <Post key={post.id} post={post} />
          );
        },

        render() {
          var posts = this.props.posts;

          return (
            <ul>
              {posts.data.map(this.renderPost)}
            </ul>
          )
        }
      };
      `}/>

      <p>
        One problem we'll hit quickly is that React will throw a warning because <code>post.id</code> is <code>undefined</code>, which means the key
        won't exist. It won't necessary damage the user experience, but we do want to fix React warnings. This is one use for
        the <code>cid</code> field; acting as a fallback when the id doesn't exist. So if we change our <code>renderPost</code> to this the warning
        will go away (we'll use the <code>cid</code> if the <code>id</code> is undefined):
      </p>

      <Code text={`
      @connect(function(getState, props) {
        return {
          posts: getState('post.find')
        };
      })
      class Component extends React.Component {

        static propTypes = {
          posts: React.PropTypes.object.isRequired
        };

        renderPost: function(post) {
          return (
            <Post key={post.id || post.cid} post={post} />
          );
        },

        render() {
          var posts = this.props.posts;

          return (
            <ul>
              {posts.data.map(this.renderPost)}
            </ul>
          )
        }
      };
      `}/>

      <p>
        Now that's <em>a</em> problem but it's not <em>the</em> problem. <em>The</em> problem happens when the
        real data comes back from the server. Let's pretend this is the response from the API server:
      </p>

      <Code text={`
      201 https://api.myapp.com/posts

      {
        id: 1,
        title: 'Cornbread is Yummy'
      }
      `}/>

      <p>
        The issue is this: the <code>create</code> method needs to emit an action to populate the Redux store with
        server response, but <em>how do we let the reducers know this is the same data</em>? Normally
        an <code>id</code> is used to anchor data, to say <em>this and that are the same thing</em>. But we added
        our optimistic data before the id existed...so what do we do?
      </p>

      <p>
        The answer lies in the <code>cid</code> field Lore adds to all data that gets fetched or created. To
        illustrate let's take a look at a simplified blueprint for the <code>create</code> method:
      </p>

      <Code text={`
      module.exports = function create(params) {
        return function(dispatch) {
          var model = new Post(params);

          model.save().then(function() {
            dispatch({
              type: ActionTypes.UPDATE_POST,
              payload: payload(model, PayloadStates.RESOLVED)
            });
          }).catch(function(response) {
            var error = response.data;

            dispatch({
              type: ActionTypes.UPDATE_POST,
              payload: payload(model, PayloadStates.ERROR_CREATING, error)
            });
          });

          return dispatch({
            type: ActionTypes.ADD_POST,
            payload: payload(model, PayloadStates.CREATING)
          });
        };
      };
      `}/>

      <p>
        See the call to create the Post at the top, that looks like <code>var model = new Post(params)</code>? The <code>Post</code> constructor
        there is an instance of <a href="https://github.com/lore/lore/tree/master/packages/lore-models">lore-models</a>, the interface
        and behavior of which is heavily inspired by <a href="http://backbonejs.org/">Backbone's Models and Collections</a>. Once the
        post instance is created, the data for the resulting <code>model</code> looks like this:
      </p>

      <Code text={`
      model = {
        id: undefined,
        cid: 'c1',
        attributes: {
          title: 'Cornbread is Yummy'
        }
      }
      `}/>

      <p>
        So the <code>cid</code> is actually created when the Post <code>model</code> is created. These models are used as the AJAX abstraction tier
        for Lore, and when we invoke <code>model.save()</code> the network request is sent to the API server to create the Post resource.
        The dispatch call at the bottom of the <code>create</code> method creates and dispatches the action containing the optimistic
        data.
      </p>

      <p>
        Once the network request comes back, the promise after <code>model.save()</code> is fulfilled, and we dispatch another action. But
        this time the data in the <code>model</code> looks like this:
      </p>

      <Code text={`
      model = {
        id: 1,
        cid: 'c1',
        attributes: {
          id: 1,
          title: 'Cornbread is Yummy'
        }
      }
      `}/>

      <p>
        The trick here is that the _same function_ dispatches both the optimistic update <em>AND</em> the update once real data
        exists. Because of this, we're able to hold onto the original <code>cid</code>, and our second action will look like this:
      </p>

      <Code text={`
      action = {
        type: 'UPDATE_POST',
        payload: {
          id: 1,
          cid: 'c1',
          state: 'RESOLVED',
          data: {
            id: 1,
            title: 'Cornbread is Yummy'
          },
          error: {}
        }
      }
      `}/>

      <p>
        Now the reducers in the Redux store know they should UPDATE the POST, and because all data fetched or created will have
        a <code>cid</code> the reducers can match data based on <code>cid</code> if the <code>id</code> doesn't exist. And that's exactly what happens. The
        first ADD_POST action is added to the Redux store, and the store can tell it's missing an <code>id</code>. So when the second
        UPDATE_POST action is dispatched later, the reducers can use to <code>cid</code> field to know what data is the same and merge it
        together.
      </p>

      <p>
        It's important to re-iterate that this method <em>only works because the optimistic and real responses are part of the
        same method context</em>. This approach <em>DOES NOT</em> work for WebSockets, because there is no equivalent "wait for server
        response" option. Instead, the <code>cid</code> needs to be sent <em>to the server</em> and included _in the response_. Provided you do
        that, you can handle optimistic updates using WebSockets without any issues, and the same principle to add and
        update/merge the data applies.
      </p>
    </Template>
  )
};
