import React from 'react';
import Documentation from './_common/Documentation';

export default (props) => {
  return (
    <Documentation {...props} navigation={[
      {
        title: 'Introduction',
        links: [
          ['Overview', '/docs/'],
        ]
      },
      {
        title: 'Getting Started',
        links: [
          // ['Overview', '/features/'],
          ['Installation', '/docs/getting-started/installation/'],
        ]
      },
      {
        title: 'Store',
        links: [
          ['Concept', '/docs/store/'],
          ['Setup', '/docs/store/setup/'],
          ['Usage', '/docs/store/usage/']
        ]
      },
      {
        title: 'Bind Actions',
        links: [
          ['Concept', '/docs/bind-actions/'],
          ['Setup', '/docs/bind-actions/setup/'],
          ['Usage', '/docs/bind-actions/usage/']
        ]
      },
      {
        title: 'Data Structure',
        links: [
          ['Concept', '/docs/data-structure/'],
          ['Setup', '/docs/data-structure/setup/'],
          ['Usage', '/docs/data-structure/usage/']
        ]
      },
      {
        title: 'Initializers',
        links: [
          ['Concept', '/docs/initializers/'],
          ['Setup', '/docs/initializers/setup/'],
          ['Usage', '/docs/initializers/usage/']
        ]
      },
      {
        title: 'Modules',
        links: [
          ['Concept', '/docs/modules/'],
          ['Setup', '/docs/modules/setup/'],
          ['Usage', '/docs/modules/usage/']
        ]
      },
      {
        title: 'Environment',
        links: [
          ['Concept', '/docs/environment/'],
          ['Setup', '/docs/environment/setup/'],
          ['Usage', '/docs/environment/usage/']
        ]
      },
      {
        title: 'Config',
        links: [
          ['Concept', '/docs/config/'],
          ['Setup', '/docs/config/setup/'],
          ['Usage', '/docs/config/usage/']
        ]
      },
      {
        title: 'Models',
        links: [
          ['Concept', '/docs/models/'],
          ['Setup', '/docs/models/setup/'],
          ['Usage', '/docs/models/usage/']
        ]
      },
      {
        title: 'Collections',
        links: [
          ['Concept', '/docs/collections/'],
          ['Setup', '/docs/collections/setup/'],
          ['Usage', '/docs/collections/usage/']
        ]
      },
      {
        title: 'Actions',
        links: [
          ['Concept', '/docs/actions/'],
          ['Setup', '/docs/actions/setup/'],
          ['Usage', '/docs/actions/usage/']
        ]
      },
      {
        title: 'Reducers',
        links: [
          ['Concept', '/docs/reducers/'],
          ['Setup', '/docs/reducers/setup/'],
          ['Usage', '/docs/reducers/usage/']
        ]
      }
    ]} />
  );
}
