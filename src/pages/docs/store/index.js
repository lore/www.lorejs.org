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
      title="Concept"
      subtitle="Set up the Redux store."
    >
      <h2>
        Prerequisites
      </h2>
      <p>
        This section builds on Reducers. It's recommended that you read those docs first before proceeding.
      </p>

      <h2>
        Goal
      </h2>
      <p>
        Now that we have a set of reducers, we can import Redux and use it to combine them
        into a single application store. This will allow us to provide the store with an
        action and not have to worry about which reducer is responsible for storing the
        data. The store will invoke all of the reducers and take care of it for us.
      </p>

      <h2>
        Demo
      </h2>
      <p>
        Watch the video below to see the solution <code>@lore/store</code> uses to solve this. Then
        explore Setup and Usage if you want to use this same approach in your own project.
      </p>

      <Video videoId="4lsKM1WvdL4" />

    </Template>
  )
};
