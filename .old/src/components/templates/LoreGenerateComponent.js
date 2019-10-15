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
          <h1>lore-generate-component</h1>
          <p>
            Generates a new React component in <code>src/components</code>
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="Introduction" url="/cli/lore-generate-component/" />

            <li className="doc-section">Options</li>
            <NavLink title="--es*" url="/cli/lore-generate-component/options/es/" />
            <NavLink title="--router" url="/cli/lore-generate-component/options/router/" />
            <NavLink title="--connect" url="/cli/lore-generate-component/options/connect/" />
          </ul>
          {children}
        </div>
      </div>
    </Layout>
  );
};
