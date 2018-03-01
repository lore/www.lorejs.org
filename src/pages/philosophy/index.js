import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Philosophy';
import TocLink from '../../components/TocLink';
import Markdown from '../../components/Markdown';
import '../../assets/less/docs.less';

export default (props) => {
  const {
    children,
    location
  } = props;

  return (
    <Template>
      <h1>
        Introduction
      </h1>
      <p>
        A brief introduction into the goals and mentality driving the development of the framework.
      </p>

      <h3>
        What is Lore?
      </h3>
      <p>
        Lore is an opinionated framework that strives to promote certain architectural patterns through its
        conventions, with a goal of making it easier to develop client-side applications that consume data from
        one or more REST APIs.
      </p>
      <p>
        Conceptually, it's similar in philosophy and feel to server-side frameworks like Ruby on Rails, Sails or
        ASP.NET MVC, except that instead of being designed to make it easier to
        develop <em>server-side</em> applications, Lore is designed to make it easier to
        develop <em>client-side</em> applications.
      </p>
      <p>
        More specifically, Lore is focused on making it easier to develop browser-based <em>React</em> applications,
        and uses Redux as the architectural foundation for accomplishing that goal.
      </p>

      <h3>
        What is Lore's goal?
      </h3>
      <p>
        Lore's primary goal is to promote <em>architectural patterns</em> that are capable of meeting the demands
        of real-world client-side applications. The framework was developed as a proof of concept.
      </p>
      <p>
        At the time of this writing, and especially true when the framework was first created, it is fairly
        difficult to find serious demonstrations of architectural patterns suitable for large real-world
        client-side applications.
      </p>
      <p>
        While there are blog posts and videos that discuss <em>concepts</em>, and a
        large number of "hello world" and "todo apps" that demonstrate those concepts (using any one of the
        exhausting number of libraries in the JavaScript ecosystem), is it quite rare to find a full-featured
        application intended to serve as a demonstration and recommendation of which of those patterns and libraries
        can actually fit together to solve the large number of challenges you need to account for as a client-side
        architect.
      </p>
      <p>
        This void is not without cost, and without that understanding, applications frequently become more costly
        and time-consuming to develop, and in the worst situations, can lead to architectural decisions that
        limit feature support or introduce bugs that require a full-rewrite to move past. This can not only reduce
        developer morale, but also restricts an application's ability to provide value and joy to users.
      </p>
      <p>
        When Lore was first created, the original "burden of proof" or "feasibility milestone" was whether it
        could absorb all the needs of every application the creators had built prior to constructing it. Essentially,
        if was a lens of "let's build the thing we wish we'd had back then, that would have saved us lots of time and
        money, if only we'd known what we know now".
      </p>
      <p>
        That milestone has since been met, and the framework is continuing to be developed so that those patterns can
        be shared with others, and allow new applications to be created quickly so that the architecture can be
        thrown against new challenges, to continually test and refine the interfaces and underlying
        assumptions.
      </p>
      <p>
        Embedding those assumptions in a framework also allows other people to use it, and makes it possible to
        crowd-source those assumptions against a larger variety of applications and needs.
      </p>

      <h3>
        Does Lore abstract the core libraries it's built on?
      </h3>
      <p>
        Lore <em>is not</em> and <em>will not</em> attempt to hide the native implementations of the core libraries
        it's built from. Doing so would not only require us to take on the educational burden of each of those
        libraries, but we see no need to.
      </p>
      <p>
        The core libraries of Lore (React, Redux, React Router, Webpack and Axios) are all beautiful in their own
        way. To hide that beauty would not only rob you of it, but intentionally obfuscate your ability to obtain
        knowledge and learn skills that would be applicable outside of Lore. And that would make us sad. Lore is not
        meant to replace them or abstract those libraries; it is merely meant to help connect them and promote some
        opinions about best practices.
      </p>
      <p>
        Lore is as much about education as it is about enabling rapid application development. Some people will want
        to use the framework and others won't, and even among those who use it, some will decide not to continue with
        it.
      </p>
      <p>
        But in doing so, the hope is that it won't feel like that investment was a waste of your time. That if
        you do try to build something with Lore, you'll discover patterns and practices and interfaces that you might
        like to recreate in your own applications, or that through using the framework, be better able to articulate
        what you like and don't like, and be able to accelerate the process for building an architecture that you
        really like in your own applications.
      </p>
      <p>
        If you like something that Lore does, but don't understand how it does it, you are encouraged to dig in
        and learn, or ask questions. After all, Lore isn't really "something new". The architecture is 100%
        Redux, so if you want to learn Redux, or want to use Redux in your own applications, understanding how
        Lore works should (ideally, hopefully) only be beneficial.
      </p>

      <h3>
        How does the framework determine "success"?
      </h3>
      <p>
        The measure of success for the framework is whether it can solve any common client-side challenge. This
        means either the conventions solve for it automatically, or there's a config setting that allows the
        framework to easily adapt to that situation.
      </p>
      <p>
        Another way to think of it is "user experience challenges". If there's an experience you need to provide,
        and the framework can't support it, then generally speaking, it highlights a flaw in the architecture and
        the framework will be re-architected to account for it.
      </p>
      <p>
        It should also be noted that replacing the default hooks with a custom implementation is generally not
        considered "easily adapting to the situation". That approach is meant to be an escape hatch for if or when
        you need something truly custom, or want to take the framework in a different direction.
      </p>

      <h3>
        Why is Lore "opinionated"?
      </h3>
      <p>
        Short answer? Because it needs to be.
      </p>
      <p>
        Lore isn't a library. It's a framework, built for the specific purpose of accelerating the
        development of real-world browser-based React applications. To do that, it has to have opinions about how
        to solve the specific challenges that come with developing those types of applications.
      </p>
      <p>
        While "unopinionated libraries" can be great tools and building blocks, they rarely solve a problem until
        you integrate them into a larger architecture. Also, application development is really hard. Architectural
        decisions that make sense today may not be capable of adapting to provide support for features you need
        tomorrow. And there are <em>a lot</em> of decisions you need to need to have an opinion about to build an
        application, decisions that need to play well together and complement each other.
      </p>
      <p>
        Sometimes, especially for newer developers, that can be incredibly overwhelming, and it can take a lot of
        time and trial and error and costly mistakes to understand how to construct an architecture that can juggle
        all the demands required of a modern single page application.
      </p>
      <p>
        <em>That</em> is the problem Lore is trying to address, and to do that it has to have opinions about what
        that architecture looks like, and what a solution to each of those challenges looks like.
      </p>

      <h3>
        Why is Lore called "respectfully opinionated"?
      </h3>
      <p>
        The advantage of an opinionated convention-driven framework is that it can make a lot of tasks easy to
        perform, and provide a sense of empowerment, speed and, when done well, a safe place to learn good
        architectural patterns and practices.
      </p>
      <p>
        The disadvantage is that in doing so, they inevitably hide some of the lower-level workings, and a common
        criticism of opinionated frameworks is that developers who use them can sometimes end up learning how to use
        the framework, but never really understand how it works, or develop knowledge and skills that are transferable
        outside the framework.
      </p>
      <p>
        The philosophy behind Lore is a belief that there's a way to get the best of both worlds. That it's
        possible to build something that makes application development easy and educational. That it's possible to
        build a framework that provides conventions and conveniences, and also let's you break out of them and
        take full control.
      </p>
      <p>
        The reason that's possible is Lore doesn't invent anything new. It combines existing technologies in a way
        that demonstrates how you can use them to solve common problems.
      </p>
      <p>
        Lore is referred to as "respectfully opinionated" for a number of reasons:
      </p>
      <ul>
        <li>
          The primary purpose of the framework is not for you to use it. Weird as that may sound, it's true. Lore's
          primary goal is to promote <em>architectural patterns</em> that are capable of meeting the demands of
          real-world client-side applications. The framework was developed as a proof of concept.
        </li>
        <li>
          The framework is <em>architected for change</em>. The patterns, opinions, and assumptions embedded in the
          framework are not assumed to be <em>right</em>; they're only assumed to be <em>generally true</em>.
          Lore assumes <em>most</em> web applications have similar needs. That certain things tend to be true. But
          it also assumes that sometimes those things aren't.
        </li>
        <li>
          Lore doesn't assume there's only one way to do things, that there's only the "Lore way". In fact, the core
          development of the framework happens in real applications, by extending or overriding the framework in
          place, and then backporting the changes, patterns and libraries that seem beneficial to a larger audience
          into the core ecosystem and associated documentation.
        </li>
      </ul>

      <h3>
        What's is Lore's personality?
      </h3>
      <p>
        If the framework was a person, it's personality would hover between confidently providing value, while
        exhibiting a constant fear of being wrong. That fear is central element of the architecture, and shows
        up in the architecture in the following ways:
      </p>
      <ul>
        <li>
          <strong>Conventions</strong>: the conventions in Lore represent the things that seem generally true across
          most applications, and exist to save you time and remove boilerplate, by not asking you to create code and
          functionality you'll likely need anyway.
        </li>
        <li>
          <strong>Configuration</strong>: the configuration files in Lore are ways to modify the conventions, or
          provide guidance where it's needed in order to adapt the framework to your specific needs. For example,
          the conventions assume you're interacting with a REST API, but configuration is required to know where
          the server is located and the pluralization and casing style of the endpoints.
        </li>
        <li>
          <strong>Hooks</strong>: all of the functionality in Lore is implemented as a series of plugins called hooks,
          and it's these hooks that establish the conventions and expose the configuration options that can be
          overridden. It also means that if something isn't working for you, or you really don't like the interface,
          you don't need to submit a PR to change it; you can simply replace that hook in your project with a custom
          implementation and keep moving forward.
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

      {/*<h3>*/}
        {/*Why discuss the audience?*/}
      {/*</h3>*/}
      {/*<p>*/}
        {/*Evaluating any framework or library can be a daunting task, especially when it’s not clear what problem (or set of*/}
        {/*problems) that framework or library was really created to solve, let alone whether that set includes the problems*/}
        {/*<em>you’re</em> trying to solve for.*/}
      {/*</p>*/}
      {/*<p>*/}
        {/*If you've spent any time developing in Node.js for example, you may have stumbled upon*/}
        {/*the <a href="http://nodeframework.com/">Node Frameworks website</a>, where there are literally dozens of*/}
        {/*libraries and frameworks all competing for your attention. And while the site is helpful for improving*/}
        {/*discoverability and distilling them into categories, attempting to choose one from within any single category*/}
        {/*is still an incredibly non-trivial and time consuming task, that requires a large personal investment of*/}
        {/*your time in order to find a tool with the "right fit".*/}
      {/*</p>*/}
      {/*<p>*/}
        {/*This page is an attempt to shortcut that process, by clearly stating the motivations for building Lore, and how*/}
        {/*those motivations are intended to manifest into value for people with different levels of comfort in React-based*/}
        {/*development.*/}
      {/*</p>*/}
    </Template>
  )
};
