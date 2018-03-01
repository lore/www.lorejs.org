import React from 'react';
import actionBlueprintsMobile from '../../assets/images/homepage/action-blueprints-mobile.png';
import actionBlueprints from '../../assets/images/homepage/action-blueprints.png';

export default (props) => {
  return (
    <div className="block block-secondary" style={{ paddingBottom: '50px', paddingTop: '50px' }}>
      <div className="container">
        <div className="row">

          <div className="col-sm-8 col-sm-offset-2 text-center" style={{ paddingBottom: '20px' }}>
            <h6 className="text-muted text-uppercase">Convention-driven Magic</h6>
            <h3 className="m-t-0">
              Talk to APIs <strong style={{ textDecoration: 'underline' }}>without</strong> writing actions or reducers
            </h3>
            <p className="lead m-b-md">
              Lore contains blueprints for common actions and reducers that it configures using the frameworks conventions.
              By creating a model, Lore provides access to a set of actions and reducers capable of supporting common
              CRUD operations, which can then be configured or overridden as required.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-10 col-sm-offset-1 col-md-12 col-md-offset-0">
            <img className="hidden-md hidden-lg" src={actionBlueprintsMobile} style={{ width: '100%' }} />
            <img className="hidden-xs hidden-sm" src={actionBlueprints} style={{ width: '100%' }} />
          </div>
        </div>

      </div>
    </div>
  );
}
