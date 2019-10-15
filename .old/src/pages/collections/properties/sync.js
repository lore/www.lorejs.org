import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Collections';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        sync
      </h1>
      <p>
        The <code>sync()</code> method is a wrapper over the <Link to="/sync/">sync</Link> function, and allows you
        to modify how server calls are made for the collection.
      </p>

      <h3>
        Default Implementation
      </h3>
      <p>
        The default implementation looks like this:
      </p>
      <Markdown type="jsx" text={`
      import { sync } from 'lore-models';
      ...
      sync: function(method, collection, options) {
        return sync(method, collection, options);
      },
      `}/>

      <h3>
        Usage
      </h3>
      <p>
        You can use override this method to take control of the server call made to the API, but it's unclear what
        you might want to do that. If a use case can be found, this page will be updated to demonstrate it.
      </p>
    </Template>
  );
};
