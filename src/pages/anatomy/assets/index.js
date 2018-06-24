import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Anatomy';

export default (props) => {
  return (
    <Template>
      <h1>
        /assets
      </h1>
      <p>
        This folder is a suggested location to place your project assets like images, styles and fonts. Deleting
        or renaming this folder will have no effect on the framework, so feel to customize it to your liking.
      </p>
      <p>
        Lore includes Webpack loaders for LESS and SASS by default, which is why you see folders for each of those
        preprocessors. But feel free to delete whichever folder(s) you won't be using, or all three folders if you'd
        rather use inline styles or your favorite JSS library (JavaScript Style Sheets).
      </p>
      <p>
        That being said, one advantage of using CSS, LESS, or SASS for your project is that Webpack can hot-reload
        styling changes without requireing you to refresh the browser, which can add a convenience to that aspect
        of development.
      </p>
    </Template>
  );
};
