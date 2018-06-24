import React from 'react';
import NavLink from '../NavLink';
import NavLinkPlaceholder from '../NavLinkPlaceholder';
import '../../assets/less/docs.less';

export default (props) => {
  const { children } = props;

  return (
    <div>
      <div className="docs-header" id="content">
        <div className="container">
          <h1>Webpack</h1>
          <p>
            The build system for Lore
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="Introduction" url="/webpack/" />

            <li className="doc-section">Development</li>
            <NavLink title="Changing the Port" url="/webpack/development/port/" />
            <NavLink title="Configuring SSL" url="/webpack/development/ssl/" />
            <NavLink title="Configuring Basename" url="/webpack/development/basename/" />

            <li className="doc-section">Building</li>
            <NavLink title="Development" url="/webpack/building/development/" />
            <NavLink title="Production" url="/webpack/building/production/" />

            <li className="doc-section">Analyzing</li>
            <NavLink title="Stats" url="/webpack/analyzing/stats/" />

            <li className="doc-section">Features</li>
            <NavLink title="Cache Busting" url="/webpack/features/cache-busting/" />
            <NavLink title="Chunking" url="/webpack/features/chunking/" />
            <NavLink title="CSS Preprocessors" url="/webpack/features/preprocessors/" />
            <NavLink title="Favicon" url="/webpack/features/favicon/" />
            <NavLink title="Fonts" url="/webpack/features/fonts/" />
            <NavLink title="Images" url="/webpack/features/images/" />
            <NavLink title="Source Maps" url="/webpack/features/source-maps/" />

            <li className="doc-section">Misc</li>
            <NavLink title="Verify Production Build Locally" url="/webpack/misc/serve/" />
          </ul>
          {children}
        </div>
      </div>
    </div>
  )
};
