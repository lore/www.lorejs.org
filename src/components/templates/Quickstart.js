import React from 'react';
import NavLink from '../NavLink';
import '../../assets/less/docs.less';

export default (props) => {
  const { children } = props;

  return (
    <div>
      <div className="docs-header" id="content">
        <div className="container">
          <h1>Quickstart</h1>
          <p>
            A quick dive into getting started with Lore
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="Introduction" url="/quickstart/" />

            <li className="doc-section">Setup</li>
            <NavLink title="Overview" url="/quickstart/setup/overview/" />
            <NavLink title="1. Install the CLI" url="/quickstart/setup/step-1/" />
            <NavLink title="2. Create the App" url="/quickstart/setup/step-2/" />
            <NavLink title="3. Run the App" url="/quickstart/setup/step-3/" />
            <NavLink title="4. Setup the API" url="/quickstart/setup/step-4/" />

            <li className="doc-section">Layout</li>
            <NavLink title="Overview" url="/quickstart/layout/overview/" />
            <NavLink title="1. Install Bootstrap" url="/quickstart/layout/step-1/" />
            <NavLink title="2. Add Custom Styles" url="/quickstart/layout/step-2/" />
            <NavLink title="3. Add the Header" url="/quickstart/layout/step-3/" />

            <li className="doc-section">Routing</li>
            <NavLink title="Overview" url="/quickstart/routing/overview/" />
            <NavLink title="1. Convert Title to a Link" url="/quickstart/routing/step-1/" />
            <NavLink title="2. Add Feed to Routes" url="/quickstart/routing/step-2/" />

            <li className="doc-section">Data Structure</li>
            <NavLink title="Overview" url="/quickstart/data/overview/" />
            <NavLink title="1. Add Mock Data to Feed" url="/quickstart/data/step-1/" />
            <NavLink title="2. Create Tweet Component" url="/quickstart/data/step-2/" />
            <NavLink title="3. Add Mock User Data" url="/quickstart/data/step-3/" />

            <li className="doc-section">Fetching Data</li>
            <NavLink title="Overview" url="/quickstart/fetching/overview/" />
            <NavLink title="1. Set API Location" url="/quickstart/fetching/step-1/" />
            <NavLink title="2. Create Tweet Model" url="/quickstart/fetching/step-2/" />
            <NavLink title="Convention over Configuration" url="/quickstart/fetching/step-2b/" />
            <NavLink title="3. Connect Feed Component" url="/quickstart/fetching/step-3/" />
            <NavLink title="4. Display Loading Message" url="/quickstart/fetching/step-4/" />
            <NavLink title="5. Fetch User for Tweet" url="/quickstart/fetching/step-5/" />

            <li className="doc-section">Authentication</li>
            <NavLink title="Overview" url="/quickstart/authentication/overview/" />
            <NavLink title="1. Add Profile to Layout" url="/quickstart/authentication/step-1/" />
            <NavLink title="2. Add Auth0 Config" url="/quickstart/authentication/step-2/" />
            <NavLink title="3. Add Login Page" url="/quickstart/authentication/step-3/" />
            <NavLink title="4. Redirect to Login" url="/quickstart/authentication/step-4/" />
            <NavLink title="5. Add Callback Route" url="/quickstart/authentication/step-5/" />
            <NavLink title="6. Add Logout Page" url="/quickstart/authentication/step-6/" />
            <NavLink title="7. Fetch Current User" url="/quickstart/authentication/step-7/" />
            <NavLink title="8. Save User to Context" url="/quickstart/authentication/step-8/" />

            <li className="doc-section">Server</li>
            <NavLink title="Overview" url="/quickstart/server/overview/" />
            <NavLink title="1. Clone the API Server" url="/quickstart/server/step-1/" />
            <NavLink title="2. Parse the Collection" url="/quickstart/server/step-2/" />
            <NavLink title="3. Parse the Model" url="/quickstart/server/step-3/" />
            <NavLink title="4. Add Unauthorized Experience" url="/quickstart/server/step-4/" />
            <NavLink title="5. Add Authorization Header" url="/quickstart/server/step-5/" />

            <li className="doc-section">Pagination</li>
            <NavLink title="Overview" url="/quickstart/pagination/overview/" />
            <NavLink title="1. Add Pagination Metadata" url="/quickstart/pagination/step-1/" />
            <NavLink title="2. Paginate the Tweets" url="/quickstart/pagination/step-2/" />
            <NavLink title="3. Add Pagination Links" url="/quickstart/pagination/step-3/" />
            <NavLink title="4. Improve User Experience" url="/quickstart/pagination/step-4/" />

            <li className="doc-section">Infinite Scrolling</li>
            <NavLink title="Overview" url="/quickstart/infinite-scrolling/overview/" />
            <NavLink title="1. Create Load More Button" url="/quickstart/infinite-scrolling/step-1/" />
            <NavLink title="2. Create Infinite Scrolling List" url="/quickstart/infinite-scrolling/step-2/" />
            <NavLink title="3. Convert the Feed" url="/quickstart/infinite-scrolling/step-3/" />

            <li className="doc-section">Cleanup</li>
            <NavLink title="Overview" url="/quickstart/cleanup/overview/" />
            <NavLink title="1. Remove Unnecessary Code" url="/quickstart/cleanup/step-1/" />

            <li className="doc-section">Dialogs</li>
            <NavLink title="Overview" url="/quickstart/dialogs/overview/" />
            <NavLink title="1. Add Create Button" url="/quickstart/dialogs/step-1/" />
            <NavLink title="2. Mounting Dialogs" url="/quickstart/dialogs/step-2/" />
            <NavLink title="3. Add Create Dialog" url="/quickstart/dialogs/step-3/" />
            <NavLink title="4. Simplify the Dialog" url="/quickstart/dialogs/step-4/" />
            <NavLink title="5. Generate Dialog via Hook" url="/quickstart/dialogs/step-5/" />
            <NavLink title="6. Add Edit Dialog" url="/quickstart/dialogs/step-6/" />
            <NavLink title="7. Add Delete Dialog" url="/quickstart/dialogs/step-7/" />

            <li className="doc-section">Authorization</li>
            <NavLink title="Overview" url="/quickstart/authorization/overview/" />
            <NavLink title="1. Hide Edit Link" url="/quickstart/authorization/step-1/" />
            <NavLink title="2. Hide Delete Link" url="/quickstart/authorization/step-2/" />
            <NavLink title="3. Alternative Approach" url="/quickstart/authorization/step-3/" />

            <li className="doc-section">Optimistic Updates</li>
            <NavLink title="Overview" url="/quickstart/optimistic/overview/" />
            <NavLink title="1. Freeze Pagination Data" url="/quickstart/optimistic/step-1/" />
            <NavLink title="2. Display New Tweets" url="/quickstart/optimistic/step-2/" />
            <NavLink title="3. Display Optimistic Tweets" url="/quickstart/optimistic/step-3/" />
            <NavLink title="4. Add Optimistic Values" url="/quickstart/optimistic/step-4/" />
            <NavLink title="5. Show Optimistic Visual Cues" url="/quickstart/optimistic/step-5/" />
            <NavLink title="6. Hide Deleted Tweets" url="/quickstart/optimistic/step-6/" />

            <li className="doc-section">Normalization</li>
            <NavLink title="Overview" url="/quickstart/normalization/overview/" />
            <NavLink title="1. Normalize Tweet Response" url="/quickstart/normalization/step-1/" />

            <li className="doc-section">Filtering</li>
            <NavLink title="Overview" url="/quickstart/filtering/overview/" />
            <NavLink title="1. Add Filter" url="/quickstart/filtering/step-1/" />
            <NavLink title="2. Display User Tweets" url="/quickstart/filtering/step-2/" />

            <li className="doc-section">WebSockets</li>
            <NavLink title="Overview" url="/quickstart/websockets/overview/" />
            <NavLink title="1. Add WebSocket Support" url="/quickstart/websockets/step-1/" />

            <li className="doc-section">Publishing</li>
            <NavLink title="Overview" url="/quickstart/publishing/overview/" />
            <NavLink title="1. Create Production Build" url="/quickstart/publishing/step-1/" />
            <NavLink title="2. Deploy to Production" url="/quickstart/publishing/step-2/" />
            <NavLink title="3. Create Production Config" url="/quickstart/publishing/step-3/" />
            <NavLink title="2. Redeploy to Production" url="/quickstart/publishing/step-4/" />

            <li className="doc-section">Next Steps</li>
            <NavLink title="Overview" url="/quickstart/next-steps/overview/" />

            <li className="doc-section">Misc</li>
            <NavLink title="Installing Node" url="/quickstart/misc/installing-node/" />
            <NavLink title="Completed Project" url="/quickstart/misc/completed-project/" />

          </ul>
          {children}
        </div>
      </div>
    </div>
  )
};
