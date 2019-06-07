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
          <h1>Philosophy</h1>
          <p>
            The intended audience and development philosophy behind Lore
          </p>
        </div>
      </div>
      <div className="container">
        <div className="docs-content">
          <ul id="markdown-toc">
            <NavLink title="Introduction" url="/philosophy/" />

            <li className="doc-section">Audience</li>
            <NavLink title="React Beginners" url="/philosophy/audience/react-beginner/" />
            <NavLink title="Redux Beginners" url="/philosophy/audience/redux-beginner/" />
            <NavLink title="Semi-Comfortable with Redux" url="/philosophy/audience/semi-comfortable/" />
            <NavLink title="Comfortable with Redux" url="/philosophy/audience/comfortable/" />
            <NavLink title="Non-Redux Developers" url="/philosophy/audience/non-redux/" />
          </ul>
          {children}
        </div>
      </div>
    </Layout>
  )
};
