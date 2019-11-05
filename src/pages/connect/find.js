import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Connect';
import Markdown from '../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        find
      </h1>
      <p>
        This blueprint is designed to fetch paginated data from an API endpoint. It also allows you merge additional
        data from the Redux store into the result set.
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
          tweets: getState('tweet.find', {
            where: {
              user: 1
            },
            pagination: {
              page: 1
            },
            include: {
              where: function(model, params) {
                return !model.id;
              }
            },
            exclude: {
              where: function(model) {
                return false;
              }
            },
            uniqBy: function(model) {
              return model.cid;
            },
            sortBy: function(model) {
              return model.data.createdAt;
            }
          })
        }
      })
      `}/>
      <p>
        There are six attributes you can provide in the <code>params</code> object.
      </p>

      <h4>
        where
      </h4>
      <p>
        An object of query parameters you want passed to the API endpoint, focused around how the data should
        be <em>filtered</em>.
      </p>

      <h4>
        pagination
      </h4>
      <p>
        An object of query parameters you want passed to the API endpoint, focused around how the data should
        be <em>presented</em> (meaning page size, which page, how it should be ordered, etc).
      </p>

      <h4>
        include.where
      </h4>
      <p>
        A function that allows you to merge additional data from the Redux store into the data. This is useful
        if you want to display a page of data (like tweets), and also show any models (tweets) the user created
        at the top of the list.
      </p>

      <h4>
        exclude.where
      </h4>
      <p>
        A function that allows you to remove data from the result set. This is useful if you show the user
        a list of data, and they delete something in that list, and you want those items to no longer be displayed.
        In that case, exclude any models with a <code>state</code> of <code>PayloadStates.DELETED</code> and they'll
        automatically be removed from the UI.
      </p>
      <p>
        This exist because while they's often a desired behavior, it's not always the case. For example, you may
        want to continue showing <code>DELETED</code> models but grey them out to show the user they can no
        longer interact with them.
      </p>

      <h4>
        uniqBy
      </h4>
      <p>
        A function that allows you to reduce the result set to something more "unique". For example, you may
        want to retrieve some data, but only show models with a unique name.
      </p>
      {/*
      <blockquote>
        This also exists because during rare scenarios, involving creating custom actions, it's possible to end
        up in a situation where two models have the same <code>cid</code>.
      </blockquote>
      */}

      <h4>
        sortBy
      </h4>
      <p>
        A function that allows you to sort the data into a specific order. For example, you could sort by date
        created, or name, or cid.
      </p>

      <h3>
        Blueprint
      </h3>
      <Markdown text={`
      export default {

        defaults: {
          where: {},
          pagination: {},
          include: {
            where: function(model, params) {
              return false;
            }
          },
          exclude: {
            where: function(model) {
              return false;
            }
          },
          uniqBy: function(model) {
            return model.cid;
          },
          sortBy: function(model) {
            return true;
          }
        },

        getPayload: function(reducerState, params, reducer) {
          const jsonKey = toJsonKey(params);
          let state = reducerState[jsonKey];

          if (state) {
            let data = _.transform(reducer.byCid, function(result, model) {
              result.push(model);
            }, []);

            if (params.include.where) {
              data = _.filter(data, function(datum) {
                return params.include.where(datum, params);
              });
            }

            state = _.assign({}, state, {
              data: state.data.concat(data)
            });

            if (params.exclude.where) {
              state.data = _.filter(state.data, function(model) {
                return !params.exclude.where(model);
              });
            }

            if (params.uniqBy) {
              state.data = _.uniqBy(state.data, params.uniqBy);
            }

            if (params.sortBy) {
              state.data = _.sortBy(state.data, params.sortBy);
            }
          }

          return state;
        },

        callAction: function(action, params) {
          return action(params.where, params.pagination).payload;
        }

      };
      `}/>
    </Template>
  );
};
