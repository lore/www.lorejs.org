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
          <h1>React</h1>
          <p>
            Component library for Lore
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="Introduction" url="/react/" />

            {/*<li className="doc-section">Section</li>*/}
            {/*<NavLink title="React Router" url="/libraries/react-router/" />*/}
            {/*<NavLinkPlaceholder title="Something" />*/}
          </ul>
          {children}
        </div>
      </div>
    </Layout>
  )
};
