import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Architecture';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        Extending Lore
      </h1>
      <p>
        Nearly all of the functionality in Lore is implemented as a series of plugins called hooks. By adding
        and removing hooks, or creating your own, you can drastically modify the behavior of the framework.
      </p>
      <p>
        You can learn more about creating custom hooks <Link to="/hooks/tutorial/">here</Link>.
      </p>
    </Template>
  )
};
