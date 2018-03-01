import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Connect';
import Markdown from '../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        singleton
      </h1>
      <p>
        This blueprint is useful when you know there will only ever be a single resource returned by an API
        endpoint. While rare, this exists in endpoints like <code>/user</code> or <code>/profile</code> that
        return an object that describes the current user.
      </p>

      <h3>
        Usage
      </h3>
      <p>
        Example usage is below:
      </p>
      <Markdown text={`
      import { connect } from 'lore-hook-connect';

      connect((getState, props) => {
        return {
          tweet: getState('currentUser')
        };
      })
      `}/>
      <p>
        When invoked, this blueprint will look in the <code>currentUser</code> reducer, and return whatever it
        finds. If nothing exists, it will invoke the <code>currentUser</code> action.
      </p>
      <p>
        This blueprint does not accept any paramters, because it assumes there will only ever be a single resource
        provided. So it's "give me THE resource", and not "give me a resource WHERE some condition is true".
      </p>

      <h3>
        Blueprint
      </h3>
      <Markdown text={`
      export default {

        getPayload: function(reducerState, params) {
          return reducerState;
        },

        callAction: function(action, params) {
          return action().payload;
        }

      };
      `}/>
    </Template>
  );
};
