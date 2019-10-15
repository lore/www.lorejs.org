import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Webpack';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        Configure Basename
      </h1>
      <p>
        Webpack is configured to serve the application from the root domain as the default, meaning that if you're
        application is hosted on <code>https://app.example.com</code>, then the default assumes the application
        will be served from <code>https://app.example.com</code>.
      </p>
      <p>
        That's what happens when you start the application using this command:
      </p>
      <Markdown text={`
      npm start
      `}/>
      <p>
        If you need to serve the application from nested URL, like <code>https://www.example.com/application/</code>,
        then you'll need to specify a <code>basename</code> in order for Webpack to generate the correct URLs for
        your assets.
      </p>
      <p>
        To do that, start the application using this command, where <code>basename</code> is the URL path you
        want the application to be served from:
      </p>
      <Markdown text={`
      npm start --
        --env.basename=/application
      `}/>
      <p>
        The command above would cause the development server to be served on port <code>3001</code> instead.
      </p>

      <h3>
        Relevant Section
      </h3>
      <p>
        This section of the Webpack config that controls this behavior is shown below:
      </p>
      <Markdown text={`
      var BASENAME = env.basename || '';
      ...
      plugins: [
        new webpack.DefinePlugin({
          __BASENAME__: JSON.stringify(BASENAME),
        }),
        new HtmlWebpackPlugin({
          publicPath: \`\${BASENAME}/\`
        }),
      ],
      ...
      devServer: {
        historyApiFallback: {
          index: \`\${BASENAME}/index.html\`,
        }
      }
      `}/>
    </Template>
  );
};
