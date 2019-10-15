import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Example';
import Markdown from '../../components/Markdown';
import CodeTabs from '../../components/CodeTabs';
import CodeTab from '../../components/CodeTab';
import QuickstartBranch from '../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        Error Handling: Example
      </h1>
      <p>
        You can see an example of Error Handling in the
        <a href="https://github.com/lore/lore/tree/master/examples/pagination">pagination</a> or {' '}
        <a href="https://github.com/lore/lore/tree/master/examples/infinite-scrolling">infinite-scrolling</a> examples
        as GitHub will return an error if you exceed the API rate limit (paginate more than 10 times in 60 seconds).
      </p>
    </Template>
  );
};
