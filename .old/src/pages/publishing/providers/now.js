import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Publishing';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        Deploying to Now
      </h1>
      <p>
        This section will document how to deploy your application to <a href="https://zeit.co/now">Now</a>, which is
        a hosting service provided by <a href="https://zeit.co/now">zeit.co</a>.
      </p>
      <blockquote>
        <p>
          Additional information about Now can be found in
          the <a href="https://zeit.co/docs">official documentation</a> for the service.
        </p>
      </blockquote>

      <h3>
        Features
      </h3>
      <p>
        This particular service provides several nice features for hosting static applications, including:
      </p>
      <ul>
        <li>
          An easy deploy process
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
        <li>
          Free global CDN, with data centers in USA and Europe
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
        Build the Project
      </h3>
      <p>
        Next, build the application, using whatever environment you want to deploy. We'll
        use <code>production</code> for this example:
      </p>
      <Markdown text={`
      npm run build:production
      `}/>

      <h3>
        Deploy the Project
      </h3>
      <p>
        New Lore projects include support for deploying to Now, and you can deploy the <code>/dist</code> folder you
        created in the Build step by running this command:
      </p>
      <Markdown type="jsx" text={`
      npm run deploy
      `}/>
      <p>
        This command is store in your <code>package.json</code> file, with the relevant section shown below:
      </p>
      <Markdown text={`
      "scripts": {
        "deploy": "npm run now:copy && now dist",
        "now:copy": "cp .now/package.json dist/package.json",
      },
      `}/>

      <p>
        The <code>deploy</code> script does two things:
      </p>
      <ul>
        <li>
          First, it copies the <code>package.json</code> file from the <code>/.now</code> folder at the root of
          your project into the <code>/dist</code> folder.
        </li>
        <li>
          Then it deploys the <code>/dist</code> folder to Now.
        </li>
      </ul>
      <p>
        The <code>package.json</code> file needs to be copied into the <code>/dist</code> folder in order to make
        sure that routing works like you expect when the application is deployed. Without you, the application won't
        reload the page correctly if you try to refresh the browser on a nested route
        like <code>https://app.example.com/users/1</code>.
      </p>
      <p>
        Once the deploy process completes, you'll see a message like this, if the name of the project you
        deployed was <code>lore-quickstart</code>:
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
        is <code>https://lore-quickstart-avvuiuuwto.now.sh</code>. Copy that URL - we'll need it in the next step.
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
      <p>
        If the subdomain you want is already taken, you'll see an error like this:
      </p>
      <Markdown type="jsx" text={`
      > Assigning alias lore-quickstart.now.sh to deployment lore-quickstart-avvuiuuwto.now.sh
      > Error! The alias lore-quickstart.now.sh is a deployment URL or it's in use by a different team.
      `}/>
      <p>
        If that's the case, just keep trying different subdomains until you find one that's available.
      </p>

      <h3>
        Set Up Custom Domain
      </h3>
      <p>
        If you want to deploy to a custom domain like <code>quickstart.lorejs.org</code>, simply
        use that custom domain as the alias, like this:
      </p>
      <Markdown type="jsx" text={`
      now alias lore-quickstart-avvuiuuwto.now.sh quickstart.lorejs.org
      `}/>
      <p>
        In that case, Now will ask you some questions to verify you own the domain, and you may need to add some
        DNS records depending on how you want to prove your ownership.
      </p>
      <p>
        Once you're done though, Now will automatically acquire an SSL certificate for that domain
        from <a href="https://letsencrypt.org/">Let's Encrypt</a>, and your application will then be available
        at <code>https://quickstart.lorejs.org</code>, or whatever domain you chose.
      </p>
    </Template>
  )
};
