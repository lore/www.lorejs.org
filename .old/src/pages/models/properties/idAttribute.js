import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Models';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        idAttribute
      </h1>
      <p>
        Name of the attribute returned from the API that serves as the primary key for that resource.
      </p>

      <h3>
        Default Implementation
      </h3>
      <p>
        The default implementation looks like this:
      </p>
      <Markdown type="jsx" text={`
      idAttribute: 'id',
      `}/>

      <h3>
        Usage
      </h3>
      <p>
        Let's say you have an API endpoint located at <code>http://localhost:1337/tweets/1</code> that returns
        a <code>tweet</code> resource looks like this:
      </p>
      <Markdown type="jsx" text={`
      {
        id: 1,
        text: 'An old tweet'
      }
      `}/>
      <p>
        If you fetch that tweet using this code:
      </p>
      <Markdown type="jsx" text={`
      import { Model } from 'lore-models';

      const Tweet = Model.extend({
        urlRoot: 'http://localhost:1337/tweets'
      })

      const tweet = new Tweet({
        id: 1
      })

      tweet.fetch()
      `}/>
      <p>
        Then once the request returns, you'll be able to access the primary key using <code>tweet.id</code>, and it
        would return <code>1</code>.
      </p>
      <p>
        But some API endpoints don't use <code>id</code> as the name of the attribute representing the primary key.
        For example, APIs that are backed by MongoDB or CouchDB use <code>_id</code>, and that same resource would
        be returned like this:
      </p>
      <Markdown type="jsx" text={`
      {
        _id: 1,
        text: 'An old tweet'
      }
      `}/>
      <p>
        With the default <code>idAttribute</code>, if you now tried to access the primary key
        using <code>tweet.id</code>, it would return <code>undefined</code>, because
        there <em>was</em> no <code>id</code> attribute.
      </p>
      <p>
        To fix that, simply change the value of <code>idAttribute</code> to <code>_id</code>, like this:
      </p>
      <Markdown type="jsx" text={`
      import { Model } from 'lore-models';

      const Tweet = Model.extend({
        idAttribute: '_id',
        urlRoot: 'http://localhost:1337/tweets'
      })

      const tweet = new Tweet({
        id: 1
      })

      tweet.fetch()
      `}/>
      <p>
        Now when you look at <code>tweet.id</code> you'll see <code>1</code> again, because it pulled the value
        from <code>_id</code>.
      </p>
    </Template>
  );
};
