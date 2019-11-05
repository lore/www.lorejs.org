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
        /src/decorators/UserIsAuthenticated.js
      </h1>
      <p>
        This file provides a higher order component that you can use to block access
        to the application (or some part of it) if the user is not logged in.
      </p>
      <p>
        When this component is mounted, the <code>isAuthenticated()</code> method will be invoked.
      </p>
      <p>
        If it returns <code>true</code>, the component this wraps will be rendered, and the application
        will appear as if this decorator doesn't exist.
      </p>
      <p>
        If it returns <code>false</code>, this component renders nothing, and the <code>redirect()</code> method
        will be invoked to redirect the user somewhere else. The default location is <code>/login</code>.
      </p>
      <Markdown text={`
      import PropTypes from 'prop-types';
      import { AuthenticationGenerator } from 'lore-auth';
      import auth from '../utils/auth';

      export default AuthenticationGenerator({

        propTypes: {
          router: PropTypes.object.isRequired
        },

        redirect() {
          const { router } = this.props;
          router.push('/login');
        },

        isAuthenticated() {
          return auth.hasToken();
        }

      });
      `}/>
    </Template>
  );
};
