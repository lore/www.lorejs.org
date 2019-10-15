import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Collections';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        model
      </h1>
      <p>
        The <code>model</code> property is the <code>Model</code> class that resources should be converted to.
      </p>

      <h3>
        Default Implementation
      </h3>
      <p>
        The default implementation looks like this:
      </p>
      <Markdown type="jsx" text={`
      import { Model } from 'lore-models';
      ...
      model: Model,
      `}/>

      <h3>
        Usage
      </h3>
      <p>
        Most of the time, this property won't be needed, except when you need to transform the data for individual
        resources returned from the server.
      </p>
      <p>
        For example, let's say you have an API endpoint located at <code>http://localhost:1337/tweets</code>, that
        returns a collection of tweets that looks like this:
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
        If you wanted to retrieve those tweets, you could create this collection:
      </p>
      <Markdown type="jsx" text={`
      import { Collection } from 'lore-models';

      const TweetCollection = Collection.extend({
        urlRoot: 'http://localhost:1337/tweets'
      });

      const tweets = new TweetCollection();

      tweets.fetch();
      `}/>
      <p>
        Once the API call returns, <code>tweet.models</code> would look like this (exactly mirroring the API
        response, but converted into Models):
      </p>
      <Markdown type="jsx" text={`
      [
        new Model({
          id: 1,
          text: 'An old tweet'
        }),
        new Model({
          id: 2,
          text: 'A new tweet'
        })
      ]
      `}/>
      <p>
        And if we converted that into a raw JSON object using <code>tweets.toJSON()</code> we would see this:
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
        But sometimes you might want to transform that data, such as changing the name or value of a property,
        as mentioned in the <code>parse()</code> docs for Models (<Link to="/models/properties/parse/">link</Link>).
      </p>
      <p>
        For example, let's say we wanted to add a <code>message</code> field to each model, to resolve a breaking
        API change. One way to do that would be to account for that in the collection's <code>parse()</code> method
        like this:
      </p>
      <p>
        You can do that by defining a <code>parse()</code> like this:
      </p>
      <Markdown type="jsx" text={`
      import { Collection } from 'lore-models';

      const TweetCollection = Collection.extend({
        urlRoot: 'http://localhost:1337/tweets',

        parse: function(response){
          return response.data.map(function(datum){
            datum.message = datum.text;
            return datum;
          });
        }
      });

      const tweets = new TweetCollection();

      tweets.fetch();
      `}/>
      <p>
        In the code above, we're iterating through the data provided by the API, and modifying the response to include
        a <code>message</code> attribute that mirrors the <code>text</code> attribute.
      </p>
      <p>
        Alternatively, we could define that parse method in a custom <code>Tweet</code> Model like this:
      </p>
      <Markdown type="jsx" text={`
      import { Model, Collection } from 'lore-models';

      const Tweet = Model.extend({
        parse: function(response){
          response.message = response.text;
          return response;
        }
      });

      const TweetCollection = Collection.extend({
        model: Tweet,

        urlRoot: 'http://localhost:1337/tweets',

        parse: function(response){
          return response.data;
        }
      });

      const tweets = new TweetCollection();

      tweets.fetch();
      `}/>
      <p>
        In this code we've created a custom <code>Tweet</code> Model, and defined a <code>parse()</code> method that
        knows how to convert a single tweet resource into the format we need. Then, instead of including that logic
        in the <code>parse()</code> method for the <code>TweetCollection</code>, we can leave it out.
      </p>
      <p>
        By defining the <code>model</code> for the <code>TweetCollection</code>, the resources will automatically
        be cast to a <code>Tweet</code>, and once the API call returns <code>tweets.models</code> will be composed
        like this:
      </p>
      <Markdown type="jsx" text={`
      [
        new Tweet({
          id: 1,
          text: 'An old tweet'
        }, { parse: true }),
        new Tweet({
          id: 2,
          text: 'A new tweet'
        }, { parse: true })
      ]
      `}/>
      <p>
        And calling <code>tweets.toJSON()</code> would provide this:
      </p>
      <Markdown type="jsx" text={`
      [
        {
          id: 1,
          text: 'An old tweet',
          message: 'An old tweet'
        },
        {
          id: 2,
          text: 'A new tweet',
          message: 'A new tweet'
        }
      ]
      `}/>
    </Template>
  );
};
