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
      title="Models"
      subtitle="Simplify REST API communication for performing CRUD operations on a resource."
    >
      <h2>
        Goal
      </h2>
      <p>
        It's not uncommon for applications to need to communicate with a REST API containing dozens
        of endpoints, or with multiple APIs (such as a versioned API or consuming data from multiple
        services). Because REST APIs often follow similar conventions, the client side you write to
        consume all those endpoints and services can quickly feel like boilerplate. We're going to
        create a solution that allows us to eliminate much of that boilerplate, while also solving
        some potentially tricky problems that can arise as an API changes over time.
      </p>

      <h2>
        Approach
      </h2>
      <p>
        We're going to start by using the <code>Model</code> concept from the <code>@lore/backbone</code> library,
        which was heavily based on the implementation from <code>Backbone</code> itself (and why the name has not
        been changed). This will provide us with a simple way of performing CRUD operations on various resources.
        We'll call this config file <code>connections.js</code>.
      </p>
      <p>
        Then we'll create a folder called <code>/models</code>. Inside this folder we'll create a series of
        files, where each represents the name of a resource in the API(s) that we want to consume. We'll
        also create a config file called <code>connectionsMap.js</code> that will allow us to specify which
        models belong to which connection (i.e. API server).
      </p>
      <p>
        Finally, we'll create one more configuration file called <code>models.js</code> that will provide
        a way to influence the way Models for each connection are created. For settings specific to a
        single resource, we'll be able to set that in the config file for the model itself.
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
