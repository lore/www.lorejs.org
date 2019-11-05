import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Anatomy';

export default (props) => {
  return (
    <Template>
      <h1>
        /config
      </h1>
      <p>
        This directory contains the project configuration, as well as instructions for how that configuration should
        change based on the environment the project is built for (e.g. development, production, etc.)
      </p>
    </Template>
  );
};
