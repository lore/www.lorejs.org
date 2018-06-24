import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/LoreHookConnect';
import Markdown from '../../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        reducerActionMap
      </h1>
      <p>
        This map determines which reducer is inspected for data, and which action is invoked if that data doesn't
        exist. You can also use this map to override the default reducer-action mapping or associate reducers and
        actions that weren't created by the framework (such as a custom action or reducer you created).
      </p>
      <p>
        There are seven <code>getState</code> blueprints built into the framework, with mappings provided below, based
        on the actions and reducers automatically created by the conventions of the framework.
      </p>
      <p>
        The <code>*</code> in the mappings below is special syntax that means <em>"put the name of the model here"</em>.
        It allows you to say <em>"this mapping applies to all models"</em>. For example, <code>*.find</code> will
        apply to <code>tweet.find</code>, <code>user.find</code>, etc.
      </p>
      <p>
        You can reuse built-in blueprints by setting the value of blueprint to the name of the blueprint you
        want to reuse.
      </p>

      <Markdown text={`
      reducerActionMap: {
        '*.all': {
          action: null,
          reducer: '*.byCid',
          blueprint: 'all'
        },
        '*.byCid': {
          action: null,
          reducer: '*.byCid',
          blueprint: 'byCid'
        },
        '*.byId': {
          action: '*.get',
          reducer: '*.byId',
          blueprint: 'byId'
        },
        '*.find': {
          action: '*.find',
          reducer: '*.find',
          blueprint: 'find'
        },
        '*.findAll': {
          action: '*.find',
          reducer: '*.find',
          blueprint: 'findAll'
        },
        '*.first': {
          action: '*.find',
          reducer: '*.find',
          blueprint: 'first'
        }
      }
      `}/>

      <p>
        If the built-in blueprints don't work for you, you can use a custom blueprint by providing an object as
        the value of the blueprint. The code below mimics the built-in singleton blueprint, which is used by
        the <code>lore-hook-auth</code> hook to retrieve the <code>currentUser</code>.
      </p>
      <Markdown text={`
      reducerActionMap: {
        'currentUser': {
          action: 'currentUser',
          reducer: 'currentUser',
          blueprint: {
            getPayload: function(reducerState, params) {
              return reducerState;
            },
            callAction: function(action, params) {
              return action().payload;
            }
          }
        }
      }
      `}/>
    </Template>
  )
};
