import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Models';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        initialize
      </h1>
      <p>
        The <code>initialize()</code> method is called at the end of model instantiation, and is useful for storing
        data that other methods will need.
      </p>

      <h3>
        Default Implementation
      </h3>
      <p>
        The default implementation looks like this:
      </p>
      <Markdown type="jsx" text={`
      initialize: function(attributes, options) {
        // does nothing
      },
      `}/>

      <h3>
        Usage
      </h3>
      <p>
        A common use for this method is storing variables that will be needed to construct nested URLs.
      </p>
      <p>
        Many REST API endpoints have flat URLs, like <code>/tweets</code> or <code>/users</code>. But some APIs
        require you to use a nested URL structure like <code>/users/1/tweets/1</code> when fetching or updating data.
      </p>
      <p>
        The code below shows how you can use <code>initialize()</code> to accomplish this:
      </p>
      <Markdown type="jsx" text={`
      import { Model } from 'lore-models';

      const Tweet = Model.extend({
        urlRoot: 'http://localhost:1337',

        initialize: function(attributes, options){
          this.user = options.user;
        },

        url: function() {
          return \`\${this.urlRoot}/users/\${this.user}/tweets/\${this.attributes.id}\`
        }
      })

      const tweet = new Tweet({
        id: 1
      }, {
        user: 1
      })

      tweet.fetch()
      `}/>
      <p>
        In the code above, we're providing a second argument to <code>new Tweet()</code>, and that additional
        information is passed to <code>initialize()</code> as <code>options</code>, where we save the id for
        the <code>user</code>.
      </p>
      <p>
        Then we override the <code>url()</code> function to compose the final nested URL using the <code>user</code>,
        along with the <code>id</code> of the tweet.
      </p>
      <p>
        When we call <code>tweet.fetch()</code> it will make an API call
        to <code>http://localhost:1337/users/1/tweets/1</code>, and you can confirm the url it will use by
        calling <code>tweet.url()</code>.
      </p>
    </Template>
  );
};
