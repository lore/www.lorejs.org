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
      title="Reducers"
      subtitle="Auto-generate Redux reducers from blueprints."
    >
      <h2>
        Goal
      </h2>
      <p>
        Applications frequently need to fetch data from a REST API and cache it for use in the
        application. One popular solution for managing this is Redux.
      </p>
      <p>
        In Redux there is a concept called a Reducer, which has the responsibility of storing the data
        that needs to be accessible across the application. An example of this would be storing
        the data returned from a REST APIs associated with creating, retrieving, updating, and deleting
        resources.
      </p>
      <p>
        In practice reducers can be very repetitive to write however, and have so much similarity that it
        feels like writing boilerplate (code that you generate by coping other code and making small modifications).
      </p>
      <p>
        Our goal in this section is to develop a solution that auto-generates those reducers so that
        we don't have to write them.
      </p>

      <h2>
        Approach
      </h2>
      <p>
        Instead of writing the reducers individually, we're going to use a set of blueprints that
        support storing and retrieving data according to the primary use cases, which include
        retrieving data by id, client-side id (required for optimistically creating resources), and
        also by query (the result returned by the server linked to a specific question).
      </p>
      <p>
        We'll also be making the assumption that every model should have a full set of reducers available
        for it, and we'll set the code up to automatically generate 3 reducers for each model
        in /models.
      </p>

      <h2>
        Demo
      </h2>
      <p>
        Watch the video below to see the solution <code>@lore/reducers</code> uses to solve this. Then
        explore Setup and Usage if you want to use this same approach in your own project.
      </p>

      <Video videoId="4lsKM1WvdL4" />

    </Template>
  )
};
