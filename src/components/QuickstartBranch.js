import React from 'react';
import Link from 'gatsby-link';

export default (props) => {
  const {
    branch
  } = props;

  return (
    <blockquote>
      <p>
        You can view the finished code for this step by checking out the <code>{branch}</code> branch of
        the <Link to="/quickstart/misc/completed-project/">completed project</Link>.
      </p>
    </blockquote>
  );
};
