import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/LoreHookCollections';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        lore-hook-collections
      </h1>
      <p>
        Source code for this hook can be found on GitHub <a href="https://github.com/lore/lore/tree/master/packages/lore-hook-collections">at this link</a>.
      </p>

      <h2>
        Purpose
      </h2>

      <p>
        Iterates through all models in <code>lore.models</code> and creates a corresponding Collection for each of them. This is done
        so we can fetch collections of resources and not just individual resources.
      </p>

      <blockquote>
        <p>
          This hook isn't meant to be interacted with directly at the moment. While there are things
          you <strong>could</strong> do with it, the use cases for needing to do so are not clear.
        </p>
      </blockquote>

      <h2>
        Config
      </h2>

      <Markdown text={`
      module.exports = {

        /**
         * While this file can influence the behavior of collections, there is currently
         * no clear reason why you would ever need to use it.
         *
         * If you need to define collection specific behavior (such as parsing server responses
         * or defining headers to add to requests) you should do that in 'config/connections.js'.
         *
         * If you have multiple connections, and need to define which collections use each
         * connection, you should do that in 'config/models.js' as this file inherits that
         * behavior.
         *
         */

      };
      `}/>

      <h3>
        Example Usage
      </h3>

      <p>
        This hook generates the collections that are used by the <code>find</code> action to communicate with the API server and retrieve
        a list of resources.
      </p>

      <p>
        For example, given a <code>tweet</code> model, and assuming the <code>apiRoot</code> for the default <code>connection</code> is set to
        <code>https://api.example.com</code>, the code below will produce an API call to <code>https://api.example.com/tweets?user=1</code>
      </p>

      <Markdown text={`
      var collection = new lore.collections.tweet();

      collection.fetch({
        data: {
          user: 1
        }
      });
      `}/>
    </Template>
  )
};
