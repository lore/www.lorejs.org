import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Features';
import Video from '../../../components/Video';
import Code from '../../../components/Code';

export default (props) => {
  return (
    <Template>
      <h1>
        Data Structure
      </h1>
      <p>
        Enables data-driven components by supplying components with both data and context.
      </p>

      <h2>
        Overview
      </h2>
      <p>
        Providing the user with visual feedback about what's happening in an application
        is <em>extremely</em> important for providing a good user experience. In order to do that, the
        data components receives needs to be self-describing. That means that no matter what is happening
        in the application, or what response the API returned for a request, the data structure you
        use must be able to represent it, so that all the information a component needs in order to know
        what to render is contained in the data it receives.
      </p>

      <p>
        There are two data containers in Lore; a <Link to="./models/">model</Link> and a <Link to="./collections/">collection</Link>.
      </p>

      <h2>
        Visualization
      </h2>
      <p>
        This video describes the data structure Lore uses to enable data-driven components.
      </p>

      <Video videoId="ZRcExHzY9W0" />

      <h2>
        Data Structure: Resources (models)
      </h2>
      <p>
        A <code>model</code> in Lore represents a single resource, such as a single <code>Post</code> the API might
        return from <code>https://api.myapp.com/posts/1</code>. The default data structure for a model looks like this:
      </p>

      <Code text={`
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

      <h2>
        Data Structure: Queries (collections)
      </h2>
      <p>
        A <code>collection</code> in Lore represents a collection of resources, such as a list
        of <code>Posts</code> the API might return from <code>https://api.myapp.com/posts</code>. The default
        data structure for a collection looks like this:
      </p>

      <Code text={`
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