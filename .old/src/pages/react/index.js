import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/React';
import Markdown from '../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        Introduction
      </h1>
      <p>
        Lore uses <a href="https://reactjs.org/">React</a> as the component library.
      </p>

      <h3>
        Where does React show up in Lore?
      </h3>
      <p>
        Pretty much everywhere. Lore doesn't depend on React per se, but it's assumed you'll be using it, and
        the ecosystem is being constructed to make it easier to build <em>React applications</em>.
      </p>

      <h3>
        Resources for Learning React
      </h3>
      <p>
        Aside from the <a href="https://reactjs.org/docs/">official documentation</a> and
        the <a href="https://reactjs.org/tutorial/tutorial.html">official tutorial</a>, the links below are good
        resources to learn React.
      </p>
      <ul>
        <li>
          <a href="https://reactforbeginners.com/">
            React for Beginners
          </a>
          <p>
            A video course taught by Wes Bos, where you'll build "Catch of the Day", a "a real-time app for a trendy
            seafood market".
          </p>
        </li>
      </ul>
    </Template>
  );
};
