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
          <h1>Building</h1>
          <p>
            Documentation for building your application
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="Introduction" url="/building/" />

            <li className="doc-section">Build Environments</li>
            <NavLink title="Development" url="/building/environments/development/" />
            <NavLink title="Production" url="/building/environments/production/" />
            <NavLink title="Custom" url="/building/environments/custom/" />
          </ul>
          {children}
        </div>
      </div>
    </div>
  )
};
