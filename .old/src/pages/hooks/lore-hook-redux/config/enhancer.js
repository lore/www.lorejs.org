import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/LoreHookRedux';
import Markdown from '../../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        enhancer
      </h1>
      <p>
         Enhance the store with third-party capabilities such as middleware,
         time travel, persistence, etc.
       </p>
       <p>
         <a href="http://redux.js.org/docs/api/compose.html">http://redux.js.org/docs/api/compose.html</a>
       </p>
      <p>
         Note about the batchedSubscribe enhancer:
      </p>
      <p>
         When normalization is configured and enabled, action creators can end up
         firing multiple actions back-to-back. By default, these actions do not
         get batched by Redux (it notifies React that the store changed after every
         action), which means every action will cause React to re-render the application.
         When this occurs back-to-back over a very short period of time, the responsiveness
         (and usability) of the application can drop noticeably.
      </p>
      <p>
         The batchedSubscribe enhancer, combined with the use of the _.debounce function,
         is a way of preventing this behavior, by preventing Redux from notifying React
         about changes to the Store until at least X time has passed between updates.
      </p>
      <p>
         Lore sets this value to 0 by default, which translates to "one tick". This delay
         should be undetectable to users, but just long enough to make sure that all actions
         from a normalized response are processed before React is notified of the change.
      </p>
      <Markdown text={`
      enhancer: function(middleware, config) {
        return Redux.compose(
          Redux.applyMiddleware.apply(null, middleware),
          batchedSubscribe(_.debounce(function(notify) {
            notify();
          }, config.redux.debounceWait))
        );
      }
      `}/>
    </Template>
  )
};
