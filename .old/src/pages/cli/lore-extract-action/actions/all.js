import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/LoreExtractAction';
import Markdown from '../../../../components/Markdown';
import CodeTabs from '../../../../components/CodeTabs';
import CodeTab from '../../../../components/CodeTab';
import QuickstartBranch from '../../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        All
      </h1>
      <p>
        CLI command to extract all <Link to="/architecture/actions/">actions</Link> to your project.
      </p>

      <h3>
        Usage
      </h3>

      <Markdown type="sh" text={`
      lore extract action [model]
      `}/>

      <Markdown type="sh" text={`
      src
        actions
          post
            create
            destroy
            find
            get
            update
      `}/>
    </Template>
  )
};
