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
          <h1>lore-hook-router</h1>
          <p>
            Loads the react-router routes and history type
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="Introduction" url="/hooks/lore-hook-router/" />
            <NavLink title="Dependencies" url="/hooks/lore-hook-router/dependencies/" />
            <NavLink title="Installation" url="/hooks/lore-hook-router/installation/" />
            <NavLink title="Code" url="/hooks/lore-hook-router/code/" />

            {/*<li className="doc-section">Usage</li>*/}
            {/*<NavLink title="Overview" url="/hooks/lore-hook-router/usage/" />*/}

            <li className="doc-section">config</li>
            <NavLink title="history" url="/hooks/lore-hook-router/config/history/" />
            <NavLink title="routes" url="/hooks/lore-hook-router/config/routes/" />
          </ul>
          {children}
        </div>
      </div>
    </div>
  );
};
