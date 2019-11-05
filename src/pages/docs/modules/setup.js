import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Documentation';
import Markdown from '../../../components/Markdown';
import Video from '../../../components/Video';
import Code from '../../../components/Code';
import image from '../../../assets/images/quickstart/setup/final.png';

export default (props) => {
  return (
    <Template
      title="Setup"
      subtitle="Install and configure @lore/utils and webpack."
    >
      <h2>
        1. Install and configure webpack
      </h2>
      <p>
        This solution ONLY works if your project is using webpack, as <code>require.context</code> is
        a feature of webpack, not Node.
      </p>

      <h2>
        2. Install @lore/utils via npm
      </h2>
      <p>
        Add @lore/utils to your package.json.
      </p>
      <Code text={`
      npm install --save @lore/utils
      `}/>

    </Template>
  )
};
