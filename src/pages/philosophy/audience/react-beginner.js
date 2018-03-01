import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Philosophy';
import TocLink from '../../../components/TocLink';
import Markdown from '../../../components/Markdown';
import '../../../assets/less/docs.less';

export default (props) => {
  return (
    <Template>
      <h1>
        React Beginners
      </h1>
      <p>
        If you're new to React, welcome; it's an amazing library with a fantastic ecosystem. But as powerful,
        flexible, and elegant as React is, it can also be <Link to="/videos/your-first-react-app/">incredibly
        daunting to get started</Link>. There are a lot of libraries you need to learn to get started, and if it's
        your first time building a web application, it's not going to be obvious how to connect those libraries into
        a solid, stable, and flexible architecture. That's where Lore comes in.
      </p>
      <p>
        Lore is a framework for building web applications, built on top of some of the most popular libraries in
        the React ecosystem, such as Redux, React Router and Webpack. Lore then applies a series of patterns and
        conventions on top of those libraries that automatically solve for common application needs like API
        communication, pagination and error handling (among others).
      </p>
      <p>
        Lore has two core goals for React beginners;
      </p>
      <ol>
        <li>
          The first is to provide a <strong>safe environment</strong> for you to become comfortable building
          React applications, by letting you focus on learning React, and not getting bogged down by all the
          challenges associated with architecture.
        </li>
        <li>
          The second goal is to <strong>teach good architectural practices</strong>. The patterns and conventions
          Lore uses come from years of building diverse web applications, and in many cases incorporate the
          lessons learned from very costly mistakes.
        </li>
      </ol>
      <p>
        So the value Lore provides to React beginners is that it makes it easy to get started, provides a safe
        environment to learn React, and provides exposure to architectural patterns that have been proven to work
        for both small and large applications alike.
      </p>
      <p>
        Then, as you become more comfortable with React, feel free to dive in at your own pace and learn more about the
        underlying libraries the framework is built from.
      </p>
      <p>
        To help, the documentation for Lore includes recommendations for learning resources for <Link to="/react/">
        React</Link>, <Link to="/redux/">Redux</Link>, <Link to="/react-router/">React Router</Link>,
        and <Link to="/webpack/">Webpack</Link>.
      </p>
    </Template>
  )
};
