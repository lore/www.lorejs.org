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
        Wizards are a complex multi-step version of a form. And similar to <Link to="/features/dialogs/">
        dialogs</Link>, while the <em>behavior</em> of wizards tends to be fairly similar across applications, the
        visual appearance and content can drastically based on an application's branding.
      </p>
      <p>
        Because of that, Lore doesn't provide a built-in solution for wizards per se, but there's a side-project
        called <code>lore-forms</code> that illustrates some patterns for building wizards that you may find helpful.
        It also includes implementations of those patterns for the Bootstrap and Material UI component libraries.
      </p>
      <p>
        You can read more about <code>lore-forms</code> <Link to="/forms/">here</Link>.
      </p>
      <p>
        However, wizards do have some common needs that Lore accounts for. For example, sometimes you have a wizard
        that creates data, and needs to wait until the server confirms that data is created before moving on to the
        next step, or display an error to the user if there was a problem creating the data.
      </p>
      <p>
        Being able to solve that problem simply, without requiring components to make those server calls
        directly, and being done in a way that also functions properly in a real-time app is non-trivial. But a
        solution can be found in the overlap between Optimistic Updates (using client-side ids) and the Data
        Structure used by Lore that supports Visual Cues and Error Handling.
      </p>
    </Template>
  )
};
