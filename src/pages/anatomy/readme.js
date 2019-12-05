import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Anatomy';
import Code from '../../components/Code';

export default (props) => {
  return (
    <Template>
      <h1>
        README.md
      </h1>
      <p>
        This file is typically used to document your project for others, and often includes the steps required
        to install, configure, or use your project.
      </p>
      <p>
        To learn more about this file, as well as other ways to document your project, see
        the <a href="https://guides.github.com/features/wikis/">Documenting your projects on GitHub</a> article on
        GitHub.
      </p>
      <p>
        This file is written in a language called Markdown. To learn more about that language, see
        the <a href="https://guides.github.com/features/mastering-markdown/">Mastering Markdown</a> documentation on
        GitHub.
      </p>

      <h3>
        Defaults
      </h3>
      <p>
        The default file included in new projects looks like this:
      </p>
      <Code text={`
      # lore-quickstart

      A [Lore](http://www.lorejs.org) application.
      `}/>
    </Template>
  );
};
