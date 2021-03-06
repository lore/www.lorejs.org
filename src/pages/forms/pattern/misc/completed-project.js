import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/forms/PatternConstruction';
import Markdown from '../../../../components/Markdown';
import CodeTabs from '../../../../components/CodeTabs';
import CodeTab from '../../../../components/CodeTab';
import QuickstartBranch from '../../../../components/FormsPatternTutorialBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        Completed Project
      </h1>

      <p>
        The final code for the Pattern Tutorial can be checked out from GitHub using the link below:
      </p>

      <CodeTabs>
        <CodeTab title="SSH" active={true} text={`
        $ git clone git@github.com:lore/lore-forms-pattern-tutorial.git
        `}/>
        <CodeTab title="HTTPS" text={`
        $ git clone https://github.com/lore/lore-forms-pattern-tutorial.git
        `}/>
      </CodeTabs>

      <p>
        Each step in the Quickstart contains the name of the branch with the completed code for that step. For
        example, to check out the code for Step 1 of the Create Dialog section, which has the branch
        name <code>create.1</code>, you would run this command:
      </p>

      <Markdown type="sh" text={`
      git checkout create.1
      `}/>

      <blockquote>
        <p>
          If you're developing on Mac or Windows, you can also use the excellent (and
          official) <a href="https://desktop.github.com/">GitHub Desktop Client</a>.
        </p>
      </blockquote>
    </Template>
  )
};
