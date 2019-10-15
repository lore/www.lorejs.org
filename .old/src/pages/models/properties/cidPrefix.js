import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Models';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        cidPrefix
      </h1>
      <p>
        The <code>cidPrefix</code> property for "client id prefix", and is used for generating
        the <code>cid</code> value for the model.
      </p>
      <p>
        To see how it's used, see the docs for the <code>generateCid()</code> method <Link to="/models/properties/generateCid/">here</Link>.
      </p>

      <h3>
        Default Implementation
      </h3>
      <p>
        The default implementation looks like this:
      </p>
      <Markdown type="jsx" text={`
      cidPrefix: 'c',
      `}/>

      <h3>
        Usage
      </h3>
      <p>
        Whenever you create a model, it is assigned a <code>cid</code>, which is generated using
        the <code>cidPrefix</code> followed by an integer.
      </p>
      <p>
        Let's use this code to illustrate:
      </p>
      <Markdown type="jsx" text={`
      import { Model } from 'lore-models';

      const Tweet = Model.extend();

      const t1 = new Tweet();
      const t2 = new Tweet();
      `}/>
      <p>
        In the example above, <code>t1</code> will have a <code>cid</code> of <code>c1</code>, and <code>t2</code> will
        have a <code>cid</code> of <code>c2</code>.
      </p>
      <p>
        If we want to change this, we can define a custom <code>cidPrefix</code> like this:
      </p>
      <Markdown type="jsx" text={`
      import { Model } from 'lore-models';

      const Tweet = Model.extend({
        cidPrefix: 'tweet'
      });

      const t1 = new Tweet();
      const t2 = new Tweet();
      `}/>
      <p>
        In the code above, we define a custom <code>cidPrefix</code> declaring that all <code>cid</code> values should
        begin with <code>tweet</code>. This will mean <code>t1</code> will now have
        a <code>cid</code> of <code>tweet1</code>, and <code>t2</code> will now have
        a <code>cid</code> of <code>tweet2</code>.
      </p>
    </Template>
  );
};
