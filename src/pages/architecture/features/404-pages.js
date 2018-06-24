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
        Architecture
      </h1>
      <p>
        Challenge when implementing 404 Pages and architectural approach Lore uses to address it.
      </p>

      <h3>
        Challenge
      </h3>
      <p>
        The challenge when incorporating 404 pages into your applications architecture is making sure that components
        can CLEARLY discover when a request returns a 404.
      </p>

      <h3>
        Implementation
      </h3>
      <p>
        This video describes how Lore provides support for 404 pages.
      </p>

      <Video videoId="wWijTeUAB48" />
    </Template>
  )
};
