import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Publishing';
import Markdown from '../../components/Markdown';
import CodeTabs from '../../components/CodeTabs';
import CodeTab from '../../components/CodeTab';
import QuickstartBranch from '../../components/QuickstartBranch';
import Video from '../../components/Video';

export default (props) => {
  return (
    <Template>
      <h1>
        Introduction
      </h1>
      <p>
        This section documents how to deploy your application.
      </p>

      <h3>
        Choosing a Hosting Provider
      </h3>
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
      <p>
        This particular service provides several advantages for hosting static applications, including:
      </p>
      <ul>
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
        New Lore projects include support for deploying to Now by default, and you can find a walkthrough of what
        that process looks like in the navigation on the right.
      </p>
      <p>
        If you'd prefer to use a different service to host your application, you can easily remove all traces
        of Now from your project by <Link to="/publishing/misc/removing-now/">following these steps</Link>.
      </p>
    </Template>
  )
};
