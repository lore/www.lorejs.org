import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Features';
import Video from '../../../components/Video';
import Code from '../../../components/Code';

export default (props) => {
  return (
    <Template
      title="Data Driven"
      subtitle="Design principle"
    >
      <h2>
        Overview
      </h2>
      <p>
        Providing the user with visual feedback about what's happening in an application
        is <em>extremely</em> important for providing a good user experience.
      </p>
      <p>
        In order to do that, the data a component receives needs to be self-describing. That means that
        no matter what is happening in the application, or what response the API returned for a request,
        the data structure you use must be able to represent it, so that all the information a component
        needs in order to know what to render is contained in the data it receives.
      </p>
      <p>
        To support this Lore wraps all resources returned from an API in a data structure designed to
        make that possible.
      </p>

      <h2>
        Visualization
      </h2>
      <p>
        This video describes the data structure Lore uses to enable data-driven components.
      </p>

      <Video videoId="ZRcExHzY9W0" />

      <h2>
        Resource Structure
      </h2>
      <p>
        When you fetch a single resource from an API, such as a <code>post</code> an API
        like <code>https://api.myapp.com/posts/1</code>, Lore wraps the response in a data structure
        that looks like this:
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
        While this structure may seem excessive at first, each property was chosen to address a different
        use case and all are necessary to make sure components can be entirely data-driven:
      </p>

      <ul className="list-disc ml-10">
        <li>
          <strong>id</strong>
          <p>
            This field is the unique id assigned by the server (number, string, uuid, etc) and is necessary for
            updating and deleting data.
          </p>
        </li>
        <li>
          <strong>cid</strong>
          <p>
            This field is a client-side id assigned by Lore, and is unique for the lifetime of the application (it
            resets when you reload the application). It is necessary for supporting optimistic updates (displaying
            data in the application before it exists in the API)
          </p>
        </li>
        <li>
          <strong>state</strong>
          <p>
            This field represents what is <em>happening</em> to the resource, such as whether it is being created or
            updated, or whether there was an API error while fetching the resource. It is necessary in order to
            communicate to the user what is <em>happening</em> to data.
          </p>
        </li>
        <li>
          <strong>data</strong>
          <p>
            This field contains the JSON data returned by the server and is necessary to display
            meaningful <em>content</em> in the application.
          </p>
        </li>
        <li>
          <strong>error</strong>
          <p>
            This field captures any API errors that are returned (400/500 errors) and is necessary to communicate
            to the user <em>what went wrong</em>.
          </p>
        </li>
      </ul>

      <h2>
        Query Structure
      </h2>
      <p>
        When you fetch a collection of resources from an api, like a list
        of <code>posts</code> from <code>https://api.myapp.com/posts</code>, Lore wraps the response in a data
        structure that looks like this:
      </p>

      <Code text={`
      posts = {
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
        Similar to individual resources, each property was chosen to address a different use case and all
        are necessary to make sure components can be entirely data-driven.
      </p>

      <ul className="list-disc ml-10">
        <li>
          <strong>state</strong>
          <p>
            This field represents what is <em>happening</em> to the resource, such as whether it is being fetched,
            or whether there was an API error while fetching the resources. It is necessary in order to communicate
            to the user what is <em>happening</em> to data.
          </p>
        </li>
        <li>
          <strong>data</strong>
          <p>
            This field contains the JSON data returned by the server and is necessary to display
            meaningful <em>content</em> in the application. When the array is populated, it is populated with a
            list of <code>model</code> resources, each having the data structure described above.
          </p>
        </li>
        <li>
          <strong>query</strong>
          <p>
            This field contains a description of what this data <em>is</em>. Specifically, it contains
            the <code>where</code> clause that describe what <em>criteria</em> the data matches (such as posts by a
            specific author) and a <code>pagination</code> clause that describes the <em>slice</em> of data (such as
            which page and how many results exists in a page). It is necessary for displaying information about the
            data and for creating pagination controls.
          </p>
        </li>
        <li>
          <strong>meta</strong>
          <p>
            This field contains any metadata information provided by the server that you need to associate with the
            data. It is necessary for communicating to the user the total number of matching resources (when the API
            provides it) or something like rate-limiting information, if the API communicates the number of requests
            left in the allotted period.
          </p>
        </li>
        <li>
          <strong>error</strong>
          <p>
            This field captures any API errors that are returned (400/500 errors) and is necessary to communicate
            to the user <em>what went wrong</em>.
          </p>
        </li>
      </ul>
    </Template>
  )
};
