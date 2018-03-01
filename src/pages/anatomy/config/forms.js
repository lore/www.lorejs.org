import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Anatomy';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        Introduction
      </h1>
      <p>
        This section describes the application structure.
      </p>
      <p>
        You can learn more about the configuration options <Link to="/hooks/lore-hook-forms/">here</Link>.
      </p>

      <h2>
        Default Config
      </h2>
      <p>
        The default config is shown below.
      </p>
      <Markdown text={`

      `}/>
    </Template>
  );
};
