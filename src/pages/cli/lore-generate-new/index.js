import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/LoreGenerateNew';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        new
      </h1>
      <p>
        CLI command to create a new project.
      </p>

      <h3>
        Usage
      </h3>

      <Markdown type="sh" text={`
      lore new [app-name]
      `}/>

      <h3>
        Options
      </h3>
      <p>
        You can control the syntax of the generated files by providing one of the following options:
      </p>
      <Markdown type="sh" text={`
      lore new [app-name] --es5
      lore new [app-name] --es6
      lore new [app-name] --esnext
      `}/>
      <p>
        If no es* option is provided, the generated code will reflect the <code>--es5</code> flag.
      </p>

      <h3>
        Example
      </h3>
      <p>
        Let's say you want to create a project called <code>my-awesome-app</code>. To do that, you would run this command:
      </p>

      <Markdown type="sh" text={`
      lore new my-awesome-app
      `}/>

      <p>
        This would create a new folder named <code>my-awesome-app</code> and place all project files inside.
      </p>

      <p>
        Next you just need to navigate into that folder, install the project dependencies, and start the server.
      </p>

      <Markdown type="sh" text={`
      cd my-awesome-app
      npm install
      npm start
      `}/>

      <p>
        Once the project finishes building, you can visit the application at <code>localhost:3000</code>.
      </p>

      {/*<p>*/}
        {/*Note that <code>npm start</code> is really just an alias for <code>node server</code>, so you also run this:*/}
      {/*</p>*/}

      {/*<Markdown type="sh" text={`*/}
      {/*npm install*/}
      {/*node server*/}
      {/*`}/>*/}

      {/*<h3>*/}
        {/*Changing the Port*/}
      {/*</h3>*/}
      {/*<p>*/}
        {/*By default the project is served from <code>localhost:3000</code>, but if you want to use a different port you can*/}
        {/*change it by passing the port in as an argument to the <code>node server</code> version of the startup command*/}
        {/*(this won't work with <code>npm start</code>):*/}
      {/*</p>*/}

      {/*<Markdown type="sh" text={`*/}
      {/*node server --port=3001*/}
      {/*`}/>*/}
    </Template>
  )
};
