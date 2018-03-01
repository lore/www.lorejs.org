import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/authorization/final.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Normalization: Overview
      </h1>

      <p>
        In this section we'll learn how to normalize an API responses, so that we can reduce the number of network
        requests and improve the application's performance.
      </p>

      <p>
        At the end of this section your application will look like this (visually identical):
      </p>

      <img className="drop-shadow" src={image} />


      <h3>
        What's the problem?
      </h3>

      <p>
        If you open the browser developers tools and take a look at the network requests when
        the <code>Feed</code> page loads, you'll see a series of AJAX calls being made to the API that look something
        like this:
      </p>

      <Markdown type="sh" text={`
      [1] XHR finished loading: GET "http://localhost:1337/user"
      [2] XHR finished loading: GET "http://localhost:1337/tweets?page=1"
      [3] XHR finished loading: GET "http://localhost:1337/users/1"
      [4] XHR finished loading: GET "http://localhost:1337/users/2"
      [5] XHR finished loading: GET "http://localhost:1337/users/3"
      [6] XHR finished loading: GET "http://localhost:1337/users/4"
      `}/>

      <p>
        The first API call retrieves the current user (Marle). The second retrieves the first page of tweets, and
        the remaining calls retrieve the user who created each of those tweets so that we can get their nickname
        and avatar. So that's <strong>6 API calls to display 5 tweets</strong>.
      </p>
      <p>
        Now imagine you have a page that displays 20 tweets, and each tweet is by a different user. If we change
        nothing about how the application requests data, that would amount to <strong>22 API calls just to display
        the first page of tweets</strong>; 1 for the current user, 1 for the first page of tweets, and 20 to
        fetch the user that created each tweet.
      </p>
      <p>
        That means we'd need to wait for 22 network requests to return before the experience can be displayed
        as intended, and displaying the second page might require <em>another</em> <strong>21 network requests</strong>.
      </p>
      <p>
        That's certainly a cause for concern, as it's not hard to see how that can become a performance issue for
        both the browser and server, but it turns out the problem is even worse than that, because <strong>every
        browser limits the number of concurrent requests to a single domain</strong>.
      </p>
      <p>
        To illustrate, take a look at the table below showing the concurrent request limits for various browsers:
      </p>
      <Markdown type="sh" text={`
      Concurrent Connections Per Hostname

      Chrome 57     6
      Firefox 46    6
      Safari 10     6
      IE 10         8
      IE 11         13
      `}/>

      <p>
        If our <code>hostname</code> is <code>localhost:1337</code>, what this table tells us is
        that <code>Chrome 57</code> will only allow 6 API calls to be issued to that domain at a single time. This
        means that if we make 20 network requests to retrieve the users for 20 tweets, the browser will only send 6
        requests, and then queue the other 14. Once one of the 6 comes back, the browser will send out one of the
        queued requests.
      </p>
      <p>
        Especially for APIs with slow response times, this can wreak all kinds of havoc on the user experience and
        responsiveness of the application.
      </p>

      <h3>
        How do we solve this?
      </h3>
      <p>
        When we make an API call to <code>http://localhost:1337/tweets</code> currently, we get a response back that
        looks like this:
      </p>

      <Markdown text={`
      {
        data: [
          {
            id: 1,
            user: 418,
            text: "Ayla fight while alive! Win and live. Lose and die. Rule of life. No change rule.",
            createdAt: "2017-05-06T16:20:15.439Z",
            updatedAt: "2017-05-06T19:20:15.455Z"
          }
        ],
        meta: {
          paginate: {
            currentPage: 1,
            nextPage: null,
            prevPage: null,
            totalPages: 1,
            totalCount: 1,
            perPage: 5
          }
        }
      }
      `}/>

      <p>
        And then then we make another request to <code>http://localhost:1337/users/1</code> to get the user, which
        returns a response like this:
      </p>

      <Markdown text={`
      {
        id: 418,
        nickname: "ayla",
        authId: "auth0|57f1e2ad68e2b55a013258cd",
        avatar: "https://cloud.githubusercontent.com/assets/2637399/19027069/a356e82a-88e1-11e6-87d8-e3e74f55c069.png",
        createdAt: "2017-05-06T19:20:15.431Z",
        updatedAt: "2017-05-06T19:20:15.431Z"
      }
      `}/>

      <p>
        Since we <em>know</em> we need the user for each tweet, one way to solve the aforementioned problem is to
        ask the API to embed the <code>user</code> data <em>inside the <code>tweet</code></em>, so that we can learn
        who the user is without making a follow-up request.
      </p>
      <p>
        The Sails API supports the ability to do this by providing a query parameter called <code>populate</code> that
        lists the relationships you want populated. For example, if you want the API to populate
        the <code>user</code> field, you can make a request to <code>http://localhost:1337/tweets?populate=user</code>,
        and you'll see a response like this:
      </p>

      <Markdown text={`
      {
        data: [
          {
            id: 1,
            user: {
              id: 418,
              nickname: "ayla",
              authId: "auth0|57f1e2ad68e2b55a013258cd",
              avatar: "https://cloud.githubusercontent.com/assets/2637399/19027069/a356e82a-88e1-11e6-87d8-e3e74f55c069.png",
              createdAt: "2017-05-06T19:20:15.431Z",
              updatedAt: "2017-05-06T19:20:15.431Z"
            },
            text: "Ayla fight while alive! Win and live. Lose and die. Rule of life. No change rule.",
            createdAt: "2017-05-06T16:20:15.439Z",
            updatedAt: "2017-05-06T19:20:15.455Z"
          }
        ],
        meta: {
          paginate: {
            currentPage: 1,
            nextPage: null,
            prevPage: null,
            totalPages: 1,
            totalCount: 1,
            perPage: 5
          }
        }
      }
      `}/>
      <p>
        By requesting that the API populate the user field for each each tweet, we can reduce the number of API
        calls required to get all the data we need from 22 requests to 2 requests, and it's <em>always</em> going
        to be 2 requests regardless of the number of tweets we request per page.
      </p>

      <h3>
        What is normalization?
      </h3>
      <p>
        The downside of requesting nested data from an API is that it's not a good idea to use it directly in your
        application. Not only can you easily run into issues keeping the data in-sync, by not having a clear "source
        of truth", but it also makes your application more sensitive to changes in the API, since the components in
        your application begin to assume a nested data structure.
      </p>
      <p>
        To avoid these issues entirely, it's recommended that instead of storing that data as a <strong>tweet that
        contain the user</strong>, you instead break apart the API response and store
        the <strong>tweet</strong> and <strong>user</strong> separately, exactly as you would have before nesting
        the data.
      </p>
      <p>
        This process is called <code>normalization</code> and is something Lore provides support for by default.
      </p>


      <h2>
        Next Steps
      </h2>

      <p>
        Ready? Let's <Link to="../step-1/">get started</Link>!
      </p>
    </Template>
  )
};
