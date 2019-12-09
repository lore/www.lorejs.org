import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Building';
import Code from '../../../components/Code';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';
import Video from '../../../components/Video';

export default (props) => {
  return (
    <Template
      title="Production Build"
      subtitle="Build environment"
      description={(
        <blockquote>
          <p>
            Documentation for creating a production build of your application can be
            found in the Webpack documentation <Link to="/webpack/building/production/">here</Link>.
          </p>
        </blockquote>
      )}
    >
    </Template>
  )
};
