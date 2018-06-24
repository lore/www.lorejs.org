import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/authentication/step-1.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 7: Fetch Current User
      </h1>

      <p>
        In this step we're going to add an endpoint to the API that we can use to retrieve the current user.
      </p>

      <QuickstartBranch branch="authentication.7" />

      <h3>
        Add API Endpoint for Current User
      </h3>
      <p>
        Currently we don't have an API endpoint that we can use to exchange the token from Auth0 for information
        about who the current user is. So let's create one.
      </p>

      <blockquote>
        <p>
          As a reminder, we'll be replacing the mock API with a real one later.
        </p>
      </blockquote>

      <p>
        Open the <code>db.json</code> file at the root of your project and add a new endpoint
        called <code>/user</code> by adding this JSON to the bottom of the file:
      </p>

      <Markdown type="json" text={`
      {
        "users": [
          ...
        ],
        "tweets": [
          ...
        ],
        "user": {
          "id": 1,
          "nickname": "marle",
          "avatar": "https://cloud.githubusercontent.com/assets/2637399/19027074/a37105c0-88e1-11e6-9645-3e1af37671f7.png"
        }
      }
      `}/>

      <p>
        With this change in place, if you navigate to <code>http://localhost:1337/user</code> the API will return
        an object telling us that we are Marle:
      </p>

      <Markdown type="jsx" text={`
      {
        "id": 1,
        "nickname": "marle",
        "avatar": "https://cloud.githubusercontent.com/assets/2637399/19027074/a37105c0-88e1-11e6-9645-3e1af37671f7.png"
      }
      `}/>

      <h3>
        Specify Endpoint in Current User Model
      </h3>
      <p>
        Next, we need to tell Lore where it can fetch the current user. Open the <code>currentUser</code> model
        and find the property for <code>endpoint</code>. Change it from "currentUser" to "user":
      </p>

      <Markdown text={`
      // src/models/currentUser.js
      export default {
        endpoint: 'user'
      }
      `}/>

      <blockquote>
        <p>
          Normally, the <code>endpoint</code> is derived based on conventions and configuration settings, but
          when the name of the endpoint doesn't match the name of the model, then you need to specify it yourself,
          which is the case here.
        </p>
        <p>
          You can learn more about this property <Link to="/models/">here</Link>.
        </p>
      </blockquote>

      <h3>
        Visual Check-in
      </h3>

      <p>
        If everything went well, your application should now look like this. Exactly the same :)
      </p>

      <img className="drop-shadow" src={image} />


      <h2>
        Code Changes
      </h2>

      <p>
        Below is a list of files modified during this step.
      </p>

      <h3>
        db.json
      </h3>

      <Markdown type="jsx" text={`
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
        ],
        "user": {
          "id": 1,
          "nickname": "marle",
          "avatar": "https://cloud.githubusercontent.com/assets/2637399/19027074/a37105c0-88e1-11e6-9645-3e1af37671f7.png"
        }
      }
      `} />

      <h3>
        src/models/currentUser.js
      </h3>
      <Markdown text={`
      export default {
        endpoint: 'user'
      }
      `}/>

      <h2>
        Next Steps
      </h2>

      <p>
        Next we're going to <Link to="../step-8/">fetch the current user and save it to the application's context</Link>.
      </p>
    </Template>
  )
};
