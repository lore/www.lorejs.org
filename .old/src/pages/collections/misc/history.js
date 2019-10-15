import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Collections';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        History
      </h1>
      <p>
        The interface for Collections is <em>heavily</em> inspired by <a href="http://backbonejs.org">Backbone</a>, and
        largely mirrors the implementation of <a href="http://backbonejs.org/#Collection">Backbone.Collection</a>.
      </p>
      <p>
        Unlike Backbone's intended usage however, this library should <em>not</em> be used to pass data through your
        application. It is intended to be used solely as an abstraction tier to simplify AJAX requests.
      </p>
      <p>
        This means when using it, the expectation is that you configure your Collection, instantiate it with data,
        make the appropriate request, and then serialize the collection back into JSON data before using it in your
        application.
      </p>
      <p>
        The major differences between <code>Backbone.Collection</code> and this version of <code>Collection</code> are:
      </p>
      <ul>
        <li>
          All event emitters have been removed. This is purely an abstraction tier, not a way to store
          your data, or detect when that data has changed.
        </li>
        <li>
          The <code>jQuery.ajax</code> method has been replaced with <code>axios</code> for managing AJAX calls,
          which also facilitates testing in a non-browser environment (i.e. Node).
        </li>
      </ul>
    </Template>
  );
};
