const postcssConfig = require('./postcss.config');

module.exports = {
  siteMetadata: {
    title: 'Lore',
  },
  plugins: [
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `src`,
    //     path: `${__dirname}/src/`,
    //   },
    // },
    // `gatsby-transformer-remark`,
    `gatsby-plugin-less`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: postcssConfig.plugins,
      },
    },
  ],
};
