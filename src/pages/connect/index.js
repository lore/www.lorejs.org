import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Connect';
import Markdown from '../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        Introduction
      </h1>
      <p>
        This section describes how to use <code>connect</code>, a decorator that greatly simplifies the process
        of requesting data from a REST API. It is designed to fetch data from the local cache if it exists, or
        automatically fetch it from the API if it doesn't.
      </p>
      <p>
        The <code>connect</code> decorator is used throughout the Quickstart and looks like this:
      </p>
      <Markdown text={`
      import { connect } from 'lore-hook-connect';

      connect(function(getState, props) {
        return {
          tweets: getState('tweet.find')
        }
      })(
      createReactClass({
        //...
      })
      )
      `}/>

      <h2>
        What problem does it solve?
      </h2>
      <p>
        Whenever you create a model in Lore, the conventions will automatically create a set of actions and
        reducers to support basic CRUD operations. The <code>actions</code> know how to fetch data from the API,
        and the <code>reducers</code> know how to store it.
      </p>
      <p>
        The problem(s) <code>connect</code> solves for lie in the orchestration of when to fetch data from the API.
      </p>
      {/*<h3>*/}
        {/*Problem #1: Eliminating Duplicate API Calls*/}
      {/*</h3>*/}
      <p>
        Applications that consume REST APIs often cache data on the client-side in order to avoid making excessive
        API calls. This means the application follows a process like "only fetch data if you don't already have it".
      </p>
      <p>
        Managing this logic means every component that needs data also needs to follow the steps below before
        requesting it:
      </p>
      <ul>
        <li>Check if the data already exists in local cache</li>
        <li>If it does, retrieve it and use it</li>
        <li>If it doesn't, invoke the action to fetch that data</li>
      </ul>
      <p>
        At first, that may not seem very complex to manage, but there's another check it gets a little trickier when we recall that
        React will re-render the application everytime data changes. And
        At first that may not seem very complex to manage, but consider the following scenario:
      </p>
      <ol>
        <li>
          This check is performed every time a component is rendered.
        </li>
        <li>
          Multiple components may request data <strong>(triggering multiple API calls)</strong>
        </li>
        <li>
          Some of those components may request the <em>same</em> data <strong>(triggering some duplicate API
          calls)</strong>
        </li>
        <li>
          Each time data from <em>any</em> API call comes back, the application will re-render <strong>(because
          that's what React is designed to do)</strong>
        </li>
        <li>
          Some of those components won't have the data they need yet, but will perform the check again <strong>(which
          will trigger additional API calls, for data that was already requested)</strong>
        </li>
        <li>
          Eventually, all the API calls will return, and the application will render in a final state <strong>(and
          make no more API calls)</strong>
        </li>
      </ol>
      <p>
        This scenario highlights an issue; <strong>if guards aren't in place to know when data has <em>already been
        requested</em>, then there's the potential to make an API request <em>every time a component
        renders</em></strong>, which can result in multiple API requests for the same data.
      </p>
      <p>
        Additionally, depending on the number of requests and the rate that components are updated, this also has
        the potential to not only severely degrade the usability of your application, but to also apply unnecessary
        load to the API, which may in turn have negative side-effects like hitting rate limits or increased hosting
        costs for the application.
      </p>
      <p>
        So something else we need include in our check is that <strong><em>actions should only be invoked if the
        API call to fetch that data is not already in-flight</em></strong>.
      </p>
      <p>
        The <code>connect</code> decorator not only <strong>automatically performs this check and applies this
        guard</strong>, but also provides a means of breaking through it, for times when you need specialized
        control over the fetching logic, such as if you wanted to force data to be re-fetched every time a
        component was mounted.
      </p>

      <h2>
        How does it work?
      </h2>
      <p>
        Whenever you create a model in Lore, the conventions will automatically create a set of actions and
        reducers to support basic CRUD operations for fetching and storing data from the server.
      </p>
      <p>
        For example, if you create a model called <code>tweet</code>, the framework creates the
        following <strong>actions</strong>:
      </p>
      <ul>
        <li>tweet.create</li>
        <li>tweet.destroy</li>
        <li>tweet.update</li>
        <li>tweet.find</li>
        <li>tweet.get</li>
      </ul>
      <p>
        And it also creates the following <strong>reducers</strong>:
      </p>
      <ul>
        <li>tweet.find</li>
        <li>tweet.byId</li>
        <li>tweet.byCid</li>
      </ul>

      <p>
        What the <code>connect</code> decorator needs next is a map that defines, when a component requests data,
        which reducer it should look in for that data, and also what action should be invoked if it doesn't find
        the data (so that we can retrieve it).
      </p>

      <p>
        That map looks like this:
      </p>

      <table style={{ marginLeft: '24px', marginBottom: '16px', marginTop: '16px' }}>
        <thead>
        <tr>
          <th style={{ textAlign: 'left' }}>getState</th>
          <th style={{ textAlign: 'left' }}>reducer</th>
          <th style={{ textAlign: 'left' }}>action</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td style={{ textAlign: 'left', paddingRight: '24px' }}>tweet.find</td>
          <td style={{ textAlign: 'left', paddingRight: '24px' }}>tweet.find</td>
          <td style={{ textAlign: 'left' }}>tweet.find</td>
        </tr>
        <tr>
          <td style={{ textAlign: 'left', paddingRight: '24px' }}>tweet.byId</td>
          <td style={{ textAlign: 'left', paddingRight: '24px' }}>tweet.byId</td>
          <td style={{ textAlign: 'left' }}>tweet.get</td>
        </tr>
        </tbody>
      </table>

      <p>
        To better understand the map, let's look at a typical usage example. Here we want to retrieve a list of
        tweets from the server.
      </p>

      <Markdown text={`
      import { connect } from 'lore-hook-connect';

      connect(function(getState, props) {
        return {
          tweets: getState('tweet.find')
        }
      })(createReactClass({ /*...*/ }))
      `}/>

      <p>
        The first thing we need is a way to describe the data we want. We do this using the <code>getState</code> function,
        and our description is the string we pass as the first argument; <code>tweet.find</code>. This string is the
        first column in the table (<code>getState</code>).
      </p>
      <p>
        Next, the <code>getState</code> function needs to know which reducer to look for the data in. That's the
        second colum: <code>reducer</code>. From the table, we can see passing <code>tweet.find</code> to <code>getState</code> will
        cause it to look in the <code>tweet.find</code> reducer for the data (which in this case represents a query
        that includes no filter or pagination information).
      </p>
      <p>
        Next, if no data exist in the reducer, we need to know which action to invoke to fetch it. That's what the
        third column is; the name of the <code>action</code> that should be invoked. In this case, if the data we
        want isn't found in the <code>tweet.find</code> reducer, then the <code>tweet.find</code> action will be
        invoked to fetch it.
      </p>
      <p>
        Now while that example does use the same name for the <code>getState</code>, <code>reducer</code>, and
        <code>action</code>, that's not always the case. If we were to request a specific tweet for example, we
        would use the follow <code>getState</code> call:
      </p>
      <Markdown text={`
      import { connect } from 'lore-hook-connect';

      connect(function(getState, props) {
        return {
          tweets: getState('tweet.byId', {
            id: 1
          })
        }
      })(createReactClass({ /*...*/ }))
      `}/>
      <p>
        In this example (and referencing the table) the <code>tweet.byId</code> string will cause
        the <code>getState</code> method to inspect the <code>tweet.byId</code> reducer, and invoke
        the <code>tweet.get</code> action that tweet has not yet been fetched.
      </p>

      {/*
      <h2>
        Aside: Conventions Help Eliminate Infinite Loop + Browser Crash
      </h2>
      <p>
        A big motivation for establishing conventions around reducers and actions was due to how easy it can be
        to accidentally end up in an infinite loop in a React/Redux app, when using a lazy-loading configuration
        like <code>connect</code> is designed to provide.
      </p>
      <blockquote>
        Lazy-loading is a configuration where data isn't fetching from an API endpoint until a component declares
        they need it.
      </blockquote>
      <p>
        If a component requests state, like <code>tweet.find</code>, and that state doesn't exist, an action will
        be triggered and the store will be updated to reflect the fact that data is being fetching, and the
        component will get updated because the reducer state changed. Which will give it another opportunity to
        request <code>tweet.find</code>. At this point, there are 3 pieces that need to have been linked up properly
        in order to form a proper guard to prevent duplicate AJAX calls.
      </p>
      <ol>
        <li>
          First, there needs to be a reducer called <code>tweet.find</code>
        </li>
        <li>
          Second there needs to be an action called <code>tweet.find</code>,
        </li>
        <li>
          Third there needs to be an ActionType called <code>FETCH_TWEETS</code> that the action creator emits
          and the reducer processes.
        </li>
      </ol>
      <p>
        Without conventions, there's a lot of files that need to be copy/pasted to enable that data flow for every
        model/endpoint you need in your application. If you accidentally <code>import</code> the wrong file, or
        forget to make all the necessary changes in your copy/pasted files, or forget to create the ActionType, or
        forget to make sure the correct ActionType is being emitted and listened for, the component may end up
        accessing the store again, finding no data, making a request, and updating the store, and getting called
        again, and accessing the store again, and finding no data, and making a request, and so on.
      </p>
      <p>
        It's a conceptually simple bug to solve if you know what to look for, but it can be incredibly time consuming to track
        down the first time you see if it you don't know what to look for, and you have to manually force-quit the browser tab
        when it happens.
      </p>
      <p>
        This "little" problem can be draining, a huge blocker, and incredibly frustrating for other people working in your
        project. So a big reason for creating conventions around reducer and actions and setting up a map between them was to
        solve this problem. This way the framework has the ability to guard against and limit certain situations (at least
        until you override the conventions).
      </p>
      */}
    </Template>
  );
};
