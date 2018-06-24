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
        Optimistic Updates: Example
      </h1>
      <p>
        Lore implements optimistic updating by default, meaning you have to exert effort to <em>turn if off</em>. You can see
        it at work in <a href="https://github.com/lore/lore/tree/master/examples">any of the examples in the lore repo</a>.
      </p>

      <p>
        If you have an idea for an example that demonstrates or clarifies optimistic updating in a way not covered by
        one of the examples feel free to <a href="https://github.com/lore/lore/issues">create an issue to suggest it</a>!
      </p>
    </Template>
  )
};
