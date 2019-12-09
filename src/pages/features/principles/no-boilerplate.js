import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Features';
import Video from '../../../components/Video';
import actionBlueprintsMobile from '../../../../.old/src/assets/images/homepage/action-blueprints-mobile.png';
import actionBlueprints from '../../../../.old/src/assets/images/homepage/action-blueprints.png';
import lazyLoading from '../../../../.old/src/assets/images/homepage/decorator-lazy-loading.png';

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
        If not managed carefully, these boilerplate files can easily mount into dozens or even hundreds,
        but with some thoughtful patterns, you can eliminate most of that code entirely.
      </p>


      <h2>
        Write blueprints, not boilerplate
      </h2>
      <p>
        Instead of creating new files for every API request you need to make, imagine writing a function
        instead that takes some arguments describing the endpoint you can to talk to, and then it returns
        a function you can invoke that will perform the desired action. Then instead of writing dozens of
        files, you simply invoke this function repeatedly, providing different arguments, until you
        have a full set of actions for all the endpoints you need to talk to.
      </p>
      <p>
        Lore refers to this concept as using a blueprint, and provides a set of these functions for
        generating action creators and reducers for Redux, a common source of boilerplate.
      </p>
      <ul className="list-disc ml-10">
        <li>
          <strong>
            Action Blueprints
          </strong>
          <p>
            Servers that expose a REST API often follow conventions that make their behavior easy to predict,
            such as naming endpoints after resources and using the http request methods to determine the
            action (create, update, delete, etc).
          </p>
          <p>
            While this code is normally a huge source of boilerplate, with some thoughtful patterns you can take
            advantage of those conventions in order to create blueprints capable of generating action creators
            for you.
          </p>
          <p>
            You can learn more about the action blueprints Lore uses <Link to="/actions/">here</Link>.
          </p>
        </li>
        <li>
          <strong>
            Reducer Blueprints
          </strong>
          <p>
            Reducers are often used to cache application data, and make it accessible to the application
            via the store. Unfortunately, this is often another huge source of boilerplate, as the reducers
            often reflect the names of resources, and expose common ways to accessing data (such as by id
            and by query).
          </p>
          <p>
            But once again, with some thoughtful patterns, you can advantage of those conventions in order to
            create blueprints capable of generating reducers for you—reducers designed to work with the
            actions creators. See how Lore does it.
          </p>
          <p>
            You can learn more about the reducer blueprints Lore uses <Link to="/reducers/">here</Link>.
          </p>
        </li>
      </ul>


      <h2>
        Auto-generate blueprints via conventions
      </h2>
      <p>
        Blueprint functions can be used to eliminate the need to write custom files, by generating in-memory
        action creators and reducers, but you still have to write the code to invoke the functions. And if
        you're consuming a REST API that follows predictable conventions, then often the only thing that
        changes from endpoint to endpoint is the name of the endpoint (e.g. "/posts" for retrieving posts,
        "/users" for retrieving users, etc.).
      </p>
      <p>
        So while you could do this yourself, and explicitly pass a config object for every endpoint, it’s
        also possible to use conventions to create them for you. Lore defaults to that behavior, and uses
        a pattern where the act of creating a file named “tweet” will automatically create a full set of
        actions creators and reducers capable of performing CRUD operations on tweets as well as caching
        all of the data.
      </p>

      <h3>
        Talk to APIs without explicitly writing action creators or reducers
      </h3>
      <p>
        For the reasons stated above, Lore provides a mechanism by which you can create a model (basically
        an empty file) and the framework will automatically provide access to a set of actions and reducers
        capable of supporting common CRUD operations, which can then be configured or overridden as required.
      </p>
      <img className="block md:hidden w-full sm:w-3/4 mx-auto" src={actionBlueprintsMobile} style={{ boxShadow: 'none' }}/>
      <img className="hidden md:block w-full" src={actionBlueprints} style={{ boxShadow: 'none' }}/>

      <h3>
        Then fetch data just by declaring it
      </h3>
      <p>
        In addition to helping you auto-generate action creators and reducers, Lore also provides a React Hook
        that allows you to easily declare what data your components need. If this data exists, it will be
        provided to your component. If it doesn't, Lore will <em>automatically</em> call the required action
        and inform your component when the data comes back.
      </p>
      <img className="w-full" src={lazyLoading} style={{ boxShadow: 'none' }} />
    </Template>
  )
};
