import React from 'react';

export default function NavSectionHeader(props) {
  return (
    <h5 className="mb-3 lg:mb-2 text-gray-500 uppercase tracking-wide font-bold text-sm lg:text-xs">
      {props.children}
    </h5>
  );
}
