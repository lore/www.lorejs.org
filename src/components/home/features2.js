import React from 'react';
import Feature from './Feature';

export default (props) => {
  return (
    <div className="block block-bordered-lg" style={{ paddingTop: '50px' }}>
      <div className="container">

        <div className="row" style={{ paddingTop: '32px', paddingBottom: '64px' }}>
          <div className="col-sm-8 col-sm-offset-2 text-center">
            <span className="icon icon-bar-graph feature-divider" />
            <h6 className="text-muted text-uppercase">Focus on adding value without constraint</h6>
            <h3 className="m-t-0">
              Thoughtfully designed to support <strong style={{ textDecoration: 'underline' }}>features you'll need</strong>
              as you're app grows.
            </h3>
            <p className="lead">
              Lore is serious about building scalable apps. The architectural patterns in the framework are taken from
              years of building diverse applications, and designed to solve not just the needs you have today, but the
              ones you'll have tomorrow as well.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <ul className="featured-list">
              <Feature
                icon="database"
                title="Data Structure"
                description="Enables data-driven components by supplying components with both data and context."
                url="/features/data-structure/"
              />
            </ul>
          </div>
          <div className="col-sm-4">
            <ul className="featured-list">
              <Feature
                icon="share"
                title="AJAX Abstraction"
                description="Layered communication tier able to communicate with multiple API servers and capable of adapting to changes in data contracts."
                url="/features/ajax-abstraction/"
              />
            </ul>
          </div>
          <div className="col-sm-4">
            <ul className="featured-list">
              <Feature
                icon="funnel"
                title="Filtering"
                description="Useful for viewing a subset of data that matches a specific criteria."
                url="/features/filtering/"
              />
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <ul className="featured-list">
              <Feature
                icon="dots-three-horizontal"
                title="Pagination"
                description="Useful for moving through large datasets, and providing the user with a sliced view of the data."
                url="/features/pagination/"
              />
            </ul>
          </div>
          <div className="col-sm-4">
            <ul className="featured-list">
              <Feature
                icon="dots-three-vertical"
                title="Infinite Scrolling"
                description="Mobile friendly style of pagination that aggregates fetched data into a single scrollable list."
                url="/features/infinite-scrolling/"
              />
            </ul>
          </div>
          <div className="col-sm-4">
            <ul className="featured-list">
              <Feature
                icon="publish"
                title="WebSockets (beta)"
                description="Add support for real-time updates through simple configuration, and make a big improvement to the user experience of any team-based application."
                url="/features/websockets/"
              />
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <ul className="featured-list">
              <Feature
                icon="image"
                title="Visual Cues"
                description="Easily discover and communicate when data is being updated, fetched or contains an error."
                url="/features/visual-cues/"
              />
            </ul>
          </div>
          <div className="col-sm-4">
            <ul className="featured-list">
              <Feature
                icon="flow-branch"
                title="Optimistic Updates"
                description="Makes your application feel snappy and responsive by assuming server calls will be successful."
                url="/features/optimistic-updates/"
              />
            </ul>
          </div>
          <div className="col-sm-4">
            <ul className="featured-list">
              <Feature
                icon="message"
                title="Dialogs"
                description="Helpful utilities to automatically mount, configure and display dialogs."
                url="/features/dialogs/"
              />
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <ul className="featured-list">
              <Feature
                icon="chat"
                title="Wizards"
                description="Easily discover when the server confirms data creation before moving onto the next step."
                url="/features/wizards/"
              />
            </ul>
          </div>
          <div className="col-sm-4">
            <ul className="featured-list">
              <Feature
                icon="new"
                title="Error Handling"
                description="Server errors are passed to components and clearly communicated."
                url="/features/error-handling/"
              />
            </ul>
          </div>
          <div className="col-sm-4">
            <ul className="featured-list">
              <Feature
                icon="help-with-circle"
                title="404 Pages"
                description="Discover and communicate when resources can't be found."
                url="/features/404-pages/"
              />
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};
