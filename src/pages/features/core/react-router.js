import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Features';
import Code from '../../../components/Code';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';
import Video from '../../../components/Video';

export default (props) => {
  return (
    <Template>
      <h1>
        React Router
      </h1>
      <p>
        Lore uses <a href="https://github.com/reactjs/react-router">React Router</a> for the routing tier.
      </p>
      <blockquote>
        You can learn more about how Lore uses React Router <Link to="/react-router/">here</Link>.
      </blockquote>

      <h3>
        Video
      </h3>
      <p>
        The video below is an excerpt from the full <Link to="/videos/introduction-to-lore/">Introduction to
        Lore</Link> video and provides a summary of how Lore helps with routing.
      </p>
      <Video videoId="RmaSTBaPNb8" />
    </Template>
  )
};
