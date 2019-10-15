import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/forms/PatternConstruction';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/forms/tutorial/overview.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Introduction
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

      <blockquote>
        <p>
          Unlike the Quickstart, this tutorial will not provide a choice in preferred syntax. All React code
          will be using <code>createReactClass</code>.
        </p>
      </blockquote>

      <p>
        This is the application we'll be working with:
      </p>

      <img className="drop-shadow" src={image} />

      <h2>
        Next Steps
      </h2>
      <p>
        Ready? Let's <Link to="./setup/step-1/">get started</Link>!
      </p>
    </Template>
  )
};
