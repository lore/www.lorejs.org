import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Example';
import Markdown from '../../components/Markdown';
import CodeTabs from '../../components/CodeTabs';
import CodeTab from '../../components/CodeTab';
import QuickstartBranch from '../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        Purpose
      </h1>
      <p>
        Because docs are only useful to a point, and then you need to some working code to better understand.
      </p>

      <p>
        Lore has some examples <a href="https://github.com/lore/lore/tree/master/examples">in its source code</a>. If
        there is a specific example you'd like to see that doesn't exist, feel free
        to <a href="https://github.com/lore/lore/issues">create an issue to suggest it</a>.
      </p>
    </Template>
  )
};
