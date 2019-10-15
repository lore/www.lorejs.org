import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/LoreHookAuth';
import Markdown from '../../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        reducerName
      </h1>
      <p>
        The name of the reducer that should be created that is responsible for storing the current user. This
        defaults to the name of the model.
      </p>
      <Markdown text={`
      reducerName: 'currentUser'
      `}/>
    </Template>
  )
};
