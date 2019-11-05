import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Anatomy';

export default (props) => {
  return (
    <Template>
      <h1>
        package-lock.json
      </h1>
      <p>
        This file doesn't exist in new projects by default, but will be created the first time you
        run <code>npm install</code>.
      </p>
      <p>
        This is a "lock file" that describes <strong>the specific version of each package that was
        installed</strong> and (if committed to your git repository) guarantees that each person (or Continuous
        Integration server) that downloads the project will get the exact same configuration.
      </p>
      <p>
        To learn more about this file, see the <a href="https://docs.npmjs.com/files/package-lock.json">package.json
        documentation</a> on the <code>npm</code> website.
      </p>
    </Template>
  );
};
