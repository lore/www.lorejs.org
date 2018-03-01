import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Models';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        parse
      </h1>
      <p>
        The <code>parse()</code> method provides a way to transform data provided to the model before it's saved
        as the model's <code>attributes</code>.
      </p>

      <h3>
        Default Implementation
      </h3>
      <p>
        The default implementation looks like this:
      </p>
      <Markdown type="jsx" text={`
      parse: function(response) {
        return response;
      },
      `}/>

      <h3>
        Usage
      </h3>
      <p>
        Let's say you have an API endpoint located at <code>http://localhost:1337/tweets/1</code>, that returns a
        tweet that looks like this:
      </p>
      <Markdown type="jsx" text={`
      {
        id: 1,
        text: 'An old tweet'
      }
      `}/>
      <p>
        If you wanted to retrieve that tweet, you could create this model:
      </p>
      <Markdown type="jsx" text={`
      import { Model } from 'lore-models';

      const Tweet = Model.extend({
        urlRoot: 'http://localhost:1337/tweets'
      });

      const tweet = new Tweet({
        id: 1
      });

      tweet.fetch();
      `}/>
      <p>
        Once the API call returns, <code>tweet.attributes</code> would look like this (exactly mirroring the API
        response):
      </p>
      <Markdown type="jsx" text={`
      {
        id: 1,
        text: 'An old tweet'
      }
      `}/>
      <p>
        Sometimes you might want to transform that data though, such as changing the name or value of a property, or
        adding a new field, which can be a quick way to resolve breaking API changes.
      </p>
      <p>
        You can do that by defining a <code>parse()</code> like this:
      </p>
      <Markdown type="jsx" text={`
      import { Model } from 'lore-models';

      const Tweet = Model.extend({
        urlRoot: 'http://localhost:1337/tweets',

        parse: function(response){
          response.message = response.text;
          return response;
        }
      });

      const tweet = new Tweet({
        id: 1
      });

      tweet.fetch();
      `}/>
      <p>
        Whatever the API returns will be passed to <code>parse()</code> as <code>response</code>, and whatever
        that function returns will be saved as the model's <code>attributes</code>. In the code above, we're copying
        the value of <code>text</code> onto a new attribute called <code>message</code>.
      </p>
      <p>
        This time, once the API call returns, <code>tweet.attributes</code> will look like this:
      </p>
      <Markdown type="jsx" text={`
      {
        id: 1,
        text: 'An old tweet',
        message: 'An old tweet'
      }
      `}/>
      <p>
        That's the normal use for <code>parse()</code> - transforming data returned from an API endpoint. But sometimes
        it's useful to create a model and parse the data provided to it. By default this does not happen.
      </p>
      <p>
        For example, take a look at the code below:
      </p>
      <Markdown type="jsx" text={`
      import { Model } from 'lore-models';

      const Tweet = Model.extend({
        urlRoot: 'http://localhost:1337/tweets',

        parse: function(response){
          response.message = response.text;
          return response;
        }
      });

      const tweet = new Tweet({
        id: 1,
        text: 'An old tweet'
      });
      `}/>
      <p>
        If we were to examine <code>tweet.attributes</code> at this point, they would look like this, mirroring
        the data we provided to the constructor:
      </p>
      <Markdown type="jsx" text={`
      {
        id: 1,
        text: 'An old tweet'
      }
      `}/>
      <p>
        If we wanted the model to parse that data, we need to tell it to by providing an options object, like this:
      </p>
      <Markdown type="jsx" text={`
      const tweet = new Tweet({
        id: 1,
        text: 'An old tweet'
      }, {
        parse: true
      });
      `}/>
      <p>
        Here we've provided an <code>options</code> object as a second argument to the constructor, and
        set <code>parse</code> to <code>true</code>. This time <code>tweet.attributes</code> will look like this:
      </p>
      <Markdown type="jsx" text={`
      {
        id: 1,
        text: 'An old tweet',
        message: 'An old tweet'
      }
      `}/>
      <p>
        Now the data will mirror what we would have gotten by calling the API endpoint.
      </p>
    </Template>
  );
};
