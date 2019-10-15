import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Redux';
import Markdown from '../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        Introduction
      </h1>
      <p>
        The architectural foundation for Lore is built around <a href="https://redux.js.org">Redux</a>.
      </p>
      <p>
        Understanding Redux will signifcantly demystify how Lore works, and will make it much easier to reason
        about what's happening.
      </p>

      <h3>
        Where does Redux show up in Lore?
      </h3>
      <p>
        Pretty much every where.
      </p>
      <ul>
        <li>
          All data in the application flows through Redux.
        </li>
        <li>
          The actions that communicate with APIs are all Redux action creators.
        </li>
        <li>
          All data is stored in Redux reducers.
        </li>
        <li>
          The Master component is subscribed to Redux store to make sure your application updates when the data
          changes.
        </li>
        <li>
          The connect decorator inspects the Redux store state to determine whether the data you requested
          exists, of it an action needs to be invoked.
        </li>
      </ul>

      <h3>
        Resources for Learning Redux
      </h3>
      <p>
        Aside from the <a href="http://redux.js.org/">official documentation</a>, the links below are good
        resources to learn Redux.
      </p>
      <ul>
        <li>
          <a href="https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6">
            A Cartoon Intro to Redux
          </a>
          <p>
            Lin Clark explains Redux using cartoons - fun <em>and</em> educational!
          </p>
        </li>
        <li>
          <a href="https://egghead.io/series/getting-started-with-redux">
            Getting Started With Redux
          </a>
          <p>
            A free video course on <a href="https://egghead.io/">egghead.io</a> taught by Dan Abramov, the creator
            of Redux. Get introduced to Redux by the person who created it.
          </p>
        </li>
        <li>
          <a href="https://egghead.io/courses/building-react-applications-with-idiomatic-redux">
            Building React Applications with Idiomatic Redux
          </a>
          <p>
            A free follow-up video course to "Getting Started With Redux", and taught once again by Dan Abramov.
            Introduces more advanced concepts.
          </p>
        </li>
        <li>
          <a href="https://learnredux.com/">
            Learn Redux
          </a>
          <p>
            Another free video course, this one taught by Wes Bos, where you'll build Reduxstagram, a "a simple
            photo app that will simplify the core ideas behind Redux, React Router and React.js".
          </p>
        </li>
      </ul>
    </Template>
  );
};
