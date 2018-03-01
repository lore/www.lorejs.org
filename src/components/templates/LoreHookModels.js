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
          <h1>lore-hook-models</h1>
          <p>
            Creates a Model for each model in the application
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="Introduction" url="/hooks/lore-hook-models/" />
            <NavLink title="Dependencies" url="/hooks/lore-hook-models/dependencies/" />
            <NavLink title="Installation" url="/hooks/lore-hook-models/installation/" />
            <NavLink title="Code" url="/hooks/lore-hook-models/code/" />

            <li className="doc-section">Usage</li>
            <NavLink title="Overview" url="/hooks/lore-hook-models/usage/" />

            <li className="doc-section">config</li>
            <NavLink title="defaultConnection" url="/hooks/lore-hook-models/config/defaultConnection/" />
            <NavLink title="connectionModelMap" url="/hooks/lore-hook-models/config/connectionModelMap/" />
          </ul>
          {children}
        </div>
      </div>
    </div>
  );
};
