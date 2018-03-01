import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/HookTutorial';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        Step 3: Specify Dependencies
      </h1>

      <p>
        In this step we're going to specify our hook's dependencies, so we'll have access to the data we need when the
        hook loads.
      </p>

      <blockquote>
        <p>
          You can view the finished code for this step by checking out the <code>step-3</code> branch.
        </p>
      </blockquote>

      <h3>
        Hook Dependencies
      </h3>
      <p>
        While some hooks are completely stand-alone, most hooks don't operate that way, and expect certain data (generated by
        other hooks) to be available by the time that hook loads.
      </p>

      <p>
        An example of a stand-alone hook is <code>lore-hook-models</code>, which loads the model config files provided
        in <code>src/models</code> and converts them all to instances of a Model from the <code>lore-models</code> package.
        Whether this is the first hook that gets loaded or the last doesn't matter.
      </p>

      <p>
        The <code>actions</code> hook on the other hands expects <code>lore.models</code> to exist before it loads,
        because it needs those Model classes in order to build the action creators. In other words, the <code>actions</code> hook
        depends on the <code>models</code> hook.
      </p>

      <p>
        The <code>bindActions</code> hook is another hook with dependencies, as it's responsibility is to bind every action to the
        <code>dispatch</code> method of the Redux store. So the <code>bindActions</code> hook depends on both the <code>actions</code> hook and the <code>redux</code>
        hook, because it's need the actions to be created first, as well as the Redux store, so that it can perform that
        binding.
      </p>


      <h3>
        Specify Dependencies
      </h3>
      <p>
        Our hook is going to be responsible for creating a container that will invoke an action on a given interval. In order
        to do that, we need to make sure the actions are all built (and bound to the Redux store) before we create a polling
        wrapper around them. This means our hook has a dependency on the <code>bindActions</code> hook.
      </p>

      <p>
        To specify this dependency, add a reference to the <code>bindActions</code> hook in the <code>dependencies</code> array like this:
      </p>

      <Markdown text={`
      ...
        dependencies: ['bindActions'],
      ...
      `}/>

      <p>
        That's it! With the array populated, Lore will figure out which order to load the hooks in based on their dependency
        chains, and we are guaranteed that our hook will load only <em>after</em> the actions exist and are bound to the Redux store.
      </p>

      <h2>
        Next Steps
      </h2>
      <p>
        Next we're going to <Link to="../step-4/">make our hook configurable</Link>.
      </p>
    </Template>
  )
};
