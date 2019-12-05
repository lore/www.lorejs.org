import React from 'react';
import Link from 'gatsby-link';
import NavLink from './NavLink';
import NavSectionHeader from './NavSectionHeader';

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

export default function() {
  return (
    <div id="sidebar" className="hidden fixed inset-0 pt-16 h-full bg-white z-90 w-full border-b -mb-16 lg:-mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:border-b-0 lg:pt-0 lg:w-1/4 lg:block lg:border-0 xl:w-1/5">
      <div id="navWrapper" className="h-full overflow-y-auto scrolling-touch lg:h-auto lg:block lg:relative lg:sticky lg:top-16 bg-white lg:bg-transparent">
        <div id="navGradient" className="hidden" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1), rgba(255,255,255,0))' }}></div>
        <nav id="nav" className="px-6 pt-6 overflow-y-auto text-base lg:text-sm lg:py-12 lg:pl-6 lg:pr-8 sticky?lg:h-(screen-16)">
          <div className="mb-10">
            {[
              ['/docs/installation/', 'Documentation', <DocumentationIcon />],
              ['/components/', 'Components', <ComponentsIcon/>],
              ['/quickstart/', 'Quickstart', <ScreencastsIcon/>],
              ['/resources/', 'Resources', <ResourcesIcon/>],
              ['/community/', 'Community', <CommunityIcon/>]
            ].map(function(value, index) {
              const href = value[0];
              const text = value[1];
              const icon = value[2];
              return (
                <Link key={index} to={href} className="flex items-center px-2 -mx-2 py-1 hover:text-gray-900 font-medium text-gray-900">
                  {icon}
                  <span className="ml-3">
                    {text}
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="mb-8">
            <NavSectionHeader>
              Getting Started
            </NavSectionHeader>
            <ul className="list-disc pl-10">
              {[
                // ['Getting Started'],
                ['/docs/installation', 'Installation', true],
                ['/docs/release-notes', 'Release Notes'],
                ['/docs/upgrading-to-v1', 'Upgrade Guide'],
                ['/docs/using-with-preprocessors', 'Using with Preprocessors'],
                ['/docs/controlling-file-size', 'Controlling File Size'],
                ['/docs/browser-support', 'Browser Support'],
                ['Core Concepts'],
              ].map(function(value, index) {
                const href = value[0];
                const text = value[1];
                const active = value[2];

                // if (value.length === 1) {
                //   return (
                //     <NavSectionHeader key={index}>
                //       {href}
                //     </NavSectionHeader>
                //   )
                // }

                return (
                  <NavLink key={index} href={href} active={active}>
                    {text}
                  </NavLink>
                );
              })}
            </ul>
          </div>
          <div className="mb-8">
            <NavSectionHeader>
              Core Concepts
            </NavSectionHeader>
            <ul className="list-disc pl-10">
              {[
                // ['Core Concepts'],
                ['/docs/utility-first','Utility-First'],
                ['/docs/responsive-design','Responsive Design'],
                ['/docs/pseudo-class-variants','Pseudo-Class Variant'],
                ['/docs/adding-base-styles','Adding Base Styles'],
                ['/docs/extracting-components','Extracting Components'],
                ['/docs/adding-new-utilities','Adding New Utilities'],
                ['/docs/functions-and-directives','Functions & Directives'],
                ['',''],
              ].map(function(value, index) {
                const href = value[0];
                const text = value[1];
                const active = value[2];
                return (
                  <NavLink key={index} href={href} active={active}>
                    {text}
                  </NavLink>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
