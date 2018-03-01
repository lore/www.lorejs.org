import React from 'react';
import Link from 'gatsby-link';

export default (props) => {
  return (
    <div className="block block-inverse app-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-5">
            <h6 className="m-b text-uppercase">About</h6>
            <ul className="list-unstyled list-spaced">
              <li className="text-muted">
                Lore is a convention-driven framework for React, built with love by {' '}
                <a href="https://twitter.com/_jchansen" style={{ color: 'white' }}>@_jchansen</a> and {' '}
                <a href="https://twitter.com/mikrofusion" style={{ color: 'white' }}>@mikrofusion</a>, to
                help you launch your ideas sooner and scale them into legend.
              </li>
            </ul>
          </div>
          <div className="col-sm-3 col-sm-offset-1">
            <h6 className="m-b text-uppercase">Links</h6>
            <ul className="list-unstyled list-spaced">
              <li className="text-muted">
                <Link to="/philosophy/">Philosophy</Link>
              </li>
              <li className="text-muted">
                <Link to="/features/">Features</Link>
              </li>
              <li className="text-muted">
                <Link to="/quickstart/">Quickstart</Link>
              </li>
              <li className="text-muted">
                <Link to="/examples/">Examples</Link>
              </li>
              <li className="text-muted">
                <Link to="/cli/">CLI</Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-3">
            <h6 className="m-b text-uppercase">Connect</h6>
            <ul className="list-unstyled list-spaced">
              <li className="text-muted">
                <a href="https://github.com/lore/lore">GitHub</a>
              </li>
              <li className="text-muted">
                <a href="https://twitter.com/loreframework">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
