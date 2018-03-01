import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Webpack';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        Verifying Production Build Locally
      </h1>
      <p>
        If we want to verify the production build of your application locally, you can do that easily using
        the <a href="https://github.com/tj/serve">serve</a> package, which allows you to serve files from any
        folder you choose on your computer.
      </p>
      <p>
        To install it, run this command:
      </p>
      <Markdown text={`
      npm install -g serve
      `}/>
      <p>
        Then generate a development build of the application using this command:
      </p>
      <Markdown text={`
      npm run build:development
      `}/>
      <p>
        Then tell <code>serve</code> to serve the files out of that directory using this command:
      </p>
      <Markdown text={`
      serve dist --port 3000
      `}/>
      <p>
        At this point you can navigate to <code>localhost:3000</code> to view the production version of your
        application, but using the development configuration for the project.
      </p>
    </Template>
  );
};
