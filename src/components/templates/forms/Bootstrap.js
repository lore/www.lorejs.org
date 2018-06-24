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
          <h1>Forms: Bootstrap</h1>
          <h2>
            WARNING! This section is a placeholder. Apologies while it gets sorted out.
          </h2>
          <p>
            Documentation for the Bootstrap implementation of Lore Forms
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="Introduction" url="/forms/bootstrap/" />

            <li className="doc-section">Libraries</li>
            <NavLinkPlaceholder title="lore-react-forms-bootstrap" url="/forms/bootstrap/lore-react-forms-bootstrap/" />
            <NavLinkPlaceholder title="lore-hook-dialog-bootstrap" url="/forms/bootstrap/lore-hook-dialog-bootstrap/" />
            <NavLinkPlaceholder title="lore-hook-forms-bootstrap" url="/forms/bootstrap/lore-hook-forms-bootstrap/" />
            <NavLinkPlaceholder title="lore-hook-dialogs-bootstrap" url="/forms/bootstrap/lore-hook-dialogs-bootstrap/" />

            <li className="doc-section">lore-react-forms-bootstrap</li>
            <NavLinkPlaceholder title="fields" url="/" />

            <li className="doc-section">lore-hook-forms-bootstrap</li>
            <NavLinkPlaceholder title="create - optimistic" url="/" />
            <NavLinkPlaceholder title="create - overlay" url="/" />
            <NavLinkPlaceholder title="create - wizard" url="/" />
            <NavLinkPlaceholder title="update - optimistic" url="/" />
            <NavLinkPlaceholder title="update - overlay" url="/" />
            <NavLinkPlaceholder title="update - wizard" url="/" />
            <NavLinkPlaceholder title="destroy - optimistic" url="/" />
            <NavLinkPlaceholder title="destroy - overlay" url="/" />
            <NavLinkPlaceholder title="destroy - wizard" url="/" />

            <li className="doc-section">lore-hook-dialogs-bootstrap</li>
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
    </div>
  )
};
