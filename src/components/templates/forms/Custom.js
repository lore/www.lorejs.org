import React from 'react';
import NavLink from '../../NavLink';
import NavLinkPlaceholder from '../../NavLinkPlaceholder';
import '../../../assets/less/docs.less';

export default (props) => {
  const { children } = props;

  return (
    <div>
      <div className="docs-header" id="content">
        <div className="container">
          <h1>Forms: Concept</h1>
          <p>
            Mental model for the forms implementation
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="Introduction" url="/forms/custom/" />

            <li className="doc-section">Libraries</li>
            <NavLink title="lore-hook-dialog" url="/forms/custom/lore-hook-dialog/" />
            <NavLink title="lore-hook-forms" url="/forms/custom/lore-hook-forms/" />
            <NavLink title="lore-hook-dialogs" url="/forms/custom/lore-hook-dialogs/" />
          </ul>
          {children}
        </div>
      </div>
    </div>
  )
};
