import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        Convention over Configuration
      </h1>

      <p>
        As you'll soon see, we now have all the code required to fetch tweets from the API. Lore accomplishes this
        using a design paradigm called <a href="https://en.wikipedia.org/wiki/Convention_over_configuration">convention
        over configuration</a>.
      </p>
      <p>
        In the simplest sense, what this means is that the framework makes some assumptions about what you want,
        and then provides you with the ability to override those assumptions if you need to.
      </p>
      <p>
        If you'd like to see some of this functionality demonstrated now, and are comfortable using the console
        provided in the developer tools for your browser, feel free to follow along with the steps below.
      </p>
      <p>
        If not, feel free to <Link to="../step-3/">skip this step</Link>. <strong>It is entirely optional</strong>.
      </p>

      <h3>
        Console Demo: Actions
      </h3>
      <p>
        To get started, refresh the browser and open the developer console. Then enter this command into the console:
      </p>

      <Markdown text={`
      lore.actions.tweet.find()
      `}/>

      <p>
        When you created the <code>tweet</code> model Lore assumed you wanted a set of actions that could find,
        create, update and delete tweets. After creating these actions, it attached them to an object found
        at <code>lore.actions.tweet</code>.
      </p>
      <p>
        The command you just entered invoked the <code>find</code> action to fetch tweets from the API, and if you
        examine the network tab, you'll see a GET request was sent to <code>http://localhost:1337/tweets</code>.
      </p>

      <p>
        The URL for this API call was composed from a convention, which defaults to "pluralize the model name
        and append it to the apiRoot", but you can change this convention as needed by modifying the properties
        in the <code>tweet</code> model.
      </p>

      <p>
        You can also fetch tweets by a specific user, by providing an object of query parameters to
        the <code>find()</code> method like this:
      </p>

      <Markdown text={`
      lore.actions.tweet.find({
        userId: 1
      })
      `}/>

      <p>
        If you examine the network tab again, you'll see a GET request was sent
        to <code>http://localhost:1337/tweets?userId=1</code>.
      </p>

      <h3>
        Console Demo: Reducers & Store State
      </h3>
      <p>
        In addition to creating a set of actions, Lore also produces a set of reducers that store the tweets returned
        by the API. For example, to see a list of the tweets that have been returned, enter this command into the
        developer console:
      </p>

      <Markdown text={`
      lore.store.getState().tweet.byId
      `}/>

      <p>
        You should see a response that looks similar to like this:
      </p>

      <Markdown type="jsx" text={`
      1: {id: 1, cid: "c1", state: "RESOLVED", error: {…}, data: {…}}
      2: {id: 2, cid: "c2", state: "RESOLVED", error: {…}, data: {…}}
      3: {id: 3, cid: "c3", state: "RESOLVED", error: {…}, data: {…}}
      4: {id: 4, cid: "c4", state: "RESOLVED", error: {…}, data: {…}}
      5: {id: 5, cid: "c5", state: "RESOLVED", error: {…}, data: {…}}
      6: {id: 6, cid: "c6", state: "RESOLVED", error: {…}, data: {…}}
      7: {id: 7, cid: "c7", state: "RESOLVED", error: {…}, data: {…}}
      `}/>

      <p>
        What you're looking at in the example above is an object containing every tweet that's been returned from
        the API, stored using their <code>id</code> as the key.
      </p>

      <p>
        And if you enter this command:
      </p>

      <Markdown text={`
      lore.store.getState().tweet.find
      `}/>

      <p>
        You'll be able to see an object containing the result of every <em>query</em> asked of
        the <code>/tweets</code> endpoint, using the <code>query</code> as the key:
      </p>

      <Markdown type="jsx" text={`
      {"where":{"userId":1},"pagination":{}}:{state: "RESOLVED", error: {…}, data: Array(1), query: {…}, meta: {…}}
      {"where":{},"pagination":{}}:{state: "RESOLVED", error: {…}, data: Array(7), query: {…}, meta: {…}}
      `}/>

      <p>
        While this is certainly useful (we just got a lot of functionality by writing very little code), we can still
        do one better.
      </p>
      <p>
        In the next section we'll learn how components can declare what data they need, and see how the framework
        can orchestrate calls to these actions and reducers to give us what we need automatically.
      </p>

      <h2>
        Next Steps
      </h2>

      <p>
        Next we're going to see these in actions, and <Link to="../step-3/">connect our Feed to get real data</Link>.
      </p>
    </Template>
  )
};
