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
      title="Usage"
      subtitle="Obtain the current environment."
    >
      <h2>
        1. Invoke getEnvironment()
      </h2>
      <p>
        Locate the entry point of your project and import the <code>getEnvironment</code> function
        from <code>@lore/environment</code>.
      </p>

      <h3>index.js</h3>
      <Code text={`
      /*
       * Environment
       *
       * Get the environment we should be using. This is controlled via the LORE_ENV environment
       * variable, and defaults to 'development' if not defined.
       */
      
      import { getEnvironment } from './.lore/environment';
      
      const environment = getEnvironment();
      `}/>

      <p>
        Now we have a variable we can use that reflects the desired environment.
      </p>

      <h2>
        2. Choose how you want to set the environment
      </h2>
      <p>
        There are a few ways you can control the value of the environment variable.
      </p>

      <h3>
        A. Do nothing and let it default to "development"
      </h3>
      <p>
        If you do nothing except invoke the function, the environment will default to <code>development</code>.
      </p>

      <h3>
        B. Set the LORE_ENV environment variable via webpack
      </h3>
      <p>
        If you're using webpack and want to be able to emulate or build for different environment, start by
        passing the environment as a variable to webpack. The code below shows one way to do that for two
        different npm scripts.
      </p>

      <h4>
        package.json
      </h4>
      <Code text={`
      "scripts": {
        "start": "webpack-dev-server --env.webpack=development --env.lore=development",
        "build:production": "webpack --env.webpack=production --env.lore=production -p",
      }
      `}/>

      <p>
        Then set the LORE_ENV environment variable in the <code>webpack.config.js</code> file
        using the <code>webpack.DefinePlugin</code> plugin:
      </p>

      <h4>
        webpack.config.js
      </h4>
      <Code text={`
      module.exports = function(env) {
        return {
          ...
          plugins: [
            new webpack.DefinePlugin({
              'process.env': {
                'LORE_ENV': JSON.stringify(env.lore),
                'NODE_ENV': JSON.stringify(env.webpack)
              }
            })
          ]
          ...
        }
      }
      `}/>

      <p>
        With this approach you can emulate different environments by changing the environment set via
        the npm scripts, or build for different environments and deploy to them remotely.
      </p>

      <h3>
        C. Provide the environment manually
      </h3>
      <p>
        If you want to force the environment, which can sometimes be useful in testing, simply provide
        it as an argument to <code>getEnvironment()</code>.
      </p>

      <Code text={`
      const environment = getEnvironment('test');
      `}/>

    </Template>
  )
};
