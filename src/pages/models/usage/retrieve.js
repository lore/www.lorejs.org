import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Models';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        retrieve
      </h1>
      <p>
        This page describes how to retrieve a resource using a Model.
      </p>

      <h3>
        Basic Usage
      </h3>
      <p>
        Let's say you have an API endpoint located at <code>http://localhost:1337/tweets</code> and that
        there is a <code>tweet</code> you want to retrieve that looks like this:
      </p>
      <Markdown type="jsx" text={`
      {
        id: 1,
        text: 'An old tweet'
      }
      `}/>

      <p>
        To retrieve that Tweet, we need to issue a <code>GET</code> request
        to <code>http://localhost:1337/tweets/1</code> that looks like this:
      </p>
      <Markdown type="jsx" text={`
      GET http://localhost:1337/tweets/1
      `}/>
      <p>
        The code below demonstrates how to do that using a Model:
      </p>

      <Markdown type="jsx" text={`
      import { Model } from 'lore-models';

      const Tweet = Model.extend({
        urlRoot: 'http://localhost:1337/tweets'
      });

      const tweet = new Tweet({
        id: 1
      })

      tweet.fetch()
      `}/>

      <p>
        First we import <code>Model</code> from <code>lore-models</code>. Then we create a new model
        called <code>Tweet</code>, and provide the location of the API endpoint we want to interact with as
        the <code>urlRoot</code> property.
      </p>
      <p>
        Once we have the <code>Tweet</code> model created, we create an instance of that model, and provide
        the <code>id</code> of the resource we want to retrieve. Then we call <code>tweet.fetch()</code> to
        retrieve that resource through the API.
      </p>
      <p>
        The <code>tweet.fetch()</code> will be transformed into a <code>GET</code> request, and an AJAX
        request will be sent that looks like this:
      </p>
      <Markdown type="jsx" text={`
      GET http://localhost:1337/tweets/1
      `}/>
      <p>
        Once the AJAX request returns, the <code>tweet</code> instance will be automatically updated, and you'll
        be able to view the resource's attributes via the <code>attributes</code> field of the instance, like this:
      </p>
      <Markdown type="jsx" text={`
      model.attributes = {
        id: 1,
        text: 'An old tweet'
      }
      `}/>

      <p>
        The <code>tweet.fetch()</code> method returns a promise. If you need access to the response object once the
        API call returns, you can do that using this code:
      </p>

      <Markdown type="jsx" text={`
      tweet.fetch().then(function(response) {
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
          url: "http://localhost:1337/tweets/1"
        },
        data: {
          id: 1,
          title: "Some Text",
          createdAt: "2016-07-02T00:00:06.407Z",
          updatedAt: "2016-07-02T00:00:06.407Z"
        },
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
        Models use the <a href="https://github.com/axios/axios">axios</a> library for handling for all network
        request, and that means the properties you set on models are ultimately just converted into a config object
        that <code>axios</code> understands.
      </p>
      <p>
        For the <code>fetch()</code> method, that means the <code>tweet.fetch()</code> call we demonstrated
        above is ultimately converted into this <code>axios</code> call:
      </p>
      <Markdown type="jsx" text={`
      import axios from 'axios';

      axios({
        url: 'http://localhost:1337/tweets/1',
        method: 'get',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      `}/>
      <p>
        If you need more control over your network requests, such as adding headers, simply provide
        an <code>options</code> object to get <code>tweet.fetch()</code> call like this:
      </p>
      <Markdown type="jsx" text={`
      tweet.fetch({
        headers: {
          'Content-Type': 'application/json'
          Authorization: 'Bearer token'
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
