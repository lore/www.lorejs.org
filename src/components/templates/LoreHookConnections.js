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
          <h1>lore-hook-connections</h1>
          <p>
            Allows you to describe the APIs your application will be consuming
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="Introduction" url="/hooks/lore-hook-connections/" />
            <NavLink title="Dependencies" url="/hooks/lore-hook-connections/dependencies/" />
            <NavLink title="Installation" url="/hooks/lore-hook-connections/installation/" />
            <NavLink title="Code" url="/hooks/lore-hook-connections/code/" />

            <li className="doc-section">Usage</li>
            <NavLink title="Overview" url="/hooks/lore-hook-connections/usage/" />
            <NavLink title="Multiple Endpoints" url="/hooks/lore-hook-connections/usage/multiple-endpoints/" />

            <li className="doc-section">config</li>
            <NavLink title="apiRoot" url="/hooks/lore-hook-connections/config/apiRoot/" />
            <NavLink title="casingStyle" url="/hooks/lore-hook-connections/config/casingStyle/" />
            <NavLink title="collections" url="/hooks/lore-hook-connections/config/collections/" />
            <NavLink title="headers" url="/hooks/lore-hook-connections/config/headers/" />
            <NavLink title="models" url="/hooks/lore-hook-connections/config/models/" />
            <NavLink title="pluralize" url="/hooks/lore-hook-connections/config/pluralize/" />
          </ul>
          {children}
        </div>
      </div>
    </div>
  );
};
