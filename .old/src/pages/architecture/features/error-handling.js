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
      <h3>
        Challenge
      </h3>
      <p>
        The challenge when incorporating error handling into your applications architecture is making sure server errors
        are communicated back to components, so we can can inform the user when something bad happened and at least give
        them a chance to copy out their data or fix and retry the request.
      </p>

      <h3>
        Implementation
      </h3>
      <p>
        This video describes how Lore provides support for error handling.
      </p>

      <Video videoId="P27Ow1NyGTg" />
    </Template>
  )
};
