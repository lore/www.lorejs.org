import React from 'react';
import Documentation from './_common/Documentation';

export default (props) => {
  return (
    <Documentation {...props} navigation={[
      {
        title: 'Introduction',
        links: [
          ['Overview', '/features/'],
          // ['Philosophy', '/features/philosophy/'],
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
        title: 'Design Principles',
        links: [
          ['Data Driven', '/features/principles/data-driven/'],
          ['No Boilerplate', '/features/principles/no-boilerplate/'],
          ['Optimistic', '/features/principles/optimistic/'],
          ['Efficient Networking', '/features/principles/efficient-networking/'],
          ['Real-time Considerations', '/features/principles/real-time/'],
        ]
      },
      {
        title: 'Common Patterns',
        links: [
          ['Filtering', '/features/patterns/filtering/'],
          ['Pagination', '/features/patterns/pagination/'],
          ['Infinite Scrolling', '/features/patterns/infinite-scrolling/'],
          ['Visual Cues', '/features/patterns/visual-cues/'],
          ['Optimistic Updates', '/features/patterns/optimistic-updates/'],
          ['Dialogs', '/features/patterns/dialogs/'],
          // ['Wizards', '/features/patterns/wizards/'],
          ['Error Handling', '/features/patterns/error-handling/'],
          ['404 Pages', '/features/patterns/404-pages/'],
          ['WebSockets', '/features/patterns/websockets/'],
        ]
      }
    ]} />
  );
}
