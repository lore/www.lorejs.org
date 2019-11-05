import React from 'react';
import Documentation from './_common/Documentation';

export default (props) => {
  return (
    <Documentation {...props} navigation={[
      {
        title: 'Concept',
        links: [
          ['Introduction', '/reducers/'],
          ['Concept', '/reducers/concept/']
        ]
      },
      {
        title: 'Blueprints',
        links: [
          ['find', '/reducers/find/'],
          ['byId', '/reducers/byId/'],
          ['byCid', '/reducers/byCid/'],
        ]
      },
      {
        title: 'Misc',
        links: [
          ['Extending & Overriding Reducers', '/reducers/extending/'],
          ['Extracting Reducers', '/reducers/extract/'],
        ]
      }
    ]} />
  );
}
