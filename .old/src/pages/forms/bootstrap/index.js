import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/forms/Bootstrap';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        Purpose
      </h1>
      <p>
        In the future, this page will document the Bootstrap version of the forms and dialogs libraries.
      </p>
      <p>
        <strong>For now, this page is simply a placeholder</strong>, and all the navigation in the sidebar on the
        right is simply a reference to which libraries exist, and what those libraries contain.
      </p>
      <p>
        Once this documentation exists, an email will be sent out as an announcement.
      </p>
    </Template>
  )
};
