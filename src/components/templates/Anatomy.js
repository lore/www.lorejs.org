import React from 'react';
import Documentation from './_common/Documentation';


// <i className="material-icons">arrow_right</i>

export default (props) => {
  return (
    <Documentation {...props} navigation={[
      {
        title: 'Introduction',
        links: [
          ['Overview', '/anatomy/'],
        ]
      },
      {
        title: 'Structure',
        links: [
          ['assets', '/anatomy/assets/', [
            ['css', '/anatomy/assets/css/', [
              ['loading-screen.css', '/anatomy/assets/css/loading-screen/'],
              ['main.css', '/anatomy/assets/css/main/'],
            ]],
            ['images', '/anatomy/assets/images/', [
              ['favicon.png', '/anatomy/assets/images/favicon/'],
              ['logo.png', '/anatomy/assets/images/logo/'],
            ]],
            ['less', '/anatomy/assets/less/', [
              ['loading-screen.less', '/anatomy/assets/less/loading-screen/'],
              ['main.less', '/anatomy/assets/less/main/'],
            ]],
            ['sass', '/anatomy/assets/sass/', [
              ['loading-screen.scss', '/anatomy/assets/sass/loading-screen/'],
              ['main.scss', '/anatomy/assets/sass/main/'],
            ]],
          ]],
          ['config', '/anatomy/config/', [
            ['env', '/anatomy/config/env/', [
              ['development.js', '/anatomy/config/env/development/'],
              ['production.js', '/anatomy/config/env/production/'],
            ]],
            ['actions.js', '/anatomy/config/actions/'],
            ['auth.js', '/anatomy/config/auth/'],
            ['collections.js', '/anatomy/config/collections/'],
            ['connect.js', '/anatomy/config/connect/'],
            ['connections.js', '/anatomy/config/connections/'],
            // ['dialog.js', '/anatomy/config/dialog/'],
            ['local.js', '/anatomy/config/local/'],
            ['models.js', '/anatomy/config/models/'],
            ['react.js', '/anatomy/config/react/'],
            ['reducers.js', '/anatomy/config/reducers/'],
            ['redux.js', '/anatomy/config/redux/'],
            ['router.js', '/anatomy/config/router/'],
          ]],
          ['initializers', '/anatomy/initializers/', [
            ['.gitkeep', '/anatomy/initializers/gitkeep/'],
          ]],
          ['src', '/anatomy/src/', [
            ['actions', '/anatomy/src/actions/', [
              ['.gitkeep', '/anatomy/src/actions/gitkeep/'],
            ]],
            ['collections', '/anatomy/src/collections/', [
              ['.gitkeep', '/anatomy/src/collections/gitkeep/'],
            ]],
            ['components', '/anatomy/src/components/', [
              ['Layout.js', '/anatomy/src/components/layout/'],
              ['Master.js', '/anatomy/src/components/master/'],
            ]],
            ['constants', '/anatomy/src/constants/', [
              ['ActionTypes.js', '/anatomy/src/constants/action-types/'],
              ['PayloadStates.js', '/anatomy/src/constants/payload-states/'],
            ]],
            ['decorators', '/anatomy/src/decorators/', [
              ['UserIsAuthenticated.js', '/anatomy/src/decorators/user-is-authenticated/'],
              ['UserIsAuthorized.js', '/anatomy/src/decorators/user-is-authorized/'],
            ]],
            ['dialogs', '/anatomy/src/dialogs/', [
              ['.gitkeep', '/anatomy/src/dialogs/gitkeep/'],
            ]],
            ['forms', '/anatomy/src/forms/', [
              ['.gitkeep', '/anatomy/src/forms/gitkeep/'],
            ]],
            ['models', '/anatomy/src/models/', [
              ['.gitkeep', '/anatomy/src/models/gitkeep/'],
            ]],
            ['reducers', '/anatomy/src/reducers/', [
              ['.gitkeep', '/anatomy/src/reducers/gitkeep/'],
            ]],
            ['utils', '/anatomy/src/utils/', [
              ['auth.js', '/anatomy/src/utils/auth/'],
              ['storageAvailable.js', '/anatomy/src/utils/storage-available/'],
            ]],
          ]],
          ['.babelrc', '/anatomy/babelrc/'],
          ['.editorconfig', '/anatomy/editorconfig/'],
          ['.gitignore', '/anatomy/gitignore/'],
          ['.lorerc', '/anatomy/lorerc/'],
          ['db.json', '/anatomy/db/'],
          ['index.html', '/anatomy/index-html/'],
          ['index.js', '/anatomy/index-js/'],
          ['package.json', '/anatomy/package/'],
          ['package-lock.json', '/anatomy/package-lock/'],
          ['postcss.config.js', '/anatomy/postcss-config/'],
          ['README.md', '/anatomy/readme/'],
          ['routes.js', '/anatomy/routes/'],
          ['webpack.config.js', '/anatomy/webpack-config/']
        ]
      },



      // {
      //   title: 'assets',
      //   links: [
      //     ['assets', '/anatomy/assets/', [
      //       ['css', '/anatomy/assets/css/', [
      //         ['loading-screen.css', '/anatomy/assets/css/loading-screen/'],
      //         ['main.css', '/anatomy/assets/css/main/'],
      //       ]],
      //       ['images', '/anatomy/assets/images/', [
      //         ['favicon.png', '/anatomy/assets/images/favicon/'],
      //         ['logo.png', '/anatomy/assets/images/logo/'],
      //       ]],
      //       ['less', '/anatomy/assets/less/', [
      //         ['loading-screen.less', '/anatomy/assets/less/loading-screen/'],
      //         ['main.less', '/anatomy/assets/less/main/'],
      //       ]],
      //       ['sass', '/anatomy/assets/sass/', [
      //         ['loading-screen.scss', '/anatomy/assets/sass/loading-screen/'],
      //         ['main.scss', '/anatomy/assets/sass/main/'],
      //       ]],
      //     ]]
      //   ]
      // },
      // {
      //   title: 'config',
      //   links: [
      //     ['config', '/anatomy/config/', [
      //       ['env', '/anatomy/config/env/', [
      //         ['development.js', '/anatomy/config/env/development/'],
      //         ['production.js', '/anatomy/config/env/production/'],
      //       ]],
      //       ['actions', '/anatomy/config/actions/'],
      //       ['auth', '/anatomy/config/auth/'],
      //       ['collections', '/anatomy/config/collections/'],
      //       ['connect', '/anatomy/config/connect/'],
      //       ['connections', '/anatomy/config/connections/'],
      //       // ['dialog', '/anatomy/config/dialog/'],
      //       ['local', '/anatomy/config/local/'],
      //       ['models', '/anatomy/config/models/'],
      //       ['react', '/anatomy/config/react/'],
      //       ['reducers', '/anatomy/config/reducers/'],
      //       ['redux', '/anatomy/config/redux/'],
      //       ['router', '/anatomy/config/router/'],
      //     ]],
      //   ]
      // },
      // {
      //   title: 'initializers',
      //   links: [
      //     ['initializers', '/anatomy/initializers/', [
      //       ['.gitkeep', '/anatomy/initializers/gitkeep/'],
      //     ]],
      //   ]
      // },
      // {
      //   title: 'src',
      //   links: [
      //     ['src', '/anatomy/src/', [
      //       ['actions', '/anatomy/src/actions/', [
      //         ['.gitkeep', '/anatomy/src/actions/gitkeep/'],
      //       ]],
      //       ['collections', '/anatomy/src/collections/', [
      //         ['.gitkeep', '/anatomy/src/collections/gitkeep/'],
      //       ]],
      //       ['components', '/anatomy/src/components/', [
      //         ['Layout.js', '/anatomy/src/components/layout/'],
      //         ['Master.js', '/anatomy/src/components/master/'],
      //       ]],
      //       ['constants', '/anatomy/src/constants/', [
      //         ['ActionTypes.js', '/anatomy/src/constants/action-types/'],
      //         ['PayloadStates.js', '/anatomy/src/constants/payload-states/'],
      //       ]],
      //       ['decorators', '/anatomy/src/decorators/', [
      //         ['UserIsAuthenticated.js', '/anatomy/src/decorators/user-is-authenticated/'],
      //         ['UserIsAuthorized.js', '/anatomy/src/decorators/user-is-authorized/'],
      //       ]],
      //       ['dialogs', '/anatomy/src/dialogs/', [
      //         ['.gitkeep', '/anatomy/src/dialogs/gitkeep/'],
      //       ]],
      //       ['forms', '/anatomy/src/forms/', [
      //         ['.gitkeep', '/anatomy/src/forms/gitkeep/'],
      //       ]],
      //       ['models', '/anatomy/src/models/', [
      //         ['.gitkeep', '/anatomy/src/models/gitkeep/'],
      //       ]],
      //       ['reducers', '/anatomy/src/reducers/', [
      //         ['.gitkeep', '/anatomy/src/reducers/gitkeep/'],
      //       ]],
      //       ['utils', '/anatomy/src/utils/', [
      //         ['auth.js', '/anatomy/src/utils/auth/'],
      //         ['storageAvailable.js', '/anatomy/src/utils/storage-available/'],
      //       ]],
      //     ]]
      //   ]
      // },
      // {
      //   title: 'Root files',
      //   links: [
      //     ['_intro', '/anatomy/'],
      //     ['.babelrc', '/anatomy/babelrc/'],
      //     ['.editorconfig', '/anatomy/editorconfig/'],
      //     ['.gitignore', '/anatomy/gitignore/'],
      //     ['.lorerc', '/anatomy/lorerc/'],
      //     ['db.json', '/anatomy/db/'],
      //     ['index.html', '/anatomy/index-html/'],
      //     ['index.js', '/anatomy/index-js/'],
      //     ['package.json', '/anatomy/package/'],
      //     ['package-lock.json', '/anatomy/package-lock/'],
      //     ['postcss.config.js', '/anatomy/postcss-config/'],
      //     ['README.md', '/anatomy/readme/'],
      //     ['routes.js', '/anatomy/routes/'],
      //     ['webpack.config.js', '/anatomy/webpack-config/']
      //   ]
      // }
    ]}/>
  );
};
