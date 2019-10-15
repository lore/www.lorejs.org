import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Features';
import Markdown from '../../components/Markdown';
import CodeTabs from '../../components/CodeTabs';
import CodeTab from '../../components/CodeTab';
import QuickstartBranch from '../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        Introduction
      </h1>
      <p>
        Lore is an opinionated convention-driven framework designed to make it easier to build browser-based React
        applications that consume data from one or more REST APIs.
      </p>
      <p>
        The framework is designed to be approachable for less experienced developers, by reducing the time and
        knowledge required to build those kinds of applications, while using an architecture that supports
        the feature set and concerns that applications often need as they become larger and more complex over
        time.
      </p>
      <p>
        Lore's goal is to provide a mature and easy-to-use architectural foundation that enables you to spend more of
        your time building features that provide unique user value, and less time spent simply "just getting things
        to work".
      </p>

      <h3>
        Respectfully Opinionated
      </h3>
      <p>
        Lore describes itself as "respectfully opinionated".
      </p>
      <p>
        While "unopinionated software" can provide a great foundation to build on (and largely describes the types
        of libraries that Lore is composed of), at some point software has to have opinions before it can solve
        problems.
      </p>
      <p>
        So the "opinionated" part is what gives Lore its value, and allows the framework to provide built-in
        solutions to many front-end challenges such as data fetching, caching, pagination, error handling and more.
      </p>
      <p>
        The "respectfully" part describes how Lore does that:
      </p>
      <ul>
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

      <h3>
        Core Libraries
      </h3>
      <p>
        While Lore generally strives to be flexible about it's opinions, there are certain libraries and concepts
        that are fairly foundational within those opinions, and may require a high level of effort in order to break
        away from.
      </p>
      <p>
        The core libraries that make up the foundation of Lore are <a href="https://reactjs.org/">
        React</a>, <a href="https://redux.js.org/">Redux</a>, <a href="https://reacttraining.com/react-router/">React
        Router</a>, <a href="https://webpack.js.org/">Webpack</a>, and <a href="https://github.com/axios/axios">
        Axios</a>.
      </p>
      <p>
        Generally speaking, the more comfortable you are with these libraries, then the more the framework should make
        sense, as it's largely just patterns and conventions built around them.
      </p>
      <p>
        You can learn more about how Lore uses each of these libraries by clicking the respective link in the
        "Core Libraries" section in the navigation on the right.
      </p>

      <h3>
        Data Structure
      </h3>
      <p>
        React applications are simplest when they're data-driven, which means that the data passed through your
        application is self-describing.
      </p>
      <p>
        In order to do that, the data needs to not only include the attributes of the resource(s) it represents, but
        also the context surrounding them, such as whether that data is being created, fetched, updated, or was the
        result of an operation that returned an error from the API.
      </p>
      <p>
        The two main data structures Lore uses are called <strong>models</strong>, which represent a single resource,
        and a <strong>collection</strong>, which represents a collection of resources of the same type.
      </p>
      <p>
        You can learn more about the data structure Lore uses for each of these types, and how it addresses that need
        by clicking the respective link in the "Data Structure" section of the navigation on the right.
      </p>

      <h3>
        UI Patterns
      </h3>
      <p>
        Lore's focus is the development of browser-based web applications, and one of the metrics by which it measures
        its success is the number and type of experiences it can easily accommodate. It's also the easiest way to
        demonstrate what the framework is capable of, by showcasing how to construct or solve common application
        needs.
      </p>
      <p>
        You can learn more about each of the primary patterns Lore was built to support by clicking the respective
        link in the "UI Patterns" section of the navigation on the right.
      </p>

      <h3>
        Extensibility
      </h3>
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
