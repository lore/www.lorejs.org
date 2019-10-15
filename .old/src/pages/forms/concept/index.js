import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/forms/Concept';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        Why create a form library?
      </h1>

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

      <h1>
        Purpose
      </h1>

      <p>
        At first, how the hooks build forms likely won't make much sense. This walks through a series of
        refactors to demonstrate the pattern used by the hook and how it came to be.
      </p>

      <p>
        The goal is to provide an understanding of how the hook actually works, so you can feel in control
        of it. But also to provide the reasoning for the hook, because if you disagree with the reasoning,
        the implementation is unlikely to be something you want to use.
      </p>

      <p>
        Another goal is that by explaining the reasoning and construction patterns, even if you don't want to
        use the form libraries, you may find some useful ideas to take back to your own applications.
      </p>
    </Template>
  )
};
