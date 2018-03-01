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
          <h1>lore-hook-connect</h1>
          <p>
            Provides the connect decorator for data retrieval
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="Introduction" url="/hooks/lore-hook-connect/" />
            <NavLink title="Dependencies" url="/hooks/lore-hook-connect/dependencies/" />
            <NavLink title="Installation" url="/hooks/lore-hook-connect/installation/" />
            <NavLink title="Code" url="/hooks/lore-hook-connect/code/" />

            <li className="doc-section">config</li>
            <NavLink title="blueprints" url="/hooks/lore-hook-connect/config/blueprints/" />
            <NavLink title="reducerActionMap" url="/hooks/lore-hook-connect/config/reducerActionMap/" />

            <li className="doc-section">blueprints</li>
            <NavLink title="all" url="/hooks/lore-hook-connect/blueprints/all/" />
            <NavLink title="byCid" url="/hooks/lore-hook-connect/blueprints/byCid/" />
            <NavLink title="byId" url="/hooks/lore-hook-connect/blueprints/byId/" />
            <NavLink title="find" url="/hooks/lore-hook-connect/blueprints/find/" />
            <NavLink title="findAll" url="/hooks/lore-hook-connect/blueprints/findAll/" />
            <NavLink title="first" url="/hooks/lore-hook-connect/blueprints/first/" />
            <NavLink title="singleton" url="/hooks/lore-hook-connect/blueprints/singleton/" />
          </ul>
          {children}
        </div>
      </div>
    </div>
  );
};
