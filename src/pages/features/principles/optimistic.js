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
        user) are visualized before the server has confirmed the action.
      </p>
      <p>
        This pattern can be tricky to implement as it requires having the ability to correlate client-side only
        data (created by the user) with real data returned from the server at some point in the future.
        But if you can pull it off, the effect will be an application that feels much more responsive to users by
        eliminating the visual artifacts that are a result of network latency (i.e. the situation where a
        user creates some data and it doesn't appear in the application until after the network request has
        made it back from the server).
      </p>
      <p>
        Lore was designed to behave optimistically by default, and the some of the benefits of this are
        listed below.
      </p>

      <div className="mb-16"/>

      <h2>
        Visual Cues
      </h2>
      <p>
        Useful for providing the user with a visual indication that some action is being performed
        but has no yet completed. Examples include fetching, updating and creating data.
      </p>
      <Link
        className="inline-block bg-lore-gradient-x text-center px-8 py-3 mb-10 rounded-full text-white hover:text-gray-300 shadow uppercase no-underline text-sm font-bold"
        style={{ textDecoration: 'none', backgroundColor: '#355c7d' }}
        to="/features/patterns/visual-cues/"
      >
        Learn more
      </Link>

      <h2>
        Error Handling
      </h2>
      <p>
        Server errors are passed to components and clearly communicated. Useful for informing the
        user when things don't go as planned and providing them with the ability to correct the error
        and try again.
      </p>
      <Link
        className="inline-block bg-lore-gradient-x text-center px-8 py-3 mb-10 rounded-full text-white hover:text-gray-300 shadow uppercase no-underline text-sm font-bold"
        style={{ textDecoration: 'none', backgroundColor: '#355c7d' }}
        to="/features/patterns/error-handling/"
      >
        Learn more
      </Link>

      <h2>
        404 Pages
      </h2>
      <p>
        Discover and communicate when resources can't be found. Useful for providing the user with
        a clear indication that what they're looking for does not exist, as infinite loaders and
        blank pages are both poor user experiences.
      </p>
      <Link
        className="inline-block bg-lore-gradient-x text-center px-8 py-3 mb-10 rounded-full text-white hover:text-gray-300 shadow uppercase no-underline text-sm font-bold"
        style={{ textDecoration: 'none', backgroundColor: '#355c7d' }}
        to="/features/patterns/404-pages/"
      >
        Learn more
      </Link>
    </Template>
  )
};
