import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Features';
import Code from '../../../components/Code';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';
import Video from '../../../components/Video';

export default (props) => {
  return (
    <Template
      title="Webpack"
      description={(
        <>
          <p>
            Lore uses <a href="https://webpack.github.io/">Webpack</a> for the build system.
          </p>
          <blockquote>
            You can learn more about how Lore uses Webpack <Link to="/webpack/">here</Link>.
          </blockquote>
        </>
      )}
    >
      <h2>
        Resources for Learning Webpack
      </h2>
      <p>
        If you're new to webpack, you
        may find <a href="https://egghead.io/courses/using-webpack-for-production-javascript-applications">this video
        series by Kent Dodds</a> helpful for getting up to speed quickly. You can also check out
        the <a href="http://webpack.github.io/docs/tutorials/audience/">Official Tutorial</a> on the webpack website.
      </p>

      <h2>
        Modifying the Webpack Config
      </h2>
      <p>
        You can learn how to modify Lore's default <Link to="/webpack/">here</Link>, along with an overview
        of all the supported features and use cases.
      </p>

      <h2>
        Orientation
      </h2>
      <p>
        The config file for webpack is located at the root of the project and called <code>webpack.config.js</code>.
        It uses a library called <a href="https://github.com/kentcdodds/webpack-config-utils">webpack-config-utils</a>,
        created by Kent Dodds, in order to allow multiple environment configurations to live within the same config
        file, such as different configurations for development and production.
      </p>

      <p>
        The config file includes defaults intended to cover the majority of application development concerns, which
        includes:
      </p>

      <ul className="list-disc pl-10">
        <li>
          Support for common CSS preprocessors (LESS and SASS)
        </li>
        <li>
          Support for common font types (ttf, otf, eot, woff, woff2)
        </li>
        <li>
          Support for common image types (png, jpeg, gif, tiff, bmp, svg)
        </li>
        <li>
          Automatically adds browser prefixes to CSS files
        </li>
        <li>
          Favicon generation and insertion into the HTML file
        </li>
        <li>
          Chunking (breaking the build up into multiple smaller files for faster page load)
        </li>
        <li>
          Cache busting (adding a unique hash to production files to prevent browsers from re-using outdated files)
        </li>
      </ul>

      <p>
        It's entirely possible you may never need to modify the config file. If you do, you can learn
        about the configuration options in <a href="https://webpack.js.org/configuration">the official webpack
        documentation</a>.
      </p>

      <h2>
        Video
      </h2>
      <p>
        The video below is an excerpt from the full <Link to="/videos/introduction-to-lore/">Introduction to
        Lore</Link> video and provides a summary of how Lore helps with Webpack.
      </p>
      <Video videoId="BniePdc79gI" />
    </Template>
  )
};
