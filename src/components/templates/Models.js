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
          <h1>Models</h1>
          <p>
            AJAX Abstraction for a Single Resource
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="Introduction" url="/models/" />
            {/*<NavLink title="Concept" url="/models/concept/" />*/}

            <li className="doc-section">Usage</li>
            <NavLink title="create" url="/models/usage/create/" />
            <NavLink title="delete" url="/models/usage/delete/" />
            <NavLink title="retrieve" url="/models/usage/retrieve/" />
            <NavLink title="update" url="/models/usage/update/" />

            <li className="doc-section">Properties</li>
            <NavLink title="cidPrefix" url="/models/properties/cidPrefix/" />
            <NavLink title="destroy" url="/models/properties/destroy/" />
            <NavLink title="fetch" url="/models/properties/fetch/" />
            <NavLink title="generateCid" url="/models/properties/generateCid/" />
            <NavLink title="has" url="/models/properties/has/" />
            <NavLink title="idAttribute" url="/models/properties/idAttribute/" />
            <NavLink title="initialize" url="/models/properties/initialize/" />
            <NavLink title="isNew" url="/models/properties/isNew/" />
            <NavLink title="parse" url="/models/properties/parse/" />
            <NavLink title="save" url="/models/properties/save/" />
            <NavLink title="set" url="/models/properties/set/" />
            <NavLink title="sync" url="/models/properties/sync/" />
            <NavLink title="toJSON" url="/models/properties/toJSON/" />
            <NavLink title="url" url="/models/properties/url/" />
            <NavLink title="urlRoot" url="/models/properties/urlRoot/" />
            <NavLink title="validate" url="/models/properties/validate/" />
            <NavLink title="validationError" url="/models/properties/validationError/" />

            <li className="doc-section">Utils</li>
            <NavLink title="Custom Properties" url="/models/utils/custom/" />
            <NavLink title="Extending" url="/models/utils/extend/" />

            <li className="doc-section">Misc</li>
            <NavLink title="History" url="/models/misc/history/" />
          </ul>
          {children}
        </div>
      </div>
    </Layout>
  )
};
