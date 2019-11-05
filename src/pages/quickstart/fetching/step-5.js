import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Code from '../../../components/Code';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/fetching/final.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 5: Fetch User for Tweet
      </h1>

      <p>
        In this step we're going to fetch the user for each tweet, so that we can display the proper nickname and
        avatar.
      </p>

      <QuickstartBranch branch="fetching" />

      <h3>
        Create the User Model
      </h3>
      <p>
        Before we can fetch users, we need to create a model to represent the resource. Run this command to create
        a user model:
      </p>

      <Code type="sh" text={`
      lore generate model user
      `}/>

      <p>
        This will place a file called <code>user.js</code> in <code>src/models</code> and, just like when you
        created the <code>tweet</code> model, you will now have access to a set of actions and reducers for
        interacting with the <code>/users</code> endpoint.
      </p>

      <h3>
        Fetch the Tweet's User
      </h3>
      <p>
        Next we need to fetch the user who created the tweet. Open the <code>Tweet</code> component and import
        the <code>useConnect</code> Hook, but this time we're going to pass in a different string:
      </p>

      <Code type="jsx" text={`
      // src/components/Tweet.js
      ...
      import { useConnect } from '@lore/connect';
      ...
      export default function Tweet(props) {
        const { tweet } = props;
        
        const user = useConnect('user.byId', {
          id: tweet.data.userId
        });
      
        ...
      }

      `}/>

      <p>
        The string we're passing this time is <code>user.byId</code>. But unlike the <code>tweet.find</code> call,
        this time we need to provide an argument; the <code>id</code> of the user you want to retrieve. If the user
        exists in the store, it will be returned immediately. If not, an action will be invoked to fetch that user
        from the API.
      </p>
      <blockquote>
        <p>
          You can learn more about the <code>byId</code> blueprint <Link to="/connect/byId/">here</Link>.
        </p>
      </blockquote>
      <p>
        With this change in place, refresh the browser and you should see each tweet attributed to the correct user.
      </p>

      <img className="drop-shadow" src={image} />

      <blockquote>
        <p>
          At this point both our <code>Feed</code> and <code>Tweet</code> components are fetching real data, which
          means you can safely delete the <code>defaultProps</code> properties from both components if you'd like.
          Seeing as we are no longer using them to insert mock data, they no longer serve a purpose.
        </p>
      </blockquote>

      <h2>
        Code Changes
      </h2>

      <p>
        Below is a list of files modified during this step.
      </p>

      <h3>
        src/models/user.js
      </h3>
      <Code type="jsx" text={`
      export default {

      };
      `}/>

      <h3>
        src/components/Tweet.js
      </h3>

      <Code type="jsx" text={`
      import React from 'react';
      import PropTypes from 'prop-types';
      import moment from 'moment';
      import { useConnect } from '@lore/connect';
      
      Tweet.propTypes = {
        tweet: PropTypes.object.isRequired
      };
      
      export default function Tweet(props) {
        const { tweet } = props;
        const timestamp = moment(tweet.data.createdAt).fromNow().split(' ago')[0];
      
        const user = useConnect('user.byId', {
          id: tweet.data.userId
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
            </div>
          </li>
        );
      }
      `}/>

      <h2>
        Next Steps
      </h2>

      <p>
        Next we're going to <Link to="/quickstart/authentication/overview/">learn how to implement an authentication flow</Link>.
      </p>

    </Template>
  )
};
