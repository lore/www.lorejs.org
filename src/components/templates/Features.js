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
          <h1>Features</h1>
          <p>
            Key features that make up the main value proposition for Lore
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="Introduction" url="/features/" />

            <li className="doc-section">Core Libraries</li>
            <NavLink title="React" url="/features/core/react/" />
            <NavLink title="Webpack" url="/features/core/webpack/" />
            <NavLink title="Redux" url="/features/core/redux/" />
            <NavLink title="React Router" url="/features/core/react-router/" />

            <li className="doc-section">Data Structure</li>
            <NavLink title="Overview" url="/features/data-structure/" />
            <NavLink title="Models" url="/features/data-structure/models/" />
            <NavLink title="Collections" url="/features/data-structure/collections/" />

            <li className="doc-section">UI Patterns</li>
            <NavLink title="Filtering" url="/features/filtering/" />
            <NavLink title="Pagination" url="/features/pagination/" />
            <NavLink title="Infinite Scrolling" url="/features/infinite-scrolling/" />
            <NavLink title="WebSockets" url="/features/websockets/" />
            <NavLink title="Visual Cues" url="/features/visual-cues/" />
            <NavLink title="Optimistic Updates" url="/features/optimistic-updates/" />
            <NavLink title="Dialogs" url="/features/dialogs/" />
            <NavLink title="Wizards" url="/features/wizards/" />
            <NavLink title="Error Handling" url="/features/error-handling/" />
            <NavLink title="404 Pages" url="/features/404-pages/" />
          </ul>
          {children}
        </div>
      </div>
    </Layout>
  )
};
