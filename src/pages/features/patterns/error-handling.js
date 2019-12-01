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
        Error Handling
      </h1>
      <p>
        Useful for informing the user when things don't go as planned and providing them with the ability to correct
        the error and try again.
      </p>

      <h2>
        Visualization
      </h2>
      <p>
        This video demonstrates what error handling looks like. Screenshots are from the <em>Simply Social</em> prototype
        that <a href="https://www.invisionapp.com/">Invision</a> provides you when you sign up for an account.
      </p>

      <Video videoId="rQagIXhEK7s" />

      <h2>
        Architecture
      </h2>
      <h3>
        Challenge
      </h3>
      <p>
        The challenge when incorporating error handling into your applications architecture is making sure server errors
        are communicated back to components, so we can can inform the user when something bad happened and at least give
        them a chance to copy out their data or fix and retry the request.
      </p>

      <h3>
        Implementation
      </h3>
      <p>
        This video describes how Lore provides support for error handling.
      </p>

      <Video videoId="P27Ow1NyGTg" />

      <h2>
        Usage
      </h2>
      <p>
        As described by the <Link to="/features/principles/data-driven/">Data Driven</Link> principle and {' '}
        <Link to="/features/patterns/visual-cues/">Visual Cues</Link> the default actions in Lore include payload
        states for <code>ERROR_FETCHING</code>, <code>ERROR_CREATING</code>, <code>ERROR_UPDATING</code> and
        <code>ERROR_DELETING</code>. There is also an <code>error</code> field included in every <code>model</code> and <code>collection</code> that
        defaults to an empty object;
      </p>

      <Code text={`
      model = {
        id: undefined,
        cid: 'c1',
        state: 'CREATING',
        data: {
          title: 'Cornbread is Yummy'
        },
        error: {}
      }

      collection = {
        state: 'FETCHING',
        data: [],
        query: {
          where: { authorId: '123' }
        },
        meta: {},
        error: {}
      }
      `}/>

      <p>
        If an action makes a network request to create a model, that request might look like this:
      </p>

      <Code text={`
      POST https://api.myapp.com/posts

      {
        title: 'Cornbread is Yummy'
      }
      `}/>

      <p>
        If that title already exists, and the API has some business rule that won't allow multiple posts with the same title,
        it may send back a network request with a 409 status code to indicate there was a conflict, and (hopefully) include
        a helpful message about what the specific issue is. Let's say the body of the response looks like this:
      </p>

      <Code text={`
      {
        statusCode: 409,
        message: 'Post already exists with that title'
      }
      `}/>

      <p>
        The default behavior of Lore's built-in actions is to take <em>any</em> error response (400/500 level status codes) and
        embed the body of the response in the <code>error</code> field of the payload. So if you tried to create a post like above, and
        the server returned the error like above, the <code>model</code> would be transformed to look like this:
      </p>

      <Code text={`
      model = {
        id: undefined,
        cid: 'c1',
        state: 'ERROR_CREATING',
        data: {
          title: 'Cornbread is Yummy'
        },
        error: {
          statusCode: 409,
          message: 'Post already exists with that title'
        }
      }
      `}/>

      <p>
        And you can access the error from within your components by looking at the <code>model.error</code> field like this:
      </p>

      <Code text={`
      createReactClass({

        propTypes: {
          post: React.PropTypes.object.isRequired
        },

        render: function() {
          var post = this.props.post;

          if (posts.state === PayloadStates.ERROR_CREATING) {
            return (
              <div className="error">
                <div>
                  An error occurred while creating the post:
                </div>
                <div>
                  {post.data.error.message}
                </div>
              </div>
            );
          }

          // todo: render RESOLVED state
        }
      });
      `}/>
    </Template>
  )
};
