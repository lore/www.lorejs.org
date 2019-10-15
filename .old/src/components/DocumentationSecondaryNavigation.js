import React from 'react';

export default class DocumentationSecondaryNavigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top" style={{ backgroundColor: '#f8f8f8', borderColor: '#e7e7e7', marginTop: '-30px' }}>
        <div className="container">
          <div className="collapse navbar-collapse" style={{ textAlign: 'center', margin: 'auto' }}>
            <ul className="nav navbar-nav">
              <li className="active">
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Examples</a>
              </li>
              <li>
                <a href="#">CLI</a>
              </li>
              <li>
                <a href="#">Videos</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
};

