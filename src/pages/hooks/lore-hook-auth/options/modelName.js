import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/LoreHookAuth';
import Markdown from '../../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        modelName
      </h1>
      <p>
        The name of the model with a URL property set to the endpoint that can return the current user.
      </p>
      <Markdown text={`
      modelName: 'currentUser'
      `}/>
    </Template>
  )
};
