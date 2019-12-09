import React from 'react';
import Documentation from './_common/Documentation';

export default (props) => {
  return (
    <Documentation {...props} navigation={[
      {
        title: 'Introduction',
        links: [
          ['Overview', '/connect/'],
          // ['Concept', '/connect/concept/'],
        ]
      },
      {
        title: 'Blueprints',
        links: [
          ['all', '/connect/all/'],
          ['byCid', '/connect/byCid/'],
          ['byId', '/connect/byId/'],
          ['find', '/connect/find/'],
          ['findAll', '/connect/findAll/'],
          ['first', '/connect/first/'],
          ['singleton', '/connect/singleton/'],
        ]
      },
      {
        title: 'Utilities',
        links: [
          ['connect', '/connect/connect/'],
          ['Connect', '/connect/connect-component/'],
          ['getState', '/connect/getState/'],
        ]
      },
      {
        title: 'Misc',
        links: [
          ['Extending the Blueprints', '/connect/extending/'],
        ]
      }
    ]} />
  );
}
