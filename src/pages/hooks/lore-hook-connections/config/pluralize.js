import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/LoreHookConnections';
import Markdown from '../../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        pluralize
      </h1>
      <p>
        Pluralization setting used by the framework when composing API endpoints.
      </p>
      <p>
        Model names in Lore are singular, but many APIs used a plural convention
        when making requests. Use this setting to tell the framework whether it
        should convert your model names to a plural form when making API calls.
      </p>

      <p>
        Here is an example of how this setting would affect the endpoints for
        a model named 'book':
      </p>

      <Markdown type="sh" text={`
      pluralize | endpoint
      ---------------------
        true    |  /books
        false   |  /book
      `}/>
    </Template>
  )
};
