/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreateWebpackConfig = function({ stage, actions }) {

  switch (stage) {
    case 'develop':
      actions.setWebpackConfig({
        devtool: 'eval'
      });
      break;
  }
};
