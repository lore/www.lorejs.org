import React from 'react';
import PropTypes from 'prop-types';
import NavLink from '../../NavLink';
import NavSectionHeader from '../../NavSectionHeader';

Navigation.propTypes = {
  categories: PropTypes.array.isRequired
};

export default function Navigation(props) {
  const { categories } = props;

  return categories.map(function(category, index) {
    return (
      <div key={index} className="mb-8">
        <NavSectionHeader>
          {category.title}
        </NavSectionHeader>
        <ul>
          {category.links.map(function(value, index) {
            const text = value[0];
            const href = value[1];
            const active = value[2];

            return (
              <NavLink key={index} href={href} active={active}>
                {text}
              </NavLink>
            );
          })}
        </ul>
      </div>
    );
  })
};
