import React from 'react';
import Link from 'gatsby-link';
import NavLink from './NavLink';
import logo from '../assets/images/logos/lore_logo_text.png';

export default (props) => {
  const {
    location
  } = props;

  return (
    <nav className="navbar navbar-transparent navbar-fixed-top navbar-padded app-navbar p-t-md">
      <div className="container">
        <div className="navbar-header">
          <button className="btn navbar-toggle collapsed navbar-toggle-text" data-target="#stage" data-toggle="stage" data-distance="-250">
            <span className="icon icon-menu stage-toggle-icon" />
            Menu
          </button>
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Lore" style={{ height: '150%', marginTop: '-8px' }} />
          </Link>
        </div>
        <div className="navbar-collapse collapse text-uppercase">
          <ul className="nav navbar-nav navbar-right nav-bordered">
            <NavLink layout="philosophy" title="Philosophy" url="/philosophy/" location={location} />
            <NavLink layout="features" title="Features" url="/features/" location={location} />
            <NavLink layout="quickstart" title="Quickstart" url="/quickstart/" location={location} />
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                Documentation<span className="caret" />
              </a>
              <ul className="dropdown-menu">
                <li className="dropdown-category">
                  Core Libraries
                </li>
                <NavLink title="React" url="/react/" location={location} />
                <NavLink title="React Router" url="/react-router/" location={location} />
                <NavLink title="Redux" url="/redux/" location={location} />
                <NavLink title="Webpack" url="/webpack/" location={location} />
                {/*<NavLink title="Core Libraries" url="/libraries/" location={location} />*/}
                <li role="separator" className="divider"></li>
                <li className="dropdown-category">
                  Project
                </li>
                <NavLink title="Anatomy" url="/anatomy/" location={location} />
                <NavLink title="Building" url="/building/" location={location} />
                <NavLink title="Publishing" url="/publishing/" location={location} />
                <li role="separator" className="divider"></li>
                <li className="dropdown-category">
                  Concepts
                </li>
                <NavLink title="Actions" url="/actions/" location={location} />
                <NavLink title="Connect" url="/connect/" location={location} />
                <NavLink title="Reducers" url="/reducers/" location={location} />
                <li role="separator" className="divider"></li>
                <li className="dropdown-category">
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
              </ul>
            </li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                Hooks<span className="caret" />
              </a>
              <ul className="dropdown-menu">
                <li className="dropdown-category"></li>
                <NavLink title="Introduction" url="/hooks/" location={location} />
                <li role="separator" className="divider"></li>
                <li className="dropdown-category">
                  Tutorial
                </li>
                <NavLink title="Creating Custom Hooks" url="/hooks/tutorial/" location={location} />
                <li role="separator" className="divider"></li>
                <li className="dropdown-category">
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
                <li className="dropdown-category">
                  Other Hooks
                </li>
                <NavLink title="lore-hook-polling" url="/hooks/lore-hook-polling/" location={location} />
                <NavLink title="lore-hook-websockets" url="/hooks/lore-hook-websockets/" location={location} />
                <NavLink title="lore-hook-websockets-actioncable" url="/hooks/lore-hook-websockets-actioncable/" location={location} />
                <NavLink title="lore-hook-websockets-sails" url="/hooks/lore-hook-websockets-sails/" location={location} />
                <NavLink title="lore-hook-websockets-socketio" url="/hooks/lore-hook-websockets-socketio/" location={location} />
              </ul>
            </li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                CLI<span className="caret" />
              </a>
              <ul className="dropdown-menu">
                <li className="dropdown-category"></li>
                <NavLink title="Introduction" url="/cli/" location={location} />
                <li role="separator" className="divider"></li>
                <li className="dropdown-category">
                  Tutorial
                </li>
                <NavLink title="Creating Custom Commands" url="/cli/tutorial/" location={location} />
                <li role="separator" className="divider"></li>
                <li className="dropdown-category">
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
                <li className="dropdown-category">
                  Other Commands
                </li>
                <NavLink title="lore-generate-generator" url="/cli/lore-generate-generator/" location={location} />
                <NavLink title="lore-generate-hook" url="/cli/lore-generate-hook/" location={location} />
              </ul>
            </li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                Forms<span className="caret" />
              </a>
              <ul className="dropdown-menu">
                <NavLink title="Introduction" url="/forms/" location={location} />
                <li role="separator" className="divider"></li>
                <li className="dropdown-category">
                  Pattern Construction
                </li>
                <NavLink title="Tutorial" url="/forms/pattern/" location={location} />
                {/*<li role="separator" className="divider"></li>*/}
                {/*<li className="dropdown-category">*/}
                  {/*Components*/}
                {/*</li>*/}
                {/*<NavLink title="Field" url="/forms/components/field/" location={location} />*/}
                {/*<NavLink title="Form" url="/forms/components/form/" location={location} />*/}
                {/*<NavLink title="SchemaForm" url="/forms/components/schema-form/" location={location} />*/}
                <li role="separator" className="divider"></li>
                <li className="dropdown-category">
                  Component Libraries
                </li>
                <NavLink title="Bootstrap v3" url="/forms/bootstrap/" location={location} />
                <NavLink title="Material UI" url="/forms/material-ui/" location={location} />
              </ul>
            </li>
            <li>
              <a href="https://github.com/lore/lore" target="_blank">
                {/*GitHub*/}
                <svg style={{ marginTop: '2px' }} preserveAspectRatio="xMidYMid meet" height="1em" width="1em" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 438.549 438.549" stroke="none" className="_13gjrqj">
                  <g>
                    <path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 0 1-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"></path>
                  </g>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
