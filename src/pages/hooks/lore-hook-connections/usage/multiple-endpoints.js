import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/LoreHookConnections';
import Markdown from '../../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        Multiple Endpoints
      </h1>
      <p>
        Connections basically provide a way to store settings that should be applied to all models that communicate with a
        given endpoint. By default this connection is called <code>default</code> but you can rename it to whatever you want.
      </p>

      <p>
        With this approach supporting multiple APIs is easy, as you can add additional connections and map them to models.
        For example, let's say we have an app developed using the default connection, and the API started migrating to v2.
        In this case, we could rename our default connection to <code>v1</code> and add a second connection for <code>v2</code> like this:
      </p>

      <Markdown text={`
      // config/connections.js
      {
        v1: {...},
        v2: {...}
      }
      `}/>

      <p>
        Then in <code>config/models.js</code> we rename the default connection and provide a map of which models use the non-default
        connection like this:
      </p>

      <Markdown text={`
      // config/models.js
      {
        defaultConnection: 'v1',
        connectionModelMap: {
          // v1: [...optional...],
          v2: [
            'post',
            'comment',
            'modelThree'
          ]
        }
      }
      `}/>

      <p>
        If you want to be explicit you can map all models, but models are assumed to be associated with the defaultConnection
        unless otherwise declared. This also gives a single location in the project to view which models are connected to
        which API endpoints.
      </p>

      <h4>
        Specify casing style of API servers
      </h4>

      <p>
        Currently the project assumes the API server uses a camelCase casing style, such as <code>/api/userComments</code> or
        <code>/api/bookAuthors</code>. But some APIs (like Django and Rails) use a snake_case style, like <code>/api/user_comments</code>, and others
        use a kebab-case style like <code>/api/user-comments</code>.
      </p>

      <Markdown text={`
      {
        camel: '/api/userComments',
        kebab: '/api/user-comments',
        snake: '/api/user_comments',
        pascal: '/api/UserComments'
      }
      `}/>

      <p>
        Generally speaking, camel and pascal are the same thing, as URLs are case-insensitive, but the user way to prefer to
        see networks requests in one style of the other, so both are supported.
      </p>
    </Template>
  )
};
