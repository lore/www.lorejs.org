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
        Visual Cues: Architecture
      </h1>
      <p>
        Challenge when implementing Visual Cues and architectural approach Lore uses to address it.
      </p>

      <h3>
        Challenge
      </h3>
      <p>
        The core challenge is making sure that any information that components need to know in order to render the correct
        view is contained within the data they're provided.
      </p>

      <h3>
        Implementation
      </h3>
      <p>
        This video describes how Lore implements support for visual cues.
      </p>

      <Video videoId="vSmMg_q_DII" />
    </Template>
  )
};
