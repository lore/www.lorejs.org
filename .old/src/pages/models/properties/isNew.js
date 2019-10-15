import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Models';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        isNew
      </h1>
      <p>
        The <code>isNew()</code> method returns true or false depending on whether or not the model has
        an <code>id</code>, which is determined by whether there is an attribute with a name that matches
        the <code>idAttribute</code>.
      </p>
      <blockquote>
        <p>
          This method is used by <code>save()</code> to determine whether
          to <code>create</code> or <code>update</code> the resource. You can read more about
          that <Link to="/models/methods/save/">here</Link>.
        </p>
      </blockquote>

      <h3>
        Default Implementation
      </h3>
      <p>
        The default implementation looks like this:
      </p>
      <Markdown type="jsx" text={`
      isNew: function() {
        return !this.has(this.idAttribute);
      },
      `}/>

      <h3>
        Usage
      </h3>
      <p>
        Let's use this code to illustrate:
      </p>
      <Markdown type="jsx" text={`
      import { Model } from 'lore-models';

      const Tweet = Model.extend();

      const t1 = new Tweet();
      const t2 = new Tweet({
        id: 2
      });
      `}/>
      <p>
        In the code above, <code>t2.isNew()</code> will return <code>true</code>, because it has no <code>id</code>,
        whereas <code>t2.isNew()</code> would return <code>false</code> because it <em>does</em> has an <code>id</code>.
      </p>
      <p>
        Underneath, this method uses <code>idAttribute</code> to determine whether the model has an <code>id</code>.
        For example, take a look at this code:
      </p>
      <Markdown type="jsx" text={`
      import { Model } from 'lore-models';

      const Tweet = Model.extend({
        idAttribute: '_id'
      });

      const t1 = new Tweet({
        _id: 1
      });
      const t2 = new Tweet({
        id: 2
      });
      `}/>
      <p>
        In this code, <code>t1.isNew()</code> will now return <code>false</code>, because we defined
        the <code>idAttribute</code> to be <code>_id</code>, and it has one. And now <code>t2.isNew()</code> would
        return <code>true</code> because it does <em>not</em> have an <code>id</code>, according to
        the <code>idAttribute</code>.
      </p>
    </Template>
  );
};
