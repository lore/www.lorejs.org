import React from 'react';
import Documentation from './_common/Documentation';

export default (props) => {
  return (
    <Documentation {...props} navigation={[
      {
        title: 'Introduction',
        links: [
          ['Overview', '/architecture/'],
        ]
      },
      {
        title: 'Features',
        links: [
          ['Filtering', '/architecture/features/filtering/'],
          ['Pagination', '/architecture/features/pagination/'],
          ['Infinite Scrolling', '/architecture/features/infinite-scrolling/'],
          ['WebSockets', '/architecture/features/websockets/'],
          ['Visual Cues', '/architecture/features/visual-cues/'],
          ['Optimistic Updates', '/architecture/features/optimistic-updates/'],
          ['Error Handling', '/architecture/features/error-handling/'],
          ['404 Pages', '/architecture/features/404-pages/'],
        ]
      },
      {
        title: 'AJAX Communication',
        links: [
          ['AJAX Abstraction', '/architecture/ajax/ajax-abstraction/'],
          // ['XMLHttp Request (todo)'],
          // ['AJAX Abstraction (todo)'],
          // ['REST Abstraction (todo)'],
          // ['Templates (todo)'],
          // ['Conventions (todo)'],
        ]
      },
      {
        title: 'Extending Lore',
        links: [
          ['Extending Lore', '/architecture/extending-lore/'],
          ['Extending the Lore CLI', '/architecture/extending-lore-cli/'],
        ]
      },
      {
        title: 'Connect',
        links: [
          ['Lore Connect vs. React-Redux Connect', '/architecture/connect-difference/'],
        ]
      },
    ]} />
  );
}
