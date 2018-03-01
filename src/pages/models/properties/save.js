import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Models';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        save
      </h1>
      <p>
        The <code>save()</code> method is used to <strong>create</strong> or <strong>update</strong> a resource,
        depending on whether the model has an <code>id</code>.
      </p>

      <h3>
        Usage
      </h3>
      <p>
        You can learn about how this method can be used to create
        resources <Link to="/models/usage/create/">here</Link>, and about how it can be used to update
        resources <Link to="/models/usage/update/">here</Link>.
      </p>

      <h3>
        Default Implementation
      </h3>
      <Markdown type="jsx" text={`
      save: function(key, val, options) {
        const model = this;
        let attrs;

        if (key == null || typeof key === 'object') {
          attrs = key;
          options = val;
        } else {
          (attrs = {})[key] = val;
        }

        options = _.extend({ validate: true, parse: true }, options);

        if (attrs) {
          if (!this.set(attrs, options)) {
            return false
          };
        } else if (!this._validate(attrs, options)) {
          return false;
        }

        options.success = function(attributes) {
          if (options.parse) {
            attributes = model.parse(attributes, options);
          }

          if (attributes && !model.set(attributes, options)) {
            return false;
          }
        };

        const method = this.isNew() ? 'create' : (
          options.patch ? 'patch' : 'update'
        );

        if (method === 'patch' && !options.attrs) {
          options.attrs = attrs
        };

        return this.sync(method, this, options);
      },
      `}/>
    </Template>
  );
};
