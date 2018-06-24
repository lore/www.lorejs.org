import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/LoreHookWebsocketsSocketIo';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        lore-hook-websockets-socketio
      </h1>
      <p>
        Source code for this hook can be found on
        GitHub <a href="https://github.com/lore/lore/tree/master/packages/lore-hook-websockets-socketio">at this
        link</a>.
      </p>

      <h2>
        Purpose
      </h2>
      <p>
        This hook is built on top of
        the <a href="https://github.com/lore/lore/tree/master/packages/lore-websockets">lore-websockets</a> library
        and implements the interface for socket.io.
      </p>

      <p>
        This hook does two things:
      </p>

      <ol>
        <li>
          It provides an implementation of
          the <a href="https://github.com/lore/lore/tree/master/packages/lore-websockets">lore-websockets</a> interface
          that can be used with socket.io.
        </li>
        <li>
          Provides a set of methods and dispatchers that can be used by default with any model in the application
          (using some overridable conventions)
        </li>
      </ol>

      <h2>
        Example
      </h2>
      <p>
        See the <a href="https://github.com/lore/lore/tree/master/examples/websockets">websockets example</a> to see
        this hook in action.
      </p>

      <h3>
        Implementation
      </h3>
      <p>
        Implementing support for socket.io is fairly straight forward. The implementation just needs to know
        the <code>serverUrl</code> (which is the root URL for the socket.io server), the <code>namespace</code> (if
        your server uses one) and the <code>event</code> that will be emitted when CRUD operations occur for the
        desired resource.
      </p>

      <Markdown text={`
      import io from 'socket.io-client';
      import { WebSocketConnection } from 'lore-websockets';

      export default WebSocketConnection.extend({

        // These three values are provided by the project configuration or conventions
        serverUrl: 'http://localhost:1337',
        namespace: '/posts',
        event: 'post',

        connect: function() {
          const url = this.serverUrl + this.namespace;
          this.socket = io(url);
        },

        subscribe: function() {
          this.socket.on(this.event, this.dispatch);
        },

        unsubscribe: function() {
          this.socket.off(this.event, this.dispatch);
        }

      });
      `}/>

      <h3>
        Default Methods and Dispatchers
      </h3>
      <p>
        The code below illustrates the general setup process used when the hook creates the WebSocket instance:
      </p>

      <Markdown text={`
      // these "guess" the namespace and event based on conventions
      // can be provided explicitly by the user
      var conventions = {
        namespace: config.pluralize ? \`\${pluralize(modelName)}\` : \`\${modelName}\`,
        event: modelName
      };

      // these three dispatchers are provided by default to update the Redux store
      // based on data that was created, updated or deleted by other users.
      var dispatchers = {
        created: blueprints.dispatchers.created(modelName, Model)(store),
        updated: blueprints.dispatchers.updated(modelName, Model)(store),
        destroyed: blueprints.dispatchers.destroyed(modelName, Model)(store)
      };

      // override the SocketIo WebSocketConnection with conventions and configuration
      var CustomWebSocketConnection = SocketIoWebSocketConnection.extend(_.extend(conventions, config));

      // make the connection accessible under lore.websockets, i.e. lore.websockets.post for example.
      lore.websockets[modelName] = new CustomSocketIoWebSocketConnection(dispatchers);
      `}/>

      <p>
        If you want to listen for events during the entire lifecycle of your application, a good place to connect
        and listen for data is within the <code>componentDidMount</code> method of the <code>Master</code> component,
        like so:
      </p>

      <Markdown text={`
      // src/components/Master.js
      createReactClass({
        componentDidMount: function() {
          lore.websockets.post.connect();
          lore.websockets.post.subscribe();
        },

        componentWillUnmount: function() {
          lore.websockets.post.unsubscribe();
        }
      })
      `}/>

      <p>
        Calling <code>lore.websockets.post.connect()</code> will cause the websocket instance to connect with the
        server. Calling <code>lore.websockets.post.subscribe()</code> will cause it to listen for the event it was
        configured for, such as events called <code>post</code> that contain data about Post resources that have been
        created, updated or deleted by other users.
      </p>
    </Template>
  )
};
