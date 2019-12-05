import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Features';
import Video from '../../../components/Video';

export default (props) => {
  return (
    <Template
    title="Real-time Considerations"
    subtitle="Design principle"
    >
      <p>
        Provides the ability for an application's data to update without requiring the user to
        refresh the page. Especially useful in applications where multiple people view and
        interact with the same data, especially when data changes at a high frequency, or for
        certain classes of problems that need status checks to see when they’re completed (queuing
        a task to send an email, spinning up a server, etc)
      </p>

      <h2>
        Polling
      </h2>
      <p>
        Polling is a pattern where data is refetched on a set interval, like every 5 seconds, with
        the intention of checking to see if it’s changed. While this approach only works for small
        applications or in limited scope, due to browsers limiting the number of concurrent network
        requests, it still has its place, and is a strategy that can be used with any server. Lore
        provides a component that makes it easy to specify which resource you want polled, and is
        easy to start and stop.
      </p>

      <h2>
        Websockets (beta)
      </h2>
      <p>
        Websockets are a protocol that allow a client application to subscribe to data, and the
        server will push new data to the client. Applications that have a high real-time expectation
        (like chat applications) are largely to be using this approach. Provides the ability for an
        application's data to update without requiring the user to refresh the page. Especially useful
        in applications where multiple people view and interact with the same data, especially when
        data changes at a high frequency. Lore provides a package that integrates seamlessly with
        existing actions and reducer patterns, though it hasn’t been used in production. It’s more a
        proof of concept that likely has some blind spots : )
      </p>
    </Template>
  )
};
