import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Anatomy';
import Markdown from '../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        package.json
      </h1>
      <p>
        This file describes the packages required for you application.
      </p>
      <p>
        To learn more about this file, see the <a href="https://docs.npmjs.com/files/package.json">package.json documentation</a> on
        the <code>npm</code> website.
      </p>

      <h3>
        Defaults
      </h3>
      <p>
        The default file included in new projects looks like this:
      </p>
      <Markdown text={`
      {
        "name": "lore-quickstart",
        "private": true,
        "version": "0.0.0",
        "description": "A Lore application",
        "keywords": [],
        "scripts": {
          "build": "npm run build:development",
          "build:development": "npm run clean && webpack --env.webpack=production --env.lore=development",
          "build:production": "npm run clean && webpack --env.webpack=production --env.lore=production -p",
          "clean": "rimraf dist",
          "server": "json-server --watch db.json --port=1337",
          "start": "webpack-dev-server --history-api-fallback --hot --env=development --port=3000",
          "stats": "npm run stats:development",
          "stats:development": "webpack --json --env=development > stats.json",
          "stats:production": "webpack --json --env=production > stats.json",
          "test": "echo \\"Error: no test specified\\" && exit 1"
        },
        "dependencies": {
          "create-react-class": "^15.6.2",
          "lodash": "^4.0.0",
          "lore": "~0.13.0",
          "lore-auth": "~0.13.0",
          "lore-hook-actions": "~0.13.0",
          "lore-hook-auth": "~0.13.0",
          "lore-hook-bind-actions": "~0.13.0",
          "lore-hook-collections": "~0.13.0",
          "lore-hook-connect": "~0.13.0",
          "lore-hook-connections": "~0.13.0",
          "lore-hook-models": "~0.13.0",
          "lore-hook-react": "~0.13.0",
          "lore-hook-reducers": "~0.13.0",
          "lore-hook-redux": "~0.13.0",
          "lore-hook-router": "~0.13.0",
          "lore-utils": "~0.13.0",
          "prop-types": "^15.6.0",
          "react": "^16.1.1",
          "react-dom": "^16.0.0",
          "react-redux": "^4.4.1",
          "react-router": "^3.0.0",
          "redux": "^3.0.2",
          "redux-batched-subscribe": "^0.1.6",
          "redux-thunk": "^2.0.1"
        },
        "devDependencies": {
          "babel-cli": "^6.4.5",
          "babel-core": "^6.2.1",
          "babel-loader": "^6.2.2",
          "babel-preset-es2015": "^6.5.0",
          "babel-preset-react": "^6.5.0",
          "copy-webpack-plugin": "^4.0.1",
          "css-loader": "^0.26.2",
          "extract-text-webpack-plugin": "^2.1.0",
          "favicons-webpack-plugin": "~0.0.7",
          "file-loader": "^0.10.1",
          "html-webpack-plugin": "^2.28.0",
          "json-loader": "^0.5.4",
          "json-server": "^0.9.5",
          "less": "2.5.1",
          "less-loader": "^2.2.0",
          "node-sass": "^4.1.1",
          "postcss-loader": "^1.3.3",
          "progress-bar-webpack-plugin": "^1.9.3",
          "redux-devtools": "^3.4.1",
          "redux-devtools-dock-monitor": "^1.1.3",
          "redux-devtools-log-monitor": "^1.4.0",
          "rimraf": "^2.6.1",
          "sass-loader": "^6.0.3",
          "style-loader": "^0.13.2",
          "url-loader": "^0.5.8",
          "webpack": "^2.2.1",
          "webpack-config-utils": "^2.3.0",
          "webpack-dev-server": "^2.4.1",
          "webpack-manifest-plugin": "^1.1.0",
          "yargs": "^4.7.1"
        }
      }
      `}/>

      <h3>
        Changing the Port for the Webpack Dev Server
      </h3>
      <p>
        By default, running <code>npm start</code> will start the webpack dev server on port 3000. If you want to
        change the port the server runs on, you can do that by providing
        a <a href="https://docs.npmjs.com/cli/run-script">custom argument to the npm start script</a>.
      </p>
      <p>
        For example, if you want to run the application on port 3001, use this command to start the project:
      </p>
      <Markdown type="json" text={`
      npm start -- --port=3001
      `} />

      <h3>
        Changing the Port for JSON Server
      </h3>
      <p>
        By default, running <code>npm run server</code> will start json-server on port 1337. If you want to
        change the port the server runs on, you can do that by either editing the <code>sever</code> script in
        this file directly, or by using an alternate syntax to start the server.
      </p>
      <Markdown type="sh" text={`
      ./node_modules/json-server/bin/index.js --watch db.json --port=1337
      `} />
    </Template>
  );
};
