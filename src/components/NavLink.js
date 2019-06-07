import React from 'react';
import Link from 'gatsby-link';
import { Location } from '@reach/router';

export default class NavLink extends React.Component {
  render() {
    const {
      title,
      url,
      // location: {
      //   pathname
      // },
      children
    } = this.props;

    // const active = (
    //   pathname === url ||
    //   (pathname.length > url.length && pathname.indexOf(url) >= 0)
    // );

    // const active = pathname === url;
    //
    // const expanded = (
    //   pathname.length > url.length &&
    //   pathname.indexOf(url) >= 0
    // );

    return (
      <Location>
        {({ location }) => {
          const { pathname } = location;

          const active = pathname === url;

          const expanded = (
            pathname.length > url.length &&
            pathname.indexOf(url) >= 0
          );

          return (
          <li className={`${active ? 'active ' : ''} ${expanded ? 'expanded' : ''}`}>
          <Link to={url}>
          {children ? (
            expanded ? (
              <span className="icon icon-triangle-down"/>
            ) : (
              <span className="icon icon-triangle-right"/>
            )
          ) : null}
          {title}
          </Link>
          {children ? children : null}
          </li>
          );
        }}
      </Location>
    )

    return (
      <li className={`${active ? 'active ' : ''} ${expanded ? 'expanded' : ''}`}>
        <Link to={url}>
          {children ? (
            expanded ? (
              <span className="icon icon-triangle-down"/>
            ) : (
              <span className="icon icon-triangle-right"/>
            )
          ) : null}
          {title}
        </Link>
        {children ? children : null}
      </li>
    );
  }
}
