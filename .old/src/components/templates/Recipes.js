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
          <h1>Recipes</h1>
          <p>
            Patterns for solving problems that fall outside the scope of the framework.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="Overview" url="/recipes/" />
          </ul>
          {children}
        </div>
      </div>
    </Layout>
  )
};
