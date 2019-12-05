import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Features';
import Code from '../../../components/Code';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';
import Video from '../../../components/Video';

export default (props) => {
  return (
    <Template
    title="React"
    description={(
      <p>
        Lore uses <a href="http://facebook.github.io/react/">React</a> as the component library
        for the presentation tier. Lore doesn't depend on React per se, but it's assumed you'll be using
        it, and the ecosystem is being constructed to make it easier to build <em>React applications</em>.
      </p>
    )}
    >
      <h2>
        Resources for Learning React
      </h2>
      <p>
        Aside from the <a href="https://reactjs.org/docs/">official documentation</a> and
        the <a href="https://reactjs.org/tutorial/tutorial.html">official tutorial</a>, the links below are good
        resources to learn React.
      </p>
      <ul className="list-disc pl-10">
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

      <h2>
        Video
      </h2>
      <p>
        The video below is an excerpt from the full <Link to="/videos/introduction-to-lore/">Introduction to
        Lore</Link> video and provides a summary of how Lore helps with React.
      </p>
      <Video videoId="p3wFp2xJVkc" />
    </Template>
  )
};
