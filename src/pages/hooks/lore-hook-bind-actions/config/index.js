import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/LoreHookBindActions';
import Markdown from '../../../../components/Markdown';
import CodeTabs from '../../../../components/CodeTabs';
import CodeTab from '../../../../components/CodeTab';
import QuickstartBranch from '../../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        Default Config
      </h1>
      <p>
        The default config is shown below. This hook as no configuration options.
      </p>
      <Markdown text={`
      {

      }
      `}/>
    </Template>
  )
};
