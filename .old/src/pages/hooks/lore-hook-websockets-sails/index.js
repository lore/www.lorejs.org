import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/LoreHookWebsocketsSails';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        lore-hook-websockets-sails
      </h1>
      <p>
        Source code for this hook can be found on
        GitHub <a href="https://github.com/lore/lore/tree/master/packages/lore-hook-websockets-sails">at this
        link</a>.
      </p>

      <h2>
        Purpose
      </h2>
      <p>
        This hook is built on top of
        the <a href="https://github.com/lore/lore/tree/master/packages/lore-websockets">lore-websockets</a> library
        and implements the interface for Sails.
      </p>

      <h2>
        Example
      </h2>
      <p>
        See the <a href="https://github.com/lore/lore/tree/master/examples/websockets">websockets example</a> to see
        this hook in action.
      </p>

      <h2>
        Example Usage
      </h2>
      <p>
        The Sails hook behaves identical to the SocketIO hook, except for the implementation. The big callout here is
        that you need to install both the <code>socket.io-client</code> <em>and</em> the <code>sails.io.js</code> package
        (that takes the socket.io client as an argument).
      </p>
      <p>
        You also need to set the URL <em>immediately</em> after creating this object, as it will try to call out to
        the server. Alternatively, you can set <code>io.sails.url.authConnect = false</code>. I'm still playing with
        this implementation a bit, but am leaning towards that solution (so that it doesn't make ANY server calls
        until you tell it to).
      </p>
      <p>
        The other thing to point out is the <code>dispatch</code> implementation. For the most part Sails used a
        message structure consisting of <code>verb</code> and <code>data</code> fields, but sometimes
        replaces <code>data</code> with <code>previous</code> when it comes to updated and deleted data. So the parse
        method has been modified to convert everything into a verb/data structure.
      </p>

      <Markdown text={`
      import _ from 'lodash';
      import { WebSocketConnection } from 'lore-websockets';
      import io from 'socket.io-client';
      import SailsIOClient from 'sails.io.js';

      const SOCKET_VERBS = {
        CREATED: 'created',
        UPDATED: 'updated',
        DESTROYED: 'destroyed',
        ADDED_TO: 'addedTo'
      };

      export default WebSocketConnection.extend({

        // serverUrl: 'http://localhost:1337',
        // namespace: '/posts',
        // event: 'post',

        initialize: function(dispatchers, actions) {
          this.io = SailsIOClient(io);
          this.io.sails.url = this.serverUrl;
        },

        connect: function() {
          const namespace = this.namespace;
          // we have to make a GET request to this endpoint before we're connected
          this.io.socket.get(namespace, function() {
            console.log(\`Connected to \${namespace}\`);
          });
        },

        subscribe: function() {
          this.io.socket.on(this.event, this.dispatch);
        },

        unsubscribe: function() {
          this.io.socket.off(this.event, this.dispatch);
        },

        parse: function(message) {
          if (message.verb === SOCKET_VERBS.CREATED) {
            return {
              verb: message.verb,
              data: message.data
            }
          } else if (message.verb === SOCKET_VERBS.UPDATED) {
            return {
              verb: message.verb,
              data: message.data
            }
          } else if (message.verb === SOCKET_VERBS.DESTROYED) {
            return {
              verb: message.verb,
              data: message.previous
            }
          } else if (message.verb === SOCKET_VERBS.ADDED_TO) {
            return {
              verb: message.verb,
              data: message.data
            }
          } else {
            return {
              verb: 'unknown_verb',
              data: message
            }
          }
        }

      });
      `}/>
    </Template>
  )
};
