import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/LoreHookActions';
import Markdown from '../../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        Default Config
      </h1>
      <p>
        The default configuration is shown below.
      </p>
      <Markdown text={`
      import create from './blueprints/create';
      import destroy from './blueprints/destroy';
      import get from './blueprints/get';
      import find from './blueprints/find';
      import refetch from './blueprints/refetch';
      import update from './blueprints/update';

      export default {
        normalize: true,
        addCidToBody: false,
        cidBodyAttributeName: 'cid',
        blueprints: {
          create,
          destroy,
          get,
          find,
          refetch,
          update
        }
      }
      `}/>
    </Template>
  )
};
