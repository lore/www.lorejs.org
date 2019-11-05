import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Documentation';
import Markdown from '../../../components/Markdown';
import Video from '../../../components/Video';
import Code from '../../../components/Code';
import image from '../../../assets/images/quickstart/setup/final.png';

export default (props) => {
  return (
    <Template
      title="Usage"
      subtitle="Generate a set of reducers."
    >
      <h2>
        1. Generate a set of models
      </h2>
      <p>
        Create a folder in your project called <code>src/models</code>. This folder will contain a
        set of files referred to as "models", where the name of each file name will correspond to a
        set of reducers.
      </p>
      <p>
        The reducer blueprints are generated from conventions based on the name of the resource
        they should be storing. This happens in order to reduce the need to write boilerplate code.
      </p>
      <p>
        For each model you create, you can use the following code as a template. The file is empty
        because the contents don't matter. Only the name of the file is important.
      </p>

      <h3>src/models/template.js</h3>
      <Code text={`
      export default {
      
      };
      `}/>

      <h2>
        2. Invoke getReducers()
      </h2>
      <p>
        Locate the entry point of your project and import the <code>getReducers</code> function
        from <code>@lore/reducers</code>.
      </p>

      <h3>index.js</h3>
      <Code text={`
      const config = {
        reducers: require('./config/reducers').default
      };
      
      const modules = {
        models: {
          tweet: require('./src/models/tweet').default,
          user: require('./src/models/user').default
        },
        reducers: {
          custom: require('./src/reducers/custom').default,
          user: {
            find: require('./src/reducers/user/find').default,
          }
        },
      };
      
      
      /*
       * Reducers
       *
       * A set of functions that specify how the application's state should
       * change in response to actions sent to the store.
       *
       * https://redux.js.org/basics/reducers
       */
      
      import { getReducers } from './.lore/reducers';
      
      const reducers = getReducers(config, {
        models: modules.models,
        reducers: modules.reducers
      });
      `}/>

      <p>
        With this code we can now invoke specific reducers from the reducers object like this:
      </p>

      <Code text={`
      const state = {
        tweet: {},
        user: {}
      }
      
      // add tweet
      state.tweet = reducers.tweet(state.tweet, { 
        type: 'ADD_TWEET', 
        payload: { 
          id: 1, 
          text: 'first tweet',
          userId: 1
        }
      })
      
      // add multiple tweets representing a user-specific query
      state.tweet = reducers.tweet(state.tweet, { 
        type: 'FETCH_TWEETS', 
        query: {
          where: {
            userId: 2
          }
        },
        payload: {
          data: [
            { 
              id: 3, 
              text: 'server: third tweet',
              userId: 2 
            },
            { 
              id: 4, 
              text: 'server: fourth tweet',
              userId: 2 
            }
          ]
        }
      })
      `}/>

    </Template>
  )
};
