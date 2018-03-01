import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Collections';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        retrieve
      </h1>
      <p>
        This page describes how to retrieve a collection of resources using a Collection.
      </p>

      <h3>
        Basic Usage
      </h3>
      <p>
        Let's say you have an API endpoint located at <code>http://localhost:1337/tweets</code> that returns a
        collection of tweets that looks like this:
      </p>
      <Markdown type="jsx" text={`
      [
        {
          id: 1,
          text: 'An old tweet'
        },
        {
          id: 2,
          text: 'A new tweet'
        }
      ]
      `}/>

      <p>
        To retrieve those Tweets, we need to issue a <code>GET</code> request
        to <code>http://localhost:1337/tweets</code> that looks like this:
      </p>
      <Markdown type="jsx" text={`
      GET http://localhost:1337/tweets
      `}/>
      <p>
        The code below demonstrates how to do that using a Collection:
      </p>

      <Markdown type="jsx" text={`
      import { Collection } from 'lore-models';

      const TweetCollection = Collection.extend({
        url: 'http://localhost:1337/tweets'
      });

      const tweets = new TweetCollection();

      tweets.fetch();
      `}/>

      <p>
        First we import <code>Collection</code> from <code>lore-models</code>. Then we create a new Collection
        called <code>TweetCollection</code>, and provide the location of the API endpoint we want to interact
        with as the <code>url</code> property.
      </p>
      <p>
        Once we have the <code>TweetCollection</code> created, we create an instance of that collection, and then
        we call <code>tweets.fetch()</code> to retrieve that collection of tweets through the API.
      </p>
      <p>
        The <code>tweets.fetch()</code> call will result in a <code>GET</code> request, and an AJAX request will
        be sent that looks like this:
      </p>
      <Markdown type="jsx" text={`
      GET http://localhost:1337/tweets
      `}/>
      <p>
        Once the AJAX request returns, the <code>tweets</code> instance will be automatically updated, and you'll
        be able to view the resources via the <code>toJSON()</code> method of the instance, like this:
      </p>
      <Markdown type="jsx" text={`
      tweets.toJSON() = [
        {
          id: 1,
          text: 'An old tweet'
        },
        {
          id: 2,
          text: 'A new tweet'
        }
      ]
      `}/>

      <p>
        The <code>tweets.fetch()</code> method returns a promise. If you need access to the response object once the
        API call returns, you can do that using this code:
      </p>

      <Markdown type="jsx" text={`
      tweets.fetch().then(function(response) {
        // do something with response
      })
      `}/>

      <p>
        The response object will have a structure that looks like this:
      </p>

      <Markdown type="jsx" text={`
      const response = {
        config: {
          headers: {
            Accept: "application/json, text/plain, */*"
          },
          method: "GET",
          responseType: "json",
          url: "http://localhost:1337/tweets"
        },
        data: [
          {
            id: 1,
            text: 'An old tweet'
          },
          {
            id: 2,
            text: 'A new tweet'
          }
        ],
        headers: {
          "content-type": "application/json"
        },
        request: {...}, // XMLHttpRequest
        status: 200,
        statusText: "OK"
      };
      `}/>

      <h3>
        Advanced Usage
      </h3>
      <p>
        Collections use the <a href="https://github.com/axios/axios">axios</a> library for handling for all network
        request, and that means the properties you set on collections are ultimately just converted into a config
        object that <code>axios</code> understands.
      </p>
      <p>
        For the <code>fetch()</code> method, that means the <code>tweets.fetch()</code> call we demonstrated
        above is ultimately converted into this <code>axios</code> call:
      </p>
      <Markdown type="jsx" text={`
      import axios from 'axios';

      axios({
        url: 'http://localhost:1337/tweets',
        method: 'get',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      `}/>
      <p>
        If you need more control over your network requests, such as adding headers, or providing query parameters,
        simply provide an <code>options</code> object to get <code>tweets.fetch()</code> call like this:
      </p>
      <Markdown type="jsx" text={`
      tweets.fetch({
        headers: {
          'Content-Type': 'application/json'
          Authorization: 'Bearer token'
        },
        data: {
          page: 1
        }
      })
      `}/>
      <p>
        This object will be passed directly to the <code>axios</code> call.
      </p>
      <blockquote>
        <p>
          You can learn about all of the config options that <code>axios</code>
          supports <a href="https://github.com/axios/axios#request-config">here</a>.
        </p>
      </blockquote>
    </Template>
  );
};
