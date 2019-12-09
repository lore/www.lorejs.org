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
      title="Features"
      subtitle="Overview"
      description={(
        <>
          <p>
            Lore is an opinionated convention-driven framework designed to make it easier to build
            browser-based React applications that consume data from one or more REST APIs.
          </p>
          <p>
            It's intended to reduce the time and knowledge required to build them, while using an
            architecture that supports the feature set and concerns that applications often need as
            they become larger and more complex over time.
          </p>
        </>
      )}
    >
      <h2>
        Goals
      </h2>
      <p>
        One of Lore's goal is <strong>increased productivity</strong>. It does this by providing a mature and
        easy-to-use architectural foundation that enables you to spend more of your time building features
        that provide unique to your users, and less time spent simply "just getting things to work".
      </p>
      <p>
        Another goal is <strong>education</strong>. Building web applications can be extremely challenging, and it
        can take years to find a set of patterns that can not only solve the full range of common application-level
        challenges, but also provide a good developer experience. Lore provides a set of patterns that were
        developed and evolved over time as one possible opinion about what that might look like.
      </p>

      <h2>
        Core Libraries
      </h2>
      <p>
        Lore was constructed around a set of popular libraries, each with a large user base. The core libraries that
        make up the foundation of Lore are:
      </p>
      <ul className="list-disc ml-10">
        <li>
          <a href="https://reactjs.org/">React</a>
        </li>
        <li>
          <a href="https://redux.js.org/">Redux</a>
        </li>
        <li>
          <a href="https://reacttraining.com/react-router/">React Router</a>
        </li>
        <li>
          <a href="https://webpack.js.org/">Webpack</a>
        </li>
        <li>
          <a href="https://github.com/axios/axios">Axios</a>
        </li>
      </ul>
      <p>
        Generally speaking, the more comfortable you are with these libraries, then the more the framework should make
        sense, as it's largely just patterns and conventions built around them.
      </p>

      <h2>
        Design Principles
      </h2>
      <p>
        Lore was designed around a set of principles that were discovered over time to be fairly crucial for
        solving the range of application-level challenges while also providing a good developer experience.
        The patterns that support these principles were converted into the framework.
      </p>
      <ul className="list-disc ml-10">
        <li>
          <Link to="/features/principles/data-driven/">Data Driven</Link>
        </li>
        <li>
          <Link to="/features/principles/no-boilerplate/">No Boilerplate</Link>
        </li>
        <li>
          <Link to="/features/principles/optimistic/">Optimistic</Link>
        </li>
        <li>
          <Link to="/features/principles/efficient-networking/">Efficient Networking</Link>
        </li>
        <li>
          <Link to="/features/principles/real-time/">Real-time Considerations</Link>
        </li>
      </ul>

      <h2>
        Common Patterns
      </h2>
      <p>
        One of the ways by which the success of Lore is evaluated is through the number of user experiences
        it can easily support. Click the links below to see the pattern Lore uses to support each experience.
      </p>
      <ul className="list-disc ml-10">
        <li>
          <Link to="/features/patterns/filtering/">Filtering</Link>
        </li>
        <li>
          <Link to="/features/patterns/pagination/">Pagination</Link>
        </li>
        <li>
          <Link to="/features/patterns/infinite-scrolling/">Infinite Scrolling</Link>
        </li>
        <li>
          <Link to="/features/patterns/visual-cues/">Visual Cues</Link>
        </li>
        <li>
          <Link to="/features/patterns/optimistic-updates/">Optimistic Updates</Link>
        </li>
        <li>
          <Link to="/features/patterns/error-handling/">Error Handling</Link>
        </li>
        <li>
          <Link to="/features/patterns/404-pages/">404 Pages</Link>
        </li>
        <li>
          <Link to="/features/patterns/dialogs/">Dialogs</Link>
        </li>
        <li>
          <Link to="/features/patterns/polling/">Polling</Link>
        </li>
        <li>
          <Link to="/features/patterns/websockets/">WebSockets</Link>
        </li>
      </ul>
    </Template>
  )
};
