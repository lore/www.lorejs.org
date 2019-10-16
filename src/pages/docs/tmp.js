import React from 'react';
import Link from 'gatsby-link';
import Layout from '../../components/Layout';

export default (props) => {
  return (
    <Layout>
      <div className="markdown mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12 xl:w-3/4">
        <h1>Installation</h1>
        <div className="mt-0 mb-4 text-gray-600">
          Quick start guide for installing and configuring Tailwind CSS.
        </div>
        <hr className="my-8 border-b-2 border-gray-200"/>
      </div>
      <div className="flex">
        <div className="markdown px-6 xl:px-12 w-full max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:w-3/4">
          <div className="heading mt-0">
            <h2 className="flex markdown mt-0" id="1-install-tailwind-via-npm">
              <a className="anchorjs-link text-gray-500 no-underline" aria-label="Anchor" data-anchorjs-icon="#" href="#1-install-tailwind-via-npm" style={{ position: 'absolute', marginLeft: '-1em', paddingRight: '0.5em' }}></a>
              <span className="text-lg bg-gray-200 text-gray-700 h-6 w-6 rounded-full inline-flex justify-center items-center mt-px mr-3">1</span>
              Install Tailwind via npm
            </h2>
          </div>
          <p>
            For most projects (and to take advantage of Tailwind's customization features), you'll want to install Tailwind via npm.
          </p>
          <pre className="language-bash">
            <code className="language-bash">
              <span className="token comment"># Using npm</span>
              <span className="token function">npm</span> <span className="token function">install</span> tailwindcss
              <span className="token comment"># Using Yarn</span>
              <span className="token function">yarn</span> <span className="token function">add</span> tailwindcss
            </code>
          </pre>
          <p>
            Sites that follow our <a href="/docs/controlling-file-size">best practices</a> are almost
            always under 10kb compressed. For example, <a href="https://send.firefox.com/">Firefox Send</a> is
            built with Tailwind and their CSS is under 4kb compressed and minified.
          </p>
        </div>
        <ContentSidebar/>
      </div>
    </Layout>
  );
}
