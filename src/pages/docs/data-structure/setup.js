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
      subtitle="Install and configure @lore/utils."
    >
      <h2>
        1. Install @lore/utils via npm
      </h2>
      <p>
        Add @lore/utils to your package.json.
      </p>
      <Code text={`
      npm install --save @lore/utils
      `}/>

      <h2>
        2. TODO
      </h2>
      <p>
        ...?
      </p>

      <h3>
        Code???
      </h3>
      <Code text={`
      Code...
      `}/>

    </Template>
  )
};
