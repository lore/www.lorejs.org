import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/LoreHookModels';
import Markdown from '../../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        Overview
      </h1>
      <p>
        If you're only consuming data from a single API, you'll never need to modify this file. But once you start consuming
        data from multiple APIs, you'll need to tell Lore which models are associated with each connection.
      </p>
      <p>
        If your application interacts with multiple APIs, create a connection for each API and then define which models
        are associated with each connection here.
      </p>
      <Markdown text={`
      module.exports = {

        defaultConnection: 'default'

        connectionModelMap: {
          default: [],
          v1: [
            'currentUser',
            'author'
          ],
          v2: [
            'book',
            'publisher'
          ]
        }

      };
      `}/>
      <p>
        In the example above, the models <code>currentUser</code> and <code>author</code> use
        the <code>v1</code> connection, while the <code>book</code> and <code>publisher</code> models use
        the <code>v2</code> connection. All other models use the <code>default</code> connection.
      </p>
    </Template>
  )
};
