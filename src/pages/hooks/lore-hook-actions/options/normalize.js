import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/LoreHookActions';
import Markdown from '../../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        normalize
      </h1>
      <p>
        Specify whether models should be normalized.
      </p>
      <Markdown text={`
      normalize: true
      `}/>
    </Template>
  )
};
