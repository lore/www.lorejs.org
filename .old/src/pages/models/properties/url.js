import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Models';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        url
      </h1>
      <p>
        The <code>url()</code> method is responsible for constructing the final URL used for API calls.
      </p>

      <h3>
        Default Behavior
      </h3>
      <p>
        The default behavior is to append the model's <code>id</code> to the <code>urlRoot</code>. For example,
        if the <code>urlRoot</code> is <code>http://localhost:1337/tweets</code>, then the <code>url()</code> will
        be one of the following:
      </p>
      <ul>
        <li>
          If the model has no <code>id</code>, then <code>url()</code> will
          return <code>http://localhost:1337/tweets</code>
        </li>
        <li>
          If the model has an <code>id</code> of <code>1</code>, then <code>url()</code> will
          return <code>http://localhost:1337/tweets/1</code>
        </li>
      </ul>

      <h3>
        Default Implementation
      </h3>
      <p>
        The default implementation looks like this:
      </p>
      <Markdown type="jsx" text={`
      url: function() {
        const base =
          _.result(this, 'urlRoot') ||
          _.result(this.collection, 'url') ||
          urlError();

        if (this.isNew()) {
          return base;
        }

        const id = this.get(this.idAttribute);
        return base.replace(/[^\\/]$/, '$&/') + encodeURIComponent(id);
      },
      `}/>

      <h3>
        Usage
      </h3>
      <p>
        One use for <code>url()</code> is to construct nested URLs. You can read more about that in
        the <code>initialize()</code> documentation <Link to="/models/properties/initialize/">here</Link>.
      </p>
    </Template>
  );
};
