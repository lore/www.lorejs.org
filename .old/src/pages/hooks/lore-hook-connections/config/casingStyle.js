import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/LoreHookConnections';
import Markdown from '../../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        casingStyle
      </h1>
      <p>
        Casing style used by the framework when composing API endpoints.
      </p>

      <p>
        Since models are camelCased in Lore, the framework assumed the server uses
        camelCasing as well. For example, if you have a model called <code>bookAuthor</code>,
        and pluralization is turned off, the framework will assume the endpoint is
        located at <code>/bookAuthor</code>. If the endpoint is something else, like <code>/book_author</code>
        you will need to tell the framework to modify its convention.
      </p>

      <Markdown type="sh" text={`
      casingStyle |  endpoint
      ---------------------------
        camel     |  /book_author
        kebab     |  /book-author
        pascal    |  /bookAuthor
        snake     |  /BookAuthor
      `}/>
    </Template>
  )
};
