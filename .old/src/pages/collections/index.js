import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Collections';
import Markdown from '../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        Introduction
      </h1>
      <p>
        Collections are part of the <a href="https://github.com/lore/lore/tree/master/packages/lore-models">
        lore-models</a> package, and are an abstraction for interacting with a REST API endpoint that make it easier
        to retrieve a collection of resources.
      </p>

      <blockquote>
        <p>
          The interface and behavior for Collections is <em>heavily</em> inspired
          by <a href="http://backbonejs.org/#Collection">Backbone.Collection</a>, and you can learn more the reasons
          why <Link to="/collections/misc/history">here</Link>.
        </p>
      </blockquote>
    </Template>
  );
};
