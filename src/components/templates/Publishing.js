import React from 'react';
import Documentation from './_common/Documentation';

export default (props) => {
  return (
    <Documentation {...props} navigation={[
      {
        title: 'Introduction',
        links: [
          ['Overview', '/publishing/'],
        ]
      },
      {
        title: 'Deploy Hosts',
        links: [
          ['Now', '/publishing/providers/now/']
        ]
      },
      {
        title: 'Misc',
        links: [
          ['Removing Now', '/publishing/misc/removing-now/']
        ]
      }
    ]} />
  );
}
