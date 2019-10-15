import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Architecture';
import Markdown from '../../components/Markdown';
import CodeTabs from '../../components/CodeTabs';
import CodeTab from '../../components/CodeTab';
import QuickstartBranch from '../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        Introduction
      </h1>
      <p>
        This section is intended to explain <strong>how</strong> Lore works, and provide a rationale for
        the patterns and opinions expressed in the framework.
      </p>
    </Template>
  )
};
