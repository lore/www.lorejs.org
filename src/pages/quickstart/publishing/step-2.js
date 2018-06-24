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
        Step 2: Deploy to Production
      </h1>

      <p>
        In this step we'll publish our production build to the web.
      </p>

      <blockquote>
        <p>
          There is no branch for this step because it does not modify any code.
        </p>
      </blockquote>

      <h3>
        The Deploy Host
      </h3>
      <p>
        We'll be deploying our project to <a href="https://zeit.co/now">Now</a>, which is a hosting service provided
        by <a href="https://zeit.co/now">zeit.co</a>.
      </p>
      <p>
        This particular service is being used for several reasons:
      </p>
      <ul>
        <li>
          Easy deploy process
        </li>
        <li>
          Free SSL certificates for custom domains
        </li>
        <li>
          Zero-downtime deploys
        </li>
        <li>
          Ability to roll-back to previous deploys
        </li>
        <li>
          Provides an informative web dashboard
        </li>
      </ul>

      <h3>
        Create Account
      </h3>
      <p>
        To create an account, first install the Now CLI by running this command:
      </p>
      <Markdown type="jsx" text={`
      npm install -g now
      `}/>

      <p>
        Once installed, run this command to login, which is also the sign up process:
      </p>

      <Markdown type="jsx" text={`
      now login
      `}/>

      <p>
        Now will prompt you to enter the email address you'd like to use for your account:
      </p>

      <Markdown type="jsx" text={`
      > Enter your email: [email]
      `}/>

      <p>
        Once you enter your email, Now will send you an email with a verification link:
      </p>

      <Markdown type="jsx" text={`
      > We sent an email to [email]. Please follow the steps provided
        inside it and make sure the security code matches Proud Galapagos Penguin.
      ⠼ Waiting for your confirmation
      `}/>

      <p>
        Find the email in your inbox, and click the link inside. Once you do, the CLI will automatically update
        to display the confirmation message below, and your account will now exist:
      </p>

      <Markdown type="jsx" text={`
      > We sent an email to jason_hansen@outlook.com. Please follow the steps provided
        inside it and make sure the security code matches Proud Galapagos Penguin.
      ✔ Email confirmed
      ✔ Fetched your personal details
      > Ready! Authentication token and personal details saved in "~/.now"
      `}/>

      <h3>
        Deploy the Project
      </h3>

      <p>
        Next, deploy the <code>/dist</code> folder you created in the last step by running this command:
      </p>
      <Markdown type="jsx" text={`
      npm run deploy
      `}/>

      <blockquote>
        <p>
          This script does two things:
        </p>
        <ul>
          <li>
            First, it copies the <code>package.json</code> file from the <code>/.now</code> folder at the root of
            your project into the <code>/dist</code> folder. This file is required in order to get expected behavior
            when refreshing the application.
          </li>
          <li>
            Then it deploys the <code>/dist</code> folder to Now.
          </li>
        </ul>
      </blockquote>

      <p>
        Once the process completes, you'll see a message like this:
      </p>

      <Markdown type="jsx" text={`
      > Deploying ~/lore-quickstart/dist under jchansen
      > Using Node.js 8.11.1 (default)
      > https://lore-quickstart-avvuiuuwto.now.sh [in clipboard] (sfo1) [11s]
      > Synced 4 files (5.63MB) [11s]
      > Building…
      > ▲ npm install
      > ⧗ Installing 1 main dependency…
      > ✓ Installed 130 modules [2s]
      > ▲ Snapshotting deployment
      > ▲ Saving deployment image (5.8M)
      > Build completed
      > ✔ Verified sfo1 (1) [12s]
      > Success! Deployment ready!
      `}/>

      <p>
        The important part here is the URL the project was deployed to, which for this example
        is <code>https://lore-quickstart-avvuiuuwto.now.sh</code>. Copy that URL - we'll going to need it in just a
        minute.
      </p>

      <h3>
        Set up an Alias
      </h3>
      <p>
        Every time you deploy an application to Now, it will create a unique auto-generated URL for that deploy.
        Then you <em>alias</em> that URL to actual domain you want people to access the application from.
      </p>
      <blockquote>
        <p>
          It's this two-step process that enables <strong>zero-downtime deploys</strong>. It also means that if you
          screw up, you can easily roll-back to a previous version of your application simply by switching the alias.
        </p>
      </blockquote>
      <p>
        Let's illustrate what this process looks like.
      </p>
      <p>
        In the example above, Now deployed the application to <code>lore-quickstart-avvuiuuwto.now.sh</code>. If we
        wanted users to access that application from <code>lore-quickstart.now.sh</code>, then we would create
        an <em>alias</em> from <code>lore-quickstart-avvuiuuwto.now.sh</code> to <code>lore-quickstart.now.sh</code> using
        this command:
      </p>
      <Markdown type="jsx" text={`
      now alias lore-quickstart-avvuiuuwto.now.sh lore-quickstart.now.sh
      `}/>
      <p>
        And now the application would now be available from <code>https://lore-quickstart.now.sh</code>.
      </p>
      <blockquote>
        <p>
          To make the application accessible from a custom domain like <code>quickstart.lorejs.org</code>, simply
          use that custom domain as the alias.
        </p>
      </blockquote>
      <p>
        Now it's your turn. Choose a subdomain for your project, like <code>lore-quickstart-jchansen</code>, and
        then create the alias. If the subdomain you want is already taken, you'll see an error like this:
      </p>
      <Markdown type="jsx" text={`
      > Assigning alias lore-quickstart.now.sh to deployment lore-quickstart-avvuiuuwto.now.sh
      > Error! The alias lore-quickstart.now.sh is a deployment URL or it's in use by a different team.
      `}/>
      <p>
        If that's the case, just keep trying different subdomains until you find one that's available.
      </p>

      <h3>
        Try it Out
      </h3>
      <p>
        Once your application has an alias, navigate to that URL, and the application should redirect you to Auth0
        to log in.
      </p>
      <p>
        After you log in, look at the URL in the browser, and notice that Auth0 redirected you
        to <code>http://localhost:3000/auth/callback</code>, and <em>not</em> to your production deploy, such
        as <code>https://lore-quickstart.now.sh/auth/callback</code>.
      </p>
      <p>
        We'll learn how to fix that in the next step.
      </p>


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
        There are no code changes required for this step.
      </p>


      <h2>
        Next Steps
      </h2>

      <p>
        In the next section we'll <Link to="../step-3/">create a production config to fix the redirect issue</Link>.
      </p>
    </Template>
  )
};
