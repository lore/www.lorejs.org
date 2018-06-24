import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Reducers';
import Markdown from '../../components/Markdown';
import CodeTabs from '../../components/CodeTabs';
import CodeTab from '../../components/CodeTab';
import QuickstartBranch from '../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        Concept
      </h1>
      <p>
        Reducers are responsible for storing and updating application state. They receive actions dispatched from the action
        creators, and based on the ActionType, update the piece of Store state they're responsible for.
      </p>

      <p>
        You can learn more about reducers <a href="http://redux.js.org/docs/basics/Reducers.html">in the official Redux documentation</a>.
      </p>

      <p>
        When you create a model in Lore, the framework automatically creates a set of reducers for storing resources
        individually (the <code>byId</code> and <code>byCid</code> reducers) as well as the <code>find</code> reducer
        which caches server responses based on query and pagination information.
      </p>

      <p>
        The blueprints have an implicit file structure that looks like this:
      </p>

      <Markdown text={`
      |-src
        |-models
          |-post.js
        |-reducers
          |-post
            |-byCid.js
            |-byId.js
            |-find.js
      `}/>

      <p>
        All blueprints reducers can be overridden by creating a file that matches the location of the blueprint. For
        example, if you wanted to override the <code>find</code> blueprint for a <code>post</code> model, you would
        create your own reducer at <code>reducers/post/find.js</code>.
      </p>

      <Markdown text={`
      |-src
        |-models
          |-post.js
        |-reducers
          |-post
            |-find.js
      `}/>

      <h3>
        Extracting the Existing Reducers
      </h3>
      <p>
        If you're ever curious what the blueprints for Lore look like, or need a quick way to modify a specific reducer's
        behavior, Lore provides a CLI command that will provide a model-specific copy of the blueprints for you to
        debug and/or modify.
      </p>

      <p>
        To extract the reducers for the <code>post</code> model in our example above, run this command:
      </p>

      <Markdown text={`
      lore extract reducer post
      `}/>

      <p>
        You can learn more about the <code>extract</code> command in the <Link to="/cli/">CLI documentation</Link>.
      </p>
    </Template>
  )
};
