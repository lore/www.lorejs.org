import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Webpack';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        Chunking
      </h1>
      <p>
        Webpack defaults to putting all JavaScript files in a single <code>bundle.js</code>, but the default Lore
        config breaks the code up into two chunks; one for <strong>vendor</strong> files, and one for
        the <strong>main</strong> application code.
      </p>

      <h3>
        Chunk Comparison
      </h3>
      <p>
        If you compare the output between the example <Link to="/webpack/building/development/">development
        build</Link> and <Link to="/webpack/building/production/">production build</Link>, you can see that the
        minification and uglification process has a significant impact in the size of the final JavaScript files.
      </p>
      <p>
        The <code>bundle.main.js</code> file in the production build was reduced from <strong>5.17 MB</strong>
        to <strong>1.41 MB</strong>, and the <code>bundle.vendor.js</code> file was reduced
        from <strong>1.04 MB</strong> to <code>197 kB</code>.
      </p>
      <p>
        That may seem a bit unbalanced, as one file clearly has more code than the other, so feel free to adjust
        the packages included in each bundle to play with the sizes.
      </p>
      <p>
        If you want to experiment with the effect chunk size has on page load time, you can add and remove libraries
        from the <code>vendor</code> chunk by modifying this section in the <code>webpack.config.js</code> file:
      </p>

      <Markdown text={`
      ...
        entry: {
          main: './index.js',
          vendor: [
            'react',
            'react-dom',
            'react-router'
          ]
        },
      ...
      `}/>

      <h3>
        Relevant Section
      </h3>
      <p>
        This section of the Webpack config that controls this behavior is shown below:
      </p>
      <Markdown text={`
        entry: {
          main: './index.js',
          vendor: [
            'react',
            'react-dom',
            'react-router'
          ]
        },
        ...
        ifProduction(new webpack.optimize.CommonsChunkPlugin({
          names: [
            'vendor'
          ]
        })),
      `}/>
    </Template>
  );
};
