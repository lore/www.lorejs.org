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
        Filtering: Architecture
      </h1>
      <p>
        Challenge when implementing filtering and architectural approach Lore uses to address it.
      </p>

      <h3>
        Challenge
      </h3>
      <p>
        The challenge when incorporating filtering in your applications architecture is preventing action/reducer explosion.
        While sending a query to the server is fairly straight forward, the challenge is whether you can implement the
        functionality in a way where you don't need to add additional actions/reducers for every different type of question
        you need to ask.
      </p>

      <h3>
        Implementation
      </h3>
      <p>
        This video describes how Lore implements filtering.
      </p>

      <Video videoId="zkjcJsamLkU" />
    </Template>
  )
};
