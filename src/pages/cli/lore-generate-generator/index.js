import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/LoreGenerateGenerator';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        generator
      </h1>
      <p>
        CLI command to create a new generator.
      </p>

      <h3>
        Usage
      </h3>

      <Markdown type="sh" text={`
      lore generate generator [generator-name]
      `}/>

      <h3>
        Example
      </h3>
      <p>
        Let's say you want to create a new generator called <code>lore-generate-example</code>. To do that, you
        would run this command:
      </p>

      <Markdown type="sh" text={`
      lore generator generator lore-generate-example
      `}/>

      <p>
        This would create a new folder named <code>lore-generate-example</code> and place all the files inside that
        reflect an basic generator. You can then register this generator in <code>.lorerc</code> as a command while
        you develop it, and then (eventually, if you want) publish it to npm.
      </p>
    </Template>
  )
};
