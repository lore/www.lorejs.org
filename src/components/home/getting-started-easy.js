import React from 'react';

export default (props) => {
  return (
    <div className="block block-inverse block-secondary app-code-block">
      <div className="container">
        <div className="row app-align-center">

          <div className="col-sm-6">
            <h6 className="text-muted text-uppercase">Project template for the win</h6>
            <h3 className="m-t-0">
              Getting started is <strong style={{ textDecoration: 'underline' }}>super easy</strong>.
            </h3>
            <p className="lead m-b-md text-muted">
              Just install the CLI and create your project. Everything you need is already included, and the project
              comes preconfigured with supporting for building, routing and publishing your project.
            </p>
          </div>

          <div className="col-sm-6">
            <pre className="app-code" style={{ padding: '10px 8px 10px 12px', width: 'auto', whiteSpace: 'pre-line' }}>
              <div><span>$ npm install -g</span> lore-cli</div>
              <div><span>$ </span> lore new my-app</div>
              <div><span>$ </span> cd my-app</div>
              <div><span>$ </span> npm install</div>
              <div><span>$ </span> npm start</div>
              <div><span>$ </span> ...</div>
              <div><span>$ </span> Listening at localhost:3000.</div>
            </pre>
          </div>

        </div>
      </div>
    </div>
  );
};
