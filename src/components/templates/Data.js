import React from 'react';
import Documentation from './_common/Documentation';

export default (props) => {
  return (
    <Documentation {...props} navigation={[
      {
        title: 'Introduction',
        links: [
          ['Overview', '/data/'],
        ]
      },
      {
        title: 'Static States',
        links: [
          ['Resolved', '/data/resolved/'],
          ['Deleted', '/data/deleted/'],
          ['Not Found', '/data/not-found/']
        ]
      },
      {
        title: 'Optimistic States',
        links: [
          ['Creating', '/data/creating/'],
          ['Updating', '/data/updating/'],
          ['Deleting', '/data/deleting/'],
          ['Fetching', '/data/fetching/']
        ]
      },
      {
        title: 'Error States',
        links: [
          ['Error Creating', '/data/error-creating/'],
          ['Error Updating', '/data/error-updating/'],
          ['Error Deleting', '/data/error-deleting/'],
          ['Error Fetching', '/data/error-fetching/']
        ]
      }
    ]} />
  );
}
