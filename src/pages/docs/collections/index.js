import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Documentation';
import Markdown from '../../../components/Markdown';
import Video from '../../../components/Video';
import Code from '../../../components/Code';
import image from '../../../assets/images/quickstart/setup/final.png';

export default (props) => {
  return (
    <Template
      title="Collections"
      subtitle="Simplify REST API communication for retrieving lists of resources."
    >
      <h2>
        Goal
      </h2>
      <p>
        The Models section outlines a solution for creating a set of Models configured to perform CRUD
        operations against a REST API for a single resource. What they aren't designed for is retrieving
        a list of resources, such as when asking a REST API a question like "give me all posts created by
        the user with the id of 1". Collections on the other hand are designed for exactly that purpose.
      </p>
      <p>
        Collections are NOT intended to be used in isolation however, so it's recommended that you read
        the section on Models first, as the solution we're going to create will extending that approach.
      </p>

      <h2>
        Approach
      </h2>
      <p>
        Similar to Models, we're going to be using the <code>Collection</code> concept from
        the <code>@lore/backbone</code> library, which was heavily based on the implementation
        from <code>Backbone</code> itself (and why the name has not been changed). This will provide us with
        a simple way of making GET requests to a REST API to retrieve lists of resources.
      </p>
      <p>
        We're going to start by copying the files we created in the Models section,
        namely <code>config/connections.js</code>, <code>config/connectionsMap.js</code>,
        and <code>config/models.js</code>.
      </p>
      <p>
        Then we'll create two folders called <code>/models</code> and <code>/collections</code>. We'll populate
        the /models folder with the same files we did in the Models section. The /collections folder on the
        other hand will usually be empty.
      </p>
      <p>
        Finally, we'll create one more configuration file called <code>collections.js</code> that will provide
        a way to influence the way Collections for each connection are created. For settings specific to a
        type of resource, we'll be able to set that in the config file for the collection itself.
      </p>

      <h2>
        Demo
      </h2>
      <p>
        Watch the video below to see the solution <code>@lore/backbone</code> uses to solve this. Then
        explore Setup and Usage if you want to use this same approach in your own project.
      </p>

      <Video videoId="4lsKM1WvdL4" />

    </Template>
  )
};
