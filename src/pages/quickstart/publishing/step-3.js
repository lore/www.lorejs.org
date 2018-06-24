import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/filtering/final.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 3: Create Production Config
      </h1>

      <p>
        In this step we'll learn how to customize our configuration for different environments, and fix our redirect
        issue in production.
      </p>

      <QuickstartBranch branch="production.3" />

      <h3>
        Environment-Specific Configurations
      </h3>
      <p>
        Lore is designed to support multiple deploy environments.
      </p>
      <p>
        If you look inside the <code>/config</code> folder, you'll see another folder named <code>/env</code> that
        contains files named <code>development.js</code> and <code>production.js</code>. These files allow you to
        customize your configuration for different deploy environments.
      </p>
      <p>
        The files in <code>/config</code> are meant to be your defaults; the settings that make most sense in
        development. But other environments, like <strong>staging</strong> and <strong>production</strong>, will
        have different needs, like as a different API, or different feature flags, or different rules about error
        reporting.
      </p>
      <p>
        The <code>/env</code> folder is where you specify these differences, and they will override the default
        settings specified in <code>/config</code>.
      </p>

      <h3>
        Create Production Config
      </h3>
      <p>
        To get our application working on Now, we need to change the Auth0 configuration so that instead of
        redirecting the user to <code>http://localhost:3000/auth/callback</code> after login, they are instead
        redirected to <code>https://lore-quickstart.now.sh/auth/callback</code> (or whatever your chosen alias is
        set to).
      </p>
      <p>
        To do this, open <code>config/env/production.js</code>. If you ignore the comments, the file is empty,
        and looks like this:
      </p>
      <Markdown type="jsx" text={`
      export default {

      }
      `}/>
      <p>
        Update that file to override the redirect URI for Auth0 by adding this code:
      </p>
      <Markdown type="jsx" text={`
      export default {
        auth0: {
          redirectUri: 'https://lore-quickstart.now.sh/auth/callback'
        }
      }
      `}/>

      <h3>
        How does that override the setting?
      </h3>
      <p>
        During the build process, the <code>/config</code> folder is compiled into a single object, and made
        available through <code>lore.config</code>. To illustrate, take this partial config folder:
      </p>
      <Markdown type="jsx" text={`
      config
        |-- auth0.js
        |-- actions.js
        |-- ...
      `}/>

      <p>
        To convert the folder into an object, each file becomes a key/value pair, where the name of the file is
        the key, and what the file exports becomes the value.
      </p>
      <p>
        That means the folder structure above would be converted into an object that looks like this:
      </p>

      <Markdown type="jsx" text={`
      config: {
        auth0: {
         // ...auth0.js...
        },
        actions: {
          // ...actions.js..
        }
      }
      `}/>

      <p>
        The environment file in the <code>/env</code> folder then overrides this object.
      </p>
      <p>
        So if we want to override the <code>redirectUri</code> property in the <code>auth0.js</code> config, then
        we simply need to provide an <code>auth0</code> key, and then specify the property we want to override, which
        generates the code we used above:
      </p>
      <Markdown type="jsx" text={`
      export default {
        auth0: {
          redirectUri: 'https://lore-quickstart.now.sh/auth/callback'
        }
      }
      `}/>


      <h3>
        Visual Check-in
      </h3>

      <p>
        If everything went well, your application should still look like this (exactly the same).
      </p>

      <img className="drop-shadow" src={image} />


      <h2>
        Code Changes
      </h2>

      <p>
        Below is a list of files modified during this step.
      </p>

      <h3>
        config/env/production.js
      </h3>
      <Markdown type="jsx" text={`
      export default {
        auth0: {
          redirectUri: 'https://lore-quickstart.now.sh/auth/callback'
        }
      }
      `}/>


      <h2>
        Next Steps
      </h2>

      <p>
        In the next section we'll <Link to="../step-4/">publish the application to the web</Link>.
      </p>
    </Template>
  )
};
