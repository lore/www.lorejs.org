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
        Comfortable with Redux
      </h1>
      <p>
        If you've been developing web applications for a while, and are already quite comfortable with Redux,
        you've probably got your own set of libraries and patterns to solve the challenges Lore is built to
        address.
      </p>
      <p>
        From that perspective Lore probably doesn't provide as much value to you as it would to a developer just
        starting out; you've already got the battle scars and learned the hard lessons that Lore is trying to help
        newer developers avoid.
      </p>
      <p>
        But what might be useful is a comparison of the architectural patterns you've settled on with the ones
        Lore uses, to see if any of those patterns are something you might want to adopt in your own Redux
        applications.
      </p>
      <p>
        Lore recognizes that supporting and growing an application is fraught with challenges, some which only
        come later in development cycle; challenges like consuming multiple APIs, unconventional APIs, inconsistent
        APIs, API versioning, and sometimes just some really quirky behaviors and data flows.
      </p>
      <p>
        The <Link to="/architecture/">architecture documentation</Link> is intended to completely demystify how the
        framework works, by explaining how it solves for each challenge, and talking directly to the underlying
        Redux patterns and reasoning behind why the framework uses that approach.
      </p>
      <p>
        Additionally, while Lore <strong>is</strong> a framework, and <strong>does</strong> express opinions
        about how to architect applications through those, the framework itself is actually designed as one massive
        escape hatch. All the functionality in Lore is implemented as a series of plugins called "hooks", and every
        part of Lore can be overridden, which makes the framework extremely customizable.
      </p>
      <p>
        This means if you don't like the blueprints the framework uses for actions, you write your own hook and
        replace the default behavior. Additionally, every hook has a configuration file that let's you overwrite
        or modify it's behavior.
      </p>
      <p>
        So if you do decide to try out Lore, you'll never be "locked in". If you know Redux, you know Lore. And
        if there's something about your application that falls outside Lore's conventions and configuration
        options, you can easily override or replace the framework's behavior to meet that specific need.
      </p>
    </Template>
  )
};
