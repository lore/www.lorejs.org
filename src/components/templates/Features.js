import React from 'react';
import Documentation from './_common/Documentation';

export default (props) => {
  return (
    <Documentation {...props} navigation={[
      {
        title: 'Introduction',
        links: [
          ['Overview', '/features/'],
        ]
      },
      {
        title: 'Core Libraries',
        links: [
          ['React', '/features/core/react/'],
          ['Webpack', '/features/core/webpack/'],
          ['Redux', '/features/core/redux/'],
          ['React Router', '/features/core/react-router/'],
        ]
      },
      {
        title: 'Data Structure',
        links: [
          ['Overview', '/features/data-structure/'],
          ['Models', '/features/data-structure/models/'],
          ['Collections', '/features/data-structure/collections/']
        ]
      },
      {
        title: 'UI Patterns',
        links: [
          ['Filtering', '/features/filtering/'],
          ['Pagination', '/features/pagination/'],
          ['Infinite Scrolling', '/features/infinite-scrolling/'],
          ['WebSockets', '/features/websockets/'],
          ['Visual Cues', '/features/visual-cues/'],
          ['Optimistic Updates', '/features/optimistic-updates/'],
          ['Dialogs', '/features/dialogs/'],
          ['Wizards', '/features/wizards/'],
          ['Error Handling', '/features/error-handling/'],
          ['404 Pages', '/features/404-pages/']
        ]
      }
    ]} />
  );
}
