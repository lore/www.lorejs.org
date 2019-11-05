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
      title="Config"
      subtitle="Create a modular project config that can be overridden in different environments."
    >
      <h2>
        Goal
      </h2>
      <p>
        Applications frequently operate in different build environments such as development, staging,
        and production. While some behaviors and services are common to all environments, it's normal
        for each environment to also have things unique to it such as the location of the API server,
        the authentication server, and the settings for services used for things like error reporting
        and customer support.
      </p>
      <p>
        We want to make it easy to specify config values common to all environments, and override those
        values as needed in each environment. We also want a solution that makes it easy to support an
        arbitrary number of environments. Finally the approach should also allow us to spread the base
        configuration across multiple files in order to make it easier to find settings related to
        specific behaviors and services.
      </p>

      <h2>
        Approach
      </h2>
      <p>
        Instead of a config file we're going to create a config folder. This folder will contain
        multiple files, with each file representing the part of the config related to a specific behavior
        or service. These files will be combined to form a single configuration object which we'll use
        in the application.
      </p>
      <p>
        In order to support multiple environments, we'll create a <code>/env</code> folder
        within <code>/config</code> that will hold config modifications unique to that environment. An
        example of this structure is shown below.
      </p>

      <Code type="sh" text={`
      /config
       |-- /env
            |-- development.js
            |-- production.js
            |-- staging.js
       |-- auth0.js
       |-- local.js
       |-- sentry.js
      `} />

      <p>
        The final configuration will be created by combining the files in the root
        of <code>/config</code> to form a single object, and then overriding those settings
        with whatever is provided by the <code>/env</code> config matching the current build environment.
      </p>
      <p>
        We'll also include a special config file called <code>local.js</code> which will be able to override
        the environment config and will be added to the .gitignore to keep it out of version control. This
        file will exist so that we have a place to store settings specific to the machine the code is running
        on during development.
      </p>

      <h2>
        Demo
      </h2>
      <p>
        Watch the video below to see the solution <code>@lore/config</code> uses to solve this. Then
        explore Setup and Usage if you want to use this same approach in your own project.
      </p>

      <Video videoId="4lsKM1WvdL4" />

    </Template>
  )
};
