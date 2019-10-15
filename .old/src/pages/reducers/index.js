import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Reducers';
import Markdown from '../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        Introduction
      </h1>
      <blockquote>
        This functionality is provided by <code>lore-hook-reducers</code>.
      </blockquote>
      <p>
        Reducers are the data-caching tier for Redux. Any resources you fetch from an API endpoint will be
        stored here.
      </p>
      <p>
        Before reading this documentation, it's recommended that you already understand what reducers are,
        as this section will document the <code>reducers</code> that are built into Lore, but it will <em>not
        explain what reducers are in general</em>.
      </p>
      <p>
        To learn more them at a foundational level, see the <a href="https://redux.js.org/basics/reducers">Reducer
        documentation</a> on the Redux website.
      </p>

      <h2>
        Example Usage
      </h2>
      <p>
        Given a model called <code>tweet</code>, this hook will create the following reducers:
      </p>
      <ul>
        <li>lore.reducers.tweet.find</li>
        <li>lore.reducers.tweet.byId</li>
        <li>lore.reducers.tweet.byCid</li>
      </ul>
      <blockquote>
        The reducers are not meant to be accessed or used directly. Redux handles that.
      </blockquote>

      <h3>
        byId
      </h3>
      <p>
        This reducer has a standard Redux format:
      </p>
      <Markdown text={`
      function byId(state, action) {...})
      `}/>
      <p>
        It's purpose is to listen for the standard CRUD ActionTypes (<code>ADD_TWEET</code>, <code>UPDATE_TWEET</code>, <code>REMOVE_TWEET</code>, and
        <code>FETCH_TWEETS</code>) and store the results in a dictionary where the key is the model id.  If a model
        doesn't have an id (which happens during optimistic creates) the model is not stored in the dictionary.
        Keeping track of the models that only exist on the client side is the job of the <code>byCid</code> reducer.
      </p>
      <p>
        Here is an example of the dictionary this reducer returns:
      </p>
      <Markdown text={`
      {
        '1': {
          id: '1',
          cid: 'c1',
          data: {..some data..},
          state: "RESOLVED",
          error: {}
        },
        '2': {
          ...
        }
      }
      `}/>

      <h3>
        byCid
      </h3>
      <p>
        This reducer has a standard Redux format:
      </p>
      <Markdown text={`
      // standard reducer arguments
      function byCid(state, action) {...})
      `}/>
      <p>
        It's purpose is to listen for the standard CRUD ActionTypes (<code>ADD_TWEET</code>, <code>UPDATE_TWEET</code>, <code>REMOVE_TWEET</code>, and
        <code>FETCH_TWEETS</code>) and store the results in a dictionary where the key is the model cid.  There
        should never be a situation where a model does not have a cid.
      </p>
      <p>
        Here is an example of the dictionary this reducer returns (note the <code>c2</code> resource that has no id
        and is currently being created):
      </p>
      <Markdown text={`
      {
        'c1': {
          id: '1',
          cid: 'c1',
          data: {..some data..},
          state: "RESOLVED",
          error: {}
        },
        'c2': {
          id: null,
          cid: 'c2',
          data: {..some data..},
          state: "CREATING",
          error: {}
        }
      }
      `}/>

      <h3>
        find
      </h3>
      <p>
        This reducer has a modified Redux format as it requires an additional third 'options' arguments that
        includes the results from the <code>byId</code> and <code>byCid</code> reducers stored in
        a <code>nextState</code> object.
      </p>
      <Markdown text={`
      var _byId = byId(state.byId, action);
      var _byCid = byCid(state.byCid, action);
      var _find = find(state.find, action, {
        nextState: {
          byId: _byId,
          byCid: _byCid
        }
      });
      `}/>
      <p>
        It's purpose is to store collections of resources group by a common query, and listens for the ActionType
        <code>FETCH_TWEETS</code>. If new data is created that matches the query criteria for one of the lists, it
        will also make sure that resource is included inside that list.
      </p>
      <p>
        Here is an example of the dictionary this reducer returns:
      </p>
      <Markdown text={`
      {
        '{}': {
          state: "RESOLVED",
          data: [
            {
              id: '1',
              cid: 'c1',
              data: {
                color: 'red'
              },
              state: "RESOLVED",
              error: {}
            },
            {
              id: '2',
              cid: 'c2',
              data: {
                color: 'blue'
              },
              state: "RESOLVED",
              error: {}
            }
          ],
          error: {}
        },
        '{"color":"blue"}': {
          state: "RESOLVED",
          data: [
            {
              id: '2',
              cid: 'c2',
              data: {
                color: 'blue'
              },
              state: "RESOLVED",
              error: {}
            }
          ],
          error: {}
        }
      }
      `}/>
      <p>
        The keys for the dictionary are the <code>JSON.stringify()</code> version of the query. For example, a
        called to <code>lore.connect</code> that looks like this:
      </p>
      <Markdown text={`
      lore.connect(function(getState, props) {
        return {
          tweets: getState('tweet.find', {
            where: {
              color: 'blue'
            }
          })
        }
      })
      `}/>
      <p>
        Specifies the query <code>{"{color: 'blue'}"}</code>. It's that query that gets passed to <code>JSON.stringify()</code> and
        stored as the dictionary key.  When new data shows in either the <code>byId</code> or <code>byCid</code> dictionaries
        that are new (don't currently exist in <code>tweet.find</code>) they are inspected to see whether the any of
        the stored queries match the data, and if so that data is inserted into the collection in the dictionary.
      </p>
    </Template>
  );
};
