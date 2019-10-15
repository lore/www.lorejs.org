import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Actions';
import Markdown from '../../components/Markdown';
import CodeTabs from '../../components/CodeTabs';
import CodeTab from '../../components/CodeTab';
import QuickstartBranch from '../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        Overriding Actions
      </h1>
      <p>
        Actions are responsible for server communicating and emitting the proper events to reducers to enable them to
        accurately keep track of the applications state.
      </p>
      <p>
        When you create a model in Lore, the framework automatically creates a set of actions for finding, creating,
        updating, deleting, and getting that resource.
      </p>
      <p>
        The blueprints have an implicit file structure that looks like this:
      </p>

      <Markdown type="sh" text={`
      |-src
        |-actions
          |-post
            |-create.js
            |-destroy.js
            |-find.js
            |-get.js
            |-update.js
        |-models
          |-post.js
      `}/>

      <p>
        All blueprints actions can be overridden by creating a file that matches the location of the blueprint. For
        example, if you wanted to override the <code>create</code> blueprint for a <code>post</code> model, you would
        create your own action at <code>actions/post/create.js</code>.
      </p>

      <Markdown text={`
      |-src
        |-actions
          |-post
            |-create.js
        |-models
          |-post.js
      `}/>

      <p>
        There are two ways to override an action.
      </p>

      <h3>
        Override Option #1: Template
      </h3>

      <p>
        If your file contains an object, Lore will assume you just want to tailor (or tap into) the existing blueprint
        behavior, but you don't want to change the underlying implementation. This is useful if (for some reason) you
        wanted to turn off the default optimistic update behavior.
      </p>

      <p>
        This approach is also useful if you want to listen and log errors, or display them to the user using {' '}
        <a href="https://www.google.com/design/spec/components/snackbars-toasts.html">a snackbar or toast</a>. This
        can be achieved by defining a <code>beforeDispatch</code> function, example below.
      </p>

      <p>
        At the moment, the <code>beforeDispatch</code> property only exists on the error path.
      </p>

      <Markdown text={`
      module.exports = {

        optimistic: {
          actionType: ActionTypes.ADD_POST,
          payloadState: PayloadStates.CREATING
        },

        onSuccess: {
          actionType: ActionTypes.UPDATE_POST,
          payloadState: PayloadStates.RESOLVED
        },

        onError: {
          actionType: ActionTypes.REMOVE_POST,
          payloadState: PayloadStates.ERROR_CREATING,
          beforeDispatch: function(response, args) {
            console.log({
              message: "Post could not be created",
              response: response
            });
          }
        }
      };
      `}/>

      <h3>
        Override Option #2: Full Replacement
      </h3>

      <p>
        If your file contains a function, Lore will assume you want to replace the blueprint with your own implementation.
        While the need to do this should be rare, this would be necessary if (for example) you needed to make multiple
        API calls to complete an operation, or if the API was forcing business logic into the client (bad) and if a request
        failed you needed to make an API call to rollback changes or something. For well behaved/designed and
        convention-abiding APIs, the need to overwrite the default blueprint actions completely should be fairly uncommon.
      </p>

      <Markdown text={`
      module.exports = function create( params ) {
        return function( dispatch ) {
          var post = new Post(params);

          post.save().then(function() {
            dispatch({
              type: ActionTypes.UPDATE_POST,
              payload: payload(model, PayloadStates.RESOLVED)
            });
          }).catch(function( response ) {
            var error = response.responseJSON;
            dispatch({
              type: ActionTypes.UPDATE_POST,
              payload: payload(model, PayloadStates.ERROR_CREATING, error)
            });
          });

          return dispatch({
            type: ActionTypes.ADD_POST,
            payload: payload(model, PayloadStates.CREATING)
          });
        };
      };
      `}/>

      <h3>
        Override Option #3: Redefine the Blueprints
      </h3>

      <p>
        While not an option at the moment, Lore will be providing the ability to define your own blueprints, in case you
        want (or need) to overwrite the default behavior across all models.
      </p>

      <h3>
        Extracting the Existing Actions
      </h3>
      <p>
        If you're ever curious what the blueprints for Lore look like, or need a quick way to modify a specific action's
        behavior, Lore provides a CLI command that will provide a model-specific copy of the blueprints for you to
        debug and/or modify.
      </p>

      <p>
        To extract the actions for the <code>post</code> model in our example above, run this command:
      </p>

      <Markdown type="sh" text={`
      lore extract action post
      `}/>

      <p>
        You can learn more about the <code>extract</code> command in the <Link to="/cli/">CLI documentation</Link>.
      </p>
    </Template>
  )
};
