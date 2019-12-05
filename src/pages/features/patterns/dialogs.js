import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Features';
import Code from '../../../components/Code';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template
      title="Dialogs"
      description={(
        <p>
          Useful for launching a user experience outside the UI of the main application. You can think of dialogs as
          mini-apps that you launch to perform a task, and that you may need to reuse in multiple places in the
          application.
        </p>
      )}
    >
      <p>
        The <em>behavior</em> of dialogs tends to be fairly similar across applications, but the visual appearance
        and content can drastically based on an application's branding.
      </p>
      <p>
        Because of that, Lore doesn't provide a built-in solution for dialogs per se, but there's a side-project
        called <code>lore-forms</code> that illustrates some patterns for building dialogs that you may find helpful.
        It also includes implementations of those patterns for the Bootstrap and Material UI component libraries.
      </p>
      <p>
        You can read more about <code>lore-forms</code> <Link to="/forms/">here</Link>.
      </p>
    </Template>
  )
};
