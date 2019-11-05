import React from 'react';
import Documentation from './_common/Documentation';

export default (props) => {
  return (
    <Documentation {...props} navigation={[
      {
        title: 'Concept',
        links: [
          ['Introduction', '/collections/'],
          ['Usage', '/collections/usage/retrieve/'],
          ['Sync', '/sync/']
        ]
      },
      {
        title: 'Properties',
        links: [
          ['add', '/collections/properties/add/'],
          ['fetch', '/collections/properties/fetch/'],
          ['initialize', '/collections/properties/initialize/'],
          ['model', '/collections/properties/model/'],
          ['models', '/collections/properties/models/'],
          ['parse', '/collections/properties/parse/'],
          ['reset', '/collections/properties/reset/'],
          ['sync', '/collections/properties/sync/'],
          ['url', '/collections/properties/url/'],
        ]
      },
      {
        title: 'Misc',
        links: [
          ['History', '/collections/misc/history/'],
        ]
      }
    ]} />
  );
}
