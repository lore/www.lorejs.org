import React from 'react';
import Documentation from './_common/Documentation';

export default (props) => {
  return (
    <Documentation {...props} navigation={[
      {
        title: 'Introduction',
        links: [
          ['Overview', '/building/'],
        ]
      },
      {
        title: 'Build Environments',
        links: [
          ['Development', '/building/environments/development/'],
          ['Production', '/building/environments/production/'],
          ['Custom', '/building/environments/custom/'],
        ]
      }
    ]} />
  );
}
