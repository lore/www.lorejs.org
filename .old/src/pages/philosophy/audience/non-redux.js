import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Philosophy';
import TocLink from '../../../components/TocLink';
import Markdown from '../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        Non-Redux Developers
      </h1>
      <p>
        Lastly, for developers who don't want to use Redux, Lore has very little <strong>direct value</strong>.
        Redux is a central component of the framework, and there's no getting away from it. Replacing it would
        require rewriting just about everything.
      </p>
      <p>
        But the framework might provide some <strong>indirect value</strong> in it's effort to capture common
        application concerns that a framework (or architecture) <em>should</em> solve for, as well as small examples
        that demonstrate and test each of those concerns.
      </p>
      <p>
        So if you're looking to build your own framework, or evaluating a non-Redux solution, it might be
        worthwhile to browse through the examples and use cases Lore is solving as a way of comparing solutions
        or thinking through common application concerns, or reading through the Quickstart since it covers the
        majority of common use cases that Lore was created to solve.
      </p>
    </Template>
  )
};
