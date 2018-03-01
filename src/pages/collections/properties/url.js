import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Collections';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        set
      </h1>
      <p>
        The <code>url</code> is the location of the API endpoint used for fetching the resources associated with
        this collection.
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
      url: '',
      `}/>
      <p>
        The equivalent function version would look like this:
      </p>
      <Markdown type="jsx" text={`
      url: function() {
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
        require you to use a nested URL structure like <code>/users/1/tweets</code> when fetching or updating data.
      </p>
      <p>
        The code below shows how you can use <code>initialize()</code> and <code>url()</code> to accomplish this:
      </p>
      <Markdown type="jsx" text={`
      import { Collection } from 'lore-models';

      const TweetCollection = Collection.extend({
        initialize: function(attributes, options){
          this.user = options.user;
        },

        url: function() {
          return \`http://localhost:1337/users/\${this.user}/tweets\`
        }
      })

      const tweets = new TweetCollection([], {
        user: 1
      })

      tweets.fetch()
      `}/>
      <p>
        In the code above, we're providing a second argument to <code>new TweetCollection()</code>, and that additional
        information is passed to <code>initialize()</code> as <code>options</code>, where we save the id for
        the <code>user</code>.
      </p>
      <p>
        Then we override the <code>url()</code>, and provide a method to compose the nested URL endpoint using
        the <code>user</code>.
      </p>
      <p>
        When we call <code>tweets.fetch()</code> it will make an API call
        to <code>http://localhost:1337/users/1/tweets</code>, and you can confirm the url it will use by
        calling <code>tweets.url()</code>.
      </p>
    </Template>
  );
};
