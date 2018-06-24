import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Features';
import Markdown from '../../components/Markdown';
import CodeTabs from '../../components/CodeTabs';
import CodeTab from '../../components/CodeTab';
import QuickstartBranch from '../../components/QuickstartBranch';
import Video from '../../components/Video';

export default (props) => {
  return (
    <Template>
      <h1>
        WebSockets (beta)
      </h1>
      <p>
        Provides the ability for an application's data to update without requiring the user to refresh the page. Especially
        useful in applications where multiple people view and interact with the same data, especially when data changes
        at a high frequency.
      </p>

      <blockquote>
        <p>
          NOTE: This feature is still in the proposal stage, but the implementation approach Lore will likely follow is
          provided below. Support for WebSockets will be implemented after pagination, infinite scrolling, and dialogs
          are supported.
        </p>
      </blockquote>

      <h3>Visualization</h3>
      <p>
        This video demonstrates what real-time functionality looks like. Screenshots are from
        the <em>Simply Social</em> prototype that <a href="https://www.invisionapp.com/">Invision</a> provides you
        when you sign up for an account.
      </p>

      <Video videoId="sPry_VqVT6c" />
    </Template>
  )
};
