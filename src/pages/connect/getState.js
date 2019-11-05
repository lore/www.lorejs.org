import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Connect';
import Markdown from '../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        getState
      </h1>
      <p>
        This is a utlity function to make it easier to retrieve data from the Redux store, when you just want the
        data, and don't necessarily want to invoke an action.
      </p>
      <p>
        The basic usage looks like this:
      </p>

      <Markdown text={`
      import React from 'react';
      import createReactClass from 'create-react-class';
      import PropTypes from 'prop-types';
      import { getState } from 'lore-hook-connect';
      import Tweet from './Tweet';

      export default createReactClass({
        displayName: 'Tweets',

        render() {
          const tweets = getState('tweet.find');

          return (
            <ul>
              {tweets.data.map((tweet) => {
                return (
                  <Tweet
                    key={tweet.id}
                    tweet={tweet}
                  />
                );
              })}
            </ul>
          );
        }
      }))
      `}/>
      <p>
        Not this function <strong>is not recommended</strong> for regular use. It exists because there are times
        when it's useful, but usage of it <strong>should be rare</strong>.
      </p>

      <h2>
        Aside
      </h2>
      <p>
        Considering obtaining a copy of <code>getState</code> is the principle purpose of <code>connect</code>,
        it's possible to create a components without using <code>connect</code> directly by doing the following.
      </p>
      <Markdown text={`
      import React from 'react';
      import createReactClass from 'create-react-class';
      import PropTypes from 'prop-types';
      import { getState } from 'lore-hook-connect';
      import Tweet from './Tweet';

      export default createReactClass({
        displayName: 'Tweets',

        getInitialState() {
          return {
            tweets: getState('tweet.find')
          };
        },

        componentWillMount() {
          this.setState({
            tweets: getState('tweet.find')
          });
        },

        componentWillReceiveProps(nextProps) {
          this.setState({
            tweets: getState('tweet.find')
          });
        },

        render() {
          const tweets = getState('tweet.find');

          return (
            <ul>
              {tweets.data.map((tweet) => {
                return (
                  <Tweet
                    key={tweet.id}
                    tweet={tweet}
                  />
                );
              })}
            </ul>
          );
        }
      }))
      `}/>
      <p>
        However, this is highly discouraged, unless you really find yourself needing to for some reason. For
        example, this approach would give you access to context, but you can also access it through
        the <code>options</code> argument of <code>connect</code>.
      </p>
      <p>
        This approach is also more verbose, as it requires you to store data in <code>state</code>, and you have
        to update state both during the "mounting" callbacks (componentWillMount) and the "update" callbacks
        (componentWillReceiveProps).
      </p>
      <p>
        This approach also has some risk, as changes to Lore in the future (to support rendering multiple application
        within the same browser window) may make it impossible to support this, unless <code>getState</code> is
        itself provided through context.
      </p>
    </Template>
  );
};
