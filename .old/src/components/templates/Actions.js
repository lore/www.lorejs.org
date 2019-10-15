import React from 'react';
import Layout from '../../components/Layout';
import NavLink from '../NavLink';
import NavLinkPlaceholder from '../NavLinkPlaceholder';

export default (props) => {
  const { children } = props;

  return (
    <Layout>
      <div className="docs-header" id="content">
        <div className="container">
          <h1>Actions</h1>
          <p>
            Data-fetching tier for Lore
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="Introduction" url="/actions/" />
            <NavLink title="Overriding Actions" url="/actions/override/" />

            <li className="doc-section">Blueprints</li>
            <NavLink title="create" url="/actions/create/" />
            <NavLink title="update" url="/actions/update/" />
            <NavLink title="destroy" url="/actions/destroy/" />
            <NavLink title="find" url="/actions/find/" />
            <NavLink title="get" url="/actions/get/" />

            <li className="doc-section">Misc</li>
            <NavLink title="Extending & Overriding Actions" url="/actions/extending/" />
            <NavLink title="Extracting Actions" url="/actions/extract/" />
          </ul>
          {children}
        </div>
      </div>
    </Layout>
  )
};
