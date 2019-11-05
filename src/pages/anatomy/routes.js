import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Anatomy';
import Markdown from '../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        routes.js
      </h1>
      <p>
        This file contains the route hierarchy for the application, which is a description of what should be rendered
        based on the URL in the web browser.
      </p>
      <p>
        Lore uses <a href="https://github.com/ReactTraining/react-router">react-router</a> as the routing library,
        and makes no modifications to these routes or to the behavior of <code>react-router</code>. So if you have
        any questions about the syntax, or specific routing-related needs, all of React
        Router's <a href="https://github.com/ReactTraining/react-router/tree/v3/docs">
        documentation</a> and <a href="https://github.com/ReactTraining/react-router/tree/v3/examples">
        examples</a> will be directly applicable to Lore.
      </p>
      <blockquote>
        <p>
          It's important to mention that <strong>new Lore projects include react-router v3</strong>,
          and <strong>NOT v4</strong>. The links above go to the v3 documentation. By modifying some of
          configuration files in your project, it's possible to replace v3 with v4 (or use a different routing
          library altogether), but there's no formal guide explaining how to do it yet. Once there is, a link will
          be provided here.
        </p>
        <p>
          In the future, Lore will <em>probably</em> switch to v4 as the default, but it needs to be explored
          more.
        </p>
      </blockquote>

      <h3>
        Defaults
      </h3>
      <p>
        The default file included in new projects looks like this:
      </p>
      <Markdown text={`
      import React from 'react';
      import { Route, IndexRoute, Redirect } from 'react-router';

      /**
       * Wrapping the Master component with this decorator provides an easy way
       * to redirect the user to a login experience if we don't know who they are.
       */
      import UserIsAuthenticated from './src/decorators/UserIsAuthenticated';

      /**
       * Routes are used to declare your view hierarchy
       * See: https://github.com/ReactTraining/react-router/blob/v3.2.1/docs/API.md
       */
      import Master from './src/components/Master';
      import Layout from './src/components/Layout';
      import Feed from './src/components/Feed';

      export default (
        <Route component={UserIsAuthenticated(Master)}>
          <Route path="/" component={Layout}>
            <IndexRoute component={Feed} />
          </Route>
        </Route>
      );

      `}/>
    </Template>
  );
};
