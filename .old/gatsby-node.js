/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// exports.modifyWebpackConfig = function ({ config, stage }) {
//
//   switch (stage) {
//     case 'develop':
//       config._config.devtool = 'eval';
//       break;
//   }
//
//   return config;
// };

exports.onCreateWebpackConfig = function({ stage, actions }) {

  switch (stage) {
    case 'develop':
      actions.setWebpackConfig({
        devtool: 'eval'
      });
      break;
  }
};
