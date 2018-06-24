import React from 'react';
import Link from 'gatsby-link';
import Template from '../components/templates/Concepts';
import Markdown from '../components/Markdown';
import CodeTabs from '../components/CodeTabs';
import CodeTab from '../components/CodeTab';
import QuickstartBranch from '../components/QuickstartBranch';
import Video from '../components/Video';

export default (props) => {
  return (
    <Template>
      <h1>
        Server Communication
      </h1>
      <p>
        Useful for moving through a large set of data one page at a time. Core challenge is preventing action/reducer
        explosion and being able to accommodate different API server conventions.
      </p>

      <p>
        The video below is an excerpt from the full <Link to="/audience/introduction-to-lore/">Introduction to Lore</Link>
        video and provides a summary of the content on this page.
      </p>

      <br/>

      <Video videoId="BsjUnnGAT7Q" />

      <h3>
        Patterns That Lore is Built On
      </h3>
      <p>
        The video above talks about the interface Lore exposes for API communication, and how through conventions it can
        eliminate the need to write actions and reducers for many endpoints. What the video doesn't explain is <em>how</em> the
        framework does this and what those patterns are.
      </p>

      <p>
        A full explanation of this is not yet recorded, though it does exist in presentation form. Once it's recorded this
        section will contain that explanation. In the meantime, if your curious, there is a short "teaser" slide that
        highlights some of those layers in the <Link to="/architecture/ajax-abstraction/">AJAX Abstraction</Link> video starting
        at around the 1 minute mark.
      </p>


      <h3>
        More Information
      </h3>
      <p>
        If you'd like to know more about the blueprints Lore uses to build the convention-supplied actions, see the
        <Link to="/architecture/actions/">docs on actions</Link>. If you'd like to know more about how the AJAX abstraction tier Lore
        uses is built (what the blueprints are built on) see the <Link to="/architecture/ajax-abstraction/">docs on AJAX Abstraction</Link>.
      </p>

      <p>
        If none of those docs are sufficient to answer your question, please <a href="https://github.com/lore/lore/issues">file an issue</a>
        and we'll answer your question and use it to better expand the documentation for others.
      </p>
    </Template>
  )
};
