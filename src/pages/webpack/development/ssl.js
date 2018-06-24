import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Webpack';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        Configuring SSL
      </h1>
      <p>
        Webpack is configured to serve the application over http as the default. That's what happens when you start
        the application using this command:
      </p>
      <Markdown text={`
      npm start
      `}/>
      <p>
        If you want to serve the application over https, then you need to enable https, specify the host, and provide
        an SSL certificate and key. You can do that by using this command to start the development server:
      </p>
      <Markdown text={`
      npm start --
        --env.https
        --env.host=subdomain.example.com
        --env.cert=/etc/letsencrypt/live/subdomain.example.com/fullchain.pem
        --env.key=/etc/letsencrypt/live/subdomain.example.com/key.pem
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
        https: env.https || false,
        host: env.host || 'localhost',
        key: env.key ? fs.readFileSync(env.key) : '',
        cert: env.cert ? fs.readFileSync(env.cert) : '',
      }
      `}/>
    </Template>
  );
};
