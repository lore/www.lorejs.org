import React from 'react';
import Link from 'gatsby-link';

export default (props) => {
  const {
    icon,
    imageSrc,
    imageHeight,
    imageMarginBottom,
    title,
    description,
    url
  } = props;

  return (
    <li className="m-b-lg">
      <div className="featured-list-icon text-primary">
        {icon ? (
          <span className={`icon icon-${icon}`} />
        ) : (
          <img src={imageSrc}  style={{ height: imageHeight, marginBottom: imageMarginBottom }} />
        )}
      </div>
      <p className="featured-list-icon-text m-b-0">
        <strong>{title}</strong>
      </p>
      <p className="featured-list-icon-text">
        {description} <Link to={url} className="text-primary">Learn more</Link>.
      </p>
    </li>
  );
};
