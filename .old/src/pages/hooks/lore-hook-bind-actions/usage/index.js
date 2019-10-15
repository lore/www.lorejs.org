import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/LoreHookBindActions';
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
        In Lore, invoking action creators is as simple as something like this:
      </p>

      <Markdown text={`
      lore.actions.tweet.create({
        text: 'Message to tweet'
      });
      `}/>

      <p>
        This call invokes the action creator, makes an AJAX calls, and dispatches the result to the Redux Store. But if you
        look at the signature for the <code>create</code> action, you may wonder where the <code>dispatch</code> argument comes from:
      </p>

      <Markdown text={`
      module.exports = function create(params) {
        return function(dispatch) {
          // ...code for the action creator...
        };
      };
      `}/>

      <p>
        If you read the <a href="http://redux.js.org/docs/api/bindActionCreators.html">Redux docs for bindActionCreators</a> you'll notice
        that action creators are not normally bound to the Redux store. They're "pure" in the sense that they're just a
        function with some arguments. The <code>bindActionCreators</code> method is what actually takes the <code>dispatch</code> method
        from the Redux store and binds it to the action creator, so it can dispatch messages to the Store.
      </p>

      <p>
        This hook iterates through all actions and binds them to the Redux store. This means instead of having to write
        code like this all over your application:
      </p>

      <Markdown text={`
      import { bindActionCreators } from 'redux'

      let createAction = bindActionCreators(
        lore.actions.tweet.create,
        lore.store.dispatch
      );

      createAction({
        text: 'Message to tweet'
      })
      `}/>

      <p>
        You can simply write this:
      </p>

      <Markdown text={`
      lore.actions.tweet.create({
        text: 'Message to tweet'
      });
      `}/>
    </Template>
  )
};
