import React from 'react';
import Documentation from './_common/Documentation';

export default (props) => {
  return (
    <Documentation {...props} navigation={[
      {
        title: 'Introduction',
        links: [
          ['Overview', '/quickstart/'],
        ]
      },
      {
        title: 'Setup',
        links: [
          ["Overview", "/quickstart/setup/overview/"],
          ["1. Install the CLI", "/quickstart/setup/step-1/"],
          ["2. Create the App", "/quickstart/setup/step-2/"],
          ["3. Run the App", "/quickstart/setup/step-3/"],
          ["4. Setup the API", "/quickstart/setup/step-4/"],
        ]
      },
      {
        title: 'Layout',
        links: [
          ["Overview", "/quickstart/layout/overview/"],
          ["1. Install Bootstrap", "/quickstart/layout/step-1/"],
          ["2. Add Custom Styles", "/quickstart/layout/step-2/"],
          ["3. Add the Header", "/quickstart/layout/step-3/"],
        ]
      },
      {
        title: 'Routing',
        links: [
          ["Overview", "/quickstart/routing/overview/"],
          ["1. Convert Title to a Link", "/quickstart/routing/step-1/"],
          ["2. Add Feed to Routes", "/quickstart/routing/step-2/"],
        ]
      },
      {
        title: 'Data Structure',
        links: [
          ["Overview", "/quickstart/data/overview/"],
          ["1. Add Mock Data to Feed", "/quickstart/data/step-1/"],
          ["2. Create Tweet Component", "/quickstart/data/step-2/"],
          ["3. Add Mock User Data", "/quickstart/data/step-3/"],
        ]
      },
      {
        title: 'Fetching Data',
        links: [
          ["Overview", "/quickstart/fetching/overview/"],
          ["1. Set API Location", "/quickstart/fetching/step-1/"],
          ["2. Create Tweet Model", "/quickstart/fetching/step-2/"],
          ["Convention over Configuration", "/quickstart/fetching/step-2b/"],
          ["3. Connect Feed Component", "/quickstart/fetching/step-3/"],
          ["4. Display Loading Message", "/quickstart/fetching/step-4/"],
          ["5. Fetch User for Tweet", "/quickstart/fetching/step-5/"],
        ]
      },
      {
        title: 'Authentication',
        links: [
          ["Overview", "/quickstart/authentication/overview/"],
          ["1. Add Profile to Layout", "/quickstart/authentication/step-1/"],
          ["2. Add Auth0 Config", "/quickstart/authentication/step-2/"],
          ["3. Add Login Page", "/quickstart/authentication/step-3/"],
          ["4. Redirect to Login", "/quickstart/authentication/step-4/"],
          ["5. Add Callback Route", "/quickstart/authentication/step-5/"],
          ["6. Add Logout Page", "/quickstart/authentication/step-6/"],
          ["7. Fetch Current User", "/quickstart/authentication/step-7/"],
          ["8. Save User to Context", "/quickstart/authentication/step-8/"],
        ]
      },
      {
        title: 'Server',
        links: [
          ["Overview", "/quickstart/server/overview/"],
          ["1. Clone the API Server", "/quickstart/server/step-1/"],
          ["2. Parse the Collection", "/quickstart/server/step-2/"],
          ["3. Parse the Model", "/quickstart/server/step-3/"],
          ["4. Add Unauthorized Experience", "/quickstart/server/step-4/"],
          ["5. Add Authorization Header", "/quickstart/server/step-5/"],
        ]
      },
      {
        title: 'Pagination',
        links: [
          ["Overview", "/quickstart/pagination/overview/"],
          ["1. Add Pagination Metadata", "/quickstart/pagination/step-1/"],
          ["2. Paginate the Tweets", "/quickstart/pagination/step-2/"],
          ["3. Add Pagination Links", "/quickstart/pagination/step-3/"],
          ["4. Improve User Experience", "/quickstart/pagination/step-4/"],
        ]
      },
      {
        title: 'Infinite Scrolling',
        links: [
          ["Overview", "/quickstart/infinite-scrolling/overview/"],
          ["1. Create Load More Button", "/quickstart/infinite-scrolling/step-1/"],
          ["2. Create Infinite Scrolling List", "/quickstart/infinite-scrolling/step-2/"],
          ["3. Convert the Feed", "/quickstart/infinite-scrolling/step-3/"],
        ]
      },
      {
        title: 'Cleanup',
        links: [
          ["Overview", "/quickstart/cleanup/overview/"],
          ["1. Remove Unnecessary Code", "/quickstart/cleanup/step-1/"],
        ]
      },
      {
        title: 'Dialogs',
        links: [
          ["Overview", "/quickstart/dialogs/overview/"],
          ["1. Add Create Button", "/quickstart/dialogs/step-1/"],
          ["2. Mounting Dialogs", "/quickstart/dialogs/step-2/"],
          ["3. Add Create Dialog", "/quickstart/dialogs/step-3/"],
          ["4. Simplify the Dialog", "/quickstart/dialogs/step-4/"],
          ["5. Add Edit Dialog", "/quickstart/dialogs/step-5/"],
          ["6. Add Delete Dialog", "/quickstart/dialogs/step-6/"],
        ]
      },
      {
        title: 'Authorization',
        links: [
          ["Overview", "/quickstart/authorization/overview/"],
          ["1. Hide Edit and Delete Links", "/quickstart/authorization/step-1/"],
        ]
      },
      {
        title: 'Optimistic Updates',
        links: [
          ["Overview", "/quickstart/optimistic/overview/"],
          ["1. Freeze Pagination Data", "/quickstart/optimistic/step-1/"],
          ["2. Display New Tweets", "/quickstart/optimistic/step-2/"],
          ["3. Display Optimistic Tweets", "/quickstart/optimistic/step-3/"],
          ["4. Add Optimistic Values", "/quickstart/optimistic/step-4/"],
          ["5. Show Optimistic Visual Cues", "/quickstart/optimistic/step-5/"],
          ["6. Hide Deleted Tweets", "/quickstart/optimistic/step-6/"],
        ]
      },
      {
        title: 'Normalization',
        links: [
          ["Overview", "/quickstart/normalization/overview/"],
          ["1. Normalize Tweet Response", "/quickstart/normalization/step-1/"],
        ]
      },
      {
        title: 'Filtering',
        links: [
          ["Overview", "/quickstart/filtering/overview/"],
          ["1. Add Filter", "/quickstart/filtering/step-1/"],
          ["2. Display User Tweets", "/quickstart/filtering/step-2/"],
        ]
      },
      {
        title: 'WebSockets',
        links: [
          ["Overview", "/quickstart/websockets/overview/"],
          ["1. Add WebSocket Support", "/quickstart/websockets/step-1/"],
          ["2. Send Client ID to API", "/quickstart/websockets/step-2/"],
        ]
      },
      {
        title: 'Publishing',
        links: [
          ["Overview", "/quickstart/publishing/overview/"],
          ["1. Create Production Build", "/quickstart/publishing/step-1/"],
          ["2. Deploy to Production", "/quickstart/publishing/step-2/"],
          ["3. Create Production Config", "/quickstart/publishing/step-3/"],
          ["2. Redeploy to Production", "/quickstart/publishing/step-4/"],
        ]
      },
      {
        title: 'Next Steps',
        links: [
          ["Overview", "/quickstart/next-steps/overview/"],
        ]
      },
      {
        title: 'Misc',
        links: [
          ["Installing Node", "/quickstart/misc/installing-node/"],
          ["Completed Project", "/quickstart/misc/completed-project/"],
        ]
      }
    ]} />
  );
}
