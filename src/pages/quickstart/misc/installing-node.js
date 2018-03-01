import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        Installing Node
      </h1>
      <p>
        Before you can use Lore, you will need to install Node, which you can download
        from <a href="http://nodejs.org">http://nodejs.org</a>.
      </p>
      <p>
        As an alternative to downloading Node directly, you can also use one of the available Node Version
        Managers (NVMs). The advantage of using an NVM over installing Node directly is that they allow you
        to easily change which version of Node you are using. This can be helpful for checking if an issue
        you're seeing is related to a specific version of Node, or just to make sure that your code works
        with older (or newer) versions that other people might use to run your code.
      </p>
      <p>
        If you are on a Mac, you can use <a href="https://github.com/creationix/nvm">nvm</a>.
      </p>
      <p>
        If you are on a Windows machine, you can use <a href="https://github.com/coreybutler/nvm-windows">nvm-windows</a>.
      </p>
    </Template>
  )
};
