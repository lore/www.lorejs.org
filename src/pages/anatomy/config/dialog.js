import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Anatomy';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h2>
        config/dialog.js
      </h2>
      <p>
        This file is connected to the <code>lore-hook-dialog</code> hook and overrides the default dialog behaviors.
      </p>
      <p>
        You can learn more about the configuration options <Link to="/hooks/lore-hook-dialog/">here</Link>.
      </p>

      <h2>
        Default Config
      </h2>
      <p>
        The default config is shown below.
      </p>
      <Markdown text={`
      /**
       * Configuration file for dialogs
       *
       * This file is where you define overrides for the default dialog behavior.
       */

      export default {

        /**
         * DOM Element ID that the dialogs should be mounted to. Should be located
         * outside the DOM element the application is mounted to.
         */

        // domElementId: 'dialog'

      }
      `}/>

      <h3>
        Example Config
      </h3>

      <Markdown text={`
      {
        domElementId: 'dialog'
      }
      `}/>

      <h3>
        Configuration Options
      </h3>

      <h4>
        domElementId
      </h4>
      <p>
        The <code>id</code> of the DOM element that dialogs should be mounted to.
      </p>
    </Template>
  )
};
