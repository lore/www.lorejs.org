import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Connect';
import Markdown from '../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        Connect
      </h1>
      <p>
        This is a component that emulates the behavior of <code>connect</code>, but is intended to be
        used <strong>as a component within the render function</strong>, and <strong>not as a decorator</strong>.
      </p>
      <p>
        Example usage looks like this:
      </p>

      <Markdown text={`
      import { Connect } from 'lore-hook-connect';

      export default createReactClass({
        render() {
          return (
            <Connect callbacks={(getState, props) => {
              return {
                tweets: getState('tweet.find')
              }
            }}>
            {(props) => {
              const { tweets } = props;

              return (
                <ul>
                {tweets.data.map(function(tweet) {
                  return (
                    <li>{tweet.data.text}</li>
                  );
                })}
                </ul>
              );
            }}
            </Connect>
          );
        }
      })
      `}/>

      <h2>
        When is this useful?
      </h2>
      <p>
        The primary motivation for creating this component grew from a repeated need to render many-to-many data.
      </p>
      <p>
        An example to illustrate:
      </p>
      <p>
        Let's say we have an API with the following data:
      </p>
      <Markdown text={`
      {
        tweets: [
          {
            id: 1,
            user: 1,
            text: '@lore is a React framework'
          }
        ],
        users: [
          {
            id: 1,
            username: 'jchansen'
          },
          {
            id: 2,
            username: 'lore'
          }
        ],
        mentions: [
          {
            id: 1,
            tweet: 1,
            user: 2
          }
        ]
      }
      `}/>
      <p>
        This data describes two <code>users</code> on Fake Twitter (<code>jchansen</code> and <code>lore</code>) and
        one <code>tweet</code> by <code>jchansen</code> where he mentions <code>@lore</code> by saying <code>@lore
        is a React framework</code>.
      </p>
      <p>
        In this example, we want to render all tweets where <code>@lore</code> is mentioned, using the
        component below.
      </p>

      <Markdown text={`
      import React from 'react';
      import createReactClass from 'create-react-class';
      import PropTypes from 'prop-types';
      import { connect } from 'lore-hook-connect';

      export default createReactClass({
        displayName: 'Tweet',

        propTypes: {
          tweet: PropTypes.object.isRequired,
        },

        render() {
          const { tweet } = this.props;

          return (
            <li>{tweet.data.text}</li>
          );
        }
      }))
      `}/>

      <p>
        If this example, if we use only the <code>connect</code> decorator, we will need two components, mocked
        out below.
      </p>

      <Markdown text={`
      import React from 'react';
      import createReactClass from 'create-react-class';
      import PropTypes from 'prop-types';
      import { connect } from 'lore-hook-connect';
      import Mention from './Mention';

      export default connect((getState, props) => {
        return {
          mentions: getState('mention.find', {
            where: {
              user: 2
            }
          })
        }
      })(
      createReactClass({
        displayName: 'Mentions',

        propTypes: {
          mentions: PropTypes.object.isRequired
        },

        render() {
          const { mentions } = this.props;

          return (
            <ul>
              {mentions.data.map((mention) => {
                return (
                  <Mention
                    key={mention.id}
                    mention={mention}
                  />
                )
              })}
            </ul>
          );
        }
      }))
      `}/>

      <Markdown text={`
      import React from 'react';
      import createReactClass from 'create-react-class';
      import PropTypes from 'prop-types';
      import { connect } from 'lore-hook-connect';
      import Tweet from './Tweet';

      export default connect((getState, props) => {
        const { mention } = props;

        return {
          tweet: getState('tweet.byId', {
            id: mention.data.tweet
          })
        }
      })(
      createReactClass({
        displayName: 'Mention',

        propTypes: {
          mention: PropTypes.object.isRequired,
          tweet: PropTypes.object.isRequired,
        },

        render() {
          const { tweet } = this.props;

          return (
            <Tweet tweet={tweet} />
          );
        }
      }))
      `}/>

      <p>
        The problem (or at least the motivation for <code>Connect</code>) comes from the fact that
        the <code>Mention</code> component is really just transforming a <code>mention</code> into
        a <code>tweet</code>. In other words, we created a component <strong>just to transform data</strong>.
      </p>
      <p>
        As a one-off, it's not too annoying, but in an application with a lot of many-to-many endpoints
        like <code>mentions</code>, it can start to feel like a lot of tedious boilerplate, as a great many of these
        "transform" components are required.
      </p>
      <p>
        To illustrate the value of <code>Connect</code>, let's do that same example again, but this time we'll
        do it one component.
      </p>

      <Markdown text={`
      import React from 'react';
      import createReactClass from 'create-react-class';
      import PropTypes from 'prop-types';
      import { connect, Connect } from 'lore-hook-connect';
      import Tweet from './Tweet';

      export default connect((getState, props) => {
        return {
          mentions: getState('mention.find', {
            where: {
              user: 2
            }
          })
        }
      })(
      createReactClass({
        displayName: 'Mentions',

        propTypes: {
          mentions: PropTypes.object.isRequired
        },

        render() {
          const { mentions } = this.props;

          return (
            <ul>
              {mentions.data.map((mention) => {
                return (
                  <Connect key={mention.id} callback={(getState) => {
                    return {
                      tweet: getState('tweet.byId', {
                        id: mention.data.tweet
                      })
                    }
                  }}>
                    {(props) => {
                      const { tweet } = props;
                      return (
                        <Tweet tweet={tweet} />
                      );
                    }}
                  </Connect>
                );
              })}
            </ul>
          );
        }
      }))
      `}/>

      <p>
        In this example, it's just simpler. We create a component called <code>Mentions</code> intended to render
        each <code>Tweet</code> that mentions <code>@lore</code> (the user with the id of 2). And using
        the <code>Connect</code> component, we're able to do whatever transformations we need inside
        the <code>render</code> method, and return a <code>Tweet</code> when we're ready.
      </p>
      <p>
        Now if we no longer need to render <code>mentions</code>, we can delete just this one file, instead of two,
        and the logic is (arguable) easier to understand as well, since we don't need to jump through multiple
        components to understand how a <code>mention</code> became a <code>tweet</code>.
      </p>
    </Template>
  );
};
