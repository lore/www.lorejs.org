import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Architecture';
import Markdown from '../../../components/Markdown';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';

export default (props) => {
  return (
    <Template>
      <h1>
        Lore Connect vs React-Redux Connect
      </h1>

      <blockquote>
        <p>
          <strong>This is a giant wall of text that needs a better illustration to elaborate.</strong>
        </p>
        <p>
          TLDR; is that Lore's version of <code>connect</code> will never block the render cycle and is designed to enable
          a predictable top-down render cycle (Master component re-renders followed by all children). While components CAN
          subscribe to the Store, it's not intended to be used that way and by default only the Master component is subscribed.
        </p>
        <p>
          Connect's main purpose is to extract the data components need from the Store and provide it through props, or call
          the appropriate action if that data doesn't exist. The connect decorator in react-redux has built in performance
          optimizations that Lore's version intentionally does not, and Lore's stance is that performance optimization as a
          very personalized thing for your app, and something that should be tailored and controlled if, when and where it
          needs to be optimized.
        </p>
      </blockquote>

      <p>
        If you're familiar with <a href="https://github.com/reactjs/react-redux">react-redux</a> it's worth noting that
        the connect decorator in Lore is not the same as the connect decorator in react-redux. Lore's version is
        intentionally dumber.
      </p>

      <p>
        The connect decorator in react-redux has logic in it that will block the render cycle if the props for that
        component haven't changed. It's intended to be an optimization step, to prevent unnecessary re-rendering, but has
        the side effect that it prevents lower level components from learning about changes to the data store unless they
        subscribe to it themselves.
      </p>

      <p>
        While you can certainly do that, one of Lore's opinions is that you shouldn't unless you need to. When multiple
        components are subscribed to the data store, the application no longer renders top-to-bottom. It stops being
        predictable and easy to reason about. Instead it updates in pieces, in whatever order the components are notified
        by Store.
      </p>

      <p>
        Example to illustrate (need to expand and provide better detail):
      </p>

      <ul>
        <li>ConnectDecorator(User) => AppRoot</li>
        <ul>
          <li>ConnectDecorator(Apples)</li>
          <ul><li>Component A</li></ul>
        </ul>

        <ul>
          <li>ConnectDecorator(Apples + Bananas)</li>
          <ul><li>Component B</li></ul>
        </ul>
      </ul>

      <p>
        In the example above, the AppRoot is subscribed to data store, but only needs the current user. It renders two
        decorated components below it, A and B. A is decorated to declare that it needs the list of Apples, and B is
        decorated to declare that it needs the list of Apples AND Bananas.
      </p>

      <p>
        If Component B allows the user to CREATE an Apple, it will get kicked off to an action and dispatched to the
        reducers. At that point, AppRoot will get notified. But because AppRoot only cares about the User, and that didn't
        change, it won't re-render. And because it doesn't re-render, Components A and B are never re-rendered, which means
        they won't get the updated list of Apples from the Store.
      </p>

      <p>
        The alternative approach (which react-redux takes) is to have each of the components subscribe the store, so even
        if AppRoot doesn't re-render, Components A and B will still get a chance to.
      </p>

      <p>
        For large applications, there are a lot of components that end up needing data, especially if the application has a
        lot of routes. This ends up making the render cycle incredibly unpredictable, and is also quite painful to debug
        when data isn't updating properly.
      </p>

      <p>
        Lore's stance is that rendering performance is an optimization step, and something that you should tackle when (or
        if) you need to. For many applications, data doesn't update frequently enough for it to be a problem. For others,
        such as real-time apps that ALSO have a high frequency of data changes, it very well could be. And in that case,
        it should be tackled in a way that meets the performance requirements of the application.
      </p>

      <p>
        If you are concerned about performance, Lore will be approaching this two ways:
      </p>

      <ol>
        <li>
          By providing documentation and examples about how to use the shouldComponentUpdate method of Components to
          block the render cycle on a component-by-component basis
        </li>
        <li>
          Eventually providing functionality similar to the Connect decorator in react-redux, where it "intelligently"
          blocks the render cycle, but on an opt-in basis.
        </li>
      </ol>

      <p>
        While we recognize the importance of responsiveness in web applications, we believe (for the reasons stated above)
        that attempting to optimize rendering performance out of the gate only serves to make the application less
        predictable and more opaque, in effect adding difficulty to the development experience without solving existing
        pain. We believe, in this specific instance, that that pain should be addressed when it occurs, and the cost
        weighed against the predictability and simplicity of the natural rendering cycle for the application/React.
      </p>
    </Template>
  )
};
