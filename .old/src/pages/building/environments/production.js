import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Building';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';
import Video from '../../../components/Video';

export default (props) => {
  return (
    <Template>
      <h1>
        Production Build
      </h1>
      <p>
        Documentation for creating a production build of your application can be
        found <Link to="/webpack/building/production/">here</Link>.
      </p>
    </Template>
  )
};
