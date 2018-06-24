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
          <h1>lore-hook-actions</h1>
          <p>
            Creates a set of actions for each model using blueprints
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="Introduction" url="/hooks/lore-hook-actions/" />
            <NavLink title="Dependencies" url="/hooks/lore-hook-actions/dependencies/" />
            <NavLink title="Installation" url="/hooks/lore-hook-actions/installation/" />
            <NavLink title="Code" url="/hooks/lore-hook-actions/code/" />

            <li className="doc-section">Config</li>
            <NavLink title="default" url="/hooks/lore-hook-actions/config/" />

            <li className="doc-section">Options</li>
            <NavLink title="normalize" url="/hooks/lore-hook-actions/options/normalize/" />
            <NavLink title="blueprints" url="/hooks/lore-hook-actions/options/blueprints/" />
            <NavLink title="addCidToBody" url="/hooks/lore-hook-actions/options/addCidToBody/" />
            <NavLink title="cidBodyAttributeName" url="/hooks/lore-hook-actions/options/cidBodyAttributeName/" />

            <li className="doc-section">Blueprints</li>
            <NavLink title="create" url="/hooks/lore-hook-actions/blueprints/create/" />
            <NavLink title="destroy" url="/hooks/lore-hook-actions/blueprints/destroy/" />
            <NavLink title="find" url="/hooks/lore-hook-actions/blueprints/find/" />
            <NavLink title="get" url="/hooks/lore-hook-actions/blueprints/get/" />
            <NavLink title="update" url="/hooks/lore-hook-actions/blueprints/update/" />
          </ul>
          {children}
        </div>
      </div>
    </div>
  );
};
