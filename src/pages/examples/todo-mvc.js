import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Examples';
import Code from '../../components/Code';
import CodeTabs from '../../components/CodeTabs';
import CodeTab from '../../components/CodeTab';
import QuickstartBranch from '../../components/QuickstartBranch';
import image from '../../assets/images/examples/todomvc.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Todo MVC
      </h1>
      <p>
        This example is a Lore-specific implementation of the <a href="http://todomvc.com/">TodoMVC example</a>. You can
        find the code <a href="https://github.com/lore/lore/tree/master/examples/todomvc">in the Lore repository</a>.
      </p>

      <h3>
        Screenshot
      </h3>
      <img className="drop-shadow" src={image} />

      <h3>
        Demonstrates
      </h3>
      <p>
        This example demonstrates:
      </p>

      <ul className="list-disc pl-10">
        <li>Creating a model</li>
        <li>Connecting a component to the data store</li>
        <li>CRUD Actions</li>
      </ul>

      <h3>
        Running the Example
      </h3>

      <Code type="sh" text={`
      git clone https://github.com/lore/lore.git

      cd lore/examples/todomvc
      npm install
      npm start

      open http://localhost:3000/
      `}/>
    </Template>
  )
};
