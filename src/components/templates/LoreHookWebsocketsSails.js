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
          <h1>lore-hook-websockets-sails</h1>
          <h2>
            WARNING! This hook is a proof of concept, and has never been used in a production application. It was
            developed to prove that Lore's architecture accounted for the unique concerns that come with using
            websockets in a real application, and that the interface developed could work with Sails.
          </h2>
          <p>
            Provides an implementation of lore-websockets designed to work with Sail.js
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="Introduction" url="/hooks/lore-hook-websockets-sails/" />
            <NavLink title="Dependencies" url="/hooks/lore-hook-websockets-sails/dependencies/" />
            <NavLink title="Installation" url="/hooks/lore-hook-websockets-sails/installation/" />
            <NavLink title="Code" url="/hooks/lore-hook-websockets-sails/code/" />

            {/*<li className="doc-section">???</li>*/}
            {/*<NavLinkPlaceholder title="???" />*/}
            {/*<NavLink title="create" url="/hooks/lore-hook-actions/blueprints/create/" />*/}
          </ul>
          {children}
        </div>
      </div>
    </div>
  );
};
