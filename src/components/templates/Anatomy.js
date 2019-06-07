import React from 'react';
import Layout from '../../components/Layout';
import NavLink from '../NavLink';
import NavLinkPlaceholder from '../NavLinkPlaceholder';
import '../../assets/less/docs.less';

export default (props) => {
  const { children } = props;

  return (
    <Layout>
      <div className="docs-header" id="content">
        <div className="container">
          <h1>Anatomy</h1>
          <p>
            The structure of a Lore application
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc" className="fully-expanded-x">
            <NavLink title="Introduction" url="/anatomy/" />

            <li className="doc-section">Project Structure</li>
            <NavLink title="assets" url="/anatomy/assets/">
              <ul>
                <NavLink title="css" url="/anatomy/assets/css/">
                  <ul>
                    <NavLink title="loading-screen.css" url="/anatomy/assets/css/loading-screen/" />
                    <NavLink title="main.css" url="/anatomy/assets/css/main/" />
                  </ul>
                </NavLink>
                <NavLink title="images" url="/anatomy/assets/images/">
                  <ul>
                    <NavLink title="favicon.png" url="/anatomy/assets/images/favicon/" />
                    <NavLink title="logo.png" url="/anatomy/assets/images/logo/" />
                  </ul>
                </NavLink>
                <NavLink title="less" url="/anatomy/assets/less/">
                  <ul>
                    <NavLink title="loading-screen.less" url="/anatomy/assets/less/loading-screen/" />
                    <NavLink title="main.less" url="/anatomy/assets/less/main/" />
                  </ul>
                </NavLink>
                <NavLink title="sass" url="/anatomy/assets/sass/">
                  <ul>
                    <NavLink title="loading-screen.scss" url="/anatomy/assets/sass/loading-screen/" />
                    <NavLink title="main.scss" url="/anatomy/assets/sass/main/" />
                  </ul>
                </NavLink>
              </ul>
            </NavLink>

            <NavLink title="config" url="/anatomy/config/">
              <ul>
                <NavLink title="env" url="/anatomy/config/env/">
                  <ul>
                    <NavLink title="development.js" url="/anatomy/config/env/development/" />
                    <NavLink title="production.js" url="/anatomy/config/env/production/" />
                  </ul>
                </NavLink>
                <NavLink title="actions" url="/anatomy/config/actions/" />
                <NavLink title="auth" url="/anatomy/config/auth/" />
                <NavLink title="collections" url="/anatomy/config/collections/" />
                <NavLink title="connect" url="/anatomy/config/connect/" />
                <NavLink title="connections" url="/anatomy/config/connections/" />
                {/*<NavLink title="dialog" url="/anatomy/config/dialog/" />*/}
                <NavLink title="local" url="/anatomy/config/local/" />
                <NavLink title="models" url="/anatomy/config/models/" />
                <NavLink title="react" url="/anatomy/config/react/" />
                <NavLink title="reducers" url="/anatomy/config/reducers/" />
                <NavLink title="redux" url="/anatomy/config/redux/" />
                <NavLink title="router" url="/anatomy/config/router/" />
              </ul>
            </NavLink>

            <NavLink title="initializers" url="/anatomy/initializers/">
              <ul>
                <NavLink title=".gitkeep" url="/anatomy/initializers/gitkeep/" />
              </ul>
            </NavLink>

            <NavLink title="src" url="/anatomy/src/">
              <ul>
                <NavLink title="actions" url="/anatomy/src/actions/">
                  <ul>
                    <NavLink title=".gitkeep" url="/anatomy/src/actions/gitkeep/" />
                  </ul>
                </NavLink>
                <NavLink title="collections" url="/anatomy/src/collections/">
                  <ul>
                    <NavLink title=".gitkeep" url="/anatomy/src/collections/gitkeep/" />
                  </ul>
                </NavLink>
                <NavLink title="components" url="/anatomy/src/components/">
                  <ul>
                    <NavLink title="Layout.js" url="/anatomy/src/components/layout/" />
                    <NavLink title="Master.js" url="/anatomy/src/components/master/" />
                  </ul>
                </NavLink>
                <NavLink title="constants" url="/anatomy/src/constants/">
                  <ul>
                    <NavLink title="ActionTypes.js" url="/anatomy/src/constants/action-types/" />
                    <NavLink title="PayloadStates.js" url="/anatomy/src/constants/payload-states/" />
                  </ul>
                </NavLink>
                <NavLink title="decorators" url="/anatomy/src/decorators/">
                  <ul>
                    <NavLink title="UserIsAuthenticated.js" url="/anatomy/src/decorators/user-is-authenticated/" />
                    <NavLink title="UserIsAuthorized.js" url="/anatomy/src/decorators/user-is-authorized/" />
                  </ul>
                </NavLink>
                <NavLink title="dialogs" url="/anatomy/src/dialogs/">
                  <ul>
                    <NavLink title=".gitkeep" url="/anatomy/src/dialogs/gitkeep/" />
                  </ul>
                </NavLink>
                <NavLink title="forms" url="/anatomy/src/forms/">
                  <ul>
                    <NavLink title=".gitkeep" url="/anatomy/src/forms/gitkeep/" />
                  </ul>
                </NavLink>
                <NavLink title="models" url="/anatomy/src/models/">
                  <ul>
                    <NavLink title=".gitkeep" url="/anatomy/src/models/gitkeep/" />
                  </ul>
                </NavLink>
                <NavLink title="reducers" url="/anatomy/src/reducers/">
                  <ul>
                    <NavLink title=".gitkeep" url="/anatomy/src/reducers/gitkeep/" />
                  </ul>
                </NavLink>
                <NavLink title="utils" url="/anatomy/src/utils/">
                  <ul>
                    <NavLink title="auth.js" url="/anatomy/src/utils/auth/" />
                    <NavLink title="storageAvailable.js" url="/anatomy/src/utils/storage-available/" />
                  </ul>
                </NavLink>
              </ul>
            </NavLink>
            <NavLink title=".babelrc" url="/anatomy/babelrc/" />
            <NavLink title=".editorconfig" url="/anatomy/editorconfig/" />
            <NavLink title=".gitignore" url="/anatomy/gitignore/" />
            <NavLink title=".lorerc" url="/anatomy/lorerc/" />
            <NavLink title="db.json" url="/anatomy/db/" />
            <NavLink title="index.html" url="/anatomy/index-html/" />
            <NavLink title="index.js" url="/anatomy/index-js/" />
            <NavLink title="package.json" url="/anatomy/package/" />
            <NavLink title="package-lock.json" url="/anatomy/package-lock/" />
            <NavLink title="postcss.config.js" url="/anatomy/postcss-config/" />
            <NavLink title="README.md" url="/anatomy/readme/" />
            <NavLink title="routes.js" url="/anatomy/routes/" />
            <NavLink title="webpack.config.js" url="/anatomy/webpack-config/" />
          </ul>
          {children}
        </div>
      </div>
    </Layout>
  )
};
