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
              ['#section-1', 'Section 1'],
              ['#section-2', 'Section 2'],
              ['#section-3', 'Section 3'],
              ['#section-3.1', 'Section 3.1', true],
              ['#section-3.2', 'Section 3.2', true],
              ['#section-3.3', 'Section 3.3', true],
              ['#section-4', 'Section 4'],
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
