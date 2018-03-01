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
          <h1>Reducers</h1>
          <p>
            Data-caching tier for Lore
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="Introduction" url="/reducers/" />
            <NavLink title="Concept" url="/reducers/concept/" />

            <li className="doc-section">Blueprints</li>
            <NavLink title="find" url="/reducers/find/" />
            <NavLink title="byId" url="/reducers/byId/" />
            <NavLink title="byCid" url="/reducers/byCid/" />

            <li className="doc-section">Misc</li>
            <NavLink title="Extending & Overriding Reducers" url="/reducers/extending/" />
            <NavLink title="Extracting Reducers" url="/reducers/extract/" />
          </ul>
          {children}
        </div>
      </div>
    </div>
  )
};
