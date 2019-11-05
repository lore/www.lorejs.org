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
      subtitle="Provide application with a way to run custom logic before mounting."
    >
      <h2>
        Goal
      </h2>
      <p>
        Applications sometimes need a way to configure and initialize 3rd party libraries prior to
        mounting, such as libraries used for metrics or error reporting. We're going to create a
        solution that makes it easy to add and execute these kinds of "initializers".
      </p>

      <h2>
        Approach
      </h2>
      <p>
        We're going to create a directory called /initializers that will contain a set of files. Each
        file will export a function that should be run before the application mounts. Then we're going to
        import the files in this folder and invoke them right before the application is built.
      </p>
      <p>
        Think of them as functions that get invoked during the build and mounting process of your
        application, and what happens within that function is entirely up to you.
      </p>

      <h2>
        Demo
      </h2>
      <p>
        Watch the video below to see the solution <code>@lore/initializers</code> uses to solve this. Then
        explore Setup and Usage if you want to use this same approach in your own project.
      </p>

      <Video videoId="4lsKM1WvdL4" />

    </Template>
  )
};
