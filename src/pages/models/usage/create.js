import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Models';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        create
      </h1>
      <p>
        This page describes how to create a resource using a Model.
      </p>

      <h3>
        Basic Usage
      </h3>
      <p>
        Let's say you have an API endpoint located at <code>http://localhost:1337/tweets</code> and that
        a <code>tweet</code> resource looks like this:
      </p>
      <Markdown type="jsx" text={`
      {
        id: 1,
        text: 'An old tweet'
      }
      `}/>

      <p>
        To create a new Tweet, we need to issue a <code>POST</code> request
        to <code>http://localhost:1337/tweets</code>, and include the properties in the body of the request, like this:
      </p>
      <Markdown type="jsx" text={`
      POST http://localhost:1337/tweets

      {
        text: 'A new tweet'
      }
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
        text: 'A new tweet'
      })

      tweet.save()
      `}/>

      <p>
        First we import <code>Model</code> from <code>lore-models</code>. Then we create a new model
        called <code>Tweet</code>, and provide the location of the API endpoint we want to interact with as
        the <code>urlRoot</code> property.
      </p>
      <p>
        Once we have the <code>Tweet</code> model created, we create an instance of that model, and provide the
        properties for the model in the constructor. Then we call <code>tweet.save()</code> to create that resource
        through the API.
      </p>
      <p>
        Because the instance we created has no <code>id</code>, the <code>tweet.save()</code> will be transformed
        into a <code>POST</code> request, and an AJAX request will be sent that looks like this:
      </p>
      <Markdown type="jsx" text={`
      POST http://localhost:1337/tweets

      {
        "text": "A new tweet"
      }
      `}/>

      <p>
        The <code>tweet.save()</code> method returns a promise. If you need access to the response object, you can
        be notified when the API returns by chaining to that promise like this:
      </p>

      <Markdown type="jsx" text={`
      tweet.save().then(function(response) {
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
          method: "POST",
          responseType: "json",
          url: "http://localhost:1337/tweets"
        },
        data: {
          id: 1,
          title: "Some text",
          createdAt: "2016-07-02T00:00:06.407Z",
          updatedAt: "2016-07-02T00:00:06.407Z"
        },
        headers: {
          "content-type": "application/json"
        },
        request: {...}, // XMLHttpRequest
        status: 201,
        statusText: "CREATED"
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
        For the <code>save()</code> method, that means the <code>tweet.save()</code> call we demonstrated
        above is ultimately converted into this <code>axios</code> call:
      </p>
      <Markdown type="jsx" text={`
      import axios from 'axios';

      axios({
        url: 'http://localhost:1337/tweets',
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          text: 'A new tweet'
        }
      })
      `}/>
      <p>
        If you need more control over your network requests, such as adding headers, simply provide
        an <code>options</code> object to get <code>tweet.destroy()</code> call like this:
      </p>
      <Markdown type="jsx" text={`
      tweet.destroy({
        headers: {
          'Content-Type': 'application/json',
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
