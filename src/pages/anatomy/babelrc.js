import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Anatomy';
import Code from '../../components/Code';
import CodeTabs from '../../components/CodeTabs';
import CodeTab from '../../components/CodeTab';

export default (props) => {
  return (
    <Template>
      <h1>
        .babelrc
      </h1>
      <p>
        This file contains the settings for the preset and plugins that determine how your project is transpiled.
      </p>
      <p>
        To learn more about this file, see the <a href="https://babeljs.io/docs/usage/babelrc/">.babelrc
        documentation</a> on the Babel website.
      </p>

      <h3>
        Note about babel-preset-env
      </h3>
      <p>
        When you run <code>npm install</code> you may see the deprecation warning below in the console:
      </p>
      <Code text={`
      babel-preset-es2015@6.24.1: 🙌 Thanks for using Babel: we recommend using babel-preset-env now: please read babeljs.io/env to update!
      `}/>
      <p>
        Lore is intentionally (at least for now) avoiding the use of <code>babel-preset-env</code> for the
        following reasons:
      </p>
      <ul className="list-disc pl-10">
        <li>
          There is an issue where you <a href="https://github.com/babel/babel/issues/6604">cannot control the
          preset ordering</a>, which prevents it from working with some plugins
          like <a href="https://babeljs.io/docs/plugins/transform-class-properties/">transform-class-properties
          </a> and <a href="https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy">
          transform-decorators-legacy</a>.
        </li>
        <li>
          Those plugins are used for the <code>esnext</code> version of a Lore project, which means the project
          types would end up with inconsistent babel configurations.
        </li>
      </ul>
      <p>
        Starting in Babel 7, <code>transform-decorators</code> will <a href="https://babeljs.io/docs/plugins/transform-decorators/">
        be included in Babel's Stage-0 presets</a>, and the configuration will be moving to
        a <code>.babel.js</code> file to allow you to programmatically construct your configuration.
      </p>
      <p>
        Those changes may make it feasible to adopt <code>babel-preset-env</code>, but in the meantime, if the
        issues described above don't concern you, feel free to change your Babel setup to
        use <code>babel-preset-env</code>.
      </p>

      <h3>
        Defaults
      </h3>
      <p>
        The default file included in new projects looks like this:
      </p>
      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        {
          "presets": [
            "es2015",
            "react"
          ],
          "plugins": []
        }
        `}/>
        <CodeTab syntax="ES6" text={`
        {
          "presets": [
            "es2015",
            "react"
          ],
          "plugins": []
        }
        `}/>
        <CodeTab syntax="ESNext" text={`
        {
          "presets": [
            "es2015",
            "react",
            "stage-2"
          ],
          "plugins": [
            "transform-decorators-legacy"
          ]
        }
        `}/>
      </CodeTabs>
    </Template>
  );
};
