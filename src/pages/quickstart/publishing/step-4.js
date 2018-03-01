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
        Step 4: Redeploy to Production
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
        Redeploy to Now
      </h3>
      <p>
        With that change in place, redeploy the application to Now, but this time using
        the <code>deploy:production</code> script, which will also build the application before deploying it:
      </p>
      <Markdown type="jsx" text={`
      npm run deploy:production
      `}/>
      <p>
        Once the application is deployed, you'll get another random URL
        like <code>lore-quickstart-jxuyvmeneg.now.sh</code>. Copy that URL, and alias it to the domain you chose
        previously:
      </p>
      <Markdown type="jsx" text={`
      now alias lore-quickstart-jxuyvmeneg.now.sh lore-quickstart.now.sh
      `}/>

      <blockquote>
        <p>
          We just performed a zero-downtime deploy.
        </p>
      </blockquote>

      <p>
        With the aliasing complete, navigate to that URL. This time, after you log in, you'll be redirected back to
        the production website, and the application will work like expect, only now it's hosted on a publicly
        accessible domain.
      </p>

      <h3>
        Modifying the Production Config API Server
      </h3>
      <p>
        It's important to highlight that if you look at the network requests for the application running on surge,
        you'll notice it's still making API calls to <code>localhost:1337</code>. This is important to callout because
        it means the application will only work for YOU, and only while the <code>lore-tutorial-api</code> server is
        running.
      </p>

      <p>
        If you're deploying the application to production for real, it's likely using a different API server, and
        you'll want the production version of the application to behave different that when running on localhost
        for development.
      </p>

      <p>
        To do that, open up <code>config/env/production.js</code> and set the production server for the default
        connection. For example, let's say the production API server is located at <code>https://api.example.com</code>.
        To set that for the production build, edit your <code>production.js</code> config to look like this:
      </p>

      <CodeTabs>
        <CodeTab syntax="ES5" text={`
        export default {

          connections: {
            default: {
              apiRoot: 'https://api.example.com'
            }
          }

        };
        `}/>
        <CodeTab syntax="ES6" text={`
        export default {

          connections: {
            default: {
              apiRoot: 'https://api.example.com'
            }
          }

        }
        `}/>
        <CodeTab syntax="ESNext" text={`
        export default {

          connections: {
            default: {
              apiRoot: 'https://api.example.com'
            }
          }

        }
        `}/>
      </CodeTabs>

      <p>
        With that change in place, if you run <code>npm run build:prod</code> to rebuild the application, and then
        redeploy it to surge using the shortcut command (like <code>surge dist lore-quickstart.surge.sh</code>),
        you'll see the application will automatically change with API server it tries to communicate with, but only
        in production. When running on localhost for development the API server used will still
        be <code>localhost:1337</code>.
      </p>

      <h3>
        Visual Check-in
      </h3>

      <p>
        If everything went well, your application should still look like this (exactly the same) but will now be
        hosted on Now and built for production!
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
        In the next section <Link to="../../next-steps/overview/">we'll talk about next steps</Link>.
      </p>
    </Template>
  )
};
