import React from 'react';
import Link from 'gatsby-link';
import NavLink from './NavLink';
import NavSectionHeader from './NavSectionHeader';
import { Location } from '@reach/router';

const DocumentationIcon = () => (
  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path className="text-gray-400 fill-current" d="M12 21a2 2 0 0 1-1.41-.59l-.83-.82A2 2 0 0 0 8.34 19H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4a5 5 0 0 1 4 2v16z"></path>
    <path className="text-gray-700 fill-current" d="M12 21V5a5 5 0 0 1 4-2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4.34a2 2 0 0 0-1.42.59l-.83.82A2 2 0 0 1 12 21z"></path>
  </svg>
);

const ComponentsIcon = () => (
  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path className="text-gray-400 fill-current" d="M3 6l9 4v12l-9-4V6zm14-3v2c0 1.1-2.24 2-5 2s-5-.9-5-2V3c0 1.1 2.24 2 5 2s5-.9 5-2z"></path>
    <polygon className="text-gray-700 fill-current" points="21 6 12 10 12 22 21 18"></polygon>
  </svg>
);

const ScreencastsIcon = () => (
  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path className="text-gray-400 fill-current" d="M4 3h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm0 2v2h2V5H4zm0 4v2h2V9H4zm0 4v2h2v-2H4zm0 4v2h2v-2H4zM18 5v2h2V5h-2zm0 4v2h2V9h-2zm0 4v2h2v-2h-2zm0 4v2h2v-2h-2z"></path>
    <path className="text-gray-700 fill-current" d="M9 5h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm0 8h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z"></path>
  </svg>
);

const ResourcesIcon = () => (
  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path className="text-gray-400 fill-current" d="M9 22c.19-.14.37-.3.54-.46L17.07 14H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H9zM4 2h4a2 2 0 0 1 2 2v14a4 4 0 1 1-8 0V4c0-1.1.9-2 2-2zm2 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
    <path className="text-gray-700 fill-current" d="M11 18.66V7.34l2.07-2.07a2 2 0 0 1 2.83 0l2.83 2.83a2 2 0 0 1 0 2.83L11 18.66z"></path>
  </svg>
);

const CommunityIcon = () => (
  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path className="text-gray-400 fill-current" d="M20.3 12.04l1.01 3a1 1 0 0 1-1.26 1.27l-3.01-1a7 7 0 1 1 3.27-3.27zM11 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
    <path className="text-gray-700 fill-current" d="M15.88 17.8a7 7 0 0 1-8.92 2.5l-3 1.01a1 1 0 0 1-1.27-1.26l1-3.01A6.97 6.97 0 0 1 5 9.1a9 9 0 0 0 10.88 8.7z"></path>
  </svg>
);

const CaretIcon = () => (
  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
  </svg>
);

const ActionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
  </svg>
);

// Alt: https://material.io/resources/icons/?icon=storage&style=baseline
const ReducerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M3 16h5v-2H3v2zm6.5 0h5v-2h-5v2zm6.5 0h5v-2h-5v2zM3 20h2v-2H3v2zm4 0h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM3 12h8v-2H3v2zm10 0h8v-2h-8v2zM3 4v4h18V4H3z"/>
  </svg>
);

const ConnectIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
  </svg>
);

const ProjectStructureIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
  </svg>
);

const FeaturesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
  </svg>
);

