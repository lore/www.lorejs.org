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
          <h1>Connect</h1>
          <p>
            The data-fetching decorator for Lore
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="Introduction" url="/connect/" />
            {/*<NavLink title="Concept" url="/connect/concept/" />*/}

            <li className="doc-section">Utilities</li>
            <NavLink title="connect" url="/connect/connect/" />
            <NavLink title="Connect" url="/connect/connect-component/" />
            <NavLink title="getState" url="/connect/getState/" />

            <li className="doc-section">Blueprints</li>
            <NavLink title="all" url="/connect/all/" />
            <NavLink title="byCid" url="/connect/byCid/" />
            <NavLink title="byId" url="/connect/byId/" />
            <NavLink title="find" url="/connect/find/" />
            <NavLink title="findAll" url="/connect/findAll/" />
            <NavLink title="first" url="/connect/first/" />
            <NavLink title="singleton" url="/connect/singleton/" />

            <li className="doc-section">Misc</li>
            <NavLink title="Extending the Blueprints" url="/connect/extending/" />
          </ul>
          {children}
        </div>
      </div>
    </div>
  )
};
