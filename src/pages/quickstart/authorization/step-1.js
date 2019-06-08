import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/authorization/step-1.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 1: Hide Edit Link
      </h1>

      <p>
        In this step we're going to wrap our <code>EditLink</code> with a decorator that will only display it for
        the user who created that tweet.
      </p>

      <QuickstartBranch branch="authorization.1" />


      <h3>
        The Authorization Decorator
      </h3>
      <p>
        If you look inside <code>src/decorators</code> you'll find one called <code>UserIsAuthorized</code> that
        looks like this:
      </p>

      <Markdown type="jsx" text={`
      import { AuthorizationGenerator } from 'lore-auth';

      export default AuthorizationGenerator({
        displayName: 'UserIsAuthorized',

        isAuthorized() {
          return true;
        }
      });
      `}/>

      <p>
        This decorator is designed to wrap a component, and will only render that component if
        the <code>isAuthorized()</code> method returns true.
      </p>

      <p>
        We're going to use this decorator to hide the edit link from any users who were not the author of the tweet.
      </p>


      <h3>
        Create the UserCanEditTweet Decorator
      </h3>
      <p>
        Create a copy of the <code>UserIsAuthorized</code> decorator and rename it to <code>UserCanEditTweet</code>.
        Then update the code to look like this:
      </p>

      <Markdown type="jsx" text={`
      import PropTypes from 'prop-types';
      import { AuthorizationGenerator } from 'lore-auth';

      export default AuthorizationGenerator({
        displayName: 'UserCanEditTweet',

        propTypes: {
          tweet: PropTypes.object.isRequired
        },

        contextTypes: {
          user: PropTypes.object.isRequired
        },

        isAuthorized() {
          const { tweet } = this.props;
          const { user } = this.context;

          return tweet.data.user === user.id;
        }
      });
      `}/>

      <p>
        In the code above we're declaring that the decorator expects to receive a <code>tweet</code> from props,
        and will need the <code>user</code> from context.
      </p>
      <p>
        Then in the <code>isAuthorized()</code> method, we're checking whether the current user was the author of the
        tweet.
      </p>

      <h3>
        Wrap the Edit Link
      </h3>
      <p>
        To use this decorator, open the <code>EditLink</code> component and decorate the component just like you
        would when using <code>connect</code>.
      </p>

      <Markdown type="jsx" text={`
      // src/components/EditLink.js
      import UserCanEditTweet from '../decorators/UserCanEditTweet';

      export default UserCanEditTweet(createReactClass({
        ...
      }));
      `}/>

      <p>
        With that change in place, refresh the page, and the edit links should disappear from any tweets that were
        not created by Ayla.
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
        src/decorators/UserCanEditTweet.js
      </h3>

      <Markdown text={`
      import PropTypes from 'prop-types';
      import { AuthorizationGenerator } from 'lore-auth';

      export default AuthorizationGenerator({
        displayName: 'UserCanEditTweet',

        propTypes: {
          tweet: PropTypes.object.isRequired
        },

        contextTypes: {
          user: PropTypes.object.isRequired
        },

        isAuthorized() {
          const { tweet } = this.props;
          const { user } = this.context;

          return tweet.data.user === user.id;
        }
      });
      `}/>

      <h3>
        src/components/EditLink.js
      </h3>

      <Markdown type="jsx" text={`
      import React from 'react';
      import createReactClass from 'create-react-class';
      import PropTypes from 'prop-types';
      import UserCanEditTweet from '../decorators/UserCanEditTweet';

      export default UserCanEditTweet(createReactClass({
        displayName: 'EditLink',

        propTypes: {
          tweet: PropTypes.object.isRequired
        },

        onClick() {
          const { tweet } = this.props;

          lore.dialog.show(function() {
            return lore.dialogs.tweet.update(tweet, {
              blueprint: 'optimistic',
              request: function(data) {
                return lore.actions.tweet.update(tweet, data).payload;
              }
            });
          });
        },

        render() {
          return (
            <a className="link" onClick={this.onClick}>
              edit
            </a>
          );
        }

      }));
      `}/>

      <h2>
        Next Steps
      </h2>

      <p>
        Next we're going to <Link to="/quickstart/authorization/step-2/">hide the delete link</Link>.
      </p>
    </Template>
  )
};