const DocumentationIcon2 = () => (
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enableBackground="new 0 0 24 24">
    <g id="Bounding_Box">
      <rect fill="none" width="24" height="24"/>
    </g>
    <g id="Flat">
      <g id="ui_x5F_spec_x5F_header_copy_2"></g>
      <g>
        <path d="M21,5c-1.11-0.35-2.33-0.5-3.5-0.5c-1.95,0-4.05,0.4-5.5,1.5c-1.45-1.1-3.55-1.5-5.5-1.5S2.45,4.9,1,6v14.65
          c0,0.25,0.25,0.5,0.5,0.5c0.1,0,0.15-0.05,0.25-0.05C3.1,20.45,5.05,20,6.5,20c1.95,0,4.05,0.4,5.5,1.5c1.35-0.85,3.8-1.5,5.5-1.5
          c1.65,0,3.35,0.3,4.75,1.05c0.1,0.05,0.15,0.05,0.25,0.05c0.25,0,0.5-0.25,0.5-0.5V6C22.4,5.55,21.75,5.25,21,5z M21,18.5
          c-1.1-0.35-2.3-0.5-3.5-0.5c-1.7,0-4.15,0.65-5.5,1.5V8c1.35-0.85,3.8-1.5,5.5-1.5c1.2,0,2.4,0.15,3.5,0.5V18.5z"/>
        <g>
          <path d="M17.5,10.5c0.88,0,1.73,0.09,2.5,0.26V9.24C19.21,9.09,18.36,9,17.5,9c-1.7,0-3.24,0.29-4.5,0.83v1.66
            C14.13,10.85,15.7,10.5,17.5,10.5z"/>
          <path d="M13,12.49v1.66c1.13-0.64,2.7-0.99,4.5-0.99c0.88,0,1.73,0.09,2.5,0.26V11.9c-0.79-0.15-1.64-0.24-2.5-0.24
            C15.8,11.66,14.26,11.96,13,12.49z"/>
          <path d="M17.5,14.33c-1.7,0-3.24,0.29-4.5,0.83v1.66c1.13-0.64,2.7-0.99,4.5-0.99c0.88,0,1.73,0.09,2.5,0.26v-1.52
            C19.21,14.41,18.36,14.33,17.5,14.33z"/>
        </g>
      </g>
    </g>
  </svg>
);

export default function(props) {
  const { children, showSiteNavigation=true } = props;

  return (
    <Location>
      {({ location }) => {
        const { pathname } = location;

        return (
          <div id="sidebar" className="hidden fixed inset-0 pt-16 h-full bg-white z-90 w-full border-b -mb-16 lg:-mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:border-b-0 lg:pt-0 lg:w-1/4 lg:block lg:border-0 xl:w-1/5">
            <div id="navWrapper" className="h-full overflow-y-auto scrolling-touch lg:h-auto lg:block lg:relative lg:sticky lg:top-16 bg-white lg:bg-transparent">
              <div id="navGradient" className="hidden" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1), rgba(255,255,255,0))' }}></div>
              <nav id="nav" className="px-6 pt-6 overflow-y-auto text-base lg:text-sm lg:py-12 lg:pl-6 lg:pr-8 sticky?lg:h-(screen-16)">
                {showSiteNavigation && (
                  <div className="mb-10">
                    {[
                      ['/features/', 'Features', <i className="material-icons">apps</i>],
                      ['/docs/', 'Documentation', <i className="material-icons">format_list_bulleted</i>],
                      // ['/quickstart/', 'Quickstart', <i className="material-icons">menu_book</i>],
                      ['/anatomy/', 'Project Structure', <i className="material-icons">format_align_left</i>],

                      // Libraries
                      ['/actions/', 'Actions', <i className="material-icons">import_export</i>], // sync
                      ['/reducers/', 'Reducers', <i className="material-icons">storage</i>],
                      ['/connect/', 'Connect', <i className="material-icons">share</i>],
                      ['/models/', 'Models', <i className="material-icons">person</i>],
                      ['/collections/', 'Collections', <i className="material-icons">people</i>],

                      // Other
                      ['/examples/', 'Examples', <i className="material-icons">help_outline</i>],
                      ['/architecture/', 'Architecture', <i className="material-icons">business</i>]
                    ].map(function(value, index) {
                      const href = value[0];
                      const text = value[1];
                      const icon = value[2];

                      const active = pathname.indexOf(href) === 0;

                      return (
                        <Link key={index} to={href} className={active ?
                          index === 0 ?
                            "flex items-center px-2 -mx-2 py-1 hover:text-gray-900 font-bold text-gray-900" :
                            "mt-3 lg:mt-1 flex items-center px-2 -mx-2 py-1 hover:text-gray-900 font-bold text-gray-900" :
                          index === 0 ?
                            "flex items-center px-2 -mx-2 py-1 hover:text-gray-900 font-semibold text-gray-600" :
                            "mt-3 lg:mt-1 flex items-center px-2 -mx-2 py-1 hover:text-gray-900 font-semibold text-gray-600"
                        }>
                          {icon}
                          <span className="ml-3">
                            {text}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                )}
                {children}
              </nav>
            </div>
          </div>
        );
      }}
    </Location>
  );
}
