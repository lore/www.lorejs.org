import React from 'react';
import Layout from '../../../components/Layout';
import NavLink from '../../NavLink';
import NavLinkPlaceholder from '../../NavLinkPlaceholder';
import '../../../assets/less/docs.less';

export default (props) => {
  const { children } = props;

  return (
    <Layout>
      <div className="docs-header" id="content">
        <div className="container">
          <h1>Forms: Pattern Construction</h1>
          <h2>
            WARNING! v0.13 was just released, and the tutorial is currently undergoing final testing. It's
            recommended that you DO NOT follow along until this message is removed (please check back tomorrow).
          </h2>
          <p>
            Mental model for the forms implementation
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="Introduction" url="/forms/pattern/" />

            <li className="doc-section">Setup</li>
            <NavLink title="1. Clone the Starter App" url="/forms/pattern/setup/step-1/" />
            <NavLink title="2. Start the Mock API Server" url="/forms/pattern/setup/step-2/" />
            <NavLink title="3. Review the Application" url="/forms/pattern/setup/step-3/" />

            <li className="doc-section">Create Dialog</li>
            <NavLink title="Overview" url="/forms/pattern/create/overview/" />
            <NavLink title="1. Refactor Fields" url="/forms/pattern/create/step-1/" />
            <NavLink title="2. Refactor Form" url="/forms/pattern/create/step-2/" />
            <NavLink title="3. Convert Fields to Functions" url="/forms/pattern/create/step-3/" />
            <NavLink title="4. Convert Actions to Functions" url="/forms/pattern/create/step-4/" />
            <NavLink title="5. Create Schema" url="/forms/pattern/create/step-5/" />
            <NavLink title="6. Create SchemaForm" url="/forms/pattern/create/step-6/" />
            <NavLink title="7. Create Blueprint" url="/forms/pattern/create/step-7/" />

            <li className="doc-section">Update Dialog</li>
            <NavLink title="1. Refactor Update Dialog" url="/forms/pattern/update/step-1/" />

            <li className="doc-section">Destroy Dialog</li>
            <NavLink title="1. Refactor Delete Dialog" url="/forms/pattern/destroy/step-1/" />

            <li className="doc-section">Next Steps</li>
            <NavLink title="Next Steps" url="/forms/pattern/next-steps/" />

            <li className="doc-section">Misc</li>
            <NavLink title="Completed Project" url="/forms/pattern/misc/completed-project/" />
          </ul>
          {children}
        </div>
      </div>
    </Layout>
  )
};
