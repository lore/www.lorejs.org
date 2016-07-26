{% tabs tab1={"name": "ES5", "id": 7} | tab2={"name": "ES6", "id": 8} | tab3={"name": "ESNext", "id": 9}%}
{% tab id=7, is_active=true %}
```js
var React = require('react');

module.exports = lore.connect(function(getState, props) {
    return {
      //models: getState('model.find')
    }
  })(
  React.createClass({
    displayName: 'MyComponent',

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
{% tab id=8 %}
```js
import React, { Component, PropTypes } from 'react';

class MyComponent extends Component {

  constructor(props) {
    super(props);

    // Set your initial state here
    // this.setState = {};

    // Bind your custom methods so you can access the expected 'this'
    // this.myCustomMethod = this.myCustomMethod.bind(this);
  }

  render() {
    return (
      <div></div>
    )
  }
}

MyComponent.propTypes = {
  //models: React.PropTypes.object.isRequired
};

// NOTE: Please see https://github.com/lore/lore/issues/71 for a discussion
// about why this template is not yet using the ES6 'export' syntax.
module.exports = lore.connect((getState, props) => {
  return {
    //models: getState('model.find')
  };
})(MyComponent;
```
{% endtab %}
{% tab id=9 %}
```js
import React, { Component, PropTypes } from 'react';

@lore.connect((getState, props) => {
  return {
    //models: getState('model.find')
  };
})
class MyComponent extends Component {

  static propTypes = {
    //models: React.PropTypes.object.isRequired
  }
  
  constructor(props) {
    super(props);

    // Set your initial state here
    // this.setState = {};

    // Bind your custom methods so you can access the expected 'this'
    // this.myCustomMethod = this.myCustomMethod.bind(this);
  }

  render() {
    return (
      <div></div>
    )
  }
}

// NOTE: Please see https://github.com/lore/lore/issues/71 for a discussion
// about why this template is not yet using the ES6 'export' syntax.
module.exports = MyComponent;
```
{% endtab %}
{% endtabs %}
