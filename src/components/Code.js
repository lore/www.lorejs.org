import React, { useEffect, useRef } from 'react';
import marked from 'marked';
import _ from 'lodash';
import prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-bash';

import "spectacle-theme-nova/syntax/prism.nova.css";

marked.setOptions({
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight(code, type) {
    if (type === 'html') {
      return prism.highlight(code, prism.languages.html);
    }

    if (type === 'js') {
      return prism.highlight(code, prism.languages.javascript);
    }

    if (type === 'jsx') {
      return prism.highlight(code, prism.languages.jsx);
    }

    if (type === 'css') {
      return prism.highlight(code, prism.languages.css);
    }

    // if (type === 'sh') {
    //   return prism.highlight(code, prism.languages.sh);
    // }

    if (type === 'sh') {
      return prism.highlight(code, prism.languages.bash);
    }

    return prism.highlight(code, prism.languages.jsx);
  }
});

export default function Markdown(props) {
  const { type, text } = props;

  const markdownRef = useRef(null);

  useEffect(() => {
    $(markdownRef.current).find('pre').addClass(`language-${type || 'jsx'}`);
    // $(markdownRef.current).find('code').addClass(`language-${type || 'jsx'}`);
  }, []);

  const html = marked(`
\`\`\`${type || 'jsx'}
${_.replace(_.replace(text, /\n      /g, '\n'), '\n','')}\`\`\`
  `);

  return (
    <div
      ref={markdownRef}
      className="markdown"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
