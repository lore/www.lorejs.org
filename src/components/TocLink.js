import React from 'react';
import Link from 'gatsby-link';

export default (props) => {
  const {
    title,
    url,
    location: {
      pathname
    }
  } = props;

  {/*<li className="active">*/}
  return (
    <li className={pathname === url ? 'active' : ''}>
      <Link to={url}>
        {title}
      </Link>
    </li>
  );
};

