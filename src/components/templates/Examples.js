import React from 'react';
import Documentation from './_common/Documentation';

export default (props) => {
  return (
    <Documentation {...props} navigation={[
      {
        title: 'Introduction',
        links: [
          ['Overview', '/examples/'],
        ]
      },
      {
        title: 'Examples',
        links: [
          ['TodoMVC', '/examples/todo-mvc/'],
          ['Authentication', '/examples/authentication/'],
          ['Authorization', '/examples/authorization/'],
          // ['Dialogs', '/examples/dialogs/'],
          ['Error Handling', '/examples/error-handling/'],
          ['Filtering', '/examples/filtering/'],
          ['Infinite Scrolling', '/examples/infinite-scrolling/'],
          ['Optimistic Updates', '/examples/optimistic-updates/'],
          ['Pagination', '/examples/pagination/'],
          ['WebSockets', '/examples/websockets/'],
        ]
      }
    ]} />
  );
}
