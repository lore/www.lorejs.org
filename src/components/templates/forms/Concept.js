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
          <h1>Forms: Concept</h1>
          <p>
            Mental model for the forms implementation
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="Introduction" url="/forms/" />

            {/*<li className="doc-section">Core Concepts</li>*/}
            {/*<NavLink title="Validators" url="/forms/concept/validators/" />*/}
            {/*<NavLink title="Form" url="/forms/concept/form/" />*/}

            {/*<li className="doc-section">Pattern Construction</li>*/}
            {/*<NavLink title="1. Basic Form" url="/forms/concept/basic-form/" />*/}
            {/*<NavLink title="2. Extract Common Code" url="/forms/concept/common-config/" />*/}
            {/*<NavLink title="3. Create Reusable Template" url="/forms/concept/reusable-template/" />*/}
            {/*<NavLink title="4. Create Schema" url="/forms/concept/create-schema/" />*/}
            {/*<NavLink title="5. Application Config" url="/forms/concept/application-config/" />*/}
            {/*<NavLink title="6. Custom Blueprints" url="/forms/concept/custom-blueprints/" />*/}

            {/*<li className="doc-section">Utility Libraries</li>*/}
            {/*<NavLink title="lore-react-forms" url="/forms/concept/lore-react-forms/" />*/}
          </ul>
          {children}
        </div>
      </div>
    </Layout>
  )
};
