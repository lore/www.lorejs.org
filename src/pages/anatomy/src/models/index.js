import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/Anatomy';

export default (props) => {
  return (
    <Template>
      <h1>
        Introduction
      </h1>
      <p>
        This section describes the application structure.
      </p>

      <p>
        This file represents a configuration that ultimately gets passed to a Model instance of
        <a href="https://github.com/lore/lore/tree/master/packages/lore-models">lore-models</a>. <code>Lore Models</code> is
        the library that Lore uses for making AJAX requests, the interface for which is heavily inspired by
        <a href="http://backbonejs.org/#Model">Backbone.Model</a>.
      </p>

      <p>
        All models inherit their properties from <code>config/models.js</code>. This means that your models themselves
        will often be empty, especially when you're only dealing with a single API that uses consistent conventions. The
        only time you should edit this file is if you need to set a behavior that is specific to this edit (something
        that is not shared by the other models). All shared behavior should go in <code>config/models.js</code>.
      </p>
    </Template>
  );
};
