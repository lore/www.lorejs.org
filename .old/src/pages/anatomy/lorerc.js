import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Anatomy';
import Markdown from '../../components/Markdown';
import CodeTabs from '../../components/CodeTabs';
import CodeTab from '../../components/CodeTab';

export default (props) => {
  return (
    <Template>
      <h1>
        .lorerc
      </h1>
      <p>
        This file controls the behavior of the Lore CLI.
      </p>

      <h4>
        Background
      </h4>
      <p>
        The Lore CLI is intended to be a complimentary tool for the application, and is designed in a way that
        allows it be extended from <em>within a project</em>. This means that you can add new commands to the
        CLI as well as overwrite existing commands, and all without leaving your project, or without needing
        to submit a PR to modify the CLI itself.
      </p>
      <p>
        While the CLI originally started off as a simple convenience for generating basic project files, and
        was not expected to be useful much beyond the Quickstart, the inclusion of the <code>extract</code> commands
        have dramatically changed that relationship and have made the CLI useful as a permanent tool.
      </p>

      <h4>
        TODO: Move this commentary into the CLI's extract documentation
      </h4>
      <p>
        Lore's development follows a process of identifying patterns for front-end development, which are then
        converted into blueprints that can be customized through a configuration object. Whenever possible, that
        configuration object is assigned sensible defaults, and conventions fill in the rest. This combination
        provides a sense of "magic" where certain parts of the framework "just work".
      </p>
      <p>
        While this is useful, and can make for an enticing demonstration, it's not realistic to assume those
        conventions will work in all cases all the time. Sometimes, you just need to break out of them and take
        control of the reigns yourself.
      </p>
      <p>
        The <code>extract</code> commands are designed to make that process as painless as possible. When you
        invoke them, they will generate a version of the blueprint being used, and place it in your project, but
        stripped of any configuration or conventions the framework uses.
      </p>
      <p>
        In fact, if you were to run the extractors for every action, reducer, form and dialog in your project,
        you'd basically have a vanilla Redux project. The only thing the framework would be doing is helping mount
        your project to the DOM, and manage the creation of your configuration object based on the environment.
      </p>

      <p>
        By default, this file is the same for all projects, except for the <strong>language</strong> specified
        for the project (which controls what generated files will look like).
      </p>

      <p>
        The file contains two keys; <code>generators</code> and <code>commands</code>.
      </p>
      <p>
        The settings for <code>generators</code> control what generated files will look like, such as when using
        the command <code>lore generate component Header</code>.
      </p>
      <p>
        The settings for <code>commands</code> control what commands can be the command <code>lore generate
        component Header</code>.
      </p>

      <h3>
        Defaults
      </h3>
      <p>
        The default file included in new projects looks like this:
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
        This file can also be used to override or extend the behavior of the CLI.
      </p>
      <p>
        A <code>.lorerc</code> file that completely replaces the current set of CLI commands looks like this:
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
              "collection": "lore-generate-collection",
              "component": "lore-generate-component",
              "generator": "lore-generate-generator",
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

      <h4>
        Creating New Commands
      </h4>

      <p>
        The CLI has a command called <code>{`lore generate generator <generator name>`}</code> that will create
        a folder pre-configured as a working plugin for the Lore CLI. You can use this as a starting point for
        creating your own commands.
      </p>

      <h4>
        Debugging Module Loading
      </h4>

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
  );
};
