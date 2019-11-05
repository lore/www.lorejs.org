import React from 'react';

export default class CodeTabs extends React.Component {
  render() {
    const { text } = this.props;

    return (
      <div>
        {text}
      </div>
    );
  }
};
