import React from 'react';

export default (props) => {
  return (
    <div className="block block-inverse app-ribbon p-y-lg">
      <div className="container text-center">
        <div className="row signup-form-ribbon">
          <div className="col-md-12 text-center">

            <p className="lead">
              Would you like to be notified as new features and docs are released?
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
                  <input type="email" className="form-control" placeholder="Email Address" />
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
  );
};
