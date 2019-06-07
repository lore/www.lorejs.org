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
          <h1>Examples</h1>
          <p>
            Small applications that demonstrate how to solve specific problems with Lore
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="Purpose" url="/examples/" />

            <li className="doc-section">Examples</li>
            <NavLink title="TodoMVC" url="/examples/todo-mvc/" />
            <NavLink title="Authentication" url="/examples/authentication/" />
            <NavLink title="Authorization" url="/examples/authorization/" />
            {/*<NavLink title="Dialogs" url="/examples/dialogs/" />*/}
            <NavLink title="Error Handling" url="/examples/error-handling/" />
            <NavLink title="Filtering" url="/examples/filtering/" />
            <NavLink title="Infinite Scrolling" url="/examples/infinite-scrolling/" />
            <NavLink title="Optimistic Updates" url="/examples/optimistic-updates/" />
            <NavLink title="Pagination" url="/examples/pagination/" />
            <NavLink title="WebSockets" url="/examples/websockets/" />
          </ul>
          {children}
        </div>
      </div>
    </Layout>
  )
};
