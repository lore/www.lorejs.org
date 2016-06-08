{% tabs tab1={"name": "ES5", "id": 10} | tab2={"name": "ES6", "id": 11} | tab3={"name": "ESNext", "id": 12}%}
{% tab id=10, is_active=true %}
```js
var React = require('react');

module.exports = lore.connect(function(getState, props) {
    return {
      //models: getState('model.find')
    }
  },
  React.createClass({
    displayName: 'ConnectMe',

    propTypes: {
      //models: React.PropTypes.object.isRequired
    },

    render: function () {
      return (
        <div></div>
      );
    }
  })
);
```
{% endtab %}
{% tab id=11 %}
```js
import React, { Component, PropTypes } from 'react';

class ConnectMe extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div></div>
    )
  }
}

ConnectMe.propTypes = {
  //models: React.PropTypes.object.isRequired
};

export default lore.connect((getState, props) => {
  return {
    //models: getState('model.find')
  };
}, ConnectMe);
```
{% endtab %}
{% tab id=12 %}
```js
import React, { Component, PropTypes } from 'react';

@lore.connect((getState, props) => {
  return {
    //models: getState('model.find')
  };
})
export default class ConnectMe extends Component {

  static propTypes = {
    //models: React.PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div></div>
    )
  }
}
```
{% endtab %}
{% endtabs %}
