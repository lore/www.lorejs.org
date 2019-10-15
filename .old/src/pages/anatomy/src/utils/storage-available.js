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
        src/utils/storageAvailable.js
      </h1>
      <p>
        This is a utility file to help detect whether the browser the application is running in provides
        access to <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" target="_blank">
        localStorage</a>.
      </p>
      <p>
        This file is necessary because while all modern browsers support it, there are edge cases where they
        chose not to (such as "Private Browsing Mode" in Safari) and attempting to access localStorage in
        those situations will cause the application to crash.
      </p>
      <p>
        This file attempts to run that detection in a safe way, and returns <code>true</code> or <code>false</code> based
        on whether the application has permission to access localStorage.
      </p>
      <p>
        The code in this file is copied directly
        from <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API">this
        link on the MDN Web Docs</a>, which contains additional discussion.
      </p>

      <h3>
        Defaults
      </h3>
      <p>
        The default file included in new projects looks like this:
      </p>
      <Markdown type="jsx" text={`
      export default function storageAvailable(type) {
        try {
          let storage = window[type];
          let x = '__storage_test__';
          storage.setItem(x, x);
          storage.removeItem(x);
          return true;
        }
        catch (e) {
          return e instanceof DOMException && (
              // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage.length !== 0;
        }
      }
      `}/>
    </Template>
  );
};
