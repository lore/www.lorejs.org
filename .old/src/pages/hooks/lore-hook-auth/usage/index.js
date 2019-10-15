import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/LoreHookAuth';
import Markdown from '../../../../components/Markdown';
import CodeTabs from '../../../../components/CodeTabs';
import CodeTab from '../../../../components/CodeTab';
import QuickstartBranch from '../../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        Example Usage
      </h1>
      <p>
        Let's say you're building an application that consumes an API that returns information about the current user from
        the endpoint <code>/user</code>.
      </p>

      <p>
        In order to retrieve the current user, we need three things in place:
      </p>
      <ul>
        <li>
          A model representing that endpoint,
        </li>
        <li>
          An action we can invoke the fetch the user
        </li>
        <li>
          A reducer we can use to store the user
        </li>
      </ul>
      <p>
        Unlike the build-in blueprints, this flow is special in that the action
        will <strong>always</strong> communicate with the same endpoint (<code>/user</code>) and the reducer will
        only store a <em>single</em> object, as opposed to a <em>set</em> of objects like the
        built-in <code>find</code>, <code>byId</code> and <code>byCid</code> reducers.
      </p>

      <p>
        Without this hook, if you wanted to retrieve the current user, you would need to generate the following files
        yourself:
      </p>

      <Markdown text={`
      src
      |-actions
        |-currentUser
          |-get.js
      |-models
        |-currentUser.js
      |-reducers
        |-currentUser.js
      `}/>
      <p>
        The <code>currentUser</code> model would describe the API endpoint, <code>currentUser.get</code> action
        would retrieve the user, and the <code>currentUser</code> reducer would store the user.
      </p>
      <p>
        This hook prevents you from needing to create the custom <code>action</code> and <code>reducer</code>.
        Instead, you only need to create the model and specify what endpoint the action should fetch the current user
        from.
      </p>
      <p>
        Here is an example <code>currentUser</code> model, that sets the endpoint to
        be <code>/user</code> (matching our API):
      </p>

      <Markdown text={`
      module.exports = {
        endpoint: 'user'
      }
      `}/>

      <p>
        Once this model exists (and assuming the <code>modelName</code> field in the config matches the name of this
        model) you can fetch the current user through a <code>lore.connect</code> call like this:
      </p>

      <Markdown text={`
      lore.connect(function(getState, props) {
        return {
          user: getState('currentUser')
        };
      })
      `}/>
    </Template>
  )
};
