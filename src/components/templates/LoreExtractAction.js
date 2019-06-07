import React from 'react';
import Layout from '../../components/Layout';
import NavLink from '../NavLink';
import NavLinkPlaceholder from '../NavLinkPlaceholder';
import '../../assets/less/docs.less';

export default (props) => {
  const { children } = props;

  return (
    <Layout>
      <div className="docs-header" id="content">
        <div className="container">
          <h1>lore-extract-action</h1>
          <p>
            Extracts the action blueprint for a model to <code>src/actions</code>
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="Introduction" url="/cli/lore-extract-action/" />

            <li className="doc-section">Actions</li>
            <NavLink title="create" url="/cli/lore-extract-action/actions/create/" />
            <NavLink title="destroy" url="/cli/lore-extract-action/actions/destroy/" />
            <NavLink title="find" url="/cli/lore-extract-action/actions/find/" />
            <NavLink title="get" url="/cli/lore-extract-action/actions/get/" />
            <NavLink title="update" url="/cli/lore-extract-action/actions/update/" />
          </ul>
          {children}
        </div>
      </div>
    </Layout>
  );
};
