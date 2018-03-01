import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        Next Steps
      </h1>
      <p>
        <strong>Congratulations!</strong> You've reached the end of the Quickstart.
      </p>
      <p>
        At this point, you've now been exposed to most of the core features and functionality of Lore. If you
        enjoyed building the Quickstart, you're encouraged to try building your own application with Lore.
      </p>
      <p>
        If you choose to do that, you may find yourself wanting a to gain better understanding of how Lore works and
        how to extend the framework to customize it's behavior. If that's the case, the documentation below will
        help you gain that understanding:
      </p>
      <ul>
        <li>
          If you'd like to develop a better understanding of how Redux works, you can find some recommended
          resources for learning it <Link to="/redux/">here.</Link>
        </li>
        <li>
          If you'd like to learn how to create your own hooks, in order to add custom behavior to your application,
          you can learn how to do that by following the <Link to="/hooks/tutorial/">custom hook tutorial</Link>.
        </li>
        <li>
          The Quickstart was able to rely on the built-in actions and reducers, but you may find yourself in a
          situation where you need to modify their behavior. In that case, you learn how
          to <Link to="/cli/lore-extract-action/">extract the built-in
          actions</Link> or <Link to="/cli/lore-extract-action/">extract the built-in reducers</Link>, so that you
          can see how they work and modify their behavior.
        </li>
        <li>
          You can learn more about creating custom actions here (todo), which can be useful if you need to create
          actions that don't map to a REST API endpoint.
        </li>
        <li>
          You can learn more about creating custom reducers here (todo), which can be useful if you need to store
          application state that doesn't map to a REST API endpoint.
        </li>
        <li>
          You can learn more about how the <code>connect</code> decorator works <Link to="/connect/">here</Link>, as
          well as how to extend it's behavior with new blueprints.
        </li>
      </ul>
      <p>
        That's it! Thanks for investing your time to learn a little more about Lore, and we hope you learned something
        valuable along the way.
      </p>

      <h2>
        Questions & Issues
      </h2>
      <p>
        If you have any questions, issues, features requests, ideas to improve the user
        experience, or just want additional thoughts about how to solve a front-end challenge with Lore, don't
        hesitate to <a href="https://github.com/lore/lore/issues">submit an issue</a> with your thoughts!
      </p>
      <p>
        Documentation is challenging to create, due to the diverse perspectives and knowledge of the people reading
        it. But if you're confused or struggling to understand something, you're probably not alone, so please
        don't hesitate to file an issue.
      </p>

    </Template>
  )
};
