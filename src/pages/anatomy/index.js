import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Anatomy';

export default (props) => {
  return (
    <Template
    title="Project Structure"
    subtitle="Introduction"
    description={(
      <p>
        This section documents the default project structure for a new Lore application.
      </p>
    )}
    >
      <p>
        Click the links in the navigation to learn more about specific folders and files.
      </p>
    </Template>
  );
};
