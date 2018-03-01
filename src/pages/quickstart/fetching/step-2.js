import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/data/final.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 2: Create a Tweet Model
      </h1>

      <p>
        In this step we're going to create a model for our tweet, and in the process, we'll learn about some of the
        functionality automatically provided by Lore as a result.
      </p>

      <QuickstartBranch branch="fetching.2" />

      <h3>
        Create a Tweet Model
      </h3>
      <p>
        Before you can fetch data in Lore, you first need to create a model that represents the resource you want
        to fetch. Since we want to fetch <strong>tweets</strong>, we're going to create a <code>tweet</code> model.
      </p>
      <p>
        Run this command to generate that model:
      </p>

      <Markdown type="sh" text={`
      lore generate model tweet
      `}/>

      <p>
        This will create a model called <code>tweet</code>, and place the file at <code>src/models/tweet.js</code>.
      </p>
      <blockquote>
        <p>
          You can learn more about
          the <code>generate model</code> command <Link to="/cli/lore-generate-model/">here</Link>.
        </p>
      </blockquote>
      <p>
        Similar to the files in the <code>/config</code> folder, this file contains a lot of comments, which document
        the properties you can change, along with their default values. But if you ignore all the comments, this file
        is essentially empty:
      </p>

      <Markdown text={`
      // src/models/tweet.js
      export default {

      };
      `}/>

      <p>
        While it may not look like it, we now have all the code required to fetch tweets from the API, and we'll
        explore some of that functionality in the next step.
      </p>

      <h3>
        Visual Check-in
      </h3>

      <p>
        If everything went well, your application should now look like this. Still the same as before :)
      </p>

      <img className="drop-shadow" src={image} />

      <h2>
        Code Changes
      </h2>

      <p>
        Below is a list of files modified during this step.
      </p>

      <h3>
        src/models/tweet.js
      </h3>

      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        export default {

        };
        `}/>
        <CodeTab syntax="ES6" text={`
        export default {

        }
        `}/>
        <CodeTab syntax="ESNext" text={`
        export default {

        }
        `}/>
      </CodeTabs>

      <h2>
        Next Steps
      </h2>

      <p>
        Next we're going to talk about a design paradigm called convention over configuration,
        and <Link to="../step-2b/">introduce some of the functionality we just unlocked</Link>.
      </p>
    </Template>
  )
};
