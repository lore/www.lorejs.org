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
    <Template
      title="Visual Cues"
      subtitle="Common pattern"
      description={(
        <p>
          Provide the user with a visual indication that some action is being performed but has not
          yet completed (like fetching or updating data).
        </p>
      )}
    >
      <h2>
        Visualization
      </h2>
      <p>
        This video demonstrates what visual cues look like. Screenshots are from the <em>Simply Social</em> prototype
        that <a href="https://www.invisionapp.com/">InVision</a> provides you when you sign up for an account.
      </p>

      <Video videoId="6uJ7Y6p7eBU" />

      <h2>
        Challenge
      </h2>
      <p>
        The core challenge is making sure that any information that components need to know in order to render the correct
        view is contained within the data they're provided.
      </p>

      <h2>
        Implementation
      </h2>
      <p>
        This video describes how Lore implements support for visual cues.
      </p>

      <Video videoId="vSmMg_q_DII" />

      <h2>
        Usage
      </h2>
      <p>
        This section demonstrates how to <em>use</em> the <Link to="/features/principles/data-driven/">data
        structure provided by Lore</Link> so please read that first if you're unfamiliar with the data structure.
      </p>

      <p>
        Data can go through a lot of different states during the lifecycle of an application. Lore calls these
        states <code>PayloadStates</code>, after the <code>payload</code> field in the actions dispatched to the
        Redux store, and accounts for the following scenarios by default:
      </p>

      <ul className="list-disc pl-10">
        <li>
          Data being <strong>fetched</strong>
        </li>
        <li>
          Data being <strong>created</strong>
        </li>
        <li>
          Data being <strong>updated</strong>
        </li>
        <li>
          Data being <strong>deleted</strong>
        </li>
      </ul>

      <p>
        It also accounts for error conditions on each of those scenarios:
      </p>

      <ul className="list-disc pl-10">
        <li>
          Error while <strong>fetching</strong> data
        </li>
        <li>
          Error while <strong>creating</strong> data
        </li>
        <li>
          Error while <strong>updating</strong> data
        </li>
        <li>
          Error while <strong>deleting</strong> data
        </li>
      </ul>

      <p>
        And finally it accounts for the scenario where <em>nothing</em> is happening to data, after the transient state has been
        resolved.
      </p>
      <p>
        All of these scenarios are represented as constants in a file
        called <code>PayloadStates</code> at <code>src/constants/PayloadStates.js</code> in your
        project. That file looks like this:
      </p>


      <Code text={`
      PayloadStates = {
        INITIAL_STATE: 'INITIAL_STATE',

        RESOLVED   : 'RESOLVED',
        NOT_FOUND: 'NOT_FOUND',
        DELETED: 'DELETED',

        CREATING: 'CREATING',
        UPDATING: 'UPDATING',
        DELETING: 'DELETING',
        FETCHING: 'FETCHING',

        ERROR_CREATING: 'ERROR_CREATING',
        ERROR_UPDATING: 'ERROR_UPDATING',
        ERROR_DELETING: 'ERROR_DELETING',
        ERROR_FETCHING: 'ERROR_FETCHING',

        MANAGED: 'MANAGED'
      }
      `}/>

      <p>
        When you need to communicate the state of some resource to your user, you can do it by comparing
        the <code>state</code> property on that resource to one of the payload states and changing what you
        render according.
      </p>
      <p>
        The main scenarios are provided below:
      </p>

      <h3>
        State: Resolved
      </h3>
      <p>
        This is the <em>static</em> state of data, when it exists and is not being acted upon. An example <code>post</code> might look like this:
      </p>

      <Code text={`
      post = {
        id: 1,
        cid: 'c1',
        state: 'RESOLVED',
        data: {
          id: 1,
          title: 'Cornbread is Yummy'
        },
        error: {}
      }
      `}/>

      <p>
        The fact that <code>id</code> has a value tells us this resource exists on the server. And the <code>state</code> is set to <code>RESOLVED</code> to
        signify that this resource is not being modified or deleted.
      </p>

      <p>
        You can also think of resolved resources as the default rendering state, like this:
      </p>

      <Code text={`
      Post.propTypes = {
        post: PropTypes.object.isRequired
      };

      function Post(props) {
        const { post } = props.post;

        return (
          <div key={post.id} className="post">
            {post.data.title}
          </div>
        );
      }
      `}/>

      <h3>
        State: Creating
      </h3>
      <p>
        An example <code>post</code> for a resource being created might look like this:
      </p>

      <Code text={`
      post = {
        id: undefined,
        cid: 'c1',
        state: 'CREATING',
        data: {
          title: 'Cornbread is Yummy'
        },
        error: {}
      }
      `}/>

      <p>
        The <code>id</code> is undefined because the resource doesn't exist on the server yet. The <code>data</code> field contains whatever
        properties were sent to the server. And the <code>state</code> is set to <code>CREATING</code> to signify that this resource is in the
        process of being created.
      </p>

      <p>
        When rendering a resource being created, it's recommended that you modifying the styling or content of
        the component to provide a visual indication of this state to the user. If you're rendering a list of
        components and need a <code>key</code> to avoid React warnings you can use the <code>cid</code> property.
      </p>

      <Code text={`
      Posts.propTypes = {
        posts: PropTypes.object.isRequired
      };

      function Posts(props) {
        const { posts } = props.posts;

        if (posts.state === PayloadStates.CREATING) {
          return (
            <div key={post.cid} className="post creating">
              {post.data.title}
            </div>
          );
        }

        // todo: render RESOLVED state
      }
      `}/>

      <h3>
        State: Updating
      </h3>
      <p>
        An example <code>post</code> for a resource being updated might look like this:
      </p>

      <Code text={`
      post = {
        id: 1,
        cid: 'c1',
        state: 'UPDATING',
        data: {
          id: 1,
          title: 'Cornbread is SUPER Yummy'
        },
        error: {}
      }
      `}/>

      <p>
        The <code>data</code> field contains whatever properties were sent to the server, and
        the <code>state</code> is set to <code>UPDATING</code> to signify that this resource is in
        the process of being updated.
      </p>

      <p>
        When rendering a resource being updated, it's recommended that you modifying the styling or content of the component
        to provide a visual indication of this state to the user.
      </p>

      <Code text={`
      Posts.propTypes = {
        posts: PropTypes.object.isRequired
      };

      function Posts(props) {
        const { posts } = props.posts;

        if (posts.state === PayloadStates.UPDATING) {
          return (
            <div key={post.id} className="post updating">
              {post.data.title}
            </div>
          );
        }

        // todo: render RESOLVED state
      }
      `}/>

      <h3>
        State: Deleting
      </h3>
      <p>
        An example <code>post</code> for a resource being deleted might look like this:
      </p>

      <Code text={`
      post = {
        id: 1,
        cid: 'c1',
        state: 'DELETING',
        data: {
          id: 1,
          title: 'Cornbread is Yummy'
        },
        error: {}
      }
      `}/>

      <p>
        The <code>state</code> is set to <code>DELETING</code> to signify that this resource is in the process of being deleted.
      </p>

      <p>
        When rendering a resource being deleting, it's recommended that you modifying the styling or content of the component
        to provide a visual indication of this state to the user.
      </p>

      <Code text={`
      Posts.propTypes = {
        posts: PropTypes.object.isRequired
      };

      function Posts(props) {
        const { posts } = props.posts;

        if (posts.state === PayloadStates.DELETING) {
          return (
            <div key={post.id} className="post deleting">
              {post.data.title}
            </div>
          );
        }

        // todo: render RESOLVED state
      }
      `}/>

      <h3>
        State: Fetching
      </h3>
      <p>
        An example <code>post</code> for a resource being fetched might look like this:
      </p>

      <Code text={`
      post = {
        id: 1,
        cid: 'c1',
        state: 'FETCHING',
        data: {},
        error: {}
      }
      `}/>

      <p>
        The <code>data</code> field is empty because the server's response is used to populate it, and all we know right now is the <code>id</code>
        of the resource we want to fetch. The <code>state</code> is set to <code>FETCHING</code> to signify that this resource is in the process of
        being fetched.
      </p>

      <p>
        When rendering a resource being fetched, it's recommended that you modifying the styling or content of the application
        to provide a visual indication of this state to the user.
      </p>

      <Code text={`
      Posts.propTypes = {
        posts: PropTypes.object.isRequired
      };

      function Posts(props) {
        const { posts } = props.posts;

        if (posts.state === PayloadStates.FETCHING) {
          return (
            <div>
              Loading post...
            </div>
          );
        }

        // todo: render RESOLVED state
      }
      `}/>

      <h3>
        State: Error Creating
      </h3>
      <p>
        When there is an error creating a resource the data structure might look like this:
      </p>

      <Code text={`
      post = {
        id: undefined,
        cid: 'c1',
        state: 'ERROR_CREATING',
        data: {
          title: 'Cornbread is Yummy'
        },
        error: {
          statusCode: 409,
          message: 'Title already exists'
        }
      }
      `}/>

      <p>
        The <code>state</code> will be updated to <code>ERROR_CREATING</code>, letting us know that we were <em>trying</em> to create this resource but
        something went wrong. The <code>error</code> field will be populated with whatever error message the server communicates back.
      </p>

      <p>
        When rendering a resource with an error, it's recommended that you modifying the styling or content of the component
        to provide a visual indication of this state to the user.
      </p>

      <Code text={`
      Posts.propTypes = {
        posts: PropTypes.object.isRequired
      };

      function Posts(props) {
        const { posts } = props.posts;

        if (posts.state === PayloadStates.ERROR_CREATING) {
          return (
            <div key={post.cid} className="post">
              <span className="error">
                {post.error.message}
              </span>
              {post.data.title}
            </div>
          );
        }

        // todo: render RESOLVED state
      }
      `}/>

      <h3>
        State: Error Updating
      </h3>
      <p>
        When there is an error creating a resource the data structure might look like this:
      </p>

      <Code text={`
      post = {
        id: 1,
        cid: 'c1',
        state: 'ERROR_UPDATING',
        data: {
          id: 1,
          title: 'Cornbread is SUPER Yummy'
        },
        error: {
          statusCode: 409,
          message: 'Title already exists'
        }
      }
      `}/>

      <p>
        The <code>state</code> will be updated to <code>ERROR_UPDATING</code>, letting us know that we were <em>trying</em> to update this resource but
        something went wrong. The <code>error</code> field will be populated with whatever error message the server communicates back.
      </p>

      <p>
        When rendering a resource with an error, it's recommended that you modifying the styling or content of the component
        to provide a visual indication of this state to the user.
      </p>

      <Code text={`
      Posts.propTypes = {
        posts: PropTypes.object.isRequired
      };

      function Posts(props) {
        const { posts } = props.posts;

        if (posts.state === PayloadStates.ERROR_UPDATING) {
          return (
            <div key={post.id} className="post">
              <span className="error">
                {post.error.message}
              </span>
              {post.data.title}
            </div>
          );
        }

        // todo: render RESOLVED state
      }
      `}/>

      <h3>
        State: Error Deleting
      </h3>
      <p>
        When there is an error creating a resource the data structure might look like this:
      </p>

      <Code text={`
      post = {
        id: 1,
        cid: 'c1',
        state: 'ERROR_DELETING',
        data: {
          id: 1,
          title: 'Cornbread is SUPER Yummy'
        },
        error: {
          statusCode: 403,
          message: 'Not authorized'
        }
      }
      `}/>

      <p>
        The <code>state</code> will be updated to <code>ERROR_DELETING</code>, letting us know that we were <em>trying</em> to delete this resource but
        something went wrong. The <code>error</code> field will be populated with whatever error message the server communicates back.
      </p>

      <p>
        When rendering a resource with an error, it's recommended that you modifying the styling or content of the component
        to provide a visual indication of this state to the user.
      </p>

      <Code text={`
      Posts.propTypes = {
        posts: PropTypes.object.isRequired
      };

      function Posts(props) {
        const { posts } = props.posts;

        if (posts.state === PayloadStates.ERROR_DELETING) {
          return (
            <div key={post.id} className="post">
              <span className="error">
                {post.error.message}
              </span>
              {post.data.title}
            </div>
          );
        }

        // todo: render RESOLVED state
      }
      `}/>

      <h3>
        State: Error Fetching
      </h3>
      <p>
        When there is an error creating a resource the data structure might look like this:
      </p>

      <Code text={`
      post = {
        id: 1,
        cid: 'c1',
        state: 'ERROR_FETCHING',
        data: {},
        error: {
          statusCode: 403,
          message: 'Not authorized'
        }
      }
      `}/>

      <p>
        The <code>state</code> will be updated to <code>ERROR_FETCHING</code>, letting us know that we were <em>trying</em> to fetch this resource but
        something went wrong. The <code>error</code> field will be populated with whatever error message the server communicates back.
      </p>

      <p>
        When rendering a resource with an error, it's recommended that you modifying the styling or content of the component
        to provide a visual indication of this state to the user.
      </p>

      <Code text={`
      Posts.propTypes = {
        posts: PropTypes.object.isRequired
      };

      function Posts(props) {
        const { posts } = props.posts;

        if (posts.state === PayloadStates.ERROR_FETCHING) {
          return (
            <div className="error">
              Error fetching post :(
            </div>
          );
        }

        // todo: render RESOLVED state
      }
      `}/>
    </Template>
  )
};
