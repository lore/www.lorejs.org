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
          <h1>lore-generate-hook</h1>
          <p>
            Generates a new hook that you can use to add functionality to Lore.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="Introduction" url="/cli/lore-generate-hook/" />
          </ul>
          {children}
        </div>
      </div>
    </Layout>
  );
};
