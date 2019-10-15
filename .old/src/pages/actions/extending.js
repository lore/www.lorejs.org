import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Actions';
import Markdown from '../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        Extending and Overriding Actions
      </h1>
      <p>
        Sometimes you may need to add new actions, or overwrite the blueprints for a specific model. You can do that by
        creating a custom action inside the <code>src/actions</code> directory. For example, if you wanted to override the <code>create</code>
        action for the <code>tweet</code> model, you would create a custom action for <code>tweet/create</code> like this:
      </p>

      <Markdown text={`
      src
      |-actions
        |-tweet
          |-create.js
      `}/>

      <p>
        When this hook executes, the blueprints for each model are created first, and then the user-defined actions are loaded
        and merged. This means user-defined actions will always take priority over any actions created by the Lore.
      </p>

      <p>
        The easiest way to create a new action is often to <Link to="/cli/extract/action/">extract one of the existing actions</Link> and
        then modify the code.
      </p>

      <h2>
        Custom Actions
      </h2>

      <p>
        Custom actions can take two forms; a config object or a function.
      </p>

      <h4>
        Function
      </h4>

      <p>
        The function form is the "norm", and is what is generated when you execute commands like
        <code>lore extract action tweet/create</code>. A custom action in that form might look like this:
      </p>

      <Markdown text={`
      // file: src/actions/tweet/create.js

      module.exports = function create(params) {
        return function(dispatch) {
          const model = new lore.models.tweet(params);

          model.save().done(function() {
            dispatch({
              type: ActionTypes.UPDATE_TWEET,
              payload: payload(model, PayloadStates.RESOLVED)
            });
          }).fail(function(response) {
            const error = response.responseJSON;
            dispatch({
              type: ActionTypes.UPDATE_TWEET,
              payload: payload(model, PayloadStates.ERROR_CREATING, error)
            });
          });

          return dispatch({
            type: ActionTypes.ADD_TWEET,
            payload: payload(model, PayloadStates.CREATING)
          });
        };
      };
      `}/>

      <h4>
        Config Object
      </h4>

      <p>
        In practice, the config object probably isn't that useful, but it does allow you to tailor blueprint behavior for
        a specific model. For example, when you invoke <code>lore.actions.tweet.create(params)</code> and the API call fails, an
        <code>UPDATE_TWEET</code>action is emitted to the Redux store to update the state of the <code>tweet</code> from <code>CREATING</code> to
        <code>ERROR_CREATING</code>.
      </p>

      <p>
        This flows means that data that failed to be created will still show up in the application. This can be useful if you
        want to the provide the user with the ability to edit the data and try again, but for some applications you might want
        any tweets that fail creation to be REMOVED from the Redux store, and disappear from the application.
      </p>

      <p>
        If you want to do that, the config approach could be a useful approach, and you could use to to change the action
        emitted on failure from <code>UPDATE_TWEET</code> to <code>REMOVE_TWEET</code> like this:
      </p>

      <Markdown text={`
      // file: src/actions/tweet/create.js

      module.exports = {
        blueprint: 'create',

        model: lore.models.tweet,

        optimistic: {
          actionType: ActionTypes.ADD_TWEET,
          payloadState: PayloadStates.CREATING
        },

        onSuccess: {
          actionType: ActionTypes.UPDATE_TWEET,
          payloadState: PayloadStates.RESOLVED
        },

        onError: {
          actionType: ActionTypes.REMOVE_TWEET,
          payloadState: PayloadStates.ERROR_CREATING,
          beforeDispatch: function(response, args) {
            lore.log.error('Oh no! The create called failed. Deleting tweet.')
          }
        }
      };
      `}/>
    </Template>
  );
};
