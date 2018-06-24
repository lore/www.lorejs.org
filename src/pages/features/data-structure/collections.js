import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Features';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        Collections
      </h1>
      <p>
        A <code>collection</code> in Lore represents a collection of resources, such as a list
        of <code>Posts</code> the API might return from <code>https://api.myapp.com/posts</code>. The default
        data structure for a collection looks like this:
      </p>

      <Markdown text={`
      post = {
        state: 'FETCHING',
        data: [],
        query: {
          where: { authorId: '123' },
          pagination: { page: 1 }
        },
        meta: {},
        error: {}
      }
      `}/>

      <p>
        Similar to models, each property was chosen to address a different use case and all are necessary to make sure
        components can be entirely data-driven.
      </p>

      <h3>
        state
      </h3>
      <p>
        This field represents what is <em>happening</em> to the resource, such as whether it is being fetched,
        or whether there was an API error while fetching the resources. It is necessary in order to communicate
        to the user what is <em>happening</em> to data.
      </p>

      <h3>
        data
      </h3>
      <p>
        This field contains the JSON data returned by the server and is necessary to display
        meaningful <em>content</em> in the application. When the array is populated, it is populated with a
        list of <code>model</code> resources, each having the data structure described above.
      </p>

      <h3>
        query
      </h3>
      <p>
        This field contains a description of what this data <em>is</em>. Specifically, it contains
        the <code>where</code> clause that describe what <em>criteria</em> the data matches (such as posts by a
        specific author) and a <code>pagination</code> clause that describes the <em>slice</em> of data (such as
        which page and how many results exists in a page). It is necessary for displaying information about the
        data and for creating pagination controls.
      </p>

      <h3>
        meta
      </h3>
      <p>
        This field contains any metadata information provided by the server that you need to associate with the
        data. It is necessary for communicating to the user the total number of matching resources (when the API
        provides it) or something like rate-limiting information, if the API communicates the number of requests
        left in the allotted period.
      </p>

      <h3>
        error
      </h3>
      <p>
        This field captures any API errors that are returned (400/500 errors) and is necessary to communicate
        to the user <em>what went wrong</em>.
      </p>
    </Template>
  )
};
