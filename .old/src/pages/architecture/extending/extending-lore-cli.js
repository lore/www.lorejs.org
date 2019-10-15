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
        Extending the Lore CLI
      </h1>
      <p>
        All of the commands in the Lore CLI are implemented as a series of plugins, and the <code>.lorerc</code> file
        at the root of your project allows you to modify the behavior of the CLI, including adding new commands
        and changing the behavior of existing commands.
      </p>
      <p>
        You can learn more about creating custom commands <Link to="/cli/tutorial/">here</Link>.
      </p>
    </Template>
  )
};
