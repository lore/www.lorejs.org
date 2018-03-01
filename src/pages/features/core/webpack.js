import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Features';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';
import Video from '../../../components/Video';

export default (props) => {
  return (
    <Template>
      <h1>
        Webpack
      </h1>
      <p>
        Lore uses <a href="https://webpack.github.io/">Webpack</a> for the build system.
      </p>
      <blockquote>
        You can learn more about how Lore uses Webpack <Link to="/webpack/">here</Link>.
      </blockquote>

      <h3>
        Video
      </h3>
      <p>
        The video below is an excerpt from the full <Link to="/videos/introduction-to-lore/">Introduction to
        Lore</Link> video and provides a summary of how Lore helps with Webpack.
      </p>
      <Video videoId="BniePdc79gI" />
    </Template>
  )
};
