import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Webpack';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        Changing the Port
      </h1>
      <p>
        Webpack is configured to start the development server on port <code>3000</code> by default. That's
        what happens when you start the application using this command:
      </p>
      <Markdown text={`
      npm start
      `}/>
      <p>
        If you want to change the port for the development server, you can provide a different port using this
        command:
      </p>
      <Markdown text={`
      npm start -- --env.port=3001
      `}/>
      <p>
        The command above would cause the development server to be served on port <code>3001</code> instead.
      </p>

      <h3>
        Relevant Section
      </h3>
      <p>
        This section of the Webpack config that controls this behavior is shown below:
      </p>
      <Markdown text={`
      devServer: {
        port: env.port || 3000,
      }
      `}/>
    </Template>
  );
};
