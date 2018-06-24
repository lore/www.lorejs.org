import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/authorization/final.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 3: Alternative Approach
      </h1>

      <p>
        In this step we'll look at an alternative approach to hiding components that doesn't use decorators.
      </p>

      <QuickstartBranch branch="authorization.3" />

      <h3>
        Why an alternative approach?
      </h3>
      <p>
        While decorators can provide a concise way to add behavior to an application, they're not very easy to
        understand compared to a simple React component. Conceptually, they're functions that return a function
        that return a component that renders YOUR component, which can be difficult to visualize.
      </p>
      <p>
        In this section, we'll introduce an alternative way of hiding components based on authorization rules, and
        we'll use a simple component instead of a decorator.
      </p>

      <h3>
        Remove Authorization Decorators from Links
      </h3>
      <p>
        <p>
          Start by removing the <code>UserCanEditTweet</code> decorator from the <code>EditLink</code>, and removing
          the <code>UserCanDeleteTweet</code> decorator from the <code>DeleteLink</code>.
        </p>
        <p>
          Once you do this, the "edit" and "delete" links should be visible for all tweets.
        </p>
      </p>

      <h3>
        Create an IsOwner Component
      </h3>

      <p>
        Next, create a new component called <code>IsOwner</code>:
      </p>

      <Markdown text={`
      lore generate component IsOwner
      `}/>

      <p>
        Then replace the code with this:
      </p>
      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        import React from 'react';
        import createReactClass from 'create-react-class';
        import PropTypes from 'prop-types';

        export default createReactClass({
          displayName: 'IsOwner',

          propTypes: {
            tweet: PropTypes.object.isRequired
          },

          contextTypes: {
            user: PropTypes.object.isRequired
          },

          render() {
            const { tweet, children } = this.props;
            const { user } = this.context;

            if (tweet.data.user === user.id) {
              return children;
            }

            return null;
          }

        });
        `}/>
        <CodeTab syntax="ES6" text={`
        import React from 'react';
        import PropTypes from 'prop-types';

        class IsOwner extends React.Component {

          render() {
            const { tweet, children } = this.props;
            const { user } = this.context;

            if (tweet.data.user === user.id) {
              return children;
            }

            return null;
          }

        }

        IsOwner.propTypes = {
          tweet: PropTypes.object.isRequired
        };

        IsOwner.contextTypes = {
          user: PropTypes.object.isRequired
        };

        export default IsOwner;
        `}/>
        <CodeTab syntax="ESNext" text={`
        import React from 'react';
        import PropTypes from 'prop-types';

        class IsOwner extends React.Component {

          static propTypes = {
            tweet: PropTypes.object.isRequired
          };

          static contextTypes = {
            user: PropTypes.object.isRequired
          };

          render() {
            const { tweet, children } = this.props;
            const { user } = this.context;

            if (tweet.data.user === user.id) {
              return children;
            }

            return null;
          }

        }

        export default IsOwner;
        `}/>
      </CodeTabs>

      <p>
        Similar to the decorators we created previously, this component expects to receive a <code>tweet</code> as
        a prop, along with the <code>user</code> from context.
      </p>
      <p>
        In the <code>render()</code> method, we compare the current user to the user who created the tweet. If
        they match, we render whatever children (other components) were provided. If they don't, we render nothing.
      </p>

      <h3>
        Use the Component
      </h3>

      <p>
        To see how we use this it, open the <code>Tweet</code> component. Import <code>IsOwner</code>, and wrap
        our <code>edit</code> and <code>delete</code> links with it like this:
      </p>

      <Markdown type="jsx" text={`
      // src/components/Tweet.js
      ...
      import IsOwner from './IsOwner';
      ...
        render() {
          ...
            <IsOwner tweet={tweet}>
              <div className="tweet-actions">
                <EditLink tweet={tweet} />
                <DeleteLink tweet={tweet} />
              </div>
            </IsOwner>
          ...
        }
      ...
      `}/>

      <p>
        With this change in place, refresh the page, and once again, the "edit" and "delete" links should only
        be visible on tweets created by the current user.
      </p>

      <h3>
        Visual Check-in
      </h3>

      <p>
        If everything went well, your application should now look like this.
      </p>

      <img className="drop-shadow" src={image} />


      <h2>
        Code Changes
      </h2>

      <p>
        If you chose to follow, below is a list of files modified during this step.
      </p>

      <h3>
        src/components/IsOwner.js
      </h3>

      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        import React from 'react';
        import createReactClass from 'create-react-class';
        import PropTypes from 'prop-types';

        export default createReactClass({
          displayName: 'IsOwner',

          propTypes: {
            tweet: PropTypes.object.isRequired
          },

          contextTypes: {
            user: PropTypes.object.isRequired
          },

          render() {
            const { tweet, children } = this.props;
            const { user } = this.context;

            if (tweet.data.user === user.id) {
              return children;
            }

            return null;
          }

        });
        `}/>
        <CodeTab syntax="ES6" text={`
        import React from 'react';
        import PropTypes from 'prop-types';

        class IsOwner extends React.Component {

          render() {
            const { tweet, children } = this.props;
            const { user } = this.context;

            if (tweet.data.user === user.id) {
              return children;
            }

            return null;
          }

        }

        IsOwner.propTypes = {
          tweet: PropTypes.object.isRequired
        };

        IsOwner.contextTypes = {
          user: PropTypes.object.isRequired
        };

        export default IsOwner;
        `}/>
        <CodeTab syntax="ESNext" text={`
        import React from 'react';
        import PropTypes from 'prop-types';

        class IsOwner extends React.Component {

          static propTypes = {
            tweet: PropTypes.object.isRequired
          };

          static contextTypes = {
            user: PropTypes.object.isRequired
          };

          render() {
            const { tweet, children } = this.props;
            const { user } = this.context;

            if (tweet.data.user === user.id) {
              return children;
            }

            return null;
          }

        }

        export default IsOwner;
        `}/>
      </CodeTabs>

      <h3>
        src/components/EditLink.js
      </h3>

      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        import React from 'react';
        import createReactClass from 'create-react-class';
        import PropTypes from 'prop-types';

        export default createReactClass({
          displayName: 'EditLink',

          propTypes: {
            tweet: PropTypes.object.isRequired
          },

          onClick() {
            const { tweet } = this.props;

            lore.dialog.show(function() {
              return lore.dialogs.tweet.update(tweet, {
                blueprint: 'optimistic',
                request: function(data) {
                  return lore.actions.tweet.update(tweet, data).payload;
                }
              });
            });
          },

          render() {
            return (
              <a className="link" onClick={this.onClick}>
                edit
              </a>
            );
          }

        });
        `}/>
        <CodeTab syntax="ES6" text={`
        import React from 'react';
        import PropTypes from 'prop-types';

        class EditLink extends React.Component {

          constructor(props) {
            super(props);
            this.onClick = this.onClick.bind(this);
          }

          onClick() {
            const { tweet } = this.props;

            lore.dialog.show(function() {
              return lore.dialogs.tweet.update(tweet, {
                blueprint: 'optimistic',
                request: function(data) {
                  return lore.actions.tweet.update(tweet, data).payload;
                }
              });
            });
          }

          render() {
            return (
              <a className="link" onClick={this.onClick}>
                edit
              </a>
            );
          }

        }

        EditLink.propTypes = {
          tweet: PropTypes.object.isRequired
        };

        export default EditLink;
        `}/>
        <CodeTab syntax="ESNext" text={`
        import React from 'react';
        import PropTypes from 'prop-types';

        class EditLink extends React.Component {

          static propTypes = {
            tweet: PropTypes.object.isRequired
          };

          constructor(props) {
            super(props);
            this.onClick = this.onClick.bind(this);
          }

          onClick() {
            const { tweet } = this.props;

            lore.dialog.show(function() {
              return lore.dialogs.tweet.update(tweet, {
                blueprint: 'optimistic',
                request: function(data) {
                  return lore.actions.tweet.update(tweet, data).payload;
                }
              });
            });
          }

          render() {
            return (
              <a className="link" onClick={this.onClick}>
                edit
              </a>
            );
          }

        }

        export default EditLink;
        `}/>
      </CodeTabs>

      <h3>
        src/components/DeleteLink.js
      </h3>

      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        import React from 'react';
        import createReactClass from 'create-react-class';
        import PropTypes from 'prop-types';

        export default createReactClass({
          displayName: 'DeleteLink',

          propTypes: {
            tweet: PropTypes.object.isRequired
          },

          onClick() {
            const { tweet } = this.props;

            lore.dialog.show(function() {
              return lore.dialogs.tweet.destroy(tweet, {
                blueprint: 'optimistic',
                request: function(data) {
                  return lore.actions.tweet.destroy(tweet).payload;
                }
              });
            });
          },

          render() {
            return (
              <a className="link" onClick={this.onClick}>
                delete
              </a>
            );
          }

        });
        `}/>
        <CodeTab syntax="ES6" text={`
        import React from 'react';
        import PropTypes from 'prop-types';

        class DeleteLink extends React.Component {

          constructor(props) {
            super(props);
            this.onClick = this.onClick.bind(this);
          }

          onClick() {
            const { tweet } = this.props;

            lore.dialog.show(function() {
              return lore.dialogs.tweet.destroy(tweet, {
                blueprint: 'optimistic',
                request: function(data) {
                  return lore.actions.tweet.destroy(tweet).payload;
                }
              });
            });
          }

          render() {
            return (
              <a className="link" onClick={this.onClick}>
                delete
              </a>
            );
          }

        }

        DeleteLink.propTypes = {
          tweet: PropTypes.object.isRequired
        };

        export default DeleteLink;
        `}/>
        <CodeTab syntax="ESNext" text={`
        import React from 'react';
        import PropTypes from 'prop-types';

        class DeleteLink extends React.Component {

          static propTypes = {
            tweet: PropTypes.object.isRequired
          };

          constructor(props) {
            super(props);
            this.onClick = this.onClick.bind(this);
          }

          onClick() {
            const { tweet } = this.props;

            lore.dialog.show(function() {
              return lore.dialogs.tweet.destroy(tweet, {
                blueprint: 'optimistic',
                request: function(data) {
                  return lore.actions.tweet.destroy(tweet).payload;
                }
              });
            });
          }

          render() {
            return (
              <a className="link" onClick={this.onClick}>
                delete
              </a>
            );
          }

        }

        export default DeleteLink;
        `}/>
      </CodeTabs>

      <h3>
        src/components/Tweet.js
      </h3>
      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        import React from 'react';
        import createReactClass from 'create-react-class';
        import PropTypes from 'prop-types';
        import moment from 'moment';
        import { connect } from 'lore-hook-connect';
        import EditLink from './EditLink';
        import DeleteLink from './DeleteLink';
        import IsOwner from './IsOwner';

        export default connect(function(getState, props) {
          const { tweet } = props;

          return {
            user: getState('user.byId', {
              id: tweet.data.user
            })
          };
        })(
        createReactClass({
          displayName: 'Tweet',

          propTypes: {
            tweet: PropTypes.object.isRequired,
            user: PropTypes.object.isRequired
          },

          render() {
            const { tweet, user } = this.props;
            const timestamp = moment(tweet.data.createdAt).fromNow().split(' ago')[0];

            return (
              <li className="list-group-item tweet">
                <div className="image-container">
                  <img
                    className="img-circle avatar"
                    src={user.data.avatar} />
                </div>
                <div className="content-container">
                  <h4 className="list-group-item-heading title">
                    {user.data.nickname}
                  </h4>
                  <h4 className="list-group-item-heading timestamp">
                    {'- ' + timestamp}
                  </h4>
                  <p className="list-group-item-text text">
                    {tweet.data.text}
                  </p>
                  <IsOwner tweet={tweet}>
                    <div className="tweet-actions">
                      <EditLink tweet={tweet} />
                      <DeleteLink tweet={tweet} />
                    </div>
                  </IsOwner>
                </div>
              </li>
            );
          }

        })
        );
        `}/>
        <CodeTab syntax="ES6" text={`
        import React from 'react';
        import PropTypes from 'prop-types';
        import moment from 'moment';
        import { connect } from 'lore-hook-connect';
        import EditLink from './EditLink';
        import DeleteLink from './DeleteLink';
        import IsOwner from './IsOwner';

        class Tweet extends React.Component {

          render() {
            const { tweet, user } = this.props;
            const timestamp = moment(tweet.data.createdAt).fromNow().split(' ago')[0];

            return (
              <li className="list-group-item tweet">
                <div className="image-container">
                  <img
                    className="img-circle avatar"
                    src={user.data.avatar} />
                </div>
                <div className="content-container">
                  <h4 className="list-group-item-heading title">
                    {user.data.nickname}
                  </h4>
                  <h4 className="list-group-item-heading timestamp">
                    {'- ' + timestamp}
                  </h4>
                  <p className="list-group-item-text text">
                    {tweet.data.text}
                  </p>
                  <IsOwner tweet={tweet}>
                    <div className="tweet-actions">
                      <EditLink tweet={tweet} />
                      <DeleteLink tweet={tweet} />
                    </div>
                  </IsOwner>
                </div>
              </li>
            );
          }

        }

        Tweet.propTypes = {
          tweet: PropTypes.object.isRequired,
          user: PropTypes.object.isRequired
        };

        export default connect(function(getState, props) {
          const tweet = props.tweet;

          return {
            user: getState('user.byId', {
              id: tweet.data.user
            })
          };
        })(Tweet);
        `}/>
        <CodeTab syntax="ESNext" text={`
        import React from 'react';
        import PropTypes from 'prop-types';
        import moment from 'moment';
        import { connect } from 'lore-hook-connect';
        import EditLink from './EditLink';
        import DeleteLink from './DeleteLink';
        import IsOwner from './IsOwner';

        @connect(function(getState, props) {
          const tweet = props.tweet;

          return {
            user: getState('user.byId', {
              id: tweet.data.user
            })
          };
        })
        class Tweet extends React.Component {

          static propTypes = {
            tweet: PropTypes.object.isRequired,
            user: PropTypes.object.isRequired
          };

          render() {
            const { tweet, user } = this.props;
            const timestamp = moment(tweet.data.createdAt).fromNow().split(' ago')[0];

            return (
              <li className="list-group-item tweet">
                <div className="image-container">
                  <img
                    className="img-circle avatar"
                    src={user.data.avatar} />
                </div>
                <div className="content-container">
                  <h4 className="list-group-item-heading title">
                    {user.data.nickname}
                  </h4>
                  <h4 className="list-group-item-heading timestamp">
                    {'- ' + timestamp}
                  </h4>
                  <p className="list-group-item-text text">
                    {tweet.data.text}
                  </p>
                  <IsOwner tweet={tweet}>
                    <div className="tweet-actions">
                      <EditLink tweet={tweet} />
                      <DeleteLink tweet={tweet} />
                    </div>
                  </IsOwner>
                </div>
              </li>
            );
          }

        }

        export default Tweet;
        `}/>
      </CodeTabs>

      <h2>
        Next Steps
      </h2>
      <p>
        In the next section we'll learn how to <Link to="../../optimistic/overview/">display new tweets at the
        top of the Feed</Link>.
      </p>
    </Template>
  )
};
