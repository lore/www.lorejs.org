import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Videos';
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
        Written documentation is only helpful to a point. Somethings are better explain with moving pictures.
      </p>
      <p>
        Collects all the videos that have been created in a single location. Some of these videos may be linked
        elsewhere in the site.
      </p>
    </Template>
  )
};
