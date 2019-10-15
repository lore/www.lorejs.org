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
          <h1>lore-hook-polling</h1>
          <p>
            Provides the ability to poll actions on an interval
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="Introduction" url="/hooks/lore-hook-polling/" />
            <NavLink title="Dependencies" url="/hooks/lore-hook-polling/dependencies/" />
            <NavLink title="Installation" url="/hooks/lore-hook-polling/installation/" />
            <NavLink title="Code" url="/hooks/lore-hook-polling/code/" />

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
