import React  from 'react';
import marked from 'marked';

export default function Markdown(props) {
  const { text } = props;

  return (
    <div
      className="markdown"
      dangerouslySetInnerHTML={{ __html: marked(text) }}
    />
  );
};
