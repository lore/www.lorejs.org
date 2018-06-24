import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Hooks';
import Markdown from '../../components/Markdown';
import CodeTabs from '../../components/CodeTabs';
import CodeTab from '../../components/CodeTab';
import QuickstartBranch from '../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        lore-hook-dialogs-bootstrap
      </h1>
      <p>
        Source code for this hook can be found on GitHub <a href="https://github.com/lore/lore/tree/master/packages/lore-hook-dialogs-bootstrap">at this link</a>.
      </p>

      <h2>
        Purpose
      </h2>
      <p>
        A <a href="http://www.lorejs.org">Lore</a> hook that generates dialogs using <a href="http://getbootstrap.com">Bootstrap</a>.
      </p>

      <h2>
        Example Usage
      </h2>
      <p>
        To see how this hook is used, see the <a href="https://github.com/lore/lore/tree/master/examples/dialogs-bootstrap">example</a>.
      </p>
    </Template>
  )
};
