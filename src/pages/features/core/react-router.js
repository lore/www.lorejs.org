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
          Lore includes <a href="https://github.com/reactjs/react-router">React Router</a> as the default
          routing library in new applications, though you can easily replace it if you prefer something else.
        </p>
      )}
    >
      <h2>
        Resources for Learning React Router
      </h2>
      <p>
        You can learn more about React Router through the
        official <a href="https://github.com/ReactTraining/react-router/tree/v3/docs">
        documentation</a> and <a href="https://github.com/ReactTraining/react-router/tree/v3/examples">
        examples</a>.
      </p>
      <p>
        It's important to mention though that <strong>new Lore projects include react-router v3</strong>,
        and <strong>NOT v4</strong>. The links above go to the v3 documentation.
      </p>
      <p>
        By modifying some of configuration files in your project, it's possible to replace v3 with v4, but there's
        no formal guide explaining how to do it yet. Once there is, a link will be provided here.
      </p>
      <p>
        If you're interested in learning more about v4, you can explore it on the
        new <a href="https://reacttraining.com/react-router/web/guides/philosophy">react-router website</a>.
      </p>

      <h2>
        Video
      </h2>
      <p>
        The video below is an excerpt from the full <Link to="/videos/introduction-to-lore/">Introduction to
        Lore</Link> video and provides a summary of how Lore helps with routing.
      </p>
      <Video videoId="RmaSTBaPNb8" />
    </Template>
  )
};
