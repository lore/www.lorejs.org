import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Features';
import Video from '../../../components/Video';

export default (props) => {
  return (
    <Template
      title="No Boilerplate"
      subtitle="Design principle"
    >
      <p>
        Code in web applications can be roughly split into two categories; code that visualizes
        data, and code that operates on data (fetching, updating, etc).
      </p>
      <p>
        In practice the code that
        communicates with servers to retrieve and modify data can be extremely repetitive to write, and have
        so much similarity that it feels like writing boilerplate (code that you generate by coping
        other code and making small modifications).
      </p>
      <p>
        If not managed carefully, these boilerplate files
        can easily mount into dozens or even hundreds, but with some thoughtful patterns, you can
        eliminate most of that code entirely. See how Lore addresses this below.
      </p>
      <h2>
        Action Creator Blueprints
      </h2>
      <p>
        Servers that expose a REST API often follow conventions that make their behavior easy to predict,
        such as naming endpoints after resources and using the http request method to determine the
        action (create, update, delete, etc). While normally a huge source of boilerplate code, with
        some thoughtful patterns you can take advantage of those conventions in order to create
        blueprints capable of generating action creators for you. Curious? See how Lore does it.
      </p>

      <h2>
        Reducer Blueprints
      </h2>
      <p>
        Reducers are often used to cache application data, and make it accessible to the application
        via the store. Unfortunately, this is often another huge source of boilerplate, as the reducers
        often reflect the names of resources, and expose common ways to accessing data (such as by id
        and by query). But once again, with some thoughtful patterns, you can advantage of those
        conventions in order to create blueprints capable of generating reducers for you—reducers
        designed to work with the actions creators. See how Lore does it.
      </p>

      <h2>
        Auto-generation via Conventions
      </h2>
      <p>
        While blueprint functions can be used to eliminate the need to write custom files, by
        generating in-memory action creators and reducers, by themselves you still have to write
        the code to invoke the functions. While you could do this yourself (via configuration)
        it’s also possible to use conventions to create them for you. Lore defaults to that behavior,
        and uses a pattern where the act of creating a file named “tweet” will automatically create
        a full set of actions creators and reducers capable of performing CRUD operations on tweets
        as well as caching all of the data.
      </p>
    </Template>
  )
};
