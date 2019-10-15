import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Architecture';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        Infinite Scrolling: Architecture
      </h1>
      <p>
        Challenge when implementing infinite scrolling and architectural approach Lore uses to address it.
      </p>

      <h3>
        Challenge
      </h3>
      <p>
        The core challenge here is recognizing that Infinite Scrolling is primarily a view concern, in that it's exactly the
        same as traditional pagination except for how the data is displayed to the user.
      </p>

      <h3>
        Implementation
      </h3>
      <p>
        Since Infinite Scrolling shares the same infrastructure as traditional pagination, please
        see <Link to="/features/pagination/">Pagination</Link> for a description of how to implement support for it.
      </p>
    </Template>
  )
};
