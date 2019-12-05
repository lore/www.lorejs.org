import React from 'react';
import Link from 'gatsby-link';
import Template from '../../components/templates/Anatomy';
import Code from '../../components/Code';

export default (props) => {
  return (
    <Template>
      <h1>
        .gitignore
      </h1>
      <p>
        This file specifies which project files should be kept out of version control if you are using
        git. It includes things like code coverage reports, npm installation error files, your
        config/local.js file, IDE specific files and more.
      </p>
      <p>
        Feel free to add and remove things from this file as you see fit.
      </p>
      <p>
        To learn more about this file, see the <a href="https://git-scm.com/docs/gitignore"> .gitignore
        documentation</a> on the Git website. Alternatively, there is also
        documentation <a href="https://help.github.com/articles/ignoring-files/">on the GitHub website</a> that
        may be easier to understand.
      </p>

      <h3>
        Defaults
      </h3>
      <p>
        The default file included in new projects looks like this:
      </p>
      <Code text={`
      node_modules
      bower_components
      config/local.js
      lib-cov
      *.seed
      *.log
      *.out
      *.pid
      npm-debug.log
      *~
      *#
      .DS_STORE
      .idea
      .node_history
      dist
      `}/>
    </Template>
  );
};
