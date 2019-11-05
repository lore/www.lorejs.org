import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Examples';
import Markdown from '../../components/Markdown';
import CodeTabs from '../../components/CodeTabs';
import CodeTab from '../../components/CodeTab';
import QuickstartBranch from '../../components/QuickstartBranch';
import image from '../../assets/images/examples/dialogs-querying.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Filtering: Example
      </h1>
      <p>
        There is a filtering example in the lore repo
        called <a href="https://github.com/lore/lore/tree/master/examples/dialogs-querying">dialogs-querying</a>. It
        looks like this:
      </p>

      <img src={image} alt="Filtering: Example" />

      <blockquote>
        <p>
          This example is overly complicated, and will be replaced with something simpler and more focused the
          future.
        </p>
        <p>
          This specific example was developed early in Lore's development as a way to test the patterns
          and behaviors, but is still the best example to demonstrate filtering.
        </p>
      </blockquote>

      <p>
        The example is focused around creating "Todo Lists", and then each list has a set of todos. When you click
        on a list, it loads the todos for that list after making a network request. So it's intended to demonstrate
        router navigation where the route changes what data needs to be fetched.
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
