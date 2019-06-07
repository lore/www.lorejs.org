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
          <h1>Videos</h1>
          <p>
            Recorded videos on various topics
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="Overview" url="/videos/" />

            <li className="doc-section">Videos</li>
            <NavLink title="Your First React App" url="/videos/your-first-react-app/" />
            <NavLink title="Introduction to Lore" url="/videos/introduction-to-lore/" />
          </ul>
          {children}
        </div>
      </div>
    </Layout>
  )
};
