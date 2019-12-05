import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/Anatomy';
import Code from '../../../../components/Code';
import CodeTabs from '../../../../components/CodeTabs';
import CodeTab from '../../../../components/CodeTab';

export default (props) => {
  return (
    <Template>
      <h1>
        /src/decorators/UserIsAuthorized.js
      </h1>
      <p>
        This file provides a higher order component that you can use to block the
        rendering of a component that user does not have permission to interact with.
      </p>
      <p>
        When this component is rendered, the <code>isAuthenticated()</code> method will be invoked.
      </p>
      <p>
        If it returns <code>true</code>, the component this wraps will be rendered, and the application
        will appear as if this decorator doesn't exist.
      </p>
      <p>
        If it returns <code>false</code>, nothing will be rendered, and the application will appear
        as if that component doesn't exist.
      </p>
      <Code text={`
      import { AuthorizationGenerator } from 'lore-auth';

      export default AuthorizationGenerator({
        displayName: 'UserIsAuthorized',

        isAuthorized() {
          return true;
        }
      })
      `}/>
    </Template>
  );
};
