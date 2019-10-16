import React from 'react';

export default function() {
  return (
    <div className="hidden xl:text-sm xl:block xl:w-1/4 xl:px-6">
      <div className="flex flex-col justify-between overflow-y-auto sticky top-16 max-h-(screen-16) pt-12 pb-4 -mt-12">
        <div className="mb-8">
          <h5 className="text-gray-500 uppercase tracking-wide font-bold text-sm lg:text-xs">
            On this page
          </h5>
          <ul className="mt-4 overflow-x-hidden">
            {[
              ['#1-install-tailwind-via-npm', 'Install Tailwind via npm'],
              ['#2-add-tailwind-to-your-css', 'Add Tailwind to your CSS'],
              ['#4-process-your-css-with-tailwind', 'Process your CSS with Tailwind'],
              ['#using-tailwind-cli', 'Using Tailwind CLI', true],
              ['#using-tailwind-with-postcss', 'Using Tailwind with PostCSS', true],
              ['#webpack', 'Webpack', true],
              ['#using-tailwind-via-cdn', 'Using Tailwind via CDN'],
            ].map(function(value, index) {
              const href = value[0];
              const text = value[1];
              const indent = value[2];
              return (
                <li key={index} className={`mb-2 ${indent ? 'ml-2': ''}`}>
                  <a href={href} className="block transition-fast hover:translate-r-2px hover:text-gray-900 text-gray-600 font-medium">
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
