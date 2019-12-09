import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Features';
import Code from '../../components/Code';
import CodeTabs from '../../components/CodeTabs';
import CodeTab from '../../components/CodeTab';
import QuickstartBranch from '../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template
      title="Philosophy"
      subtitle={(
        <span>"Respectfully Opinionated"</span>
      )}
    >
      <h2>
        Applications require opinions
      </h2>
      <p>
        "Unopinionated" libraries can provide a great foundation to build on (and largely describes the types
        of libraries that Lore is composed of), but you can't build web applications without eventually injecting
        opinions about how to use those libraries to address application-level challenges.
      </p>
      <p>
        The set of challenges is quite numerous. A few examples include selecting which libraries to use in
        the first place, how to organize your project, how to structure code for fetching and caching data, and
        what format to use when passing data through out your application.
      </p>
      <p>
        Each of those decisions will come with trade-offs that will impact the readability of the code, the speed
        of development, and the range of experiences you can provide to users. And sometimes, the result of
        those decisions overtime will start to add up, and may negatively impact one of those things to such an
        extent that fixing it requires rebuilding the entire product.
      </p>
      <p>
        Early on, when learning web development, sometimes just "getting it to work" is hard enough. But eventually,
        as comfort builds and products become more complex, the things that "just need to work" start to increase
        in number as well, and we start having to craft solutions that address all of them at once. This means
        we sometimes have to throw out our previous solution and try something different. And this cycle continues
        and eventually becomes "which set of opinions can solve all of these challenges AND provide a good developer
        experience at the same time?"
      </p>

      <h2>
        Lore tries to be "respectfully opinionated"
      </h2>
      <p>
        At it's core, Lore is a proof-of-concept intended to demonstrate a series of patterns that attempt to
        provide one possible answer to that question. The patterns it demonstrates were all developed over time
        through a cycle of mistakes and rewrites, until they eventually stabilized into an architecture that was
        able to support a wide range of user experiences across a variety of different product types.
      </p>
      <p>
        The "respectfully opinionated" bit is about the intention that those patterns are not intended as a
        "you must do it this way" but as a "you could do it this way", and so it should also be easily to change
        those patterns if you want to try something else.
      </p>

      <h2>
        Lore v0 made some mistakes
      </h2>
      <p>
        The first version of Lore took inspiration from server-side frameworks like Sails, Rails, Django,
        and ASP.NET MVC. In this version Lore followed a traditional "framework" approach were the conventions
        and functionality were embedded inside the framework itself. That version took great efforts
        to be extensible, and even went so far as to include a way to eject from the framework, it became clear
        over time that there were several downsides.
      </p>
      <p>
        The most problematic downside was that Lore's primary goal is NOT to be a framework, but to provide a proof
        of concept to help developers discover useful architectural patterns they may not have considered before.
        A sort of "hey these patterns work really well, you might like them too, and if you don't, no worries, you
        can change them". Unfortunately, those patterns were embedded in a library, which posed two problems.
      </p>
      <p>
        The first problem was that it made the patterns hard to see, which meant either they needed to be really
        well documented (increasing the burden on documentation) or a developer needed to be comfortable diving
        into library code to fully understand them (assuming that developer was curious enough to bother trying in
        the first place)
      </p>
      <p>
        The second problem was that it made Lore appear to be a formal framework, with all the baggage that label
        comes with. And intentional or not, it also created a relationship where developers would need to submit
        an issue or a PR if they wanted to change something about it, and then Lore would need to create
        documentation for migrating people between different versions.
      </p>
      <p>
        For a framework with no financial backing and a single maintainer, that just wasn't scalable. So a lot
        of energy ended up being devoted to "how do you make a framework not feel like a framework?" And that ended
        up being the driving motivation for Lore v1.
      </p>

      <h2>
        Lore v1 is less "framework", more "project template"
      </h2>
      <p>
        With the introduction of Hooks and Context in React, it became clear there was a way to refactor Lore
        into a series of stand-alone libraries, where some of the functionality could actually be added to existing
        projects, instead of having to "build a Lore app" to use any of it. So the libraries were refactored
        around that goal.
      </p>
      <p>
        The challenge from there became "how do you get the benefits of a framework with using a framework". But
        Lore had always been a series of separate libraries, it was just that the main "framework" library did
        all the configuration and convention-based setup. So the decision was made to move that functionality
        into the project template that's generated when you create a new application.
      </p>
      <p>
        The result is that developers have full control right after creating a new project. They can easily
        see the conventions and change them. They can see all the libraries and how they're configured. They can
        rip some out and replace them with something else. They can swap out Redux for Apollo (GraphQL). But
        perhaps most importantly for Lore's original intention, they can see all the patterns laid out.
      </p>

      <h2>
        Convention over configuration
      </h2>
      <p>
        Lore uses a pattern called "convention over configuration" which is basically a way of avoiding having
        to write code. It means that instead of having to explicitly configure every spec of behavior
        in your application, you can instead
      </p>
      <ul className="list-disc ml-10">
        <li>
          <strong>Conventions</strong>
          <p>
            The opinions in Lore are expressed through conventions, and reflect the
            things that are generally true for most applications. They exist to save you time by removing
            boilerplate, and not asking you to create code and functionality you'll likely need anyway.
          </p>
        </li>
        <li>
          <strong>Configuration</strong>
          <p>
            The configuration files in Lore allow you to modify the conventions, or
            take control of the framework when needed in order to adapt it to your specific needs. The config files can
            also be overridden on a per-environment basis, meaning you can have different configurations for development,
            production, etc.
          </p>
        </li>
      </ul>

      <p>
        Lore is designed with an understanding that things change over time, and so while the framework may express
        certain opinions and assumptions, it also understands that you may have different opinions and have very
        good reasons for wanting to follow them.
      </p>
      <p>
        Therefore, Lore will always strive to express it's opinions as <em>conventions</em> only, and the
        architecture and documentation will continually strive to make it easier to override or replace them should
        you want to.
      </p>

      <h2>
        Extensibility
      </h2>
      <p>
        While we touched on this a bit already, it's worth restating that Lore is designed to be extensible not as an
        add-on, but as a foundational element of it's architecture. Nearly everything the framework does is provided
        as a customizable plugin, and you can create, add, or remove those plugins as you'd like.
      </p>
      <p>
        Lore also includes a CLI that provides a number of commands that make certain aspects of development more
        convenient, and the CLI follows that same principle.
      </p>
      <p>
        Not only is the CLI itself <em>also</em> implemented as a series of plugins, but you can create, add and
        remove commands yourself in order to tailor the behavior of the CLI to your project, and all without ever
        needing to fork the repo or submit a PR.
      </p>
    </Template>
  )
};
