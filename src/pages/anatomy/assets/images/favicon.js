import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/Anatomy';

export default (props) => {
  return (
    <Template>
      <h1>
        /assets/images/favicon.png
      </h1>
      <p>
        A large image to be used as the favicon.
      </p>
      <p>
        For new projects, this is the Lore logo, but feel free to replace it with whatever image you
        would like to be used instead.
      </p>
      <p>
        Note that this file should be MUCH larger than the actual favicon. This because this file is NOT used
        as the favicon directly. Instead, Webpack uses it as a blueprint for the favicon, and during the build
        projects, will generate many (much smaller) images of various sizes that will be used by the browser.
      </p>
    </Template>
  );
};
