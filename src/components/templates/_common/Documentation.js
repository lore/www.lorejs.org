import React from 'react';
import Link from 'gatsby-link';
import Header from '../../Header';
import Sidebar from '../../Sidebar';
import ContentSidebar from '../../ContentSidebar';
import Navigation from './Navigation';

import '../../../assets/sass/main.scss';

export default (props) => {
  const { title, subtitle, description, navigation, showSiteNavigation, children } = props;

  return (
    <>
      <Header />
      <div className="w-full max-w-screen-lg mx-auto px-6">
        <div className="lg:flex -mx-6">
          <Sidebar showSiteNavigation={showSiteNavigation}>
            <Navigation categories={navigation} />
          </Sidebar>
          <div id="content-wrapper" className="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 xl:w-4/5">
            <div id="content">
              <div id="app" className="flex">
                <div className="pt-24 pb-16 lg:pt-28 w-full">
                  {title && (
                    <div className="markdown mb-6 px-6 max-w-4xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12">
                    {/*<div className="markdown mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12 xl:w-4/5">*/}
                      <h1>
                        {title}
                      </h1>
                      <div className="mt-0 mb-4 text-gray-600">
                        {subtitle}
                      </div>
                      {description}
                      <hr className="my-8 border-b border-gray-200"/>
                    </div>
                  )}
                  <div className="flex">
                    {/*<div className="markdown px-6 xl:px-12 w-full max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:w-3/4x xl:w-4/5">*/}
                    <div className="markdown px-6 xl:px-12 w-full max-w-4xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0">
                      {children}
                    </div>
                    {/*<ContentSidebar/>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
