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
          <h1>lore-hook-redux</h1>
          <p>
            Generates the Redux Store from all the reducers
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="Introduction" url="/hooks/lore-hook-redux/" />
            <NavLink title="Dependencies" url="/hooks/lore-hook-redux/dependencies/" />
            <NavLink title="Installation" url="/hooks/lore-hook-redux/installation/" />
            <NavLink title="Code" url="/hooks/lore-hook-redux/code/" />

            <li className="doc-section">Usage</li>
            <NavLink title="Overview" url="/hooks/lore-hook-redux/usage/" />

            <li className="doc-section">config</li>
            <NavLink title="middleware" url="/hooks/lore-hook-redux/config/middleware/" />
            <NavLink title="debounceWait" url="/hooks/lore-hook-redux/config/debounceWait/" />
            <NavLink title="enhancer" url="/hooks/lore-hook-redux/config/enhancer/" />
            <NavLink title="rootReducer" url="/hooks/lore-hook-redux/config/rootReducer/" />
            <NavLink title="preloadedState" url="/hooks/lore-hook-redux/config/preloadedState/" />
            <NavLink title="configureStore" url="/hooks/lore-hook-redux/config/configureStore/" />
          </ul>
          {children}
        </div>
      </div>
    </div>
  );
};
