import React from 'react';
import PropTypes from 'prop-types';
import NavLink from '../../NavLink';
import NavSectionHeader from '../../NavSectionHeader';
import Link from 'gatsby-link';
import {Location} from '@reach/router';

Navigation.propTypes = {
  categories: PropTypes.array.isRequired
};

function renderNavFolder(value, index, pathname) {
  const text = value[0];
  const href = value[1];
  const active = value[2];

  const indent = (`${index}`.split('.').length - 1) * 3;

  // return (
  //   <NavLink key={index} href={href} active={active} indent={indent}>
  //     {pathname === href || pathname.indexOf(href) >= 0 ? (
  //       <i className="material-icons -ml-8 mr-2">keyboard_arrow_down</i>
  //     ) : (
  //       <i className="material-icons -ml-8 mr-2">keyboard_arrow_right</i>
  //     )}
  //     {text}
  //   </NavLink>
  // );

  return (
    <NavLink key={index} href={href} active={active} indent={indent}>
      {pathname === href || pathname.indexOf(href) >= 0 ? (
        <i className="material-icons" style={{ position: 'absolute', left: '-30px', top: '-1px' }}>
          arrow_drop_down
        </i>
      ) : (
        <i className="material-icons" style={{ position: 'absolute', left: '-30px', top: '-1px' }}>
          arrow_right
        </i>
      )}
      {text}
    </NavLink>
  );
}

function renderNavLink(value, index, pathname) {
  const text = value[0];
  const href = value[1];
  const active = value[2];

  const indent = (`${index}`.split('.').length - 1) * 3;

  // if (indent > 0 && pathname.indexOf(href) < 0) {
  //   return null;
  // }

  return (
    <NavLink key={index} href={href} active={active} indent={indent}>
      {text}
    </NavLink>
  );
}

function renderNav(value, index, pathname) {
  const text = value[0];
  const href = value[1];
  const active = value[2];

  const result = [];

  if (value.length === 3) {
    result.push(renderNavFolder(value, index, pathname));

    const indent = (`${index}`.split('.').length - 1) * 4;

    if (pathname === href || pathname.indexOf(href) >= 0) {
      value[2].forEach(function(value2, index2) {
        result.push(renderNav(value2, `${index}.${index2}`, pathname))
      });
    }

    return result;
  }

  return renderNavLink(value, index, pathname);
}

export default function Navigation(props) {
  const { categories } = props;

  return (
    <Location>
      {({ location }) => {
        // const active = location.pathname === href;

        return categories.map(function(category, index) {
          return (
            <div key={index} className="mb-8">
              <NavSectionHeader>
                {category.title}
              </NavSectionHeader>
              <ul>
                {category.links.map(function(value, index) {
                  return renderNav(value, index, location.pathname);
                })}
              </ul>
            </div>
          );
        })
      }}

    </Location>
  )

  // return categories.map(function(category, index) {
  //   return (
  //     <div key={index} className="mb-8">
  //       <NavSectionHeader>
  //         {category.title}
  //       </NavSectionHeader>
  //       <ul className="list-disc pl-10">
  //         {category.links.map(function(value, index) {
  //           return renderNav(value, index);
  //         })}
  //       </ul>
  //     </div>
  //   );
  // })
};
