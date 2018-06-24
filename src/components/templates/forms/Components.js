import React from 'react';
import NavLink from '../../NavLink';
import NavLinkPlaceholder from '../../NavLinkPlaceholder';
import '../../../assets/less/docs.less';

export default (props) => {
  const { children } = props;

  return (
    <div>
      <div className="docs-header" id="content">
        <div className="container">
          <h1>Forms: Components</h1>
          <p>
            Common foundational components used for form construction
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="Introduction" url="/forms/components/" />

            <li className="doc-section">Components</li>
            <NavLink title="Field" url="/forms/components/field/" />
            <NavLink title="Form" url="/forms/components/form/" />
            <NavLink title="SchemaForm" url="/forms/components/schema-form/" />
          </ul>
          {children}
        </div>
      </div>
    </div>
  )
};
