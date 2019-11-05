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
      subtitle="Simplify action creator invocation by binding them to the Redux store."
    >
      <h2>
        Prerequisites
      </h2>
      <p>
        This section builds on Actions and Redux Store. Read those docs first before proceeding.
      </p>

      <h2>
        Goal
      </h2>
      <p>
        Invoking action creators generates actions that need to be provided to the Redux store if
        we want the reducers to store the data. It's rare that this is NOT the desired behavior.
      </p>
      <p>
        Additionally if your application only has one store (which is common) we can remove this
        step by binding the action creator to the Redux store so that they automatically dispatch
        actions. This will allow us to invoke actions directly, and not have to worry about
        whether the store received it (i.e. remove a potential source for a bug in code).
      </p>

      <h2>
        Approach
      </h2>
      <p>
        We're going to loop through all of our actions and bind them to the Redux store, and then use
        those bound actions in our application.
      </p>

      <h2>
        Demo
      </h2>
      <p>
        Watch the video below to see the solution <code>@lore/bind-actions</code> uses to solve this. Then
        explore Setup and Usage if you want to use this same approach in your own project.
      </p>

      <Video videoId="4lsKM1WvdL4" />

    </Template>
  )
};
