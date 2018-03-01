import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/LoreHookActions';
import Markdown from '../../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        addCidToBody
      </h1>
      <p>
        Determines whether the client-side id (the cid attribute in a model) is sent to the server when creating
        data.
      </p>
      <p>
        This is not necessary when interacting with REST APIs as the actions are able to associate the
        request and response, but when performing optimistic updates using WebSockets it is necessary to send a
        client-generated ID to the server in order to associate the data created on the client side with the data
        broadcasted by the server.
      </p>
      <Markdown text={`
      addCidToBody: false
      `}/>
    </Template>
  )
};
