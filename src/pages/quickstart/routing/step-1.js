import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Code from '../../../components/Code';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/layout/final.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 1: Convert Header Title to Link
      </h1>

      <p>
        In this step we'll use <code>react-router</code> to convert the title in the header to a clickable link
        that will always take the user back to the homepage. We won't make use of the functionality in this
        Quickstart, but it's a good practice to follow.
      </p>

      <QuickstartBranch branch="routing.1" />

      <h3>
        Update the Header
      </h3>
      <p>
        Open the <code>Header</code> component and find this line:
      </p>

      <Code text={`
      // src/components/Header.js
      <div className="navbar-brand">
        Lore Quickstart
      </div>
      `} />

      <p>
        Next, import the <code>Link</code> tag from <code>react-router</code> and update the code to look like this:
      </p>
      <Code text={`
      // src/components/Header.js
      import { Link } from 'react-router-dom';
      ...
      <Link className="navbar-brand" to="/">
        Lore Quickstart
      </Link>
      `}/>

      <p>
        In the code above, we've converted the <code>div</code> tag into a clickable link, and set
        the <code>to</code> property to the root URL (<code>/</code>). Now whenever you click the link, you'll be
        taken back to the homepage.
      </p>

      <h3>
        Visual Check-in
      </h3>
      <p>
        If everything went well, your application will look the same visually, but now the title in the header will
        be a clickable link that takes you back to the homepage.
      </p>

      <img className="drop-shadow" src={image} />

      <h2>
        Code Changes
      </h2>
      <p>
        Below is a list of files modified during this step.
      </p>

      <h3>
        src/components/Header.js
      </h3>

      <Code type="jsx" text={`
      import React from 'react';
      import PropTypes from 'prop-types';
      import { Link } from 'react-router-dom';
      
      export default function Header(props) {
        return (
          <nav className="navbar navbar-default navbar-static-top header">
            <div className="container">
              <div className="navbar-header">
                <Link className="navbar-brand" to="/">
                  Lore Quickstart
                </Link>
              </div>
            </div>
          </nav>
        );
      }
      `}/>


      <div className="mt-16">
        <div className="text-xl font-black text-gray-500 mb-4 uppercase tracking-widest">
          Next Steps
        </div>
        <div className="flex p-6 bg-white rounded-lg drop-shadow align-middle">
          <div className="flex-1">
            <div className="font-black">
              Add Feed to routes
            </div>
            <p className="text-sm mt-1" style={{ marginBottom: 0 }}>
              Next we're going to create a <code>Feed</code> component for displaying tweets and add
              it to the routes.
            </p>
          </div>
          <div className="my-auto text-right pl-10">
            <Link to="/quickstart/routing/step-2/">
              <button className="py-3 px-6 bg-blue-500 text-white rounded-full font-extrabold hover:shadow-lg hover:translate-t-2px hover:transition-fast">
                Next step
              </button>
            </Link>
          </div>
        </div>
      </div>

      <h2>
        Next Steps
      </h2>
      <p>
        Next we're going to create a <code>Feed</code> component for displaying tweets and <Link to="/quickstart/routing/step-2/">add
        it to the routes</Link>.
      </p>
    </Template>
  )
};
