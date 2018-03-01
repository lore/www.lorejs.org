import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Anatomy';
import Markdown from '../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        db.json
      </h1>
      <p>
        Lore includes <a href="https://github.com/typicode/json-server">json-server</a> in all new projects, which
        provides an easy way to mock out a REST API. This file is what <code>json-server</code> uses to represent
        the database that backs it.
      </p>
      <blockquote>
        <p>
          Sometimes, you find yourself in a position where you get to develop a shiny new front-end against an
          existing REST API, and in that situation, this file isn't very useful. But when you're creating a new
          project from scratch, it can be a lot more useful.
        </p>
      </blockquote>

      <h3>
        Why include json-server?
      </h3>
      <p>
        JSON Server is included by default due to the project's ease of use, excellent feature support (including
        pagination, search, and relationship expansion) and overall ability to help bootstrap new projects.
      </p>
      <p>
        For example:
      </p>
      <ul>
        <li>
          Developing an API is a non-trivial endeavor, and sometimes, you just want to mess around on the
          front-end, maybe play with a new library. This lets you do that.
        </li>
        <li>
          At the beginning of new projects, there often is no API. This gives you an easy way to mock one out
          until the real thing comes along.
        </li>
        <li>
          Sometimes you find a bug in an API endpoint that negatively impacts your ability to continue front-end
          development. You could use this file to mock out just that endpoint, so you can keep moving forward,
          until the real endpoint is fixed.
        </li>
        <li>
          Other reasons!
        </li>
      </ul>

      <p>
        So <code>json-server</code> is included by default because it's super useful! And with
        this <code>db.json</code> file backing it, you can easily view and edit the data that gets served.
      </p>
      <p>
        If you'd like to learn more about all the awesome things <code>json-server</code> can do, see
        the <a href="https://github.com/typicode/json-server">json-server documentation</a> on GitHub.
      </p>

      <h3>
        Defaults
      </h3>
      <p>
        This file is empty by default.
      </p>
      <Markdown text={`
      {

      }
      `}/>

      <h3>
        Example
      </h3>
      <p>
        Here is an example file of what <code>db.json</code> might look like when it's populated. This data is
        taken from the Quickstart.
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
            "createdAt": "2016-11-26T04:03:25.546Z"
          },
          {
            "id": 2,
            "userId": 2,
            "text": "What ARE you two doing? I thought you said something about a nice little slideshow?",
            "createdAt": "2016-11-26T04:03:25.546Z"
          },
          {
            "id": 3,
            "userId": 3,
            "text": "Ma'am, you're mistaken, I'm not a pet, I'm a Knight and master swordsman.",
            "createdAt": "2016-11-26T04:03:25.546Z"
          },
          {
            "id": 4,
            "userId": 4,
            "text": "Nothing can beat science!",
            "createdAt": "2016-11-26T04:03:25.546Z"
          },
          {
            "id": 5,
            "userId": 5,
            "text": "I never imagined that we would settle our score in this dusty old era. Come, let us finish this charade!",
            "createdAt": "2016-11-26T04:03:25.546Z"
          },
          {
            "id": 6,
            "userId": 6,
            "text": "Crono!! We can't keep sponging off my dad! Go and get a job!!",
            "createdAt": "2016-11-26T04:03:25.546Z"
          },
          {
            "id": 7,
            "userId": 7,
            "text": "Something is written in archaic script. I will translate... R...o...i...h...c...l...e...m? Roihclem? System error! I reversed it! It says \\"Melchior!\\".",
            "createdAt": "2016-11-26T04:03:25.546Z"
          }
        ]
      }
      `} />
    </Template>
  );
};
