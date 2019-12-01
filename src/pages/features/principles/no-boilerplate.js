import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Features';
import Video from '../../../components/Video';

export default (props) => {
  return (
    <Template>
      <h1>
        Data Structure
      </h1>
      <p>
        Enables data-driven components by supplying components with both data and context.
      </p>

      <h3>
        Overview
      </h3>
      <p>
        Providing the user with visual feedback about what's happening in an application is <em>extremely</em> important for providing
        a good user experience. In order to do that, the data components receives needs to be self-describing. That means that
        no matter what is happening in the application, or what response the API returned for a request, the data structure
        you use must be able to represent it, so that all the information a component needs in order to know what to render
        is contained in the data it receives.
      </p>

      <p>
        There are two data containers in Lore; a <Link to="./models/">model</Link> and a <Link to="./collections/">collection</Link>.
      </p>

      <h3>
        Visualization
      </h3>
      <p>
        This video describes the data structure Lore uses to enable data-driven components.
      </p>

      <Video videoId="ZRcExHzY9W0" />
    </Template>
  )
};
