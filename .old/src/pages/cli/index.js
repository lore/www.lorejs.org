import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/CLI';
import Markdown from '../../components/Markdown';
import CodeTabs from '../../components/CodeTabs';
import CodeTab from '../../components/CodeTab';
import QuickstartBranch from '../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        CLI
      </h1>
      <p>
        The CLI for Lore is intended to be a complimentary tool for the application, and is designed in a way that
        allows it be extended from <em>within a project</em>. This means that you can add new commands to the
        CLI as well as overwrite existing commands, and all without leaving your project, or without needing
        to submit a PR to modify the CLI itself.
      </p>
      <p>
        While the CLI originally started off as a simple convenience for generating basic project files, and
        was not expected to be useful much beyond the Quickstart, the inclusion of the <code>extract</code> commands
        have dramatically changed that relationship and have made the CLI useful as a permanent tool.
      </p>

      <h3>
        Types of Commands
      </h3>
      <p>
        Beyond the ability to generate a new project, there are two types of commands in the CLI.
      </p>
      <ol>
        <li>
          <p>
            <strong>Generators</strong> are used to add common files (like components, actions, reducers) to your
            project, and include flags for generating those files in ES5, ES6 or ESNext style syntax.
          </p>
          <p>
            Generators can be especially useful when you need to override a default action or reducer.
          </p>
        </li>
        <li>
          <p>
            <strong>Extractors</strong> are used to extract files that mirror functionality that the framework is
            providing through conventions. These are different from generators in the sense that aren't intended to
            be a blank starting point; they're intended to say "show me what the framework is doing".
          </p>
          <p>
            Extractors can be especially useful when you need to override a default action or reducer, but don't need
            to create something super custom. This allows you to start from what the framework is already doing and
            simplify modify it.
          </p>
        </li>
      </ol>

      <h3>
        How is the CLI Configured?
      </h3>
      <p>
        The CLI is controlled through the <code>.lorerc</code> file at the root of your project, which looks like
        this:
      </p>
      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        {
          "generators": {
            "language": "es5"
          },
          "commands": {}
        }
        `}/>
        <CodeTab syntax="ES6" text={`
        {
          "generators": {
            "language": "es6"
          },
          "commands": {}
        }
        `}/>
        <CodeTab syntax="ESNext" text={`
        {
          "generators": {
            "language": "esnext"
          },
          "commands": {}
        }
        `}/>
      </CodeTabs>
      <p>
        By default, this file is the same for all projects, except for the <strong>language</strong> specified
        for the project (which controls what generated files will look like).
      </p>

      <p>
        The file contains two keys; <code>generators</code> and <code>commands</code>.
      </p>
      <ul>
        <li>
          <p>
            The settings for <code>generators</code> control what generated files will look like, such as when using
            the command <code>lore generate component Header</code>.
          </p>
        </li>
        <li>
          <p>
            The settings for <code>commands</code> control what commands are available. This is your extension point
            for overriding the existing commands or extending the CLI with new commands.
          </p>
        </li>
      </ul>

      <p>
        A version of the <code>.lorerc</code> file that completely replaces the default set of CLI commands looks
        like this:
      </p>

      <Markdown text={`
      {
        "generators": {
          "language": "es5"
        },
        "commands": {
          "new": "lore-generate-new",
          "extract": {
            "description": "Create files that mirror the blueprint behavior",
            "commands": {
              "action": "lore-extract-action",
              "reducer": "lore-extract-reducer"
            }
          },
          "generate": {
            "description": "Generate common project files",
            "commands": {
              "action": "lore-generate-action",
              "collection": "lore-generate-collection",
              "component": "lore-generate-component",
              "generator": "lore-generate-generator",
              "hook": "lore-generate-hook",
              "model": "lore-generate-model",
              "reducer": "lore-generate-reducer"
            }
          }
        }
      }
      `}/>

      <p>
        The <code>commands</code> key is how you signal to the CLI that you have something you need to add to it.
      </p>
      <p>
        If you want to add a command at the root, such as <code>{`lore hello <arguments>`}</code>, you would add
        it by specifying a key called "hello" with a value pointing to the module location:
      </p>

      <Markdown text={`
      {
        "generators": {
          "language": "es5"
        },
        "commands": {
          "hello": "./commands/folder-name"
        }
      }
      `}/>

      <p>
        The value can be a relative path like <code>./commands/folder-name</code>, an absolute path
        like <code>/Users/jason/some-folder/command-folder</code>, or a node_module like <code>module-name</code>.
        If you provide a node_module, the CLI will first look in the project's node_modules directory, and then look
        in the global node_modules directory before throwing an error if it can't find it in either location.
      </p>

      <p>
        If you want to create a nested command, like <code>{`lore hello world <arguments>`}</code> then you need
        to nest your command inside a category, like this:
      </p>

      <Markdown text={`
      {
        "generators": {
          "language": "es5"
        },
        "commands": {
           "description": "Describe what commands in this category are for",
            "hello": {
              "world": "./commands/folder-name"
            }
        }
      }
      `}/>

      <p>
        The category description is completely optional. It defaults to an empty string. If you specify a
        description for a category that exists by default, such as <code>extract</code> or <code>generate</code> it
        will override the default description.
      </p>
    </Template>
  )
};
