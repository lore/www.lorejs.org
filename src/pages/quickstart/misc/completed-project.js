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
        Completed Project
      </h1>

      <p>
        The final code for the Quickstart can be checked out from GitHub using the link below:
      </p>

      <div className="alert alert-danger" role="alert">
        <div>
          <strong>IMPORTANT!!</strong>
        </div>
        <br/>
        <div>
          The quickstart repository <strong>DOES NOT EXIST</strong> for <strong>v0.13</strong> yet. The new version
          of Lore was just released, and the Quickstart repositories are currently being created.
        </div>
        <br/>
        <div>
          This message will be removed as soon as soon as the repos exist. In the meantime, trying to clone the
          example repo is <strong>NOT RECOMMENDED</strong>.
        </div>
      </div>

      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        git clone git@github.com:lore/lore-quickstart-es5-v0.13.git
        `}/>
        <CodeTab syntax="ES6" text={`
        git clone git@github.com:lore/lore-quickstart-es6-v0.13.git
        `}/>
        <CodeTab syntax="ESNext" text={`
        git clone git@github.com:lore/lore-quickstart-esnext-v0.13.git
        `}/>
      </CodeTabs>

      <p>
        Each step in the Quickstart contains the name of the branch with the completed code for that step. For
        example, to check out the code for Step 1 of the Authorization section, which has the branch
        name <code>authorization.1</code>, you would run this command:
      </p>

      <Markdown type="sh" text={`
      git checkout authorization.1
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
