import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Features';
import Code from '../../../components/Code';
import CodeTabs from '../../../components/CodeTabs';
import CodeTab from '../../../components/CodeTab';
import QuickstartBranch from '../../../components/QuickstartBranch';
import Video from '../../../components/Video';

export default (props) => {
  return (
    <Template
      title="React Router"
      description={(
        <p>
          Lore includes <a href="https://reacttraining.com/react-router/">React Router</a> as the default
          routing library in new applications, though you can easily replace it if you prefer something else.
        </p>
      )}
    >
      <h2>
        Resources for Learning React Router
      </h2>
      <p>
        You can learn more about React Router through their
        official <a href="https://reacttraining.com/react-router/web/guides/quick-start">
        documentation</a> and <a href="https://reacttraining.com/react-router/web/example/basic">examples</a>.
      </p>

      {/*<h2>*/}
      {/*  Video*/}
      {/*</h2>*/}
      {/*<p>*/}
      {/*  The video below is an excerpt from the full <Link to="/videos/introduction-to-lore/">Introduction to*/}
      {/*  Lore</Link> video and provides a summary of how Lore helps with routing.*/}
      {/*</p>*/}
      {/*<Video videoId="RmaSTBaPNb8" />*/}
    </Template>
  )
};
