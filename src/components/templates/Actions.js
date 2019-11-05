import React from 'react';
import Documentation from './_common/Documentation';

export default (props) => {
  return (
    <Documentation {...props} navigation={[
      {
        title: 'Concept',
        links: [
          ['Introduction', '/actions/'],
        ]
      },
      {
        title: 'Blueprints',
        links: [
          ['create', '/actions/create/'],
          ['update', '/actions/update/'],
          ['destroy', '/actions/destroy/'],
          ['find', '/actions/find/'],
          ['get', '/actions/get/'],
        ]
      },
      {
        title: 'Misc',
        links: [
          ['Overriding Actions', '/actions/override/'],
          ['Extending Actions', '/actions/extending/'],
          ['Extracting Actions', '/actions/extract/'],
        ]
      }
    ]} />
  );
}
