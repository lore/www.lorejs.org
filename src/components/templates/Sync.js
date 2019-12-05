import React from 'react';
import Documentation from './_common/Documentation';
import NavLink from '../../../.old/src/components/NavLink';

export default (props) => {
  return (
    <Documentation {...props} navigation={[
      {
        title: 'Introduction',
        links: [
          ['Overview', '/sync/']
        ]
      }
    ]} />
  );
}
