import React from 'react';

class NavLinkPlaceholder extends React.Component {
  render() {
    const {
      title
    } = this.props;

    return (
      <li className="placeholder">
        <a>{title}</a>
      </li>
    );
  }
}

export default NavLinkPlaceholder;
