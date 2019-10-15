import React from 'react';
import Link from 'gatsby-link';
import NavLink from './NavLink';
import logo from '../assets/images/logos/lore_logo_text.png';

export default (props) => {
  const {
    location
  } = props;

  return (
    <ul className="nav nav-bordered nav-stacked">
      <NavLink layout="philosophy" title="Philosophy" url="/philosophy/" location={location} />
      <NavLink layout="features" title="Features" url="/features/" location={location} />
      <NavLink layout="quickstart" title="Quickstart" url="/quickstart/" location={location} />

      <li className="nav-divider"></li>
      <li className="nav-header">Documentation</li>
      <li className="nav-section">
        Core Libraries
      </li>
      <NavLink title="React" url="/react/" location={location} />
      <NavLink title="React Router" url="/react-router/" location={location} />
      <NavLink title="Redux" url="/redux/" location={location} />
      <NavLink title="Webpack" url="/webpack/" location={location} />
      {/*<NavLink title="Core Libraries" url="/libraries/" location={location} />*/}
      <li role="separator" className="divider"></li>
      <li className="nav-section">
        Project
      </li>
      <NavLink title="Anatomy" url="/anatomy/" location={location} />
      <NavLink title="Building" url="/building/" location={location} />
      <NavLink title="Publishing" url="/publishing/" location={location} />
      <li role="separator" className="divider"></li>
      <li className="nav-section">
        Concepts
      </li>
      <NavLink title="Actions" url="/actions/" location={location} />
      <NavLink title="Connect" url="/connect/" location={location} />
      <NavLink title="Reducers" url="/reducers/" location={location} />
      <li role="separator" className="divider"></li>
      <li className="nav-section">
        lore-models
      </li>
      <NavLink title="Models" url="/models/" location={location} />
      <NavLink title="Collections" url="/collections/" location={location} />
      <NavLink title="sync" url="/sync/" location={location} />
      <li role="separator" className="divider"></li>
      {/*<NavLink title="Recipes" url="/recipes/" location={location} />*/}
      <NavLink title="Examples" url="/examples/" location={location} />
      <NavLink title="Videos" url="/videos/" location={location} />
      <NavLink title="Architecture" url="/architecture/" location={location} />

      <li className="nav-divider"></li>
      <li className="nav-header">Hooks</li>
      <NavLink title="Introduction" url="/hooks/" location={location} />
      <li role="separator" className="divider"></li>
      <li className="nav-section">
        Tutorial
      </li>
      <NavLink title="Creating Custom Hooks" url="/hooks/tutorial/" location={location} />
      <li role="separator" className="divider"></li>
      <li className="nav-section">
        Core Hooks
      </li>
      <NavLink title="lore-hook-actions" url="/hooks/lore-hook-actions/" location={location} />
      <NavLink title="lore-hook-auth" url="/hooks/lore-hook-auth/" location={location} />
      <NavLink title="lore-hook-bind-actions" url="/hooks/lore-hook-bind-actions/" location={location} />
      <NavLink title="lore-hook-collections" url="/hooks/lore-hook-collections/" location={location} />
      <NavLink title="lore-hook-connect" url="/hooks/lore-hook-connect/" location={location} />
      <NavLink title="lore-hook-connections" url="/hooks/lore-hook-connections/" location={location} />
      <NavLink title="lore-hook-models" url="/hooks/lore-hook-models/" location={location} />
      <NavLink title="lore-hook-react" url="/hooks/lore-hook-react/" location={location} />
      <NavLink title="lore-hook-reducers" url="/hooks/lore-hook-reducers/" location={location} />
      <NavLink title="lore-hook-redux" url="/hooks/lore-hook-redux/" location={location} />
      <NavLink title="lore-hook-router" url="/hooks/lore-hook-router/" location={location} />
      <li role="separator" className="divider"></li>
      <li className="nav-section">
        Other Hooks
      </li>
      <NavLink title="lore-hook-polling" url="/hooks/lore-hook-polling/" location={location} />
      <NavLink title="lore-hook-websockets" url="/hooks/lore-hook-websockets/" location={location} />
      <NavLink title="lore-hook-websockets-actioncable" url="/hooks/lore-hook-websockets-actioncable/" location={location} />
      <NavLink title="lore-hook-websockets-sails" url="/hooks/lore-hook-websockets-sails/" location={location} />
      <NavLink title="lore-hook-websockets-socketio" url="/hooks/lore-hook-websockets-socketio/" location={location} />

      <li className="nav-divider"></li>
      <li className="nav-header">CLI</li>
      <NavLink title="Introduction" url="/cli/" location={location} />
      <li role="separator" className="divider"></li>
      <li className="nav-section">
        Tutorial
      </li>
      <NavLink title="Creating Custom Commands" url="/cli/tutorial/" location={location} />
      <li role="separator" className="divider"></li>
      <li className="nav-section">
        Core Commands
      </li>
      <NavLink title="lore-extract-action" url="/cli/lore-extract-action/" location={location} />
      <NavLink title="lore-extract-reducer" url="/cli/lore-extract-reducer/" location={location} />
      <NavLink title="lore-generate-action" url="/cli/lore-generate-action/" location={location} />
      <NavLink title="lore-generate-collection" url="/cli/lore-generate-collection/" location={location} />
      <NavLink title="lore-generate-component" url="/cli/lore-generate-component/" location={location} />
      <NavLink title="lore-generate-model" url="/cli/lore-generate-model/" location={location} />
      <NavLink title="lore-generate-new" url="/cli/lore-generate-new/" location={location} />
      <NavLink title="lore-generate-reducer" url="/cli/lore-generate-reducer/" location={location} />
      <li role="separator" className="divider"></li>
      <li className="nav-section">
        Other Commands
      </li>
      <NavLink title="lore-generate-generator" url="/cli/lore-generate-generator/" location={location} />
      <NavLink title="lore-generate-hook" url="/cli/lore-generate-hook/" location={location} />

      <li className="nav-divider"></li>
      <li className="nav-header">Forms</li>
      <NavLink title="Introduction" url="/forms/" location={location} />
      <li role="separator" className="divider"></li>
      <li className="nav-section">
        Pattern Construction
      </li>
      <NavLink title="Tutorial" url="/forms/pattern/" location={location} />
      <li role="separator" className="divider"></li>
      <li className="nav-section">
        Component Libraries
      </li>
      <NavLink title="Bootstrap v3" url="/forms/bootstrap/" location={location} />
      <NavLink title="Material UI" url="/forms/material-ui/" location={location} />

      <li className="nav-divider"></li>
      <li className="nav-header">Links</li>
      <li>
        <a href="https://github.com/lore/lore" target="_blank">
          GitHub
        </a>
      </li>

      <li className="nav-divider"></li>
    </ul>
  );
};
