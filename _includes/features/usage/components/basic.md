{% tabs tab1={"name": "ES5", "id": 1} | tab2={"name": "ES6", "id": 2} | tab3={"name": "ESNext", "id": 3}%}
{% tab id=1, is_active=true %}
```js
var React = require('react');

module.exports = React.createClass({
  displayName: 'MyComponent',

  propTypes: {},

  render: function () {
    return (
      <div></div>
    );
  }
});
```
{% endtab %}
{% tab id=2 %}
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

MyComponent.propTypes = {};

// NOTE: Please see https://github.com/lore/lore/issues/71 for a discussion
// about why this template is not yet using the ES6 'export' syntax.
module.exports = MyComponent;
```
{% endtab %}
{% tab id=3 %}
```js
import React, { Component, PropTypes } from 'react';

class MyComponent extends Component {

  static propTypes = {}

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
