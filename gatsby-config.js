const postcssConfig = require('./postcss.config');

module.exports = {
  siteMetadata: {
    title: 'Lore',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: postcssConfig.plugins,
      }
    }
  ]
};
