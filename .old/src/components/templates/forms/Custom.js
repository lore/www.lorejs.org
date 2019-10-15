import React from 'react';
import Layout from '../../../components/Layout';
import NavLink from '../../NavLink';
import NavLinkPlaceholder from '../../NavLinkPlaceholder';

export default (props) => {
  const { children } = props;

  return (
    <Layout>
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
    </Layout>
  )
};
