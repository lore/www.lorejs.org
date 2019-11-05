import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Examples';
import Markdown from '../../components/Markdown';
import CodeTabs from '../../components/CodeTabs';
import CodeTab from '../../components/CodeTab';
import QuickstartBranch from '../../components/QuickstartBranch';
import image from '../../assets/images/examples/pagination-example.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Pagination: Example
      </h1>
      <p>
        There is a pagination example in the lore repo
        called <a href="https://github.com/lore/lore/tree/master/examples/pagination">pagination</a>. It looks
        like this:
      </p>

      <img src={image} alt="Filtering: Example" />

      <p>
        This example fetches the most starred repositories on GitHub, and allows you to jump to specific pages. The pagination
        behavior was modeled after Amazon. If you load more than 10 pages in 60 seconds, you will see an error letting you
        know you hit the GitHub search API rate limit. If that happens, just wait a minute and refresh the page, and you'll load
        data again.
      </p>

      <h3>
        Video Walk-Through
      </h3>
      <p>
        This will be added in the future.
      </p>
    </Template>
  )
};
