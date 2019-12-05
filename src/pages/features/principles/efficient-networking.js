import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Features';
import Video from '../../../components/Video';

export default (props) => {
  return (
    <Template
      title="Efficient Networking (No Duplicate Requests)"
      subtitle="Design principle"
    >
      <p>
        Provides the ability for an application's data to update without requiring the user to
        refresh the page. Especially useful in applications where multiple people view and interact
        with the same data, especially when data changes at a high frequency, or for certain classes
        of problems that need status checks to see when they’re completed (queuing a task to send
        an email, spinning up a server, etc)
      </p>

      <h2>
        Connect Hook
      </h2>
      <p>
        Lore provides a hook called connect that is designed to fetch data from the local cache if
        it exists, or automatically fetch it from the API if it doesn't. It can even tell if data
        is already (currently) being fetched in order to guarantee that there’s never more than a
        single network request for the same data. Preventing duplicate requests not only reduces
        server load, but makes sure the data you actually need is being prioritized and retrieved
        as quickly as possible.
      </p>

    </Template>
  )
};
