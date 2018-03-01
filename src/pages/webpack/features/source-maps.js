import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Webpack';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        Source Maps
      </h1>
      <p>
        Webpack is configured to generate sourcemaps for <code>production</code> build, to make debugging production
        applications easier. They are not generated in <code>development</code>.
      </p>
      <p>
        In development, the <code>eval</code> version is used, which will show you the transpiled version of code,
        to see what the browser will <em>actually be running</em>.
      </p>

      <h3>
        Relevant Section
      </h3>
      <p>
        This section of the Webpack config that controls this behavior is shown below:
      </p>
      <Markdown text={`
      devtool: ifProduction('source-map', 'eval'),
      `}/>
    </Template>
  );
};
