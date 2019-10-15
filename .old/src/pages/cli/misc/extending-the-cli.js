import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/CLI';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        Extending the CLI
      </h1>
      <p>
        Lore's CLI is designed to be overridden and extended. Every command is implemented as a separate package, and the CLI
        dynamically builds the interface based on the packages provided to it in a configuration object.
      </p>

      <p>
        A portion of the configuration object provided to it by default looks like this:
      </p>

      <Markdown text={`
      {
        // ...,

        commands: {
          new: local("lore-generate-new"),
          tutorial: local("lore-tutorial"),
          extract: {
            description: "Create files that mirror the blueprint behavior",
            commands: {
              action: local("lore-extract-action"),
              reducer: local("lore-extract-reducer")
            }
          },
          generate: {
            description: "Generate common project files",
            commands: {
              collection: local("lore-generate-collection"),
              component: local("lore-generate-component"),
              generator: local("lore-generate-generator"),
              hook: local("lore-generate-hook"),
              model: local("lore-generate-model"),
              reducer: local("lore-generate-reducer"),
              surge: local("lore-generate-surge"),
              github: local("lore-generate-github")
            }
          }
        }

      }
      `}/>

      <p>
        If you examine the commands in the CLI, you'll notice they mirror the hierarchy of this object. For example, the
        command <code>lore generate model</code> maps to <code>commands.generate.model</code>.
      </p>

      <p>
        If you open up the <code>.lorerc</code> file at the root of your project, it should look something like this:
      </p>

      <Markdown text={`
      {
        "generators": {
          "language": "es6"
        },
        "commands": {}
      }
      `}/>

      <p>
        The CLI will read this file when you run commands from within a project, and will use it to override the default
        configuration. This means that if you want to override the way <code>models</code> are generated for example, you simply need
        to provide an alternate implementation for that command, like this:
      </p>

      <Markdown text={`
      {
        "generators": {
          "language": "es6"
        },
        "commands": {
          "generate": {
            "commands": {
              "model": "lore-generate-alternate-model"
            }
          }
        }
      }
      `}/>

      <p>
        The config above would cause the CLI to use the <code>lore-generate-alternate-model</code> package instead
        of the default <code>lore-generate-model</code> package when it executed the command <code>lore generate model</code>.
      </p>

      <p>
        You can also use this behavior to extend the CLI, by providing completely new commands, and you also provide a local
        path to your package as well. For example, let's say you wanted to add a command that would analyze your <code>routes.js</code>
        file and print out a flat list of all valid routes in your application. You could add that command to the CLI like this:
      </p>

      <Markdown text={`
      {
        "generators": {
          "language": "es6"
        },
        "commands": {
          "routes": {
            "description": "Helper commands for analyzing application routes",
            "commands": {
              "list": "/Users/username/commands/lore-routes-list"
            }
          }
        }
      }
      `}/>

    </Template>
  )
};
