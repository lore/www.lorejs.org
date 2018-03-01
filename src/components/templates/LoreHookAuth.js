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
          <h1>lore-hook-auth</h1>
          <p>
            Provides an action and reducer dedicated to fetching the current user
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="Introduction" url="/hooks/lore-hook-auth/" />
            <NavLink title="Dependencies" url="/hooks/lore-hook-auth/dependencies/" />
            <NavLink title="Installation" url="/hooks/lore-hook-auth/installation/" />
            <NavLink title="Code" url="/hooks/lore-hook-auth/code/" />

            <li className="doc-section">Usage</li>
            <NavLink title="Overview" url="/hooks/lore-hook-auth/usage/" />

            <li className="doc-section">Config</li>
            <NavLink title="default" url="/hooks/lore-hook-auth/config/" />

            <li className="doc-section">Options</li>
            <NavLink title="modelName" url="/hooks/lore-hook-auth/options/modelName/" />
            <NavLink title="reducerName" url="/hooks/lore-hook-auth/options/reducerName/" />
            <NavLink title="actionName" url="/hooks/lore-hook-auth/options/actionName/" />

            <li className="doc-section">Actions</li>
            <NavLink title="get" url="/hooks/lore-hook-auth/actions/get/" />
            <NavLink title="update" url="/hooks/lore-hook-auth/actions/update/" />

            <li className="doc-section">Reducers</li>
            <NavLink title="reducer" url="/hooks/lore-hook-auth/reducers/" />
          </ul>
          {children}
        </div>
      </div>
    </div>
  );
};
