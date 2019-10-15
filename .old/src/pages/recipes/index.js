import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Recipes';
import Markdown from '../../components/Markdown';
import CodeTabs from '../../components/CodeTabs';
import CodeTab from '../../components/CodeTab';
import QuickstartBranch from '../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        What are Recipes?
      </h1>

      <p>
        Lore is a fairly opinionated framework, but those opinions are constrained by an ability to make safe
        assumptions about what applications are going to need and how API servers will behave and evolve.
      </p>

      <p>
        Some aspects of UI development, while being a common requirement for many applications (such as user
        authentication), often vary significantly in terms of how they need to be implemented. In these situations
        it stops being possible to make reasonable assumptions about HOW to integrate support for them, and the
        best the framework can do is discuss patterns that work well, and provide help for integrating and adapting
        those patterns to meet the specific demands of your application.
      </p>

      <p>
        That section will be covering topics that fall into that category. Some examples of topics that will
        be covered include:
      </p>

      <ul>
        <li>User Authentication</li>
        <li>Adding Stylesheets</li>
        <li>Patterns for Dialogs and Wizards</li>
        <li>Loading Screens</li>
        <li>Disabling Optimistic Behavior</li>
        <li>Error Handling</li>
      </ul>
    </Template>
  )
};
