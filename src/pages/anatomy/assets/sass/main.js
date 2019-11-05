import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/Anatomy';
import Markdown from '../../../../components/Markdown';
import CodeTabs from '../../../../components/CodeTabs';
import CodeTab from '../../../../components/CodeTab';

export default (props) => {
  return (
    <Template>
      <h1>
        /assets/sass/main.scss
      </h1>
      <p>
        The default SASS file.
      </p>
      <p>
        For new projects, this imports the styles from <code>../css/main.css</code>
      </p>

      <h3>
        Defaults
      </h3>
      <p>
        The default file included in new projects looks like this:
      </p>
      <Markdown type="css" text={`
      @import "../css/main.css";
      `}/>
    </Template>
  );
};
