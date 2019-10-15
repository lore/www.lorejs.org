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
          <h1>lore-hook-websockets-socketio</h1>
          <h2>
            WARNING! This hook is a proof of concept, and has never been used in a production application. It was
            developed to prove that Lore's architecture accounted for the unique concerns that come with using
            websockets in a real application, and that the interface developed could work with Socket.io.
          </h2>
          <p>
            Provides an implementation of lore-websockets designed to work with socket.io
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="Introduction" url="/hooks/lore-hook-websockets-socketio/" />
            <NavLink title="Dependencies" url="/hooks/lore-hook-websockets-socketio/dependencies/" />
            <NavLink title="Installation" url="/hooks/lore-hook-websockets-socketio/installation/" />
            <NavLink title="Code" url="/hooks/lore-hook-websockets-socketio/code/" />

            {/*<li className="doc-section">???</li>*/}
            {/*<NavLinkPlaceholder title="???" />*/}
            {/*<NavLink title="create" url="/hooks/lore-hook-actions/blueprints/create/" />*/}
          </ul>
          {children}
        </div>
      </div>
    </Layout>
  );
};
