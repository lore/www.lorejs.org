import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Example';
import Markdown from '../../components/Markdown';
import CodeTabs from '../../components/CodeTabs';
import CodeTab from '../../components/CodeTab';
import QuickstartBranch from '../../components/QuickstartBranch';
import image from '../../assets/images/examples/dialogs-querying.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Dialog-Querying
      </h1>
      <p>
        You can find the code <a href="https://github.com/lore/lore/tree/master/examples/dialogs-querying">in the Lore repository</a>.
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

      <ul>
        <li>Launching dialogs</li>
        <li>Querying the server for a subset of data (todos that belong to a specific list)</li>
      </ul>

      <h3>
        Running the Example
      </h3>

      <Markdown type="sh" text={`
      git clone https://github.com/lore/lore.git

      cd lore/examples/dialogs-querying
      npm install
      npm start

      open http://localhost:3000/
      `}/>
    </Template>
  )
};
