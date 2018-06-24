import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/LoreHookConnections';
import Markdown from '../../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        Overview
      </h1>
      <p>
        New projects include a single connection named <code>default</code>, and the default config for new projects
        looks roughly like this:
      </p>
      <Markdown text={`
      module.exports = {

        default: {

          apiRoot: 'https://api.example.com',
          pluralize: true,
          casingStyle: 'camel',
          headers: function() {
            return {};
          },

          models: {
            properties: {
              parse: function(attributes) {
                return attributes;
              }
            }
          },

          collections: {
            properties: {
              parse: function(attributes) {
                return attributes;
              }
            }
          }

        }

      };
      `}/>

      <p>
        The name for the connection (<code>default</code>) comes from the name of the key, and the config translates to this statement:
      </p>

      <blockquote>
        <p>
          The API for the default connection is located at <code>https://api.example.com</code>. The names of the endpoints follow a
          camelCasing strategy and are pluralized. There are no default headers that need to be sent, and there is no need
          to parse the server response for any endpoints before we consume those resources in the application.
        </p>
      </blockquote>

      <p>
        If you were interacting with a second API, such as GitHub's API, then you would create a second config for GitHub like
        this:
      </p>

      <Markdown text={`
      module.exports = {

        default: {
          // ...config options...
        },

        github: {

          apiRoot: 'https://api.github.com',
          pluralize: true,
          casingStyle: 'camel',

          collections: {
            properties: {
              parse: function(attributes) {
                return attributes.items;
              }
            }
          }

        }

      };
      `}/>

      <p>
        Once again, the name for the connection (<code>github</code>) comes from the name of the key, and the config translates to this
        statement:
      </p>

      <p>
        The GitHub API is located at <code>https://api.github.com</code>. The names of the endpoints follow a camelCasing strategy
        and are pluralized. When making requests to "collection" endpoints (like <code>/repositories</code>) the resources we want
        are stored inside the <code>items</code> attributes of the response.
      </p>
    </Template>
  )
};
