import React from 'react';
import NavLink from '../NavLink';
import NavLinkPlaceholder from '../NavLinkPlaceholder';
import '../../assets/less/docs.less';

export default (props) => {
  const { children } = props;

  return (
    <div>
      <div className="docs-header" id="content">
        <div className="container">
          <h1>Concepts</h1>
          <p>
            Things you'll probably want to understand <em>eventually</em> to use Lore
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="Introduction" url="/concepts/" />

            <li className="doc-section">Concepts</li>
            <NavLink title="Actions" url="/concepts/core/actions/" />
            <NavLink title="Reducers" url="/concepts/core/reducers/" />
            <NavLink title="Models" url="/concepts/core/models/" />
            <NavLink title="Collections" url="/concepts/core/collections/" />
            <NavLink title="Connect" url="/concepts/core/connect/" />
            <NavLink title="Routing" url="/concepts/core/routing/" />

            <li className="doc-section">Server Communication</li>
            <NavLink title="Server Communication" url="/concepts/server-communication/" />

            <li className="doc-section">Data Structure</li>
            <NavLink title="Overview" url="/concepts/data-structure/" />
            <NavLinkPlaceholder title="Models (todo)" />
            <NavLinkPlaceholder title="Collections (todo)" />
          </ul>
          {children}
        </div>
      </div>
    </div>
  )
};
