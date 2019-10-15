import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/LoreHookPolling';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        lore-hook-polling
      </h1>
      <p>
        Source code for this hook can be found on GitHub <a href="https://github.com/lore/lore/tree/master/packages/lore-hook-polling">at this link</a>.
      </p>

      <h2>
        Purpose
      </h2>
      <p>
        A hook that implements polling behavior, providing the ability to invoke an action repeatedly at a given interval.
      </p>

      <h2>
        Config
      </h2>
      <p>
        There are two config options exposed for this hook
      </p>

      <Markdown text={`
      module.exports = {

         /**
          * The frequency at which the action should be invoked (in milliseconds)
          */

         // interval: 5000,

         /**
          * Determines whether the first request should be delayed when polling starts.
          * If 'true', poll.start() will wait for the specified interval before invoking
          * the action. It 'false', the action will be invoked immediately.
          */

         // delayOnStart: true

      };
      `}/>

      <h2>
        Model Overrides
      </h2>
      <p>
        Additionally, these config values can be specified on per-model basis by adding a <code>polling</code> section to the model's config:
      </p>

      <Markdown text={`
      // src/models/tweet.js
      module.exports = {
        polling: {
          interval: 20000,
          delayOnStart: false
        }
      };
      `}/>

      <h2>
        Example Usage
      </h2>
      <p>
        First register the hook so that it gets loaded:
      </p>

      <Markdown text={`
      import polling from 'lore-hook-polling';
      ...
      lore.summon({
        hooks: {
          // ...
          polling: polling,
          // ...
        }
      });
      `}/>

      <p>
        This hook duplicates the <code>lore.actions</code> object but wraps each action with a function that allows it to be polled (it
        will call that action repeatedly at a specified interval).
      </p>

      <p>
        To illustrate usage, let's say you have a <code>Feed</code> component that fetches a list of tweets from the server. That
        component might look like this:
      </p>

      <Markdown text={`
      export default connect(function(getState, props) {
        return {
          tweets: getState('tweet.find')
        };
      })(
      createReactClass({
        propTypes: {
          tweets: React.PropTypes.object.isRequired
        },

        render: function() {
          // .. render tweets
        }
      })
      `}/>

      <p>
        Normally this component will fetch the list of tweets from the server once, and display what it gets back. This hook
        allows you to repeatedly fetch the list of tweets on a given interval. To use it, add a <code>componentDidMount</code> method to
        <code>Feed</code> that looks like this:
      </p>

      <Markdown text={`
      ...
        componentDidMount: function() {
          this.poll = lore.polling.tweet.find();
          this.poll.start();
        },
      ...
      `}/>

      <p>
        The <code>lore.polling.tweet.find</code> call mirrors the action structure. Invoking one of the "actions"
        returns a polling object. Calling <code>poll.start()</code> will start the process of invoking that action
        on specified interval (defaults to 5 seconds).
      </p>

      <p>
        If you want to stop polling, you can call <code>poll.stop()</code>. For example, let's say the data you're fetching is only
        relevant (and visible) to this component. In that case, there's no point to continually polling for changes when
        the user isn't viewing this page. To address that use case, simply add a <code>componentWillUnmount</code> method that stops
        polling.
      </p>

      <Markdown text={`
      ...
        componentWillUnmount: function() {
          this.poll.stop();
        },
      ...
      `}/>

      <p>
        If your component needs data with query or pagination information, you can leverage the <code>query</code> attribute of the
        collection data to duplicate the action:
      </p>

      <Markdown text={`
      export default connect(function(getState, props) {
        return {
          tweets: getState('tweet.find')
        };
      })(
      createReactClass({
        propTypes: {
          tweets: React.PropTypes.object.isRequired
        },

        componentDidMount: function() {
          var tweets = this.props.tweets;
          var query = tweets.query;
          this.poll = lore.polling.tweet.find(query.where, query.pagination);
          this.poll.start();
        },

        componentWillUnmount: function() {
          this.poll.stop();
        },

        render: function() {
          // .. render tweets
        }
      })
      `}/>

      <h2>
        Note
      </h2>
      <p>
        The hook generates a unique key internally for each action call that's a combination of the action name (e.g.
        <code>tweet.find</code>) and the arguments passed to that action (for example the <code>where</code> and <code>pagination</code> objects). It uses
        this key to make sure only one polling object exists per unique action call.
      </p>

      <p>
        This means even if you call that same action repeatedly, like this:
      </p>

      <Markdown text={`
      lore.polling.tweet.find().start()
      lore.polling.tweet.find().start()
      lore.polling.tweet.find().start()
      `}/>

      <p>
        Only one polling action will be created. Subsequent calls return the same polling object, and subsequent calls to
        <code>start()</code> are ignored because the polling object is already polling for data.
      </p>
    </Template>
  )
};
