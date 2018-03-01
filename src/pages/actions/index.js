import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Actions';
import Markdown from '../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        Introduction
      </h1>
      <blockquote>
        This functionality is provided by <code>lore-hook-actions</code>.
      </blockquote>
      <p>
        Actions are the data-fetching tier for Redux (or least that's what Lore uses them for). Any API communication
        that occurs will be done by an action, including creating, updating, deleting, and fetching data.
      </p>
      <p>
        Before reading this documentation, it's recommended that you already understand what actions are,
        as this section will document the <code>actions</code> that are built into Lore, but it will <em>not
        explain what actions are in general</em>.
      </p>
      <p>
        To learn more them at a foundational level, see the <a href="https://redux.js.org/basics/actions">Actions
        and Action Creators documentation</a> on the Redux website.
      </p>

      <h2>
        Action Blueprints
      </h2>
      <p>
        Lore automatically creates the set of default actions for every <code>model</code> you've defined, using
        the built in blueprints for <code>create</code>, <code>destroy</code>, <code>get</code>, <code>find</code>,
        and <code>update</code>.
      </p>
      <p>
        If you have defined custom actions within the <code>src/actions</code> directory, it will also merge those
        actions into the defaults, overwriting any default actions that have the same name.
      </p>

      <h2>
        Example Usage
      </h2>

      <p>
        Let's say you create a <code>tweet</code> model, similar to the Quickstart:
      </p>

      <Markdown text={`
      src
      |-models
        |-tweet.js
      `}/>

      <p>
        This hook will automatically create 5 actions associated with that model that cover common CRUD operations. The
        signatures for those actions look like this:
      </p>

      <Markdown text={`
      lore.actions.tweet.create
      lore.actions.tweet.destroy
      lore.actions.tweet.get
      lore.actions.tweet.find
      lore.actions.tweet.update
      `}/>

      <p>
        Example usage for each action is provided below:
      </p>

      <h3>
        create
      </h3>
      <p>
        This action is used to create a new tweet. The signature looks like <code>create(params)</code> and is invoked like this:
      </p>

      <Markdown text={`
      lore.actions.tweet.create({
        text: 'Some message to tweet'
      });
      `}/>

      <h3>
        destroy
      </h3>
      <p>
        This action is used to delete a new tweet. The signature looks like <code>destroy(model)</code> and is invoked like this:
      </p>

      <Markdown text={`
      const { tweet } = this.props;

      lore.actions.tweet.destroy(tweet);
      `}/>

      <h3>
        get
      </h3>
      <p>
        This action is used to fetch a specific tweet, and can optionally include query parameters to be sent in
        the request. The signature looks like <code>get(id, query)</code> and is invoked like this:
      </p>

      <Markdown text={`
      const tweetId = 1;
      lore.actions.tweet.get(tweetId);
      `}/>

      <p>
        The second <code>query</code> argument is helpful when you need to provide additional query parameters to
        the API server such as when asking it to nest resources:
      </p>

      <Markdown text={`
      const tweetId = 1;

      lore.actions.tweet.get(tweetId, {
        _embed: 'user'
      });
      `}/>

      <h3>
        find
      </h3>
      <p>
        This action is used to fetch a set of tweets. The signature looks like <code>find(query, pagination)</code> and
        is invoked like this:
      </p>

      <Markdown text={`
      var userId = this.props.params.userId;

      lore.actions.tweet.find({
        user: userId
      },{
        page: 1,
        pageSize: 20
      });
      `}/>

      <h3>
        update
      </h3>
      <p>
        This action is used to update a tweet. The signature looks like <code>update(model, params)</code> and is
        invoked like this:
      </p>

      <Markdown text={`
      var tweet = this.props.tweet;

      lore.actions.tweet.update(tweet, {
        text: 'Modified tweet message'
      });
      `}/>
    </Template>
  );
};
