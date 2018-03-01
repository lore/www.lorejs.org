import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/ReactRouter';
import Markdown from '../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        Introduction
      </h1>
      <p>
        Lore uses <a href="https://reacttraining.com/react-router/">React Router</a> as the default routing library.
      </p>

      <h3>
        Where does React Router show up in Lore?
      </h3>
      <p>
        While Lore includes <code>react-router</code> by default, new projects are only lightly coupled to it.
        The places it shows up are:
      </p>
      <ul>
        <li>
          In the <code>routes.js</code> file at the root of the project
        </li>
        <li>
          In the <code>lore-hook-router</code> hook that configures <code>react-router</code>
        </li>
        <li>
          In the <code>lore-hook-react</code> hook that wraps the application with <code>Router</code>
        </li>
      </ul>
      <p>
        If you wanted to replace React Router with a different routing solution you could, though Lore itself will
        continue using it as the default for the forseeable future.
      </p>

      <h3>
        Resources for Learning React Router
      </h3>
      <p>
        You can learn more about React Router through the
        official <a href="https://github.com/ReactTraining/react-router/tree/v3/docs">
        documentation</a> and <a href="https://github.com/ReactTraining/react-router/tree/v3/examples">
        examples</a>.
      </p>
      <p>
        It's important to mention though that <strong>new Lore projects include react-router v3</strong>,
        and <strong>NOT v4</strong>. The links above go to the v3 documentation.
      </p>
      <p>
        By modifying some of configuration files in your project, it's possible to replace v3 with v4, but there's
        no formal guide explaining how to do it yet. Once there is, a link will be provided here.
      </p>
      <p>
        If you're interested in learning more about v4, you can explore it on the
        new <a href="https://reacttraining.com/react-router/web/guides/philosophy">react-router website</a>.
      </p>
    </Template>
  );
};
