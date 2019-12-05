import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Features';
import Code from '../../components/Code';
import CodeTabs from '../../components/CodeTabs';
import CodeTab from '../../components/CodeTab';
import QuickstartBranch from '../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template
      title="Philosophy"
      subtitle={(
        <span>"Respectfully Opinionated"</span>
      )}
    >
      {/*<h1>*/}
      {/*  Philosophy*/}
      {/*</h1>*/}
      {/*<p>*/}
      {/*  Lore describes itself as "respectfully opinionated".*/}
      {/*</p>*/}
      <p>
        While "unopinionated" software can provide a great foundation to build on (and largely describes the types
        of libraries that Lore is composed of), at some point software has to have opinions before it can solve
        problems.
      </p>
      <p>
        The "opinionated" part of that phrase is what gives Lore its value, and allows the framework to provide
        built-in solutions to many front-end challenges such as data fetching, caching, pagination, and others.
      </p>
      <p>
        The "respectfully" part describes how Lore does that:
      </p>

      <ul className="list-disc ml-10">
        <li>
          <strong>Conventions</strong>: the opinions in Lore are expressed through conventions, and reflect the
          things that are generally true for most applications. They exist to save you time by removing
          boilerplate, and not asking you to create code and functionality you'll likely need anyway.
        </li>
        <li>
          <strong>Configuration</strong>: the configuration files in Lore allow you to modify the conventions, or
          take control of the framework when needed in order to adapt it to your specific needs. The config files can
          also be overridden on a per-environment basis, meaning you can have different configurations for development,
          production, etc.
        </li>
        <li>
          <strong>Hooks</strong>: finally, all of the functionality in Lore, including the conventions and
          configuration, are implemented as a series of plugins called hooks. This means that you'll never need to fork
          the repo or submit a PR to change Lore's behavior; you can modify the behavior in place in your own project,
          simply be redefining the hook, and can also create new hooks to drastically change how the framework behaves.
        </li>
      </ul>

      <p>
        Lore is designed with an understanding that things change over time, and so while the framework may express
        certain opinions and assumptions, it also understands that you may have different opinions and have very
        good reasons for wanting to follow them.
      </p>
      <p>
        Therefore, Lore will always strive to express it's opinions as <em>conventions</em> only, and the
        architecture and documentation will continually strive to make it easier to override or replace them should
        you want to.
      </p>

      <h2>
        Extensibility
      </h2>
      <p>
        While we touched on this a bit already, it's worth restating that Lore is designed to be extensible not as an
        add-on, but as a foundational element of it's architecture. Nearly everything the framework does is provided
        as a customizable plugin, and you can create, add, or remove those plugins as you'd like.
      </p>
      <p>
        Lore also includes a CLI that provides a number of commands that make certain aspects of development more
        convenient, and the CLI follows that same principle.
      </p>
      <p>
        Not only is the CLI itself <em>also</em> implemented as a series of plugins, but you can create, add and
        remove commands yourself in order to tailor the behavior of the CLI to your project, and all without ever
        needing to fork the repo or submit a PR.
      </p>
    </Template>
  )
};
