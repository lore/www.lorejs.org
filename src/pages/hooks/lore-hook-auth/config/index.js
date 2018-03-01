import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/LoreHookAuth';
import Markdown from '../../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        Config
      </h1>
      <Markdown text={`
      module.exports = {

        /**
         * The name of the model with a URL property set to the endpoint
         * that can return the current user.
         */
        modelName: 'currentUser'

        /**
         * The name of the reducer that should be created that is responsible
         * for storing the current user. This defaults to the name of the
         * model.
         */
        reducerName: 'currentUser'

        /**
         * The name of the action that should be created at this responsible
         * for fetching the current user. This defaults to the name of the
         * model.
         */
        actionName: 'currentUser'

      };
      `}/>
    </Template>
  )
};
