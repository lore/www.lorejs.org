import React from 'react';
import Link from 'gatsby-link';

export default (props) => {
  return (
    <div>
      <p>
        You can ignore this file.
      </p>
      <p>
        It exists because this directory is empty by default, and <code>git</code> will not add a directory
        to a repo <a href="https://git.wiki.kernel.org/index.php/GitFaq#Can_I_add_empty_directories.3F">unless
        it contains files</a>.
      </p>
      <p>
        The <code>.gitkeep</code> file has emerged as an unofficial convention for committing an empty directory,
        in order to provide a work-around for that limitation.
      </p>
    </div>
  );
};
