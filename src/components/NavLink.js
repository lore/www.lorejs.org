import React from 'react';
import Link from 'gatsby-link';
import { Location } from '@reach/router';

export default function NavLink(props) {
  const { href, children, indent } = props;

  return (
    <Location>
      {({ location }) => {
        const active = location.pathname === href;

        return (
          <li className="mb-3 lg:mb-1">
            <Link className={active ?
              `px-2 -mx-2 py-1 transition-fast relative block text-blue-600 font-medium ${indent ? `ml-${indent}` : ''}` :
              `px-2 -mx-2 py-1 transition-fast relative block hover:translate-r-2px hover:text-gray-900 text-gray-600 font-medium  ${indent ? `ml-${indent}` : ''}`
            } to={href}>
              <span className={`rounded absolute inset-0 bg-blue-200 ${active ? 'opacity-25' : 'opacity-0'}`}></span>
              <span className="relative flex">{children}</span>
            </Link>
          </li>
        );
      }}

    </Location>
  );
};
