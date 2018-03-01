import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Webpack';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        Fonts
      </h1>
      <p>
        Webpack is configured with support for the font
        formats <code>ttf</code>, <code>otf</code>, <code>eot</code>, <code>woff</code>, and <code>woff2</code>.
      </p>

      <h3>
        Relevant Section
      </h3>
      <p>
        This section of the Webpack config that controls this behavior is shown below:
      </p>
      <Markdown text={`
      {
        test: /\\.(ttf|otf|eot|woff(2)?)(\\?[a-z0-9]+)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: ifProduction(
              'assets/fonts/[name].[hash:8].[ext]',
              'assets/fonts/[name].[ext]'
            )
          }
        }
      },
      `}/>
    </Template>
  );
};
