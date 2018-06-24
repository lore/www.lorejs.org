import React from 'react';
import marked from 'marked';
import _ from 'lodash';
import prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-javascript';
// import 'prismjs/components/prism-sh';

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

    return prism.highlight(code, prism.languages.jsx);
  }
});

export default class Markdown extends React.Component {

  componentDidMount() {
    const { markdown } = this.refs;
    const { type } = this.props;

    $(markdown).find('pre').addClass(`language-${type || 'jsx'}`);
    $(markdown).find('code').addClass(`language-${type || 'jsx'}`);
  }

  render() {
    const {
      type,
      text
    } = this.props;

    const html = marked(`
\`\`\`${type || 'jsx'}
${_.replace(_.replace(text, /\n      /g, '\n'), '\n','')}\`\`\`
    `);

    return (
      <div
        ref="markdown"
        className="markdown"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

};
