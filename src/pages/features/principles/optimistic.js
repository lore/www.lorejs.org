import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Features';
import Video from '../../../components/Video';

export default (props) => {
  return (
    <Template
      title="Optimistic"
      subtitle="Design principle"
    >
      <p>
        Optimistic updating is a pattern where changes to data (especially data created by the
        user) are visualized before the server has confirmed the action. While the pattern can
        be tricky to implement, as it requires the ability to correlate and merge fake data with
        real data returned from the server in the future, using it can drastically remove the
        visual effects of server latency and makes your application feel more responsive to users.
      </p>
      <p>
        Lore was designed around this pattern, and the benefits show in the ways listed below.
      </p>

      <h2>
        Visual Cues
      </h2>
      <p>
        Useful for providing the user with a visual indication that some action is being performed
        but has no yet completed. Examples include fetching, updating and creating data.
      </p>

      <h2>
        Error Handling
      </h2>
      <p>
        Server errors are passed to components and clearly communicated. Useful for informing the
        user when things don't go as planned and providing them with the ability to correct the error
        and try again.
      </p>

      <h2>
        404 Pages
      </h2>
      <p>
        Discover and communicate when resources can't be found. Useful for providing the user with
        a clear indication that what they're looking for does not exist, as infinite loaders and
        blank pages are both poor user experiences.
      </p>
    </Template>
  )
};
