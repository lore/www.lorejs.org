import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/fetching/step-3.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 3: Connect Feed Component
      </h1>

      <p>
        In this step we're going to learn about the <code>connect</code> decorator, and use it to allow our Tweet
        component to declare what data it needs.
      </p>

      <QuickstartBranch branch="fetching.3" />

      <h3>
        The Connect Hook
      </h3>
      <p>
        Lore provides a <a href="https://reactjs.org/docs/hooks-intro.html">React Hook</a> that allows components
        to declare what data they need, and the framework will automatically retrieve it from the API if it
        doesn't exist in the local store.
      </p>

      <p>
        That Hook is called <code>useConnect</code> and the syntax for using it looks like this:
      </p>

      <Markdown type="jsx" text={`
      const tweets = useConnect('tweet.find');
      `}/>

      <blockquote>
        <p>
          You can learn more about <code>useConnect</code> <Link to="/connect/">here</Link>.
        </p>
      </blockquote>

      <p>
        The <code>useConnect()</code> Hook is a function that will retrieve a piece of state from
        the local store, or invoke the appropriate action to retrieve that data if it hasn't been fetched yet.
      </p>
      <p>
        The string you provide to the Hook is referred to as a "blueprint", and describes what you
        want the function to do. The first part, <code>tweet</code>, is the resource you want to fetch, and the
        second part, <code>find</code>, is the name of the blueprint.
      </p>
      <p>
        In this example we're providing <code>tweet.find</code>, and since we aren't passing in any
        query parameters or pagination information, this request translates to <em>"make a call to the /tweets
        endpoint of the API and give me whatever comes back"</em>.
      </p>
      <blockquote>
        <p>
          You can learn more about the <code>find</code> blueprint <Link to="/connect/find/">here</Link>.
        </p>
      </blockquote>
      <p>
        The data returned will then be available to the <code>Feed</code> component through
        the <code>tweets</code> variable.
      </p>

      <h3>
        Connect the Feed Component
      </h3>
      <p>
        To use <code>connect</code>, you first need to import it from the <code>@lore/connect</code> package,
        which is already included in your project.
      </p>
      <p>
        Open your <code>Feed</code> component and update the code so we're getting the list of tweets
        from <code>useConnect</code> instead of props, like this:
      </p>

      <Markdown type="jsx" text={`
      // src/components/Feed.js
      ...
      import { useConnect } from '@lore/connect';

      export default function Feed(props) {
        const tweets = useConnect('tweet.find');
        
        return {
          ...
        };
      }
      `}/>

      <p>
        Once you've done this, reload the page, and you'll notice the mock data has been replaced by real
        data from the API.
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
        src/components/Feed.js
      </h3>

      <Markdown type="jsx" text={`
      import React from 'react';
      import PropTypes from 'prop-types';
      import Tweet from './Tweet';
      import { useConnect } from '@lore/connect';
      
      Feed.propTypes = {
        tweets: PropTypes.object.isRequired
      };
      
      Feed.defaultProps = (function() {
        const tweet = {
          id: 1,
          cid: 'c1',
          state: 'RESOLVED',
          data: {
            id: 1,
            userId: 1,
            text: 'Nothing can beat science!',
            createdAt: '2018-04-24T05:10:49.382Z'
          }
        };
      
        return {
          tweets: {
            state: 'RESOLVED',
            data: [tweet]
          }
        };
      })();
      
      export default function Feed(props) {
        const tweets = useConnect('tweet.find');
      
        return (
          <div className="feed">
            <h2 className="title">
              Feed
            </h2>
            <ul className="media-list tweets">
              {tweets.data.map((tweet) => {
                return (
                  <Tweet key={tweet.id} tweet={tweet} />
                );
              })}
            </ul>
          </div>
        );
      }
      `}/>

      <h2>
        Next Steps
      </h2>

      <p>
        Next we're going to <Link to="/quickstart/fetching/step-4/">display a loading experience while the tweets are being fetched</Link>.
      </p>
    </Template>
  )
};
