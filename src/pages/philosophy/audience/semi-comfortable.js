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
        Semi-Comfortable with Redux
      </h1>
      <p>
        This section is for people who are somewhat comfortable with React and Redux, and have some experience
        building web applications.
      </p>
      <p>
        If you've already developed some comfort with React and Redux, then you know application architecture can be
        quite challenging, and there are <em>a LOT of problems</em> you have to solve for in a real application,
        many of which are not at all obvious up front. You may also know that Redux applications can contain a lot
        of boilerplate.
      </p>
      <p>
        Unfortunately, it can also be a little difficult to find discussion and examples about how to address
        these challenges in real-world applications, especially since the code for most applications that we
        could learn from is kept in private repositories.
      </p>
      <p>
        Lore has two core goals if you find yourself in that growth stage between starting out and gaining a solid
        comfort with building applications with Redux:
      </p>
      <ol>
        <li>
          <p>
            The first is to <strong>demonstrate what's possible with Redux</strong>.
          </p>
          <p>
            At it's core, Lore is not "some new way of developing web apps". Lore <strong>IS</strong> Redux. But
            it was developed from the perspective of looking at a dozen plus applications built over a series of
            years, and asking the question <em>"Is there a set of patterns that can be applied to Redux that can
            solve every problem across every one of these applications?"</em>.
          </p>
          <p>
            Once it became clear that the the answer was <em>"yes"</em>, the followup was was <em>"Is there also
            a set of conventions can be applied to completely eliminate the boilerplate, and place the entire
            development focus on React?"</em>.
          </p>
          <p>
            The result of those two questions is Lore.
          </p>
        </li>
        <li>
          <p>
            The second goal is to <strong>demonstrate a cohesive and holistic architecture</strong> that
            is <strong>able to solve for all common application concerns</strong>.
          </p>
          <p>
            The fact is, most web applications are incredibly similar with respect the problems the application
            architecture needs to solve for; things like pagination, error handling, caching, and API communication.
            The real differences (and the real value) lie in the specific UI/UX concerns each application needs to
            solve for.
          </p>
          <p>
            But too often we get bogged down in the architecture, just <em>trying to get something to work</em>, and
            it takes away precious time from creating a better product.
          </p>
          <p>
            Lore is intended as a proof of concept to demonstrate that most web applications are not unique
            snowflakes; they're the same set of concerns, just dressed up in different clothes.
          </p>
        </li>

        <p>
          With people, it may be what's on the inside that matters the most. But with web apps, it's very much
          the opposite. User's don't care about your architecture; they care about the features and user experience
          you provide, and how quickly you can add new features to improve the value your product provides to
          them. Good architectures can be immense enablers for rapid development, especially ones that solve for
          problems <em>you don't yet have but likely will</em> (needs like cache invalidation or websocket
          integration to sync data across browsers in real-time).
        </p>
      </ol>

      <p>
        So if you want to see what's possible with Redux, Lore might be of interest to you. And if you want to
        learn how it all works, and about the reasoning behind the patterns Lore uses, you can check out
        the <Link to="/architecture/">architecture documentation</Link> for an explanation and demystification
        of the framework.
      </p>
    </Template>
  )
};
