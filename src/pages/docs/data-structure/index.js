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
      subtitle="Provide a way for your application data to be self-describing."
    >
      <h2>
        Goal
      </h2>
      <p>
        TODO...
      </p>

      <h2>
        Approach
      </h2>
      <p>
        TODO...
      </p>

      <h2>
        Demo
      </h2>
      <p>
        Watch the video below to see the solution <code>@lore/utils</code> uses to solve this. Then
        explore Setup and Usage if you want to use this same approach in your own project.
      </p>

      <Video videoId="4lsKM1WvdL4" />

    </Template>
  )
};
