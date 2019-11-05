import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Code from '../../../components/Code';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/data/final.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 3: Add Mock User Data
      </h1>

      <p>
        In this step we're going to add some mock user data to finish our Tweet component.
      </p>

      <QuickstartBranch branch="data.3" />

      <h3>
        Add a Mock User
      </h3>
      <p>
        Our Tweet is looking pretty good, but we're still missing some data for the user's nickname and avatar.
        If you look at the data for our <code>tweet</code>, you'll notice it includes a property
        called <code>userId</code> that has a number for a value:
      </p>

      <Code text={`
      {
        id: 1,
        userId: 1,
        text: 'Nothing can beat science!',
        createdAt: '2018-04-24T05:10:49.382Z'
      }
      `}/>

      <p>
        This number represents the id of the user who created the tweet. If we take a look at the API endpoint
        for <code>/users</code> (located at <a href="http://localhost:1337/users" target="_blank">http://localhost:1337/users</a>) we
        can see that a user resource looks like this:
      </p>

      <Code text={`
      {
        id: 1,
        nickname: "lucca",
        avatar: "https://cloud.githubusercontent.com/assets/2637399/19027072/a36f0c7a-88e1-11e6-931e-7f67fe01367b.png",
        createdAt: "2016-10-25T04:24:46.207Z",
        updatedAt: "2016-10-25T04:24:46.207Z"
      }
      `}/>

      <p>
        So just like we did with the mock tweet, we're going to create a mock user, using the data structure above.
      </p>
      <p>
        Open the <code>Tweet</code> component and add a propType for <code>user</code>. Then add
        a <code>getDefaultProps()</code> method and populate it with some mock user data like this:
      </p>

      <Code type="jsx" text={`
      // src/components/Tweet.js
      ...
      Tweet.propTypes = {
        tweet: PropTypes.object.isRequired,
        user: PropTypes.object.isRequired
      };
      
      Tweet.defaultProps = {
        user: {
          id: 1,
          data: {
            id: 1,
            nickname: "lucca",
            avatar: "https://cloud.githubusercontent.com/assets/2637399/19027072/a36f0c7a-88e1-11e6-931e-7f67fe01367b.png"
          }
        }
      };
      ...
      `}/>

      <p>
        Next, locate the rendered code, and use our new <code>user</code> prop to populate the
        nickname and avatar properties:
      </p>

      <Code type="jsx" text={`
      // src/components/Tweet.js
      ...
      export default function Tweet(props) {
        const { tweet, user } = props;
        const timestamp = moment(tweet.data.createdAt).fromNow().split(' ago')[0];
      
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
      
      Tweet.propTypes = {
        tweet: PropTypes.object.isRequired,
        user: PropTypes.object.isRequired
      };
      
      Tweet.defaultProps = {
        user: {
          id: 1,
          data: {
            id: 1,
            nickname: "lucca",
            avatar: "https://cloud.githubusercontent.com/assets/2637399/19027072/a36f0c7a-88e1-11e6-931e-7f67fe01367b.png"
          }
        }
      };
      
      export default function Tweet(props) {
        const { tweet, user } = props;
        const timestamp = moment(tweet.data.createdAt).fromNow().split(' ago')[0];
      
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
        Next we're going to learn how to communicate with APIs and <Link to="/quickstart/fetching/overview/">replace our mock data with real data</Link>.
      </p>
    </Template>
  )
};
