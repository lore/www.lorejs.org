import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/Anatomy';
import Markdown from '../../../../components/Markdown';
import CodeTabs from '../../../../components/CodeTabs';
import CodeTab from '../../../../components/CodeTab';

export default (props) => {
  return (
    <Template>
      <h1>
        src/utils/auth.js
      </h1>
      <p>
        This is a utility file you can use to store and retrieve the user token if your app is using a
        token-based authentication strategy.
      </p>

      <h3>
        Defaults
      </h3>
      <p>
        The default file included in new projects looks like this:
      </p>
      <Markdown type="jsx" text={`
      import storageAvailable from './storageAvailable';

      // If the user's browser doesn't support localStorage, we can use this variable
      // as a fallback to store their authentication token. This will allow them to use
      // the application, but if they refresh the browser (or navigate away from the
      // application), this variable will be reset, and they'll be logged out of the
      // application since we've lost the token that provided their identity.
      let tokenFallback = null;

      export default {

        saveToken(token) {
          if (storageAvailable('localStorage')) {
            localStorage.setItem('userToken', token);
          } else {
            tokenFallback = token;
            let message = \`
            Your web browser does not allow access to local storage. In Safari, the most common cause of
            this is using "Private Browsing Mode". This will not affect the functionality of this application,
            but you will be logged out if you leave the site or refresh the page.
            \`;
            message = message.split('\\n').join(' ').trim();
            alert(message);
          }
        },

        hasToken() {
          if (storageAvailable('localStorage')) {
            return !!localStorage.getItem('userToken');
          }

          return !!tokenFallback;
        },

        getToken() {
          if (storageAvailable('localStorage')) {
            return localStorage.getItem('userToken');
          }

          return tokenFallback;
        },

        deleteToken() {
          if (storageAvailable('localStorage')) {
            localStorage.removeItem('userToken');
          } else {
            tokenFallback = null;
          }
        }

      };
      `}/>
    </Template>
  );
};
