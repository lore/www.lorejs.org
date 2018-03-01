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
          <h1>lore-extract-reducer</h1>
          <p>
            Extracts the reducer blueprint for a model to <code>src/reducers</code>
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="Introduction" url="/cli/lore-extract-reducer/" />

            <li className="doc-section">Reducers</li>
            <NavLink title="byCid" url="/cli/lore-extract-reducer/reducers/byCid/" />
            <NavLink title="byId" url="/cli/lore-extract-reducer/reducers/byId/" />
            <NavLink title="find" url="/cli/lore-extract-reducer/reducers/find/" />
          </ul>
          {children}
        </div>
      </div>
    </div>
  );
};
