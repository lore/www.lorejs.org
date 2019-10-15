import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Webpack';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        Images
      </h1>
      <p>
        All images in <code>assets/images</code> are copied into the <code>/assets/images</code> directory in
        the <code>dist</code> folder.
      </p>
      <p>
        This means any images you add to your project will publically available in production via a route
        like <code>https://app.example.com/assets/images</code>
      </p>

      <h3>
        Relevant Section
      </h3>
      <p>
        This section of the Webpack config that controls this behavior is shown below:
      </p>
      <Markdown text={`
      ifProduction(new CopyWebpackPlugin([{
        from: 'assets/images',
        to: 'assets/images'
      }])),
      `}/>
    </Template>
  );
};
