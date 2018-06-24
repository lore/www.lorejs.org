import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/HookTutorial';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 6: Integrate Hook
      </h1>

      <p>
        In this step we're going to integrate the hook into our application.
      </p>

      <blockquote>
        <p>
          You can view the finished code for this step by checking out the <code>step-6</code> branch.
        </p>
      </blockquote>

      <h3>
        Invoke the Hook
      </h3>
      <p>
        With our hook finished, we can now use it in our application. To do that, open up the <code>Feed</code> component and add a
        <code>componentDidMount</code> method that invokes the hook like this:
      </p>

      <Markdown text={`
      componentDidMount() {
        const { tweets } = this.props;
        lore.polling.tweet.find(tweets.query.where);
      }
      `}/>

      <p>
        That's it! This method will now get invoked when the <code>Feed</code> component mounts, and will refetch the list of tweets
        every 2 seconds.
      </p>


      <h3>
        Check In
      </h3>
      <p>
        With our hook now integrated, open up two browser tabs so we can see this the hook in action. As you create and edit
        tweets, you'll notice the data syncs across the browsers as they update their stores with the data from the server.
      </p>


      <h2>
        Next Steps
      </h2>
      <p>
        In the next step we're going to <Link to="../step-7/">talk about publishing your hook</Link>.
      </p>
    </Template>
  )
};
