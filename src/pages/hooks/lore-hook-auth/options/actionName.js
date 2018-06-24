import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/LoreHookAuth';
import Markdown from '../../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        actionName
      </h1>
      <p>
        The name of the action that should be created that is responsible for fetching the current user. This
        defaults to the name of the model.
      </p>
      <Markdown text={`
      actionName: 'currentUser'
      `}/>
    </Template>
  )
};
