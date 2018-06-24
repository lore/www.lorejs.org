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
          <h1>Lore Forms</h1>
          <h2>
            WARNING! The documentation for Lore Forms is severely lacking, but the tutorial should give you a
            good idea of how it works, and the component libraries section might give you some idea of what the
            ecosystem looks like. Apologies while the docs gets sorted out.
          </h2>
          <p>
            A Lore side-project to simplify form and dialog generation.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="Introduction" url="/forms/" />

            <li className="doc-section">Pattern Construction</li>
            <NavLink title="Tutorial" url="/forms/pattern/" />

            <li className="doc-section">Component Libraries</li>
            <NavLink title="Bootstrap v3" url="/forms/bootstrap/" />
            <NavLink title="Material UI" url="/forms/material-ui/" />

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
    </div>
  )
};
