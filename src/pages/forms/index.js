import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/forms/Forms';
import Markdown from '../../components/Markdown';
import CodeTabs from '../../components/CodeTabs';
import CodeTab from '../../components/CodeTab';
import QuickstartBranch from '../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        Introduction
      </h1>
      <p>
        The documentation in this section is for a side-project intended to simplify form and dialog generation.
        All of the related code lives in a repository
        called <a href="https://github.com/lore/lore-forms">lore-forms</a>.
      </p>
      <p>
        However, unlike other form libraries you might be familiar with, <code>lore-forms</code> isn't really a
        library you consume, so much as a set of patterns you might like, built around a few small components.
        There are also some implementations of those patterns using two popular component libraries: Bootstrap and
        Material UI.
      </p>
      <p>
        While the documentation for the "few small components" is severely lacking at the moment, there is a tutorial
        that demonstrates how to use those components, and also builds up those patterns from scratch. You can
        find that tutorial <Link to="/forms/pattern/">here</Link>.
      </p>
      <p>
        The libraries provided by <code>lore-forms</code> simply implement that pattern on a larger scale, and provide
        actual forms and dialogs that can be used with Boostrap v3 and Material UI v0.20.
      </p>

      <h3>
        Why create a form library?
      </h3>
      <p>
        First off, there a number of form libraries out there. So why create another one?
      </p>
      <p>
        The short answer is because while most form libraries try to make it easy to <strong>build</strong> forms,
        I wanted a library that could <strong>eliminate the need to write many forms</strong>.
      </p>
      <p>
        Lore uses conventions to eliminate the boilerplate associated with REST API communication. And in
        many cases, those conventions are able to eliminate the need to write code for those REST APIs at all.
      </p>
      <p>
        While using Lore in practice, I found that worked well, and it was easy to communicate with multiple
        REST APIs. So easy in fact, that it became clear the biggest time sink was creating forms and dialogs.
      </p>
      <p>
        So I wanted to change that. There's so much similarity to forms and dialogs within an application; they
        have similar styling and behaviors. Hugely varied across applications, but very narrowly varied within
        a single application. So that's what I started trying to do; could I find patterns that could eliminate
        the need to create simple forms and dialogs, and make it easy to create more complex ones?
      </p>
      <p>
        I also wanted to follow the same patterns that Lore uses; conventions to generate defaults, but with the
        ability to modify the configuration or override it as needed. Opinionated, but respectful.
      </p>
    </Template>
  )
};
