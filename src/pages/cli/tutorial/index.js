import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/CLITutorial';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        Overview
      </h1>
      <p>
        Creating your own commands for the Lore CLI is a great way to expand or modify the functionality provided
        by the framework. In the future, this section will include a tutorial that will teach you how to do that. But
        in the interim, the notes below may help you get started.
      </p>
      <p>
        If you <strong>are interested</strong> in creating your own commands, please
        consider <a href="https://github.com/lore/lore/issues">creating an issue</a> describing what you're trying
        to do, and it may even be used as foundation for the tutorial.
      </p>
      <p>
        This section is currently considered "lower priority" in favor of adding documentation elsewhere, but docs
        are prioritized based on perceived value, so speaking up is a good way to improve the prioritization of this
        tutorial.
      </p>

      <h3>
        Creating New Commands
      </h3>
      <p>
        The CLI has a command called <code>{`lore generate generator <generator name>`}</code> that will create
        a folder pre-configured as a working plugin for the Lore CLI. You can use this as a starting point for
        creating your own commands.
      </p>

      <h3>
        Debugging Module Loading
      </h3>
      <p>
        If you need to debug the module loading sequence for commands, you can add a <code>debugLoading</code> key
        in the <code>options</code> object of the <code>.lorerc</code> file.
      </p>

      <Markdown text={`
      {
        "generators": {
          "language": "es5"
        },
        "options": {
          "debugLoading": true
        }
      }
      `}/>

      <p>
        When <code>debugLoading</code> is true, it will print out the directory of the modules that are being
        loaded, which can be helpful to confirm the CLI has loaded your custom command:
      </p>

      <Markdown text={`
      Loading absolute module: /Users/jchansen/lore/packages/lore-cli/node_modules/lore-extract-action
      Loading absolute module: /Users/jchansen/lore/packages/lore-cli/node_modules/lore-extract-reducer
      Loading directory module: ../../packages/lore-extract-action
      Loading project module: lore-generate-collection
      Loading project module: lore-generate-component
      `}/>
    </Template>
  )
};
