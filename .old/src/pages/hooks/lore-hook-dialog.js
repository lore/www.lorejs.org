import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Hooks';
import Markdown from '../../components/Markdown';
import CodeTabs from '../../components/CodeTabs';
import CodeTab from '../../components/CodeTab';
import QuickstartBranch from '../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        lore-hook-dialog
      </h1>
      <p>
        Source code for this hook can be found on GitHub <a href="https://github.com/lore/lore/tree/master/packages/lore-hook-dialog">at this link</a>.
      </p>

      <h2>
        Purpose
      </h2>

      <p>
        Provide a helper method that knows how to attach dialogs to the DOM. By default it's configured to use the <code>dialog</code>
        DOM element in <code>index.html</code>, but can be configured to use something else.
      </p>

      <Markdown type="html" text={`
      <div id="dialog"></div>
      `}/>

      <p>
        The helper method is appended to <code>lore.dialog</code>.
      </p>

      <h2>
        Config
      </h2>

      <Markdown text={`
      module.exports = {

        /**
         * DOM Element ID that the dialogs should be mounted to. Should be located
         * outside the DOM element the application is mounted to.
         */

        // domElementId: 'dialog'

      };
      `}/>

      <h2>
        Example Usage
      </h2>

      <p>
        Given a dialog called <code>UpdateTweetDialog</code>, this hook is used like this:
      </p>

      <Markdown text={`
      var tweet = this.props.tweet;

      function updateTweet(params) {
        lore.actions.tweet.update(tweet, params);
      }

      lore.dialog.show(function() {
        return (
          <UpdateTweetDialog
            tweet={tweet}
            onSubmit={updateTweet} />
        );
      });
      `}/>

      <p>
        The <code>lore.dialog.show</code> method makes sure the component gets instantiated and mounted to the correct
        DOM element. It also makes sure any dialog previously mounted to that DOM element is removed beforehand.
      </p>
    </Template>
  )
};
