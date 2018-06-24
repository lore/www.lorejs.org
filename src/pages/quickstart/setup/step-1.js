import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 1: Install the CLI
      </h1>

      <p>
        Before you can use Lore, you will need to install Node. If you don't have it installed,
        see <Link to="../../misc/installing-node/">these instructions</Link>.
      </p>

      <h3>
        Install Lore
      </h3>
      <p>
        To get started with Lore, first install the CLI (Command Line Interface) from <code>npm</code>:
      </p>

      <Markdown type="sh" text={`
      $ npm install -g lore-cli
      `} />

      <p>
        Once the CLI is installed, you will have access to <code>lore</code> from the command line.
        Run <code>lore</code> to see a list of available commands:
      </p>

      <Markdown type="sh" text={`
      $ lore

      Usage: $ <command>

      Commands:
      new       Create a new application
      extract   Create files that mirror the blueprint behavior
      generate  Generate common project files


      Options:
      --version  Show version number                                       [boolean]
      --help     Show help                                                 [boolean]

      Please enter a valid command.
      `} />

      <h2>
        Next Steps
      </h2>
      <p>
        Now that the <code>lore-cli</code> is installed, let's <Link to="/quickstart/setup/step-2/">create a new
        application</Link>.
      </p>

    </Template>
  )
};
