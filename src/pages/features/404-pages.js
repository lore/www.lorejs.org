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
        404 Pages
      </h1>
      <p>
        Useful for providing the user with a clear indication that what they're looking for does not exist, as infinite
        loaders and blank pages are both poor user experiences.
      </p>

      <h3>
        Visualization
      </h3>
      <p>
        This video demonstrates what 404 pages look like. Screenshots are from the <em>Simply Social</em> prototype
        that <a href="https://www.invisionapp.com/">Invision</a> provides you when you sign up for an account.
      </p>

      <Video videoId="s_jWh7h_j1w" />

      <h3>
        Usage
      </h3>
      <p>
        Lore handles 404 errors by treating them as a special case of <Link to="/features/error-handling/">Error Handling</Link>.
        Normally if you were fetching a <code>post</code> with an <code>id</code> of 1, and the API returned a 404 status code, the action creator
        blueprint would emit an action with a payload that looks like this:
      </p>

      <Markdown text={`
      model = {
        id: 1,
        cid: 'c1',
        state: 'ERROR_FETCHING',
        data: {},
        error: {
          statusCode: 404,
          message: 'No Post exists with id of 1'
        }
      }
      `}/>

      <p>
        But since 404 errors have a clear and explicit use (the resource you asked for does not exist) the default blueprints
        treat this as a special case and set the <code>state</code> to <code>NOT_FOUND</code>. So instead of the generic error message above the
        payload will contain this more specific error message:
      </p>

      <Markdown text={`
      model = {
        id: 1,
        cid: 'c1',
        state: 'NOT_FOUND',
        data: {},
        error: {
          statusCode: 404,
          message: 'No Post exists with id of 1'
        }
      }
      `}/>

      <p>
        This in turn allows you to communicate "not found" experiences much easier to a user:
      </p>

      <Markdown text={`
      createReactClass({

        propTypes: {
          post: React.PropTypes.object.isRequired
        },

        render: function() {
          var post = this.props.post;

          if (posts.state === PayloadStates.NOT_FOUND) {
            return (
              <div>
                The Post you requested does not exist.
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
