import React from 'react';
import SearchIcon from './SearchIcon';

export default function() {
  return (
    <div className="relative">
      <span className="algolia-autocomplete w-full" style={{ position: 'relative', display: 'inline-block', direction: 'ltr' }}>
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
  );
}
