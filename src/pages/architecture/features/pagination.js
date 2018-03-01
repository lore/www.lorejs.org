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
        Pagination: Architecture
      </h1>
      <p>
        Challenge when implementing pagination and architectural approach Lore uses to address it.
      </p>

      <h3>
        Challenge
      </h3>
      <p>
        The core challenge here, similar to filtering, is preventing action/reducer explosion, but also being able to work
        <em>along side</em> filtering. Both of these involve slicing data up into pieces and you need both of them to work
        together and side-by-side.
      </p>

      <h3>
        Implementation
      </h3>
      <p>
        This video describes how Lore implements pagination.
      </p>

      <blockquote>
        <p>
          NOTE: Seeing as pagination is no longer a proposal (and is now part of the framework) this video is currently
          outdated. The approach it illustrates however does closely describe how Lore implements pagination.
        </p>
        <p>
          In the future this video will be updated to fully reflect the final implementation.
        </p>
      </blockquote>

      <Video videoId="4lsKM1WvdL4" />
    </Template>
  )
};
