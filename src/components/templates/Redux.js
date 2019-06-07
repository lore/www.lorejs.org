import React from 'react';
import Layout from '../../components/Layout';
import NavLink from '../NavLink';
import NavLinkPlaceholder from '../NavLinkPlaceholder';
import '../../assets/less/docs.less';

export default (props) => {
  const { children } = props;

  return (
    <Layout>
      <div className="docs-header" id="content">
        <div className="container">
          <h1>Redux</h1>
          <p>
            Architectural foundation for Lore
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="Introduction" url="/redux/" />

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
