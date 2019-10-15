import React from 'react';
import TailwindLogo from './TailwindLogo';
import SearchIcon from './SearchIcon';
import GithubIcon from './GithubIcon';
import DiscordIcon from './DiscordIcon';
import TwitterIcon from './TwitterIcon';

export default function() {
  return (
    <div id="header" className="flex bg-white border-b border-gray-200 fixed top-0 inset-x-0 z-100 h-16 items-center">
      <div className="w-full max-w-screen-xl relative mx-auto px-6">
        <div className="flex items-center -mx-6">
          <div className="lg:w-1/4 xl:w-1/5 pl-6 pr-6 lg:pr-8">
            <div className="flex items-center">
              <a href="/" className="block lg:mr-4">
                <TailwindLogo />
              </a>
            </div>
          </div>
          <div className="flex flex-grow lg:w-3/4 xl:w-4/5">
            <div className="w-full lg:px-6 xl:w-3/4 xl:px-12">
              <div className="relative">
                <span className="algolia-autocomplete" style={{position: 'relative', display: 'inline-block', direction: 'ltr' }}>
                  <input
                    id="docsearch"
                    className="transition focus:outline-0 border border-transparent focus:bg-white focus:border-gray-300 placeholder-gray-600 rounded-lg bg-gray-200 py-2 pr-4 pl-10 block w-full appearance-none leading-normal ds-input"
                    type="text"
                    placeholder="Search the docs (Press &quot;/&quot; to focus)"
                    autoComplete="off"
                    spellCheck="false"
                    role="combobox"
                    aria-autocomplete="list"
                    aria-expanded="false"
                    aria-label="search input"
                    aria-owns="algolia-autocomplete-listbox-2"
                    dir="auto"
                    style={{ position: 'relative', verticalAlign: 'top' }}
                  />
                  <pre aria-hidden="true"
                       style={{
                         position: 'absolute',
                         visibility: 'hidden',
                         whiteSpace: 'pre',
                         fontFamily: '-apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot',
                         fontSize: '16px',
                         fontStyle: 'normal',
                         fontVariant: 'normal',
                         fontWeight: 400,
                         wordSpacing: '0px',
                         letterSpacing: 'normal',
                         textIndent: '0px',
                         textRendering: 'auto',
                         textTransform: 'none'
                       }}></pre>
                  <span className="ds-dropdown-menu" role="listbox" id="algolia-autocomplete-listbox-2" style={{ position: 'absolute', top: '100%', zIndex: 100, display: 'none', left: '0px', right: 'auto' }}>
                    <div className="ds-dataset-3"></div>
                  </span>
                </span>
                <div className="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">
                  <SearchIcon />
                </div>
              </div>
            </div>

            <div className="hidden lg:flex lg:items-center lg:justify-between xl:w-1/4 px-6">
              <div className="flex justify-start items-center text-gray-500">
                <a className="block flex items-center hover:text-gray-700 mr-5"
                   href="https://github.com/tailwindcss/tailwindcss">
                  <GithubIcon />
                </a>
                <a className="block flex items-center hover:text-gray-700 mr-5" href="https://twitter.com/tailwindcss">
                  <TwitterIcon/>
                </a>
                <a className="block flex items-center hover:text-gray-700" href="/discord">
                  <DiscordIcon />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
