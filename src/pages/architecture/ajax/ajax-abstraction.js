import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Architecture';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';
import Video from '../../../components/Video';

export default (props) => {
  return (
    <Template>
      <h1>
        AJAX Abstraction
      </h1>
      <p>
        Layered communication tier able to communicate with multiple API servers and capable of adapting to changes in
        data contracts.
      </p>

      <h3>
        Architecture Implementation
      </h3>
      <p>
        This video describes how Lore simplifies AJAX communication.
      </p>

      <blockquote>
        <p>
          NOTE: This video is more of a teaser explaining the basic concept. In the full video, each tier will be broken
          down and explained in more detailed, building all the way up to explain the patterns the blueprints use.
        </p>
        <p>
          That video will be added to this page once it's completed.
        </p>
      </blockquote>

      <Video videoId="z6gBy_1e5us" />
    </Template>
  )
};
