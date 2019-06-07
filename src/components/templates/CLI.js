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
          <h1>CLI</h1>
          <p>
            Documentation for the Command Line Interface
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="Introduction" url="/cli/" />

            <li className="doc-section">Top Level</li>
            <NavLink title="new" url="/cli/lore-generate-new/" />

            <li className="doc-section">Extractors</li>
            <NavLink title="extract action" url="/cli/lore-extract-action/" />
            <NavLink title="extract reducer" url="/cli/lore-extract-reducer/" />

            <li className="doc-section">Generators</li>
            <NavLink title="generate action" url="/cli/lore-generate-action/" />
            <NavLink title="generate collection" url="/cli/lore-generate-collection/" />
            <NavLink title="generate component" url="/cli/lore-generate-component/" />
            <NavLink title="generate generator" url="/cli/lore-generate-generator/" />
            <NavLink title="generate hook" url="/cli/lore-generate-hook/" />
            <NavLink title="generate model" url="/cli/lore-generate-model/" />
            <NavLink title="generate reducer" url="/cli/lore-generate-reducer/" />

            <li className="doc-section">Misc</li>
            <NavLink title="Extending the CLI" url="/cli/misc/extending-the-cli/" />
          </ul>
          {children}
        </div>
      </div>
    </Layout>
  )
};
