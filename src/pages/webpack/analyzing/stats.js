import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Webpack';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        Stats
      </h1>
      <p>
        Lore includes a couple scripts to generate stats about your webpack build. These stats can be quite helpful
        for understanding the size of your build, and how much of that size is attributed to specific packages.
      </p>

      <h3>
        Generate Stats
      </h3>
      <p>
        To illustrate, generate stats about the production build of your application by running this command:
      </p>
      <Markdown text={`
      npm run stats:production
      `}/>
      <p>
        Once this command finishes, you will have a file named <code>stats.json</code> at the root of your project.
      </p>

      <h3>
        Visualize Stats
      </h3>
      <p>
        Next navigate to <a href="http://chrisbateman.github.io/webpack-visualizer/">
        http://chrisbateman.github.io/webpack-visualizer/</a>, and you should see this:
      </p>
      <h3>
        TODO: Add Image
      </h3>
      <p>
        Drop the <code>stats.json</code> file you just generated into the drop area, and it will update
        to look like this:
      </p>
      <h3>
        TODO: Add Image
      </h3>
      <p>
        By hovering over each section of the donut, you'll be able to see the name of each package in your build,
        and how much of your total build size it's responsible for.
      </p>

    </Template>
  );
};
