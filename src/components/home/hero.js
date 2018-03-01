import React from 'react';
import Video from '../Video';

export default (props) => {
  return (
    <div className="block block-inverse app-header" style={{ paddingBottom: '64px' }}>
      <div>
        <div className="container">

          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="block-title m-b-sm">Build apps worthy of legend</h1>
              <p className="lead m-b-md text-muted">
                Convention-driven framework for React.
                <br/>
                Built on <strong>Webpack</strong>, <strong>Redux</strong> and <strong>React Router</strong>.
              </p>
            </div>
          </div>

          <div className="row" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
            <div className="col-md-12 text-center">
              <Video videoId="u3cK4fz1GNg" />
            </div>
          </div>

          <div className="row signup-form-header" style={{ paddingTop: '64px' }}>
            <div className="col-md-12 text-center">
              <p style={{ color: 'rgba(255, 255, 255, .7)', marginBottom: '15px' }}>
                Would you like to be notified as new features and docs are released? Sign up!
              </p>

              <h4 className="thank-you-message" style={{ display: 'none' }}>
                Thanks! We'll email you when there are noteworthy updates to Lore.
              </h4>

              <form className="form-inline">
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-addon">
                      <span className="icon icon-mail" />
                    </div>
                    <input type="email" className="form-control" placeholder="Email Address"/>
                  </div>
                </div>
                <div className="form-group" style={{ paddingLeft: '4px' }}>
                  <button type="submit" className="form-control btn btn-primary">
                    Notify me
                  </button>
                </div>
              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
