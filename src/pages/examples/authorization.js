import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Examples';
import Code from '../../components/Code';
import CodeTabs from '../../components/CodeTabs';
import CodeTab from '../../components/CodeTab';
import QuickstartBranch from '../../components/QuickstartBranch';
import image1 from '../../assets/images/examples/auth-example-login.png';
import image2 from '../../assets/images/examples/auth-example-admin.png';
import image3 from '../../assets/images/examples/auth-example-user.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Authorization: Example
      </h1>
      <p>
        There is an auth example in the lore repo
        called <a href="https://github.com/lore/lore/tree/master/examples/auth">auth</a>. It looks like this:
      </p>

      <img src={image1} alt="Auth Example: Login" />
      <img src={image2} alt="Auth Example: Admin" />
      <img src={image3} alt="Auth Example: User" />

      <p>
        Depending on which user you login as changes what you can do in the application.
      </p>

      <h3>
        Video Walk-Through
      </h3>
      <p>
        This will be added in the future.
      </p>
    </Template>
  )
};
