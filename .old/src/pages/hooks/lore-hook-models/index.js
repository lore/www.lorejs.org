import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/LoreHookModels';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        lore-hook-models
      </h1>
      <p>
        Source code for this hook can be found on GitHub <a href="https://github.com/lore/lore/tree/master/packages/lore-hook-models">at this link</a>.
      </p>

      <h2>
        Purpose
      </h2>

      <p>
        This hooks creates a Model for every file in <code>src/models</code> and expose the resultant Models on <code>lore.models</code>.
      </p>

      <h2>
        Config
      </h2>

      <Markdown text={`
      module.exports = {

        /**
         * The default API connection that models should use if they have no explicit mapping.
         */

        // defaultConnection: 'default'

        /**
         * If your application interacts with multiple APIs, create a connection for each
         * API and then define which models are associated with each connection here.
         *
         * Here is an example for an application with a versioned API (v1 and v2):
         *
         * {
         *   v1: [
         *     'currentUser',
         *     'author'
         *   ],
         *   v2: [
         *     'book',
         *     'publisher'
         *   ]
         * }
         */

        // connectionModelMap: {
        //   default: []
        // }

      };
      `}/>

      <h2>
        Example Usage
      </h2>

      <p>
        Given a project where a <code>tweet</code> model has been created like so:
      </p>

      <Markdown text={`
      src
      |-models
        |-tweet.js
      `}/>

      <p>
        This hook will find it, create a Model from it (using a combination of the data in <code>config/connections.js</code>,
        <code>config/models</code>, and <code>src/models/tweet.js</code>), and expose the Model on <code>lore.models.tweet</code>.
      </p>

      <p>
        This resulting Models are used by the <code>create</code>, <code>destroy</code>, <code>get</code>, and <code>update</code> actions to communicate with the API
        server and interact with a single resource.
      </p>

      <p>
        For example, given a <code>tweet</code> model, and assuming the <code>apiRoot</code> for the default <code>connection</code> is set to
        <code>https://api.example.com</code>, the code below will produce an API call to <code>https://api.example.com/tweets/1</code>
      </p>

      <Markdown text={`
      var model = new lore.models.tweet({
        id: 1
      });

      model.fetch();
      `}/>

      <h2>
        Override Rules
      </h2>

      <p>
        Models typically need three things in order to be able to fetch a collection of resources
      </p>

      <ol>
        <li>The URL of the API server to hit</li>
        <li>The path to hit on the server (<code>/tweets</code> for example)</li>
        <li>A method to parse the server response (such as to convert timestamps or moment.js objects or something)</li>
      </ol>

      <p>
        For apps that only have a single API server, the endpoint the models should use is the same the app is
        configured for by default.  So that can be obtained from <code>apiRoot</code> in <code>config/models.js</code>. The path that
        should be appended to the API Root can be derived from the model name (<code>tweet</code>) and whether or not <code>pluralize</code> has
        been set to true or false in <code>config/models.js</code>.
      </p>

      <p>
        Then we just need to know how to parse the data, and for apps where the attribute field names in the models mirror
        those in the API response (which is typical for new applications), even that method might be the same, especially if
        you just want to convert globally applied timestamps like <code>createdAt</code> and <code>updatedAt</code> to an easier to work with format
        like a moment.js object (unless you prefer to do the conversion in your components).
      </p>

      <p>
        So for that scenario, the <code>parse</code> method can be pulled from <code>config/models.js</code>.
      </p>

      <p>
        For apps that have been around for a while, and have survived API changes, it's not uncommon to have the parse methods
        be a little more specific to that model, such as renaming fields before the client code uses it to prevent API changes
        from rippling through th applications.  For those scenarios, you may find yourself starting to populate files
        like <code>src/models/tweet.js</code>.
      </p>

      <p>
        And if you're application consumes data from more than one API server, you'll also need to update the <code>urlRoot</code> in
        the individual <code>src/models/tweet.js</code> files so they know which server they should talk to.
      </p>

      <p>
        So given all of that, the <code>models</code> hook builds the configuration for each Model it creates using a set of
        rules.
      </p>

      <ol>
        <li>
          It first pulls in <code>config/models.js</code> to get the <code>apiRoot</code> and <code>pluralize</code> setting.
        </li>
        <li>
          It then overrides that config with anything it finds in the individual config file located at <code>src/models/tweet.js</code>, which will also include the
          <code>parse</code> method collections should use.
        </li>
        <li>
          Finally, it fills in anything that still hasn't been defined using conventions (such as deriving the <code>urlRoot</code>
          from the model name and the <code>pluralize</code> setting).
        </li>
      </ol>
    </Template>
  )
};
