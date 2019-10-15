import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/LoreHookRouter';
import Markdown from '../../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        routes
      </h1>
      <p>
        Returns the routes used by the application.
      </p>
      <p>
        The <code>lore.loader</code> object is a way of lazy-loading files and directories the framework
        doesn't have control over such as the models, config directory, and in this case the
        routes.js file at the root of the project.
      </p>
      <p>
        The reason the loader is used here is because the routes <em>must</em> to be lazy-loaded,
        since loading the routes will pull in the components, which may be using
        the <code>lore.connect</code> decorator that won't exist until the <code>lore.connect</code> hooks loads.
      </p>
      <p>
        Trying to load the routes directly in this config file will throw an error during
        build, because lore loads the config file <em>before</em> any of the hooks, since they
        need information in the config to determine their behavior.
      </p>
      <Markdown text={`
      routes: function(lore) {
        return lore.loader.loadRoutes();
      }
      `}/>
    </Template>
  )
};
