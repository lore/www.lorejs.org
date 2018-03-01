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
        WebSockets: Architecture
      </h1>
      <p>
        Challenge when implementing WebSockets and architectural approach Lore uses to address it.
      </p>

      <h3>
        Challenge
      </h3>
      <p>
        The challenge with adding support for WebSockets is finding a way to integrate it into the existing infrastructure
        that supports REST API interactions <em>without</em> having to duplicate actions or reducers for every real-time
        endpoint (which would be tedious and error prone).
      </p>

      <h3>
        Implementation
      </h3>
      <p>
        This video describes how Lore will most likely implement support for WebSockets
      </p>

      <Video videoId="jWn8oCMzb6U" />
    </Template>
  )
};
