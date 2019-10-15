import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Videos';
import Markdown from '../../components/Markdown';
import CodeTabs from '../../components/CodeTabs';
import CodeTab from '../../components/CodeTab';
import QuickstartBranch from '../../components/QuickstartBranch';
import Video from '../../components/Video';

export default (props) => {
  return (
    <Template>
      <h1>
        Introduction to Lore
      </h1>
      <p>
        Lore's goal is to simplify the "getting started" journey with React, and to create an experience where you can
        start building serious applications without knowing anything more than React itself.
      </p>
      <p>
        To do that, the framework bundles a set of popular libraries (Webpack, Redux, React Router) and configures them
        with sensible defaults. It also significantly simplifies what is one of the most time consuming parts of React
        development; writing code to communicate with API servers.
      </p>
      <p>
        To understand <em>how</em> Lore makes it easier to get started with React, the project structure, and the design
        philosophy behind the framework, check out the video below.
      </p>
      <Video videoId="QPm6sNKiLok" />
    </Template>
  )
};
