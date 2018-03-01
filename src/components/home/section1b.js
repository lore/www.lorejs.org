import React from 'react';
import lazyLoading from '../../assets/images/homepage/decorator-lazy-loading.png';

export default (props) => {
  return (
    <div className="block block-secondary" style={{ paddingTop: '0px' }}>
      <div className="container">
        <div className="row">

          <div className="col-sm-8 col-sm-offset-2 text-center" style={{ paddingBottom: '20px' }}>
            <h6 className="text-muted text-uppercase">Declarative lazy-loading components</h6>
            <h3 className="m-t-0">
              Then fetch data <strong style={{ textDecoration: 'underline' }}>just by declaring it.</strong>
            </h3>
            <p className="lead m-b-md">
              Lore provides a simple decorator that allows you to declare what data your components need. If this data
              exists, it will be provided to your component. If it doesn't, Lore will <em>automatically</em> call the
              required action and inform your component when the data comes back.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <img src={lazyLoading} style={{ width: '100%' }} />
          </div>
        </div>

      </div>
    </div>
  );
}
