import React from 'react';
import Layout from '../../components/Layout';
import NavLink from '../NavLink';
import NavLinkPlaceholder from '../NavLinkPlaceholder';
import '../../assets/less/docs.less';

export default (props) => {
  const { children } = props;

  return (
    <Layout>
      <div className="docs-header" id="content">
        <div className="container">
          <h1>Hook Tutorial</h1>
          <p>
            A tutorial for learning to create your own hooks
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="Introduction" url="/hooks/tutorial/" />

            <li className="doc-section">Setup</li>
            <NavLink title="Clone Starter Project" url="/hooks/tutorial/setup/" />

            <li className="doc-section">Steps</li>
            <NavLink title="1. Generate Hook" url="/hooks/tutorial/step-1/" />
            <NavLink title="2. Specify Dependencies" url="/hooks/tutorial/step-2/" />
            <NavLink title="3. Make Configurable" url="/hooks/tutorial/step-3/" />
            <NavLink title="4. Add Implementation" url="/hooks/tutorial/step-4/" />
            <NavLink title="5. Integrate Hook" url="/hooks/tutorial/step-5/" />
            <NavLink title="6. Publishing" url="/hooks/tutorial/step-6/" />
          </ul>
          {children}
        </div>
      </div>
    </Layout>
  );
};
