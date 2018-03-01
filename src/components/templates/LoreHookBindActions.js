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
          <h1>lore-hook-bind-actions</h1>
          <p>
            Binds all actions to the dispatch method of the Redux store
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="Introduction" url="/hooks/lore-hook-bind-actions/" />
            <NavLink title="Dependencies" url="/hooks/lore-hook-bind-actions/dependencies/" />
            <NavLink title="Installation" url="/hooks/lore-hook-bind-actions/installation/" />
            <NavLink title="Code" url="/hooks/lore-hook-bind-actions/code/" />

            <li className="doc-section">Usage</li>
            <NavLink title="Overview" url="/hooks/lore-hook-bind-actions/usage/" />

            <li className="doc-section">Config</li>
            <NavLink title="default" url="/hooks/lore-hook-bind-actions/config/" />
          </ul>
          {children}
        </div>
      </div>
    </div>
  );
};
