import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/LoreHookReact';
import Markdown from '../../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        getRootComponent
      </h1>
      <p>
        Generate the root component that will be mounted to the DOM. This function will be invoked by lore after
        all hooks have been loaded.
      </p>
      <Markdown text={`
       getRootComponent: function(lore) {
         var store = lore.store;
         var routes = lore.router.routes;
         var history = lore.router.history;

         return (
           <Provider store={store}>
             <Router history={history}>
               {routes}
             </Router>
           </Provider>
         );
       }
      `}/>
    </Template>
  )
};
