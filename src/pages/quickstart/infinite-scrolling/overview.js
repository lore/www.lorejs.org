import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/infinite-scrolling/final.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Infinite Scrolling: Overview
      </h1>

      <p>
        In this section we'll replace the pagination links with an infinite scrolling approach.
      </p>

      <p>
        At the end of this section your application will look like this:
      </p>

      <img className="drop-shadow" src={image} />

      <h3>
        Infinite Scrolling vs Pagination
      </h3>
      <p>
        Infinite Scrolling differs from pagination in the following ways:
      </p>

      <ol>
        <li>Instead of letting the user select a page, they can only load the next page</li>
        <li>Instead of displaying one page at a time, the results are all combined into a single list</li>
      </ol>

      <p>
        It's important to point out that these are <strong>view specific concerns</strong>, meaning nothing about
        creating the experience requires changes to infrastructure or to the API. These needs are all related to how
        a user <em>interacts</em> with data, and have nothing to do with <em>how data is fetched or stored</em>.
      </p>

      <h3>
        Our Strategy
      </h3>
      <p>
        There's a lot of boilerplate associated with Infinite Scrolling, but it breaks down into two main components:
      </p>

      <ul>
        <li>
          The first is a <code>List</code> that can keep track of all the pages of data, and merges them into a
          single array. This component also needs to know how to render each item in the array.
        </li>
        <li>
          The second is a <code>Button</code> that the user can press to load the next page of data, which means
          it also needs to know when there <em>is</em> a next page.
        </li>
      </ul>

      <p>
        Our strategy will be to create those two components first, and then use them to convert our Feed into an
        Infinite Scrolling experience.
      </p>

      <h2>
        Next Steps
      </h2>

      <p>
        Ready? Let's <Link to="../step-1/">get started</Link>!
      </p>
    </Template>
  )
};
