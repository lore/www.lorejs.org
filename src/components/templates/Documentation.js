import React from 'react';
import Documentation from './_common/Documentation';

export default (props) => {
  return (
    <Documentation {...props} navigation={[
      {
        title: 'Getting Started',
        links: [
          // ['Overview', '/features/'],
          ['Installation', '/docs/getting-started/installation/'],
        ]
      },
      {
        title: 'Store (v1)',
        links: [
          ['Concept', '/docs/store/'],
          ['Setup', '/docs/store/setup/'],
          ['Usage', '/docs/store/usage/']
        ]
      },
      {
        title: 'Bind Actions (v1)',
        links: [
          ['Concept', '/docs/bind-actions/'],
          ['Setup', '/docs/bind-actions/setup/'],
          ['Usage', '/docs/bind-actions/usage/']
        ]
      },
      {
        title: 'Data Structure (v1)',
        links: [
          ['Concept', '/docs/data-structure/'],
          ['Setup', '/docs/data-structure/setup/'],
          ['Usage', '/docs/data-structure/usage/']
        ]
      },
      {
        title: 'Initializers (v1)',
        links: [
          ['Concept', '/docs/initializers/'],
          ['Setup', '/docs/initializers/setup/'],
          ['Usage', '/docs/initializers/usage/']
        ]
      },
      {
        title: 'Modules (v1)',
        links: [
          ['Concept', '/docs/modules/'],
          ['Setup', '/docs/modules/setup/'],
          ['Usage', '/docs/modules/usage/']
        ]
      },
      {
        title: 'Environment (v1)',
        links: [
          ['Concept', '/docs/environment/'],
          ['Setup', '/docs/environment/setup/'],
          ['Usage', '/docs/environment/usage/']
        ]
      },
      {
        title: 'Config (v1)',
        links: [
          ['Concept', '/docs/config/'],
          ['Setup', '/docs/config/setup/'],
          ['Usage', '/docs/config/usage/']
        ]
      },
      {
        title: 'Models (v1)',
        links: [
          ['Concept', '/docs/models/'],
          ['Setup', '/docs/models/setup/'],
          ['Usage', '/docs/models/usage/']
        ]
      },
      {
        title: 'Collections (v1)',
        links: [
          ['Concept', '/docs/collections/'],
          ['Setup', '/docs/collections/setup/'],
          ['Usage', '/docs/collections/usage/']
        ]
      },
      {
        title: 'Actions (v1)',
        links: [
          ['Concept', '/docs/actions/'],
          ['Setup', '/docs/actions/setup/'],
          ['Usage', '/docs/actions/usage/']
        ]
      },
      {
        title: 'Reducers (v1)',
        links: [
          ['Concept', '/docs/reducers/'],
          ['Setup', '/docs/reducers/setup/'],
          ['Usage', '/docs/reducers/usage/']
        ]
      },
      {
        title: 'Data Structure',
        links: [
          ['Overview', '/features/data-structure/'],
          ['Models', '/features/data-structure/models/'],
          ['Collections', '/features/data-structure/collections/']
        ]
      },
      {
        title: 'Building',
        links: [
          ['Introduction', '/building/'],

          // Build Environments
          ['Development', '/building/environments/development/'],
          ['Production', '/building/environments/production/'],
          ['Custom', '/building/environments/custom/'],
        ]
      },
      {
        title: 'Publishing',
        links: [
          ['Introduction', '/publishing/'],

          // Deploy Hosts
          ['Now', '/publishing/providers/now/'],

          // Misc
          ['Removing Now Support', '/publishing/misc/removing-now/'],
        ]
      },
      {
        title: 'Misc',
        links: [
          ['Authentication', '/docs/authentication/'],
          ['React', '/docs/react/'],
        ]
      }
    ]} />
  );
}
