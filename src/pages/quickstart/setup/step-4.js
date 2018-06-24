import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 4: Setup the Mock API Server
      </h1>
      <p>
        To emulate a real application, this Quickstart will be
        using <a href="https://github.com/typicode/json-server">json-server</a> to provide a mock API, which is
        included by default in all new projects. You can learn more about the reasons
        why <Link to="/anatomy/db/">here</Link>.
      </p>

      <blockquote>
        <p>
          You can view the finished code for this step by checking out branch <code>setup.4</code> of
          the <Link to="/quickstart/misc/completed-project/">completed project</Link>.
        </p>
      </blockquote>

      <h3>
        Add Mock Data
      </h3>
      <p>
        For this Quickstart we need two API endpoints; one to retrieve <code>tweets</code> and one to
        retrieve <code>users</code>.
      </p>
      <p>
        We can accomplish this by adding data to the <code>db.json</code> file at the root of your project. This
        file is used by <code>json-server</code> as the database, and also serves as a blueprint to describe what
        endpoints should exist.
      </p>

      <p>
        Paste this data into <code>db.json</code>:
      </p>

      <Markdown text={`
      {
        "users": [
          {
            "id": 1,
            "nickname": "ayla",
            "avatar": "https://cloud.githubusercontent.com/assets/2637399/19027069/a356e82a-88e1-11e6-87d8-e3e74f55c069.png"
          },
          {
            "id": 2,
            "nickname": "crono",
            "avatar": "https://cloud.githubusercontent.com/assets/2637399/19027070/a3659c76-88e1-11e6-8434-5d66c70956c7.png"
          },
          {
            "id": 3,
            "nickname": "frog",
            "avatar": "https://cloud.githubusercontent.com/assets/2637399/19027071/a36ef028-88e1-11e6-9756-5e35b6fed834.png"
          },
          {
            "id": 4,
            "nickname": "lucca",
            "avatar": "https://cloud.githubusercontent.com/assets/2637399/19027072/a36f0c7a-88e1-11e6-931e-7f67fe01367b.png"
          },
          {
            "id": 5,
            "nickname": "magus",
            "avatar": "https://cloud.githubusercontent.com/assets/2637399/19027073/a36f67f6-88e1-11e6-9168-7687083cb994.png"
          },
          {
            "id": 6,
            "nickname": "marle",
            "avatar": "https://cloud.githubusercontent.com/assets/2637399/19027074/a37105c0-88e1-11e6-9645-3e1af37671f7.png"
          },
          {
            "id": 7,
            "nickname": "robo",
            "avatar": "https://cloud.githubusercontent.com/assets/2637399/19027075/a3719e2c-88e1-11e6-9abe-5186abc4b04d.png"
          }
        ],
        "tweets": [
          {
            "id": 1,
            "userId": 1,
            "text": "Ayla fight while alive! Win and live. Lose and die. Rule of life. No change rule.",
            "createdAt": "2018-04-24T04:03:25.546Z"
          },
          {
            "id": 2,
            "userId": 2,
            "text": "What ARE you two doing? I thought you said something about a nice little slideshow?",
            "createdAt": "2018-04-24T04:03:25.546Z"
          },
          {
            "id": 3,
            "userId": 3,
            "text": "Ma'am, you're mistaken, I'm not a pet, I'm a Knight and master swordsman.",
            "createdAt": "2018-04-24T04:03:25.546Z"
          },
          {
            "id": 4,
            "userId": 4,
            "text": "Nothing can beat science!",
            "createdAt": "2018-04-24T04:03:25.546Z"
          },
          {
            "id": 5,
            "userId": 5,
            "text": "I never imagined that we would settle our score in this dusty old era. Come, let us finish this charade!",
            "createdAt": "2018-04-24T04:03:25.546Z"
          },
          {
            "id": 6,
            "userId": 6,
            "text": "Crono!! We can't keep sponging off my dad! Go and get a job!!",
            "createdAt": "2018-04-24T04:03:25.546Z"
          },
          {
            "id": 7,
            "userId": 7,
            "text": "Something is written in archaic script. I will translate... R...o...i...h...c...l...e...m? Roihclem? System error! I reversed it! It says \\"Melchior!\\".",
            "createdAt": "2018-04-24T04:03:25.546Z"
          }
        ]
      }
      `} />

      <h3>
        Start the Mock Server
      </h3>
      <p>
        Next start the mock server with this command:
      </p>

      <Markdown type="sh" text={`
      $ npm run server
      `}/>

      <p>
        Once it boots up, you should see output that looks like this:
      </p>

      <Markdown type="sh" text={`
      \{^_^}/ hi!

      Loading db.json
      Done

      Resources
      http://localhost:1337/users
      http://localhost:1337/tweets

      Home
      http://localhost:1337

      `} />

      <p>
        The output above tells us that the API server is available
        at <a href="http://localhost:1337" target="_blank">http://localhost:1337</a> and that we can obtain the list
        of <strong>users</strong> from <code>/users</code> and the list
        of <strong>tweets</strong> from <code>/tweets</code>.
      </p>

      <blockquote>
        <p>
          If you want to change the port <code>json-server</code> runs on, you can learn how to do
          that <Link to="/anatomy/package/">here</Link>.
        </p>
        <p>
          However, if you plan on following along with this Quickstart, it is strongly recommended that
          you <strong>do not change the port</strong>, as later steps will assume it's running on port 1337.
        </p>
      </blockquote>

      <h2>
        Next Steps
      </h2>
      <p>
        Next we're going to <Link to="../../layout/overview/">lay out the application</Link>.
      </p>
    </Template>
  )
};
