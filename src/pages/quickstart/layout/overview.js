import React from 'react';
import Link from 'gatsby-link';
import Template from '../../../components/templates/Quickstart';
import Code from '../../../components/Code';
import QuickstartBranch from '../../../components/QuickstartBranch';
import image from '../../../assets/images/quickstart/layout/final.png';

export default (props) => {
  return (
    <Template>
      <h1>
        Layout: Overview
      </h1>
      <p>
        In this section we'll be laying out the application and adding a header. At the end of this section your application
        will look like this:
      </p>

      <img className="drop-shadow" src={image} />

      <h2>
        Next Steps
      </h2>
      <p>
        Ready? Let's <Link to="/quickstart/layout/step-1/">get started</Link>!
      </p>
    </Template>
  )
};
