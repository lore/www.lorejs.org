import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Philosophy';
import TocLink from '../../../components/TocLink';
import Markdown from '../../../components/Markdown';
import '../../../assets/less/docs.less';

export default (props) => {
  return (
    <Template>
      <h1>
        Redux Beginners
      </h1>
      <p>
        So you've got some experience with React and are interested in learning more about Redux? Welcome!
      </p>
      <p>
        Redux is a great library to use as the architectural foundation for a React application, but it comes with
        a couple challenges for beginners.
      </p>
      <p>
        <strong>The first challenge</strong> is that Redux itself makes no assumptions about what kind of application
        you're building, which means the official documentation doesn't provide clear guidelines for what reducers
        and actions should look like for single page applications that consume data from a REST API. That's something
        that's left for you to figure out for yourself.
      </p>
      <p>
        <strong>The second challenge</strong> is that while there's a certain elegance to Redux due to it's
        simplicity, that simplicity comes with <em>a lot</em> of boilerplate. For small applications it's not too
        bad, but as an application grows to consume an API with a large number of endpoints, it's not an exaggeration
        to state that you can end up with multiple Actions and Reducers for each endpoint, and find yourself juggling
        a hundred or more files that are nearly identical. Knowing how to tame that boilerplate isn't clear at first.
      </p>
      <p>
        So Lore has two core goals for Redux beginners;
      </p>
      <ol>
        <li>
          Provide opinions about what Actions and Reducers should look like, and what each should be responsible for
        </li>
        <li>
          Demonstrate patterns you can use to build Actions and Reducers that eliminate boilerplate
        </li>
      </ol>
      <p>
        Admittedly Lore won't actually teach you Redux directly; the point of the framework is to provide a vehicle
        for using it without having to understand how it works. But if you want to see what's possible with it, the
        framework can be a great tool to discover that.
      </p>
      <p>
        Then, once you want to dive in and understand more about Redux itself, you can find some recommended
        resources for learning it <Link to="/redux/">here</Link>.
      </p>
    </Template>
  )
};
