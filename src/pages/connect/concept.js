import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Connect';
import Markdown from '../../components/Markdown';
import CodeTabs from '../../components/CodeTabs';
import CodeTab from '../../components/CodeTab';
import QuickstartBranch from '../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        Concept
      </h1>
      <p>
        The main purpose for the connect decorator is to extract the data components need from the Store and provide it
        through props, or call the appropriate action if that data doesn't exist.
      </p>

      <p>
        The connect decorator will never block the render cycle and is designed to enable a predictable top-down render
        flow (Master component re-renders followed by all children). While components CAN subscribe to the Store, it's not
        intended to be used that way and by default only the Master component is subscribed.
      </p>

      <p>
        <strong>NOTE:</strong> For applications with a HIGH rate of change (or that display a huge amount of data at once)
        this will raise
        performance issues. To address that, you'll need to start preventing certain parts of your application from being
        calculated as part of the render cycle (using <code>shouldComponentUpdate</code> when the data they need hasn't
        changed, but that isn't something Lore can calculate with reasonable certainty as the data that higher level
        components require is not going to say anything about the data that lower level components require, and blocking
        the render cycle at a higher level will prevent lower level components (that perhaps should re-render) from doing
        so. So basically, performance optimization is a topic that will get (and deserves) it's own section in the future.
      </p>

      <h3>
        Usage Examples
      </h3>
      <p>
        Here are some examples of common ways you'll want to use the connect decorator.
      </p>

      <h4>
        Fetching the first page of results
      </h4>
      <p>
        If you want to fetch the first page of posts, you can do so by calling <code>post.find</code>.
      </p>

      <Markdown text={`
      @lore.connect(function(getState, props) {
        return {
          posts: getState('post.find')
        };
      })
      `}/>

      <h4>
        Fetching the first page of filtered results
      </h4>
      <p>
        If you wanted to fetch all the posts created by a specific author, you could do so by passing a "where" clause
        into the <code>post.find</code> call.
      </p>

      <Markdown text={`
      @lore.connect(function(getState, props) {
        return {
          posts: getState('post.find', {
            where: {
              authorId: '123'
            }
          })
        };
      })
      `}/>

      <h4>
        Fetching a specific model based on route parameter
      </h4>
      <p>
        Assuming the applications current route is something like <code>http://myapp.com/posts/123</code>, you can fetch
        the post with the id of "123" using <code>post.byId</code>.
      </p>

      <Markdown text={`
      @lore.connect(function(getState, props) {
        return {
          posts: getState('post.byId', {
            id: props.params.postId
          })
        };
      })
      `}/>

      <h4>
        Fetching the second page of filtered results
      </h4>
      <p>
        <strong>NOTE:</strong> Lore doesn't currently support pagination, but once it does you'll be able to fetch
        additional pages using something like this.
      </p>

      <p>
        Assuming the applications current route is something like <code>http://myapp.com/authors/123/posts?page=2</code>,
        you can fetch the second page of posts for the given author by passing a <code>page</code> parameter to the where
        clause.
      </p>

      <Markdown text={`
      @lore.connect(function(getState, props) {
        return {
          posts: getState('post.find', {
            where: {
              authorId: '123'
            },
            page: 2
          })
        };
      })
      `}/>
    </Template>
  )
};
