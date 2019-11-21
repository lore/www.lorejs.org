import React from 'react';
import Link from 'gatsby-link';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

import '../assets/sass/main.scss';
import ContentSidebar from './ContentSidebar';

export default (props) => {
  const { title, subtitle, description } = props;

  return (
    <>
      <Header />
      <div className="w-full max-w-screen-lg mx-auto px-6">
        <div className="lg:flex -mx-6">
          <Sidebar />
          <div id="content-wrapper" className="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 xl:w-4/5">
            <div id="content">
              <div id="app" className="flex">
                <div className="pt-24 pb-16 lg:pt-28 w-full">
                  {title && (
                    <div className="markdown mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12 xl:w-3/4">
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
                    <div className="markdown px-6 xl:px-12 w-full max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:w-3/4">
                      {props.children}
                    </div>
                    <ContentSidebar/>
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
