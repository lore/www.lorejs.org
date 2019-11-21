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
          ['Extending Lore', '/architecture/extending/extending-lore/'],
          ['Extending the Lore CLI', '/architecture/extending/extending-lore-cli/'],
        ]
      },
      {
        title: 'Connect',
        links: [
          ['Lore Connect vs. React-Redux Connect', '/architecture/misc/connect-difference/'],
        ]
      },
    ]} />
  );
}
