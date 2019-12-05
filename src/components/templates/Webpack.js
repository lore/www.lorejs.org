import React from 'react';
import Documentation from './_common/Documentation';
import NavLink from '../../../.old/src/components/NavLink';

export default (props) => {
  return (
    <Documentation {...props} navigation={[
      {
        title: 'Overview',
        links: [
          ['Introduction', '/webpack/'],
        ]
      },
      {
        title: 'Development',
        links: [
          ['Changing the Port', '/webpack/development/port/'],
          ['Configuring SSL', '/webpack/development/ssl/'],
          ['Configuring Basename', '/webpack/development/basename/'],
        ]
      },
      {
        title: 'Building',
        links: [
          ['Development', '/webpack/building/development/'],
          ['Production', '/webpack/building/production/'],
        ]
      },
      {
        title: 'Analyzing',
        links: [
          ['Stats', '/webpack/analyzing/stats/'],
        ]
      },
      {
        title: 'Features',
        links: [
          ['Cache Busting', '/webpack/features/cache-busting/'],
          ['Chunking', '/webpack/features/chunking/'],
          ['CSS Preprocessors', '/webpack/features/preprocessors/'],
          ['Favicon', '/webpack/features/favicon/'],
          ['Fonts', '/webpack/features/fonts/'],
          ['Images', '/webpack/features/images/'],
          ['Source Maps', '/webpack/features/source-maps/'],
        ]
      },
      {
        title: 'Misc',
        links: [
          ['Verify Production Build Locally', '/webpack/misc/serve/'],
        ]
      }
    ]} />
  );
}
