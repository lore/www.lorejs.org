import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Webpack';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        Preprocessors
      </h1>
      <p>
        Webpack is configured with support for CSS, LESS and SASS.
      </p>
      <p>
        In <code>development</code>, these styles will be injected into the page dynamically, which means that
        Webpack can hot reload changes to the styles without having to refresh the page. The downside of doing this
        is that the application won't have any styles until the JavaScript loads, which can lead to
        a <a href="https://en.wikipedia.org/wiki/Flash_of_unstyled_content">flash of unstyled content</a>.
      </p>
      <p>
        In production, the styles will be extracted into a dedicated <code>css</code> file, and injected into the
        final <code>index.html</code> file, which will prevent this from occuring.
      </p>
      <p>
        The styles are also configured to use <code>postcss</code> to automatically inject browser vendor prefixes,
        which you can read more about <Link to="/anatomy/postcss-config/">here</Link>.
      </p>

      <h3>
        Relevant Section
      </h3>
      <p>
        This section of the Webpack config that controls this behavior is shown below:
      </p>
      <Markdown text={`
      {
        test: /\\.css/,
        use: ifProduction(ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
            'postcss-loader'
          ]
        }), [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ])
      },
      {
        test: /\\.less$/,
        use: ifProduction(ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
            'postcss-loader',
            'less-loader'
          ]
        }), [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader',
          'less-loader'
        ])
      },
      {
        test: /\\.scss$/,
        use: ifProduction(ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
            'postcss-loader',
            'sass-loader'
          ]
        }), [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader',
          'sass-loader'
        ])
      },
      `}/>
    </Template>
  );
};
