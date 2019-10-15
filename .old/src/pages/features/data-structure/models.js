import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Features';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        Models
      </h1>
      <p>
        A <code>model</code> in Lore represents a single resource, such as a single <code>Post</code> the API might
        return from <code>https://api.myapp.com/posts/1</code>. The default data structure for a model looks like this:
      </p>

      <Markdown text={`
      post = {
        id: 1,
        cid: 'c1',
        state: 'UPDATING',
        data: {
          id: 1,
          title: 'Cornbread is yummy'
        },
        error: {}
      }
      `}/>

      <p>
        While this structure may seem excessive at first, each property was chosen to address a different use case and all are
        necessary to make sure components can be entirely data-driven:
      </p>

      <h3>
        id
      </h3>
      <p>
        This field is the unique id assigned by the server (number, string, uuid, etc) and is necessary for
        updating and deleting data.
      </p>

      <h3>
        cid
      </h3>
      <p>
        This field is a client-side id assigned by Lore, and is unique for the lifetime of the application (it
        resets when you reload the application). It is necessary for supporting optimistic updates (displaying
        data in the application before it exists in the API)
      </p>

      <h3>
        state
      </h3>
      <p>
        This field represents what is <em>happening</em> to the resource, such as whether it is being created or
        updated, or whether there was an API error while fetching the resource. It is necessary in order to
        communicate to the user what is <em>happening</em> to data.
      </p>

      <h3>
        data
      </h3>
      <p>
        This field contains the JSON data returned by the server and is necessary to display
        meaningful <em>content</em> in the application.
      </p>

      <h3>
        error
      </h3>
      <p>
        This field captures any API errors that are returned (400/500 errors) and is necessary to communicate
        to the user <em>what went wrong</em>.
      </p>

      {/*<h2>*/}
        {/*How is a model created?*/}
      {/*</h2>*/}
      {/*<p>*/}

      {/*</p>*/}
    </Template>
  )
};
