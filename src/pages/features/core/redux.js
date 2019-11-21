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
        Redux
      </h1>
      <p>
        Lore uses <a href="https://github.com/reactjs/redux">Redux</a> for the underlying application architecture.
      </p>
      <blockquote>
        You can learn more about how Lore uses Redux <Link to="/redux/">here</Link>.
      </blockquote>

      <h3>
        Video
      </h3>
      <p>
        The video below is an excerpt from the full <Link to="/videos/introduction-to-lore/">Introduction to
        Lore</Link> video and provides a summary of how Lore helps with Redux, and server communication in general.
      </p>
      <Video videoId="BsjUnnGAT7Q" />
    </Template>
  )
};
