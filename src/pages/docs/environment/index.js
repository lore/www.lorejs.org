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
      subtitle="Provide application with a way to learn the build environment."
    >
      <h2>
        Goal
      </h2>
      <p>
        Applications frequently operate in different build environments such as development, staging,
        and production. It's common for the application to need to behave differently in each of
        these environments. To do that the application needs to know what the current build environment
        is so that the code can change its behavior accordingly.
      </p>

      <h2>
        Approach
      </h2>
      <p>
        Create a function that will return the current environment when invoked. This approach should
        also allow us to set the environment manually or via an environment variable, and should default
        to development if not otherwise set.
      </p>

      <h2>
        Demo
      </h2>
      <p>
        Watch the video below to see the solution <code>@lore/environment</code> uses to solve this. Then
        explore Setup and Usage if you want to use this same approach in your own project.
      </p>

      <Video videoId="4lsKM1WvdL4" />

    </Template>
  )
};
