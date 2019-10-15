import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Recipes';
import Markdown from '../../components/Markdown';
import CodeTabs from '../../components/CodeTabs';
import CodeTab from '../../components/CodeTab';
import QuickstartBranch from '../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        Disabling Optimistic Behavior
      </h1>
      <p>
        TODO: fill this out. Answer is to override the action template or completely replace the action.
      </p>

      <p>
        As the CLI evolves, it will include the ability to write your own plugins for it, so you can extend it to suit the
        specific needs of your project. To learn more about the CLI and adding your own generators check out the CLI Docs.
      </p>

      <h3>
        Code
      </h3>
      <p>
        How it's done.
      </p>

      <Markdown text={`
      // actions/color/create.js

      return {
        blueprint: 'create',

        model: lore.models.color,

        // comment out or remove this 'optimistic' section to disable
        // optimistic behavior
        optimistic: {
          actionType: ActionTypes.ADD_COLOR,
          payloadState: PayloadStates.CREATING
        },

        onSuccess: {
          actionType: ActionTypes.UPDATE_COLOR,
          payloadState: PayloadStates.RESOLVED
        },

        onError: {
          actionType: ActionTypes.REMOVE_COLOR,
          payloadState: PayloadStates.ERROR_CREATING,
          beforeDispatch: function(response, args) {
            // no op
          }
        }
      };
      `}/>
    </Template>
  )
};
