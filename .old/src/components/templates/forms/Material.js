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
          <h1>Forms: Material UI</h1>
          <h2>
            WARNING! This section is a placeholder. Apologies while it gets sorted out.
          </h2>
          <p>
            Documentation for the Material UI implementation of Lore Forms
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="Introduction" url="/forms/material-ui/" />

            <li className="doc-section">Libraries</li>
            <NavLinkPlaceholder title="lore-react-forms-material-ui" url="/forms/material-ui/lore-react-forms-material-ui/" />
            <NavLinkPlaceholder title="lore-hook-dialog-material-ui" url="/forms/material-ui/lore-hook-dialog-material-ui/" />
            <NavLinkPlaceholder title="lore-hook-forms-material-ui" url="/forms/material-ui/lore-hook-forms-material-ui/" />
            <NavLinkPlaceholder title="lore-hook-dialogs-material-ui" url="/forms/material-ui/lore-hook-dialogs-material-ui/" />

            <li className="doc-section">lore-react-forms-material-ui</li>
            <NavLinkPlaceholder title="fields" url="/" />

            <li className="doc-section">lore-hook-forms-material-ui</li>
            <NavLinkPlaceholder title="create - optimistic" url="/" />
            <NavLinkPlaceholder title="create - overlay" url="/" />
            <NavLinkPlaceholder title="create - wizard" url="/" />
            <NavLinkPlaceholder title="update - optimistic" url="/" />
            <NavLinkPlaceholder title="update - overlay" url="/" />
            <NavLinkPlaceholder title="update - wizard" url="/" />
            <NavLinkPlaceholder title="destroy - optimistic" url="/" />
            <NavLinkPlaceholder title="destroy - overlay" url="/" />
            <NavLinkPlaceholder title="destroy - wizard" url="/" />

            <li className="doc-section">lore-hook-dialogs-material-ui</li>
            <NavLinkPlaceholder title="create - optimistic" url="/" />
            <NavLinkPlaceholder title="create - overlay" url="/" />
            <NavLinkPlaceholder title="create - wizard" url="/" />
            <NavLinkPlaceholder title="update - optimistic" url="/" />
            <NavLinkPlaceholder title="update - overlay" url="/" />
            <NavLinkPlaceholder title="update - wizard" url="/" />
            <NavLinkPlaceholder title="destroy - optimistic" url="/" />
            <NavLinkPlaceholder title="destroy - overlay" url="/" />
            <NavLinkPlaceholder title="destroy - wizard" url="/" />
          </ul>
          {children}
        </div>
      </div>
    </Layout>
  )
};
