import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Code from '../../../components/Code';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/authorization/final.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 1: Hide Edit and Delete Links
      </h1>

      <p>
        In this step we're update the <code>Tweet</code> so that the <code>edit</code> and <code>delete</code> links
        only appear on tweets created by the current user.
      </p>

      <QuickstartBranch branch="authorization.1" />


      <h3>
        The Authorization Decorator
      </h3>
      <p>
        If you look inside <code>src/decorators</code> you'll find one called <code>UserIsAuthorized</code> that
        looks like this:
      </p>

      <Code type="jsx" text={`
      // src/decorators/UserIsAuthorized.js
      import React, { useContext } from 'react';
      import PropTypes from 'prop-types';
      import { UserContext } from '@lore/auth';
      
      UserIsAuthorized.propTypes = {
        authorized: PropTypes.func.isRequired
      };
      
      export default function UserIsAuthorized(props) {
        const { authorized, children } = props;
      
        const user = useContext(UserContext);
      
        if (authorized(user)) {
          return children;
        }
      
        return null;
      };
      `}/>

      <p>
        This component expects a prop function called <code>authorized</code>, and will only render the provided
        children if that function returns true.
      </p>
      <p>
        We're going to use this component to hide the edit and delete links for any tweets not created
        by the current user.
      </p>

      <h3>
        Hide Edit and Delete Links
      </h3>
      <p>
        To use this component, open the <code>Tweet</code> component, import
        the <code>UserIsAuthorized</code> component, and update the rendered code to look like this:
      </p>
      <Code type="jsx" text={`
      // src/components/Tweet.js
      ...
      import UserIsAuthorized from '../decorators/UserIsAuthorized';
      ...
      export default function Tweet(props) {
        ...
        return (
          <li className="list-group-item tweet">
            <div className="image-container">
              <img
                className="img-circle avatar"
                src={user.data.avatar} />
            </div>
            <div className="content-container">
              <h4 className="list-group-item-heading title">
                {user.data.nickname}
              </h4>
              <h4 className="list-group-item-heading timestamp">
                {'- ' + timestamp}
              </h4>
              <p className="list-group-item-text text">
                {tweet.data.text}
              </p>
              <UserIsAuthorized authorized={(user) => user.id === tweet.data.user}>
                <div className="tweet-actions">
                  <EditLink tweet={tweet} />
                  <DeleteLink tweet={tweet} />
                </div>
              </UserIsAuthorized>
            </div>
          </li>
        );
      }
      `}/>


      <p>
        With that change in place, refresh the page, and the edit and delete links should disappear from any
        tweets that were not created by Marle.
      </p>


      <h3>
        Alternative Approach: Create an IsAuthor Component (optional)
      </h3>
      <p>
        The <code>UserIsAuthorized</code> component uses a callback to determine whether the user is authorized
        which makes it generic and flexible. But if you needed to check authorship in multiple places in your app,
        you might get tired of writing the same comparison logic. In that case, an alternative approach might
        be to create an <code>IsAuthor</code> component with that comparison logic coded inside.
      </p>
      <p>
        An implementation of that might look like this:
      </p>

      <Code type="jsx" text={`
      // src/decorators/IsAuthor.js
      import React, { useContext } from 'react';
      import PropTypes from 'prop-types';
      import { useUser } from '@lore/auth';
      
      IsAuthor.propTypes = {
        tweet: PropTypes.func.isRequired
      };
      
      export default function IsAuthor(props) {
        const { tweet, children } = props;
      
        const user = useUser();
      
        if (tweet.data.user === user.id) {
          return children;
        }
      
        return null;
      };
      `}/>

      <p>
        This component takes a <code>tweet</code> and does the comparison internally to see if the current user
        created the tweet. Usage would look like this:
      </p>
      <Code type="jsx" text={`
      <IsAuthor tweet={tweet}>
        <div className="tweet-actions">
          <EditLink tweet={tweet} />
          <DeleteLink tweet={tweet} />
        </div>
      </IsAuthor>
      `}/>


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
        src/components/Tweet.js
      </h3>
      <Code type="jsx" text={`
      import React from 'react';
      import PropTypes from 'prop-types';
      import moment from 'moment';
      import { useConnect } from '@lore/connect';
      import EditLink from './EditLink';
      import DeleteLink from './DeleteLink';
      import UserIsAuthorized from '../decorators/UserIsAuthorized';
      
      Tweet.propTypes = {
        tweet: PropTypes.object.isRequired
      };
      
      export default function Tweet(props) {
        const { tweet } = props;
        const timestamp = moment(tweet.data.createdAt).fromNow().split(' ago')[0];
      
        const user = useConnect('user.byId', {
          id: tweet.data.user
        });
      
        return (
          <li className="list-group-item tweet">
            <div className="image-container">
              <img
                className="img-circle avatar"
                src={user.data.avatar} />
            </div>
            <div className="content-container">
              <h4 className="list-group-item-heading title">
                {user.data.nickname}
              </h4>
              <h4 className="list-group-item-heading timestamp">
                {'- ' + timestamp}
              </h4>
              <p className="list-group-item-text text">
                {tweet.data.text}
              </p>
              <UserIsAuthorized authorized={(user) => user.id === tweet.data.user}>
                <div className="tweet-actions">
                  <EditLink tweet={tweet} />
                  <DeleteLink tweet={tweet} />
                </div>
              </UserIsAuthorized>
            </div>
          </li>
        );
      }
      `}/>

      <h2>
        Next Steps
      </h2>

      <p>
        In the next section we'll learn how to <Link to="/quickstart/optimistic/overview/">display new tweets at the
        top of the Feed</Link>.
      </p>
    </Template>
  )
};
