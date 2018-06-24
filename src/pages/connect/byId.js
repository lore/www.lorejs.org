import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Connect';
import Markdown from '../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        byId
      </h1>
      <p>
        This blueprint allows you to extract a model from the store by it's <code>id</code> attribute. If
        the model doesn't exist, the <code>get</code> action will be invoked to retrieve it.
      </p>

      <h3>
        Usage
      </h3>
      <p>
        Basic usage is below:
      </p>
      <Markdown text={`
      import { connect } from 'lore-hook-connect';

      connect((getState, props) => {
        return {
          tweet: getState('tweet.byId', {
            id: 1,
            query: {
              _embed: 'user'
            }
          })
        }
      })
      `}/>
      <p>
        There are two attributes you can provide in the <code>params</code> object.
      </p>
      <p>
        The first attribute is <code>id</code>, which is required, and is the <code>id</code> (or primary key) of
        the resource you want to retrieve. It can be a <code>string</code> or a <code>number</code>.
      </p>
      <p>
        The second attribute is <code>query</code>, which is an object of query parameters you want sent
        to the API.
      </p>
      <p>
        The example about would become the API call <code>/tweets/1?_embed=user</code>, which, if you're using
        <code>json-server</code>, would nest the user resource inside the tweet.
      </p>

      <h3>
        Blueprint
      </h3>

      <Markdown text={`
      export default {

        defaults: {
          id: null
        },

        verifyParams: function(params) {
          if (!params.id) {
            throw new InvalidGetStateCall(this.reducerKey);
          }
        },

        getPayload: function(reducerState, params) {
          const key = params.id;
          return reducerState[key];
        },

        callAction: function(action, params) {
          const id = params.id;
          const query = params.query;
          return action(id, query).payload;
        }

      };
      `}/>
    </Template>
  );
};
