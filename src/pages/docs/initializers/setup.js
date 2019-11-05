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
      subtitle="Install and configure @lore/initializers."
    >
      <h2>
        1. Install @lore/initializers via npm
      </h2>
      <p>
        Add @lore/initializers to your package.json.
      </p>
      <Code text={`
      npm install --save @lore/initializers
      `}/>

      <h2>
        2. Create runInitializers() function
      </h2>
      <p>
        Create a folder called <code>.lore</code> at the root of your project and create
        a file inside called <code>initializers.js</code>. Paste in the following code:
      </p>

      <h3>
        .lore/initializers.js
      </h3>
      <Code text={`
      import _ from 'lodash';
      
      /*
       * Run each initializer
       */
      
      export function runInitializers(config={}, modules={}) {
        const { initializers } = modules;
      
        return _.mapValues(initializers, function(initializer) {
          initializer(config);
        });
      }
      `}/>

      <p>
        This code gives us a function called <code>runInitializers</code> that will iterate through
        each initializer provided, and invoke it. It will also provide the application config to each
        initializer so they can inspect it and react accordingly.
      </p>

    </Template>
  )
};
