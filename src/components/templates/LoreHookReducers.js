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
          <h1>lore-hook-reducers</h1>
          <p>
            Creates a set of reducers for each model from blueprints
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="Introduction" url="/hooks/lore-hook-reducers/" />
            <NavLink title="Dependencies" url="/hooks/lore-hook-reducers/dependencies/" />
            <NavLink title="Installation" url="/hooks/lore-hook-reducers/installation/" />
            <NavLink title="Code" url="/hooks/lore-hook-reducers/code/" />

            <li className="doc-section">config</li>
            <NavLink title="dependencies" url="/hooks/lore-hook-reducers/config/dependencies/" />
            <NavLink title="nextState" url="/hooks/lore-hook-reducers/config/nextState/" />
          </ul>
          {children}
        </div>
      </div>
    </div>
  );
};
