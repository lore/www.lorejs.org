import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/LoreHookWebsocketsActionCable';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        Dependencies
      </h1>
      <p>
        This hook depends on:
      </p>
      <ul>
        <li>
          lore-hook-models
        </li>
        <li>
          lore-hook-redux
        </li>
      </ul>
      <p>
        The <code>models</code> dependency comes from the fact that this hook uses the names of the models
        in order to generate the websockets actions.
      </p>
      <p>
        The <code>redux</code> dependency comes from the fact that this hook needs the Redux store to exist first
        in order to get access to the <code>dispatch()</code> method.
      </p>
    </Template>
  )
};
