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
          <h1>React Router</h1>
          <p>
            Routing library for Lore
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="Introduction" url="/react-router/" />
            <NavLink title="Relevant Files" url="/react-router/relevant-files/" />
          </ul>
          {children}
        </div>
      </div>
    </div>
  )
};
