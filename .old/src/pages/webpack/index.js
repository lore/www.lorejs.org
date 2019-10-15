import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Webpack';
import Markdown from '../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        Introduction
      </h1>
      <p>
        Lore uses <a href="https://webpack.github.io/">Webpack</a> for the build system.
      </p>

      <p>
        If you're new to webpack, you
        may find <a href="https://egghead.io/courses/using-webpack-for-production-javascript-applications">this video
        series by Kent Dodds</a> helpful for getting up to speed quickly. You can also check out
        the <a href="http://webpack.github.io/docs/tutorials/audience/">Official Tutorial</a> on the webpack website.
      </p>

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

      <ul>
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
    </Template>
  );
};
