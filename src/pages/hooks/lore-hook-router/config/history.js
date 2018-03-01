import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../../components/templates/LoreHookRouter';
import Markdown from '../../../../components/Markdown';

export default (props) => {
  return (
    <Template>
      <h1>
        history
      </h1>
      <p>
        Whether browser should use pushState or hash to keep track of routes
      </p>
      <p>
        <a href="https://github.com/ReactTraining/react-router/blob/v3.2.0/docs/guides/Histories.md">
          https://github.com/ReactTraining/react-router/blob/v3.2.0/docs/guides/Histories.md
        </a>
      </p>
      <p>
        The <a href="https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md">type of
        router history</a> you want to use in your application.
      </p>
      <p>
        Typically <code>browserHistory</code> if you want to use pushState routes
        like <code>https://www.myapp.com/posts/1</code> or <code>hashHistory</code> if you want to use hash-bang
        (#) style routes like <code>https://www.myapp.com/#/posts/1</code>.
      </p>
      <Markdown text={`
      import { browserHistory } from 'react-router';
      ...
      history: browserHistory
      `}/>
    </Template>
  )
};
