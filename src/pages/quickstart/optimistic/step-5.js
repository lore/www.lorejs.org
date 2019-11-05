import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Code from '../../../components/Code';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/optimistic/transition.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 5: Show Optimistic Visual Cues
      </h1>

      <p>
        In this step we'll add an opacity effect to tweets to reflect when they're being created, updated or deleted.
      </p>

      <QuickstartBranch branch="optimistic.5" />

      <h3>
        What's the problem?
      </h3>
      <p>
        While it's great that we can now show tweets in the Feed immediately, there's currently no visual cue to
        distinguish between an optimistic tweet and a real tweet, and we're also exposing functionality like the
        "edit" and "delete" actions that can't be performed until the tweet has a real <cide>id</cide>.
      </p>

      <h3>
        How do we solve this?
      </h3>
      <p>
        To improve the experience, we're going to visually fade the tweet when it's being created, updated or
        deleted, and we're not going to show the <code>edit</code> or <code>delete</code> links until we have
        confirmation that the tweet actually exists.
      </p>

      <h3>
        Add Visual Cue for Optimistic Changes
      </h3>
      <p>
        Update the <code>Tweet</code> component to look like this:
      </p>

      <Code text={`
      // src/components/Tweet.js
      import PayloadStates from '../constants/PayloadStates';
      ...      
      export default function Tweet(props) {
        const { tweet } = props;
        const timestamp = moment(tweet.data.createdAt).fromNow().split(' ago')[0];
        
        const isOptimistic = (
          tweet.state === PayloadStates.CREATING ||
          tweet.state === PayloadStates.UPDATING ||
          tweet.state === PayloadStates.DELETING
        );
        
        const user = useConnect('user.byId', {
          id: tweet.data.user
        });
        
        return (
          <li className={\`list-group-item tweet \${isOptimistic ? ' transition' : ''}\`}>
            ...
          </li>
        );
      }
      `}/>
      <p>
        In the code above, we're examining the <code>state</code> of the tweet, and if it's in the process of being
        created, updated, or deleted, then we're going to apply the <code>transition</code> class, which will fade
        the tweet and the hide the actions.
      </p>

      <h3>
        Visual Check-in
      </h3>

      <p>
        If everything went well, your application should now look like this when tweets are being created, updated,
        or deleted:
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
      import PayloadStates from '../constants/PayloadStates';
      
      Tweet.propTypes = {
        tweet: PropTypes.object.isRequired
      };
      
      export default function Tweet(props) {
        const { tweet } = props;
        const timestamp = moment(tweet.data.createdAt).fromNow().split(' ago')[0];
      
        const isOptimistic = (
          tweet.state === PayloadStates.CREATING ||
          tweet.state === PayloadStates.UPDATING ||
          tweet.state === PayloadStates.DELETING
        );
      
        const user = useConnect('user.byId', {
          id: tweet.data.user
        });
      
        return (
          <li className={\`list-group-item tweet \${isOptimistic ? ' transition' : ''}\`}>
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
        In the next section we'll <Link to="/quickstart/optimistic/step-6/">hide tweets that have been deleted</Link>.
      </p>
    </Template>
  )
};
