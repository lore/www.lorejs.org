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
      title="Actions"
      subtitle="Auto-generate Redux action creators from blueprints."
    >
      <h2>
        Goal
      </h2>
      <p>
        Applications frequently need to fetch data from a REST API and cache it for use in the
        application. One popular solution for managing this is Redux.
      </p>
      <p>
        In Redux there is a concept called an Action Creator, which has the responsibility of creating
        and modifying the data the application caches. Because of that, Action Creators are also a natural
        place to place code for communicating with REST APIs to create, retrieve, update, and delete resources.
      </p>
      <p>
        In practice actions can be very repetitive to write however, and have so much similarity that it
        feels like writing boilerplate (code that you generate by coping other code and making small modifications).
      </p>
      <p>
        Our goal in this section is to develop a solution that auto-generates those actions creators so that
        we don't have to write them.
      </p>

      <h2>
        Approach
      </h2>
      <p>
        Instead of writing the action creators individually, we're going to use a set of blueprints that
        can be configured for different behaviors, including which REST API they communicate with and
        which actions they dispatch. There will be five of these blueprints, with each provided a way to
        find, get, create, update, or a destroy a specific type of resource.
      </p>
      <p>
        Since these blueprints will be communicating with REST APIs, they will be designed around the
        Models and Collections provided by <code>@lore/backbone</code>.
      </p>
      <p>
        We'll also be making the assumption that every model should have a full set of actions available
        for it, and we'll set the code up to automatically generate 5 action creators for each model
        in /models.
      </p>

      <h2>
        Demo
      </h2>
      <p>
        Watch the video below to see the solution <code>@lore/actions</code> uses to solve this. Then
        explore Setup and Usage if you want to use this same approach in your own project.
      </p>

      <Video videoId="4lsKM1WvdL4" />

    </Template>
  )
};
