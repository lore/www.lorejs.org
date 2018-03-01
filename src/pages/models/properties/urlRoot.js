import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Models';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        urlRoot
      </h1>
      <p>
        The <code>urlRoot</code> is the location of the API endpoint used for fetching, creating, updating, or
        deleting the resource associated with this model.
      </p>
      <p>
        This property can be either a <code>string</code> or a <code>function</code> that returns a string.
      </p>

      <h3>
        Default Implementation
      </h3>
      <p>
        The default implementation looks like this:
      </p>
      <Markdown type="jsx" text={`
      urlRoot: '',
      `}/>
      <p>
        The equivalent function version would look like this:
      </p>
      <Markdown type="jsx" text={`
      urlRoot: function() {
        return '';
      },
      `}/>

      <h3>
        Usage
      </h3>
      <p>
        A common use for this method is to construct nested URLs.
      </p>
      <p>
        Many REST API endpoints have flat URLs, like <code>/tweets</code> or <code>/users</code>. But some APIs
        require you to use a nested URL structure like <code>/users/1/tweets/1</code> when fetching or updating data.
      </p>
      <p>
        The code below shows how you can use <code>initialize()</code> and <code>urlRoot()</code> to accomplish this:
      </p>
      <Markdown type="jsx" text={`
      import { Model } from 'lore-models';

      const Tweet = Model.extend({
        initialize: function(attributes, options){
          this.user = options.user;
        },

        urlRoot: function() {
          return \`http://localhost:1337/users/\${this.user}/tweets\`
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
        Then we override the <code>urlRoot()</code>, and provide method to compose the nested URL endpoint using
        the <code>user</code>.
      </p>
      <p>
        When we call <code>tweet.fetch()</code> it will make an API call
        to <code>http://localhost:1337/users/1/tweets/1</code>, and you can confirm the url it will use by
        calling <code>tweet.url()</code>.
      </p>
      <p>
        The final URL is constructed by the <code>url()</code> method, which you can read more
        about <Link to="/models/properties/url/">here</Link>.
      </p>
    </Template>
  );
};
