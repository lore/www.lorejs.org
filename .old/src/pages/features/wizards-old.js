import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Features';
import Markdown from '../../components/Markdown';
import CodeTabs from '../../components/CodeTabs';
import CodeTab from '../../components/CodeTab';
import QuickstartBranch from '../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        Wizards
      </h1>
      <p>
        This title is SUPER misleading, as Lore currently has no intention or providing a direct solution for wizards. What
        this section is actually about is solving the problem multi-creation wizards often have that get be pretty
        challenging to deal with.
      </p>

      <p>
        Say you have a dialog (or any UI experience, but this is common in dialogs) where you need to create data between
        steps and you need the dialog to block or show a spinner until that data is confirmed to have been created by the
        server. Or in the case of an error, you need to keep the user in the experience so they can fix the error if it
        happens.
      </p>

      <p>
        Being able to solve that problem SIMPLY, and WITHOUT components making server calls themselves and WITHOUT relying
        on nuanced business logic and ALSO being able to function properly in a real-time app is non-trivial. But a
        solution can be found in the overlap between Optimistic Updates (using client-side ids) and the Data Structure that
        supports Visual Cues and Error Handling.
      </p>

      <p>
        This section will provide an example of how to solve that specific problem by combining the other features Lore
        supports in a specific way.
      </p>
    </Template>
  )
};
