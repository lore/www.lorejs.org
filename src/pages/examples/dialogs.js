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
        Dialogs: Example
      </h1>
      <p>
        There is a Dialogs example in the lore repo
        called <a href="https://github.com/lore/lore/tree/master/examples/dialogs-bootstrap">dialogs-bootstrap</a>.
      </p>

      <blockquote>
        <p>
          While this example technically demonstrates how to use the <code>lore.dialogs.show</code> method and does
          indeed launch dialogs, it uses the <code>lore-hook-dialogs-bootstrap</code> hook to auto-generate the
          dialogs. So it may only be half useful if what you're looking for is also an example of <em>creating</em> dialogs.
        </p>
        <p>
          For that reason, I'll strip it down in the future and create a plain <code>dialogs</code> example that
          implements all of the dialogs explicitly so you can easily view them.
        </p>
      </blockquote>

      <h3>
        Video Walk-Through
      </h3>
      <p>
        This will be added in the future.
      </p>
    </Template>
  )
};
