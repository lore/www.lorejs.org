import React from 'react';
import Feature from './Feature';
import reduxLogo from '../../assets/images/logos/redux-logo.png';
import reactLogo from '../../assets/images/logos/react-logo.png';
import reactRouterLogo from '../../assets/images/logos/react-router-logo.png';
import webpackLogo from '../../assets/images/logos/webpack-logo.png';

export default (props) => {
  return (
    <div className="block block-secondary" style={{ paddingBottom: '50px', paddingTop: '50px' }}>
      <div className="container">

        <div className="row" style={{ paddingTop: '32px', paddingBottom: '24px' }}>
          <div className="col-sm-8 col-sm-offset-2 text-center">
            <h6 className="text-muted text-uppercase">Heavily reduced learning curve</h6>
            <h3 className="m-t-0">
              Preconfigured with <strong style={{ textDecoration: 'underline' }}>sensible defaults</strong>.
            </h3>
            <p className="lead m-b-md">
              For each of the libraries Lore is built on, we looked at what were the most common tasks and challenges in
              working with them, and then integrated functionality into Lore to improve that experience.

              Behavior for all libraries can also be easily tailored through simple config files.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <ul className="featured-list featured-list-bordered">
              <Feature
                icon="folder"
                title="Project Template"
                description="Easily create new projects using Lore's CLI, preconfigured with everything you need to get started building React applications."
                url="/cli/lore-generate-new/"
              />
              <Feature
                imageSrc={reduxLogo}
                imageHeight="60px"
                imageMarginBottom="20px"
                title="Redux"
                description="Lore uses conventions to provide overridable blueprints for actions and reducers, along with a decorator that allows components to declare the data they need."
                url="/features/core/redux/"
              />
            </ul>
          </div>

          <div className="col-sm-4">
            <ul className="featured-list featured-list-bordered">
              <Feature
                imageSrc={reactLogo}
                imageHeight="64px"
                imageMarginBottom="14px"
                title="React"
                description="Lore automatically mounts the application to the DOM, and subscribes the app to the store so components automatically update when data changes."
                url="/features/core/react/"
              />
              <Feature
                imageSrc={reactRouterLogo}
                imageHeight="30px"
                imageMarginBottom="16px"
                title="Routing"
                description="React-router preintegrated into project, easily configured, and routes are clearly exposed at the root of the project."
                url="/features/core/react-router/"
              />
            </ul>
          </div>

          <div className="col-sm-4">
            <ul className="featured-list featured-list-bordered">
              <Feature
                imageSrc={webpackLogo}
                imageHeight="64px"
                imageMarginBottom="14px"
                title="Webpack"
                description="Common loaders pre-installed in config with a modular setup that allows you to override the Webpack config on a per-environment basis."
                url="/features/core/webpack/"
              />
              <Feature
                icon="cloud"
                title="Publishing"
                description={(
                  <span>
                    Provides a built-in (but easily deleted) script for publishing to <a href="https://zeit.co/now">Now</a>, an excellent static hosting provider that provides free SSL certs and enables zero-downtime deploys.
                  </span>
                )}
                url="/publishing/"
              />
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};
