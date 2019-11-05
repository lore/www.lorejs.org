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
        Optimistic Updates: Architecture
      </h1>
      <p>
        Challenge when implementing Optimistic Updates and architectural approach Lore uses to address it.
      </p>

      <h3>
        Challenge
      </h3>
      <p>
        The challenge with incorporating support for optimistic updates is making sure we can merge the optimistic data
        that we <em>assume</em> will be created successfully with the real data once it comes back from the server, and all
        while preventing duplicate data from appearing in the reducers.
      </p>

      <h3>
        Implementation
      </h3>
      <p>
        This video describes how Lore provides support for optimistic updates.
      </p>

      <Video videoId="1NX-reP6yxQ" />
    </Template>
  )
};
