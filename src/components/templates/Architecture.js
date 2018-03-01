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
          <h1>Architecture</h1>
          <h2>
            WARNING! This section is a work in progress. The organization and content may not reflect what you
            expect and are subject to change. Apologies while it gets sorted out.
          </h2>
          <p>
            Explanation of how Lore is built
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="Introduction" url="/architecture/" />

            <li className="doc-section">Features</li>
            <NavLink title="Filtering" url="/architecture/features/filtering/" />
            <NavLink title="Pagination" url="/architecture/features/pagination/" />
            <NavLink title="Infinite Scrolling" url="/architecture/features/infinite-scrolling/" />
            <NavLink title="WebSockets" url="/architecture/features/websockets/" />
            <NavLink title="Visual Cues" url="/architecture/features/visual-cues/" />
            <NavLink title="Optimistic Updates" url="/architecture/features/optimistic-updates/" />
            <NavLink title="Error Handling" url="/architecture/features/error-handling/" />
            {/*<NavLinkPlaceholder title="Dialogs (todo)" />*/}
            {/*<NavLinkPlaceholder title="Wizards (todo)" />*/}
            <NavLink title="404 Pages" url="/architecture/features/404-pages/" />

            <li className="doc-section">AJAX Communication</li>
            <NavLink title="AJAX Abstraction" url="/architecture/ajax/ajax-abstraction/" />
            <NavLinkPlaceholder title="XMLHttp Request (todo)" />
            <NavLinkPlaceholder title="AJAX Abstraction (todo)" />
            <NavLinkPlaceholder title="REST Abstraction (todo)" />
            <NavLinkPlaceholder title="Templates (todo)" />
            <NavLinkPlaceholder title="Conventions (todo)" />

            <li className="doc-section">Extending Lore</li>
            <NavLink title="Extending Lore" url="/architecture/extending-lore/" />
            <NavLink title="Extending the Lore CLI" url="/architecture/extending-lore-cli/" />

            <li className="doc-section">Connect</li>
            <NavLink title="Lore Connect vs. React-Redux Connect" url="/architecture/connect-difference/" />

          </ul>
          {children}
        </div>
      </div>
    </div>
  )
};
