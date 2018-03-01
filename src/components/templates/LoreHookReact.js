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
          <h1>lore-hook-react</h1>
          <p>
            Responsible for building the application and mounting it to the DOM
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="Introduction" url="/hooks/lore-hook-react/" />
            <NavLink title="Dependencies" url="/hooks/lore-hook-react/dependencies/" />
            <NavLink title="Installation" url="/hooks/lore-hook-react/installation/" />
            <NavLink title="Code" url="/hooks/lore-hook-react/code/" />

            <li className="doc-section">config</li>
            <NavLink title="domElementId" url="/hooks/lore-hook-react/config/domElementId/" />
            <NavLink title="getRootComponent" url="/hooks/lore-hook-react/config/getRootComponent/" />
            <NavLink title="mount" url="/hooks/lore-hook-react/config/mount/" />
          </ul>
          {children}
        </div>
      </div>
    </div>
  );
};
