import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Webpack';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        Favicon
      </h1>
      <p>
        Webpack is configured to use the <a href="https://github.com/jantimon/favicons-webpack-plugin">
        favicons-webpack-plugin</a> in order to generate a set of favicons from the image located
        at <code>assets/images/favicon.png</code>. The default image is a 1500px png of the Lore logo.
      </p>
      <p>
        If you're new to favicons, a useful resource to learn more is <a href="https://realfavicongenerator.net">
        https://realfavicongenerator.net</a>.
      </p>
      <p>
        The plugin will use the <code>favicon.png</code> file to generate a number of smaller favicons for different
        devices. By default, favicons will only be generated for the browser, but you can modify the config if
        you need to generate favicons for devices like Apple, Android and Windows.
      </p>

      <h3>
        Relevant Section
      </h3>
      <p>
        This section of the Webpack config that controls this behavior is shown below:
      </p>
      <Markdown text={`
      var FaviconsWebpackPlugin = require('favicons-webpack-plugin');
      ...
      new FaviconsWebpackPlugin({
        logo: './assets/images/favicon.png',
        prefix: 'favicons-[hash]/',
        emitStats: true,
        statsFilename: 'favicon-manifest.json',
        icons: {
          android: false,
          appleIcon: false,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: false,
          windows: false,
          yandex: false
        }
      })
      `}/>
    </Template>
  );
};
