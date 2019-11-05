import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Connect';
import Markdown from '../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        byCid
      </h1>
      <p>
        This blueprint allows you to extract a model from the store by it's <code>cid</code> attribute.
      </p>

      <h3>
        Usage
      </h3>
      <p>
        It's not clear how useful this blueprint is in practice, but occasionally you do need to find data by the
        cid value, such as when you're waiting or looking for confirmation of when data is confirmed to be created
        by the server.
      </p>
      <p>
        If it makes sense to use a <code>connect</code> call to accomplish that, now you can.
      </p>
      <Markdown text={`
      import { connect } from 'lore-hook-connect';
      import moment from 'moment';

      connect((getState, props) => {
        return {
          tweets: getState('tweet.all', {
            where: function(tweet) {
              return !tweet.id || moment(tweet.data.createdAt).diff(timestamp) > 0
            },
            sortBy: function(tweet) {
              return -moment(tweet.data.createdAt).unix();
            }
          })
        }
      })
      `}/>
      <p>
        The above <code>getState</code> call will look through the <code>tweet.byCid</code> reducer and return the
        tweet with the <code>cid</code> of <code>c2</code>.
      </p>
      <p>
        If no tweet exists with the matching <code>cid</code>, the call will return <code>undefined</code>.
      </p>

      <h3>
        Blueprint
      </h3>

      <Markdown text={`
      export default {

        defaults: {
          cid: null
        },

        verifyParams: function(params) {
          if (!params.cid) {
            throw new InvalidGetStateCall(this.reducerKey);
          }
        },

        getAction: function(actions) {
          // no op
        },

        getPayload: function(reducerState, params) {
          const key = params.cid;
          return reducerState[key];
        }

      };
      `}/>
    </Template>
  );
};
