import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/LoreHookRedux';
import Markdown from '../../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        debounceWait
      </h1>
      <p>
        Length of time (in milliseconds) that needs to exist between updates
        to the Redux store before React is notified the store has changed.
        A value of zero corresponds to "one tick".
      </p>
      <p>
        <a href="https://lodash.com/docs/4.17.4#debounce">https://lodash.com/docs/4.17.4#debounce</a>
      </p>
      <Markdown text={`
      debounceWait: 0
      `}/>
    </Template>
  )
};
