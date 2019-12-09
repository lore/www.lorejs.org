import React from 'react';
import Documentation from './_common/Documentation';
import NavLink from '../../../.old/src/components/NavLink';

export default (props) => {
  return (
    <Documentation {...props} navigation={[
      {
        title: 'Introduction',
        links: [
          ['Overview', '/models/'],
          // ['Concept', '/models/concept/'],
        ]
      },
      {
        title: 'Usage',
        links: [
          ['create', '/models/usage/create/'],
          ['delete', '/models/usage/delete/'],
          ['retrieve', '/models/usage/retrieve/'],
          ['update', '/models/usage/update/']
        ]
      },
      {
        title: 'Properties',
        links: [
          ['cidPrefix', '/models/properties/cidPrefix/'],
          ['destroy', '/models/properties/destroy/'],
          ['fetch', '/models/properties/fetch/'],
          ['generateCid', '/models/properties/generateCid/'],
          ['has', '/models/properties/has/'],
          ['idAttribute', '/models/properties/idAttribute/'],
          ['initialize', '/models/properties/initialize/'],
          ['isNew', '/models/properties/isNew/'],
          ['parse', '/models/properties/parse/'],
          ['save', '/models/properties/save/'],
          ['set', '/models/properties/set/'],
          ['sync', '/models/properties/sync/'],
          ['toJSON', '/models/properties/toJSON/'],
          ['url', '/models/properties/url/'],
          ['urlRoot', '/models/properties/urlRoot/'],
          ['validate', '/models/properties/validate/'],
          ['validationError', '/models/properties/validationError/']
        ]
      },
      {
        title: 'Utils',
        links: [
          ['Custom Properties', '/models/utils/custom/'],
          ['Extending', '/models/utils/extend/'],
        ]
      },
      {
        title: 'Misc',
        links: [
          ['History', '/models/misc/history/']
        ]
      }
    ]} />
  );
}
