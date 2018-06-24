import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Anatomy';
import Markdown from '../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        postcss.config.js
      </h1>
      <p>
        This is a configuration file for <a href="https://github.com/postcss/postcss">postcss</a>, a webpack loader
        for transforming styles using JS plugins.
      </p>
      <p>
        Plugins can be used to lint your CSS, automatically include vendor prefixes, add support for
        variables and mixins, transpile future CSS syntax, inline images, and more.
      </p>
      <p>
        To learn more about this file, see the <a href="https://github.com/michael-ciniawsky/postcss-load-config">postcss
        config documentation</a> on GitHub.
      </p>
      <p>
        By default, new projects include the <a href="https://github.com/postcss/autoprefixer">autoprefixer plugin</a>,
        which automatically adds vendors prefixes to any CSS properties (which includes any code written in LESS or SASS).
      </p>

      <h3>
        Defaults
      </h3>
      <p>
        The default file included in new projects looks like this:
      </p>
      <Markdown text={`
      module.exports = {
        plugins: [
          require('autoprefixer')({
            /* ...options... */
          })
        ]
      };
      `}/>
    </Template>
  );
};
