import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Examples';
import Code from '../../components/Code';
import CodeTabs from '../../components/CodeTabs';
import CodeTab from '../../components/CodeTab';
import QuickstartBranch from '../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        WebSockets: Example
      </h1>
      <p>
        There is a WebSockets example in the lore repo
        called <a href="https://github.com/lore/lore/tree/master/examples/websockets">websockets</a>.
      </p>

      <p>
        This example allows you to create, edit and delete "todo" items and activity will be reflected across all
        browser tabs.
      </p>

      <h3>
        Video Walk-Through
      </h3>
      <p>
        This will be added in the future.
      </p>
    </Template>
  )
};
