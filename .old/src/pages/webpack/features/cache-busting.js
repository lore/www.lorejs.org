import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Webpack';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        Cache Busting
      </h1>
      <p>
        Whenever you build the application, each file will include a unique hash
        like <code>bundle.main.11e83aeeb2a9a9714d66.js</code>. These hashes serve as a cache busting mechanism to
        prevent browsers from serving outdated files to users.
      </p>

      <h3>
        Relevant Section
      </h3>
      <p>
        This section of the Webpack config that controls this behavior is shown below:
      </p>
      <Markdown text={`
      output: {
        filename: ifProduction(
          'bundle.[name].[chunkhash].js',
          'bundle.[name].js'
        ),
      },
      plugins: removeEmpty([
        new ExtractTextPlugin(ifProduction(
          'styles.[name].[chunkhash].css',
          'styles.[name].css'
        )),
      ]),
      `}/>
    </Template>
  );
};
