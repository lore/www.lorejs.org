import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Publishing';
import Code from '../../components/Code';
import CodeTabs from '../../components/CodeTabs';
import CodeTab from '../../components/CodeTab';
import QuickstartBranch from '../../components/QuickstartBranch';
import Video from '../../components/Video';

export default (props) => {
  return (
    <Template
      title="Publishing"
      subtitle="Introduction"
      description={(
        <p>
          This section documents how to deploy your application.
        </p>
      )}
    >
      <h2>
        Choosing a hosting provider
      </h2>
      <p>
        Once you build your application, it's really just a collection of static files, which means there
        are <em>a lot</em> of choices for services that you can use to host it. Some of those services
        include <a href="https://pages.github.com/">GitHub Pages</a>, <a href="http://surge.sh/">Surge</a>,
        and <a href="https://aws.amazon.com/s3/">Amazon S3</a>, and there are even rumors of some really
        adventurous folks hosting static applications from <a href="https://www.dropbox.com">DropBox</a>.
      </p>
      <p>
        But if you're looking for a hosting service, you might want to consider trying
        out <a href="https://zeit.co/now">Now</a>, which is a hosting service provided
        by <a href="https://zeit.co/now">zeit.co</a>.
      </p>

      <h2>
        Lore includes support for Now by default
      </h2>
      <p>
        New Lore projects include support for deploying to Now by default, and you can find a walk-through of what
        that process looks like in the navigation.
      </p>
      <p>
        The intention behind doing that is not to push the service, but to recognize that deploying your application
        is a critical step in application development, and it would feel like a large gap if the documentation for
        the framework didn't at least acknowledge and discuss the process.
      </p>
      <p>
        The reason Now is used to demonstrate that process is because it provides some excellent features for
        deploying static applications, which can make it a great choice (and a pleasant experience) for first-time
        developers.
      </p>
      <p>
        Now provides several advantages for hosting static applications, including:
      </p>
      <ul className="list-disc pl-10">
        <li>
          An easy deploy process
        </li>
        <li>
          Free SSL certificates for custom domains
        </li>
        <li>
          Zero-downtime deploys
        </li>
        <li>
          Ability to roll-back to previous deploys
        </li>
        <li>
          Provides an informative web dashboard
        </li>
        <li>
          Free global CDN, with data centers in USA and Europe
        </li>
      </ul>
      <p>
        If you'd prefer to use a different service to host your application, you can easily remove all traces
        of Now from your project by <Link to="/publishing/misc/removing-now/">following these steps</Link>.
      </p>
    </Template>
  )
};
