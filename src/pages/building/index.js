import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Building';
import Markdown from '../../components/Markdown';
import CodeTabs from '../../components/CodeTabs';
import CodeTab from '../../components/CodeTab';
import QuickstartBranch from '../../components/QuickstartBranch';
import Video from '../../components/Video';

export default (props) => {
  return (
    <Template>
      <h1>
        Introduction
      </h1>
      <p>
        This section documents how to build your project for different environments like development and production,
        as well as how to create your own custom build environments.
      </p>
    </Template>
  )
};
