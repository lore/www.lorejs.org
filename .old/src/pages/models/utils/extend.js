import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Models';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        extend
      </h1>
      <p>
        The <code>extend()</code> method is used when you want to create a new Model that inherits the properties
        and methods of the previous one.
      </p>

      <h3>
        Usage
      </h3>
      <p>
        This method is used to create new Models like this:
      </p>
      <Markdown type="jsx" text={`
      import { Model } from 'lore-models';

      const model = new Model();

      const Tweet = Tweet.extend({
        cidPrefix: 'm',
        urlRoot: 'http://localhost:1337/tweets'
      })

      const tweet = new Tweet();

      const User = Tweet.extend({
        urlRoot: 'http://localhost:1337/users'
      })

      const user = new User();
      `}/>
      <p>
        In the code above, we've created three models; <code>model</code>, <code>tweet</code>, and <code>user</code>.
      </p>
      <p>
        The <code>model</code> will inherit the behavior of <code>Model</code>, and will have
        a <code>cid</code> of <code>c1</code>, and a <code>urlRoot</code> of <code>''</code>.
      </p>
      <p>
        The <code>tweet</code> will inherit the behavior of <code>Tweet</code>, which overrides some of the
        properties of <code>Model</code>, and will have a <code>cid</code> of <code>m2</code>, and
        a <code>urlRoot</code> of <code>http://localhost:1337/tweets</code>.
      </p>
      <p>
        The <code>user</code> will inherit the behavior of <code>User</code>, which overrides some of the
        properties of <code>Tweet</code>, and will have a <code>cid</code> of <code>m3</code>, and
        a <code>urlRoot</code> of <code>http://localhost:1337/users</code>.
      </p>
    </Template>
  );
};
