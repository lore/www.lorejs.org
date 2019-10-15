import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Models';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        generateCid
      </h1>
      <p>
        The <code>generateCid()</code> method generates the <code>cid</code> value for the model. The default behavior
        is to generate a string value that looks like <code>c1</code>, <code>c2</code>, etc.
      </p>

      <h3>
        Default Implementation
      </h3>
      <p>
        The default implementation looks like this:
      </p>
      <Markdown type="jsx" text={`
      import _ from 'lodash';
      ...
      generateCid: function() {
        return _.uniqueId(this.cidPrefix);
      },
      `}/>
      <p>
        The <code>uniqueId()</code> method belogns to lodash, and you can find documentation for
        it <a href="https://lodash.com/docs/4.17.5#uniqueId">here</a>.
      </p>

      <h3>
        Usage
      </h3>
      <p>
        The default behavior for models generates <code>cid</code> values that look
        like <code>c1</code>, <code>c2</code>, etc. Take a look at this code to illustrate:
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
        There are times however when you might want to completely change how a <code>cid</code> is generated. For
        example, when performing optimistic updates using websockets, you need to generate a unique id on the client
        side, and then send that id to the server. In that case, the value needs to be unique <em>across all
        clients</em>, and not just unique for a single user.
      </p>
      <p>
        For example, let's say we wanted to generate a UUID as value for each <code>cid</code>, to guarantee it was
        globally unique. We could do that like this:
      </p>
      <Markdown type="jsx" text={`
      import { Model } from 'lore-models';
      import uuid from 'node-uuid';

      const Tweet = Model.extend({
        generateCid: function() {
          return uuid.v4();
        }
      });

      const t1 = new Tweet();
      const t2 = new Tweet();
      `}/>
      <p>
        Now <code>t1</code> will have a <code>cid</code> like <code>088025da-4adc-4ada-9103-aae0660e522a</code>,
        and <code>t2</code> will have a <code>cid</code> like <code>0ea5059c-8c92-4406-bf74-3c87ccdc5199</code>.
      </p>
    </Template>
  );
};
