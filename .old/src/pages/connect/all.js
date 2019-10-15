import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Connect';
import Markdown from '../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        all
      </h1>
      <p>
        This blueprint returns a collection of all models in the <code>byCid</code> reducer, and optionally allows
        you to filter and sort them.
      </p>
      <p>
        The <code>all</code> blueprint is intended to provide a way to filter and sort reducer data when the intent
        is to NOT make a server call. For example, in the Quickstart we fetch a page of tweets, and sometimes
        create new tweets. In this scenario, we know the new tweets are in the store, and we want to display them
        on top of the paginated tweets.
      </p>
      <p>
        Without this blueprint, accomplishing that is not straight forward, as it requires you to access the Redux
        Store directly, get all the data from the <code>byCid</code> reducer, and then filtering and sorting it to
        get what you want.
      </p>
      <p>
        With this blueprint, you can skip that process, and provide the filter and sortBy criteria directly to
        the <code>getState</code> call like this:
      </p>

      <h3>
        Usage
      </h3>
      <Markdown text={`
      import { connect } from 'lore-hook-connect';
      import moment from 'moment';
      const timestamp = moment().toISOString();

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
        The <code>getState</code> call above will return all tweets created <em>after</em> the timestamp or that
        don't have an <code>id</code> (implying that were optimistically created, and should be displayed).
        The <code>sortBy</code> function then orders the tweets by their <code>createdAt</code> date.
      </p>

      <h3>
        Blueprint
      </h3>

      <Markdown text={`
      import _ from 'lodash';

      export default {

        defaults: {
          where: function(model) {
            return true;
          },
          sortBy: function(model) {
            return true;
          }
        },

        verifyParams: function(params) {
          if (!_.isFunction(params.where)) {
            throw new Error("The 'where' field must be a function");
          }

          if (!_.isFunction(params.sortBy)) {
            throw new Error("The 'sortBy' field must be a function");
          }
        },

        getAction: function(actions) {
          // no op
        },

        getPayload: function(reducerState, params) {
          const transformed = _.transform(reducerState, function(result, model) {
            result.push(model);
          }, []);
          const filtered = _.filter(transformed, params.where);
          const sorted = _.sortBy(filtered, params.sortBy);

          return {
            state: 'RESOLVED',
            data: sorted
          };
        }

      };
      `}/>
    </Template>
  );
};
