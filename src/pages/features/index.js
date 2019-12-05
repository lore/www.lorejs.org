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
      title="Features"
      subtitle="Overview"
      description={(
        <p>
          Lore is an opinionated convention-driven framework designed to make it easier to build browser-based React
          applications that consume data from one or more REST APIs.
        </p>
      )}
    >
      <h2>
        Audience
      </h2>
      <p>
        The framework is designed to be approachable for less experienced developers, by reducing the time and
        knowledge required to build those kinds of applications, while using an architecture that supports
        the feature set and concerns that applications often need as they become larger and more complex over
        time.
      </p>

      <h2>
        Goal
      </h2>
      <p>
        Lore's goal is to provide a mature and easy-to-use architectural foundation that enables you to spend more of
        your time building features that provide unique user value, and less time spent simply "just getting things
        to work".
      </p>

      <h2>
        Core Libraries
      </h2>
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
        You can learn more about each of the core libraries by clicking their navigation link on the right.
      </p>

      <h2>
        Supported Patterns
      </h2>
      <p>
        Lore's focus is the development of browser-based web applications, and one of the metrics by which it measures
        its success is the number and type of experiences it can easily accommodate. It's also the easiest way to
        demonstrate what the framework is capable of, by showcasing how to construct or solve common application
        needs.
      </p>
      <p>
        You can learn more about each of the primary patterns Lore was built to support by clicking the respective
        link in the "Supported Patterns" section of the navigation on the right.
      </p>
    </Template>
  )
};
