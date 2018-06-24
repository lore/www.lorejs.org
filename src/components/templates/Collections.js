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
          <h1>Collections</h1>
          <p>
            AJAX Abstraction for Lists of Resources
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="Introduction" url="/collections/" />
            {/*<NavLink title="Concept" url="/collections/concept/" />*/}

            <li className="doc-section">Usage</li>
            <NavLink title="retrieve" url="/collections/usage/retrieve/" />

            <li className="doc-section">Properties</li>
            <NavLink title="add" url="/collections/properties/add/" />
            <NavLink title="fetch" url="/collections/properties/fetch/" />
            <NavLink title="initialize" url="/collections/properties/initialize/" />
            <NavLink title="model" url="/collections/properties/model/" />
            <NavLink title="models" url="/collections/properties/models/" />
            <NavLink title="parse" url="/collections/properties/parse/" />
            <NavLink title="reset" url="/collections/properties/reset/" />
            <NavLink title="sync" url="/collections/properties/sync/" />
            <NavLink title="url" url="/collections/properties/url/" />

            <li className="doc-section">Misc</li>
            <NavLink title="History" url="/collections/misc/history/" />
          </ul>
          {children}
        </div>
      </div>
    </div>
  )
};
