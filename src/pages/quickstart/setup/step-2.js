import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Code from '../../../components/Code';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 2: Create the Application
      </h1>

      <p>
        To create a new application, type <code>lore new</code> into the command line followed by the name of your
        application. For this example we are going to call our application <code>lore-quickstart</code>.
      </p>

      <Code type="jsx" text={`
      $ lore new lore-quickstart
      `} />

      <p>
        This will create a new directory called <code>lore-quickstart</code>, and place all the application files
        inside. You should see this message when the task completes.
      </p>

      <Code type="sh" text={`
      info:  Created a new Lore application 'lore-quickstart'
      `}/>

      <blockquote>
        <p>
          When you create an application, your language preference is recorded in the <code>.lorerc</code> file
          at the root of the project, and the CLI will inspect this file before executing commands.
        </p>
        <p>
          That means this is the only time you'll need to declare the JavaScript version, as any files you generate
          from this point forward will be created using your preference automatically.
        </p>
        <p>
          You can learn more about the <code>.lorerc</code> file <Link to="/anatomy/lorerc/">here</Link>.
        </p>
      </blockquote>

      <h3>
        Install Dependencies
      </h3>
      <p>
        Once the project is created, navigate into the project directory and install the dependencies.
      </p>

      <Code type="markdown" text={`
      $ cd lore-quickstart
      $ npm install
      `}/>

      <p>
        Depending on your network connection, it may take a few minutes for this step to complete.
      </p>

      <h2>
        Next Steps
      </h2>

      <p>
        Now that we've created our project and installed the dependencies,
        let's <Link to="/quickstart/setup/step-3/">build the application</Link>.
      </p>

    </Template>
  )
};
